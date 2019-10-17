class Api::BookingsController < ApplicationController
  before_action :authenticate_user!, except: [:create]
  before_action :set_booking, only: [:show, :update, :destroy]

  def index # ☑️ ADMIN ONLY, to see all individual bookings create new method ((@user.bookings) this is used by nesting models in routes. ...
    if current_user.admin == true
      render json: Booking.all
    else 
      render json: {message: "Authorized access denied"}    
    end

  end

  def show # ☑️ to be shown after purchase has been made, 
    if current_user.admin == true || current_user.id == @booking.user_id  # Is this secure? 
      render json: @booking
    else
      render json: {message: "Authorized access denied." }    
    end
  end

  def create # ☑️ on submit button, a transaction will be created and a booking will be created
    booking = Booking.new(booking_params)
    if booking.save
      render json: booking.booking_number
    else
      render json: {errors: booking.errors}, status: :unprocessable_entity
    end
  end

  def update # 📍 can be changed by admin or person, fee charged? # ! within a 24 hour time period of arrival
    # if current_user.admin == true # ! || current_user.id == @booking.user_id  
      if @booking.update(booking_params)
        render json: @booking
      else
        render json: {errors: @booking.errors}, status: :unprocessable_entity
      end
    # else
    #   render json: {message: "Authorized access denied." }    
    # end
  end

  def destroy # ☑️ cancelling a reservation. VS cancellation number. Add this to Booking info? 
    if current_user.admin == true || current_user.id == @booking.user_id  # Is this secure? 

      # ! move record to Cancellation (model/table) and add cancellation number. 
      # then destroy the record from this table

      @booking.destroy
      render json: {message: "Booking Removed"}
    else
      render json: {message: "Authorized access denied." }    
    end
  end

  def my_bookings # ☑️ all of a current_user's bookings
    render json: Booking.select(:id, :start_date, :end_date, :guests, :special_needs, :booking_number, :user_id, :cabin_id, :payment_id, :expected_arrival).where(user_id: current_user.id).to_a
  end

  def single_day_bookings  # ☑️ get a single day's booking information # pass in a day params[:date] that looks like "2019-10-02"
    render json: Booking.single_day_bookings(params)
  end

  scheduler = Rufus::Scheduler.new

  scheduler.in '3s' do
    puts 'Hello... Rufus'
  end

  protected

    def booking_params # ☑️
      params.require(:booking).permit(:start_date, :end_date, :guests, :special_needs, :booking_number, :user_id, :cabin_id, :expected_arrival, :customer_payment_token, :price, :cabin_type)
    end

    def set_booking # ☑️
      @booking = Booking.find(params(:id))
    end
  
end

  # ? create another table of cancelled bookings and move record to there. 
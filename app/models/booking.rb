class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :cabin

  Stripe.api_key = Rails.configuration.stripe[:secret_key] 




  def self.single_day_bookings
    already_here = []
    arriving_today = []
    last_night = []
    checking_out_today = []
    grandArrofBookings = []
    Booking.select(:id, :start_date, :end_date).each {|date_pair| grandArrofBookings << {id: date_pair.id, pair: (date_pair.start_date..date_pair.end_date).to_a} }
    grandArrofBookings.each do |arr|
      booking_and_guest = {booking_info: Booking.find(arr[:id]), guest_info: Booking.find(arr[:id]).user}
      case params[:date]
      when arr[:pair].last.to_s 
       last_night << booking_and_guest
      when arr[:pair].last.next_day.to_s 
       checking_out_today << booking_and_guest
      when arr[:pair].first.to_s  
       arriving_today << booking_and_guest
      else
        arr[:pair][0...-1].drop(1).each do |date|
          if date.to_s == params[:date]
            already_here << booking_and_guest 
            break
          end
        end
      end
    end
    return {already_here: already_here, arriving_today: arriving_today, last_night: last_night, checking_out_today: checking_out_today}
  end

  def self.charge
    arr = []
    Booking.select(:customer_payment_token, :booking_number, :price, :pm).where(start_date: Date.today.prev_day).select{|i| i.booking_number != nil}.each do |d|
      arr << Stripe::PaymentIntent.create(amount: d.price, currency: 'usd', payment_method_types: ['card'], payment_method: "#{d.pm}", customer: "#{d.customer_payment_token}", off_session: true, confirm: true,)
      # ! What do I do with this payment intent code ??
    end
    return arr
  end


end

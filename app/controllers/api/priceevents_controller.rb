class Api::PriceeventsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_priceevents, only: [:show, :create]

  
  def index # ☑️ 
    if current_user.admin == true 
      render json: Priceevent.all
    else 
      render json: {message: "Authorized access denied."}    
    end
  end

  def show # ☑️ 
    if current_user.admin == true 
      render json: @priceevent
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def create # ☑️ 
    if current_user.admin == true 
      priceevent = Priceevent.new(priceevent_params)
      if priceevent.save
        render json: priceevent
      else
        render json: {errors: priceevent.errors}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def update # ! 📍
    if current_user.admin == true 
      if @priceevent.update(priceevent_params)
        render json: @priceevent
      else
        render json: {errors: @priceevent.errors}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def destroy #ADIMN ONLY. DONT DO!! If searching for a record where cabin_id doesn't exist thos Booking records WILL break.
    if current_user.admin == true
      @priceevent.destroy
      render json: {message: "Priceevent Destroyed"}
    else 
      render json: {message: "Authorized access denied. Admin status:  #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end    
  end

  protected

    def set_priceevents # ☑️
      @priceevent = priceevent.find(params[:id])
    end

    def priceevent_params # ☑️
      params.require(:priceevent).permit(:name, :start_date, :end_date, :cabin_id, :multiplier, :adder, :recurring)
    end
end

class Api::DiscountsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_discounts, only: [:show, :create]

  
  def index # ☑️ 
    if current_user.admin == true 
      render json: Discount.all
    else 
      render json: {message: "Authorized access denied."}    
    end
  end

  def show # ☑️ 
    if current_user.admin == true 
      render json: @discount
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def create # ☑️ 
    if current_user.admin == true 
      discount = Discount.new(discount_params)
      if discount.save
        render json: discount
      else
        render json: {errors: discount.error}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def update # ☑️
    if current_user.admin == true 
      if @discount.update(discount_params)
        render json: @discount
      else
        render json: {errors: @discount.error}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def destroy #ADIMN ONLY. DONT DO!! If searching for a record where cabin_id doesn't exist thos Booking records WILL break.
    if current_user.admin == true
      @discount.destroy
      render json: {message: "discount Destroyed"}
    else 
      render json: {message: "Authorized access denied. Admin status:  #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end    
  end

  protected

    def set_discounts # ☑️
      @discount = Discount.find(params[:id])
    end

    def discount_params # ☑️
      params.require(:discount).permit(:name, :code, :multiplier, :subtractor, :set_price )
    end
  
  
end

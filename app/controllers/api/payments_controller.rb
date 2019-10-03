class Api::PaymentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_payments, only: [:show, :create]

  
  def index # ☑️ ADMIN ONLY, create another method to filter based on @user.payments
    if current_user.admin == true 
      render json: Payment.all
    else 
      render json: {message: "Authorized access denied."}    
    end
  end

  def show # ☑️ to be rendered after payment sent. Takes an id
    render json: @payment
  end

  def create # ☑️ cc form will be passed through here
    payment = Payment.new(payment_params)
    if payment.save
      render json: payment
    else
      render json: {errors: payment.error}, status: :unprocessable_entity
    end
  end

  def update # ! 📍 wait til day before to make payment
    if current_user.admin == true || current_user.id == @payment.user.id
      if @payment.update(payment_params)
        render json: @payment
      else
        render json: {errors: @payment.error}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def my_payments # ☑️
    render json: current_user.payments
  end

  # Destroy disabled

  protected

    def set_payments # ☑️
      @payment = Payment.find(params[:id])
    end

    def payment_params # ☑️
      params.require(:payment).permit(:name, :credit_card, :address, :city, :state, :zip, :expiration, :price)
    end

end

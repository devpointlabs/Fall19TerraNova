class Api::StripeController < ApplicationController
  require 'stripe'
  Stripe.api_key = Rails.configuration.stripe[:secret_key] 
# or ENV['STRIPE_SECRET_KEY']
  def createres
    render json: {c: Stripe::Customer.create({payment_method: params[:body], email: 'paying.user@example.com'}), pm: params[:body]}
  end
  
  def getclientsecret
    render json: setup_intent = Stripe::SetupIntent.create({usage: 'off_session'}) # attach card??
  end

  protected

  def stripe_params # ☑️
    params.permit(:body)
  end
  
end







  # def pubkey
  #   render json: Rails.configuration.stripe[:publishable_key] # or ENV['STRIPE_PUBLISHABLE_KEY']
  # end

  # def index
  # end

  # def show
  # end

  # def create
  #   Stripe.api_key = Rails.configuration.stripe[:secret_key] # or ENV['STRIPE_SECRET_KEY']
  # end

  # def update
  # end

  # def destroy
  # end


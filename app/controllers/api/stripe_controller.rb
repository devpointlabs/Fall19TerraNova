class Api::StripeController < ApplicationController
  require 'stripe'
  Stripe.api_key = Rails.configuration.stripe[:secret_key] # or ENV['STRIPE_SECRET_KEY']

  def createres
    customer = Stripe::Customer.create({ #creates a "Customer" that can be charged. store this in db in booking model
    source: params[:body],
    email: 'paying.user@example.com',
    })
    binding.pry
  end
  
  def getclientsecret
    render json: setup_intent = Stripe::SetupIntent.create({usage: 'off_session'}) # attach card??
  end

    # pi = Stripe::PaymentIntent.create(
    #   amount: 1099,
    #   currency: 'usd',
    #   payment_method_types: ['card'],
    #   customer: '{CUSTOMER_ID}',
    #   payment_method: '{PAYMENT_METHOD_ID}',
    #   off_session: true,
    #   confirm: true,)

    # binding.pry

    # OR!!

    # binding.pry

    # charge = Stripe::Charge.create({ # when the time is right. charge the customer.
    #   amount: 1500, # $15.00 this time
    #   currency: 'usd',
    #   customer: customer_id, # Previously stored, then retrieved
    # })




  
  protected
  
  def booking_params # ☑️
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


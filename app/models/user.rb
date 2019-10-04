# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :bookings, dependent: :destroy
  has_many :cabins, through: :bookings
  has_many :payments, through: :bookings

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [ 
        :first_name,
        :last_name, 
        :address, 
        :city, 
        :state, 
        :zip, 
        :country, 
        :cellphone, 
        :birthday, 
        :anniversary, 
        :admin 
      ])
    end
    
end


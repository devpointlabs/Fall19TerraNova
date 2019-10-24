# frozen_string_literal: true

class User < ActiveRecord::Base
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
        :admin,
        :password,
        :passwordConfirmation
      ])
    end
    
end


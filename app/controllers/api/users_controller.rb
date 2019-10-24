class Api::UsersController < ApplicationController
 before_action :authenticate_user!

  # Primarily to be used by admins. Well, index. Show can be used by guests
  def index # ☑️ will get all users
    if current_user.admin == true 
      render json: User.all
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin}"}    
    end
  end

  def show #  ☑️ will show one user
    if current_user.admin == true 
      render json: User.find(params[:id])
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin}"}    
    end
  end

  # def create


  # end

  def show_self # ☑️
    render json: current_user
  end

  # private 

  #   def user_params
  #     params.require(user).permit(:email, :first_name, :last_name, :address, :city, :state, :zip, :country)
  #   end

end

  #  When user pushes "Delete Account", (FE) log user out. (FE) send to home page. and (BE) CHANGE PASSWORD. never delete record.
  # . devise wont let us change the password.

    

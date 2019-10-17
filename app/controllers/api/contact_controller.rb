class Api::ContactController < ApplicationController
  def contact
    ContactMailer.with(
      name: params[:name],
      email: params[:email],
      subject: params[:subject],
      message: params[:message]
    ).contact_email.deliver_now
  end
end
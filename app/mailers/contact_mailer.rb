class ContactMailer < ApplicationMailer
  default from: "contact@test.com"

  def contact_email
    @name = params[:name]
    @email = params[:email]
    @subject = params[:subject]
    @message = params[:message]
    @url  = 'http://localhost:3000/contact'
    mail(to: "shannonjonesmail@gmail.com", subject: @subject)
  end
end
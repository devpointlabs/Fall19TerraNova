class Booking < ApplicationRecord
  belongs_to :cabin

  Stripe.api_key = Rails.configuration.stripe[:secret_key] 

  def self.single_day_bookings(params)
    idate = params["date"].to_date
    already_here = []
    arriving_today = []
    last_night = []
    checking_out_today = []
    grandArrofBookings = []
    Booking.where("start_date > ?", 1.month.ago).each do |b|
      arr = (b.start_date..b.end_date).to_a
      c = Cabin.select(:cabin_number, :cabin_letter).where(id: b[:cabin_id])[0]
      a = b.as_json
      a["cabin_number"] = c.cabin_number
      a["cabin_letter"] = c.cabin_letter
      booking_and_guest = a
      
      case idate
      when arr.last.next_day
        checking_out_today << booking_and_guest
      when arr.last
        last_night << booking_and_guest
      when arr.first 
        arriving_today << booking_and_guest
      else
        if arr[0...-1].drop(1).include?(idate)
          already_here << booking_and_guest 
        end   
      end
    end
    return {already_here: already_here, arriving_today: arriving_today, last_night: last_night, checking_out_today: checking_out_today}
  end

  def self.charge
    arr = []
    Booking.select(:customer_payment_token, :booking_number, :price, :pm).where(start_date: Date.today.prev_day).select{|i| i.booking_number != nil}.each do |d|
      arr << Stripe::PaymentIntent.create(amount: d.price, currency: 'usd', payment_method_types: ['card'], payment_method: "#{d.pm}", customer: "#{d.customer_payment_token}", off_session: true, confirm: true,)
    end
    puts arr
    return arr
  end

  def self.disableupdate
    Booking.where(start_date: Date.tomorrow.tomorrow).each do |i|
      i.update(modifiable: false) ? (puts "Booking ID: #{i.id}, modifiable was set to false") : (puts "Errors: #{i.errors}")
    end
  end


end

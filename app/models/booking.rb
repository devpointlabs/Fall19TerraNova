class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :cabin
  belongs_to :payment


  def self.single_day_bookings
    already_here = []
    arriving_today = []
    last_night = []
    checking_out_today = []
    grandArrofBookings = []
    Booking.select(:id, :start_date, :end_date).each {|date_pair| grandArrofBookings << {id: date_pair.id, pair: (date_pair.start_date..date_pair.end_date).to_a} }
    grandArrofBookings.each do |arr|
      booking_and_guest = {booking_info: Booking.find(arr[:id]), guest_info: Booking.find(arr[:id]).user}
      case params[:date]
      when arr[:pair].last.to_s 
       last_night << booking_and_guest
      when arr[:pair].last.next_day.to_s 
       checking_out_today << booking_and_guest
      when arr[:pair].first.to_s  
       arriving_today << booking_and_guest
      else
        arr[:pair][0...-1].drop(1).each do |date|
          if date.to_s == params[:date]
            already_here << booking_and_guest 
            break
          end
        end
      end
    end
    return {already_here: already_here, arriving_today: arriving_today, last_night: last_night, checking_out_today: checking_out_today}
  end
end

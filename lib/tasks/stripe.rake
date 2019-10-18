namespace :stripe do
  desc "TODO"
  task charge: :environment do
    Booking.charge
    
  end

end

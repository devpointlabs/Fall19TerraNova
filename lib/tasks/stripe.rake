namespace :stripe do
  desc "TODO"
  task charge: :environment do
    Booking.disableupdate
    Booking.charge
  end

end

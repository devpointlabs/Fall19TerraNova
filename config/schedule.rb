set :environment, 'development'
ENV['RAILS_ENV'] = "development"

set :output, 'log/whenever.log'

every 1.minute do 
  rake "stripe:test"
end
















































# todo: prevent bookings from being changed 24-48 hours before their checkin. create column "updateable:boolean"
# todo: if guest "no-shows", charge card 24-48 hours after checkin

# todo: allow receptionist to create a charge on a card. 
#   that is "checked_in:boolean") every day, if (check-in_date == yesterday ) {create charge #? or hold} 


# todo: 


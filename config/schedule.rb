
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# every 1.day, at: '4:30 am' do
#   runner "MyModel.task_to_run_at_four_thirty_in_the_morning"
# end

set :environment, 'development'

every 1.minute do 
  runner "Cabin.working"
end



# todo: prevent bookings from being changed 24-48 hours before their checkin. create column "updateable:boolean"
# todo: if guest "no-shows", charge card 24-48 hours after checkin

# todo: allow receptionist to create a charge on a card. 
#   that is "checked_in:boolean") every day, if (check-in_date == yesterday ) {create charge #? or hold} 


# todo: 


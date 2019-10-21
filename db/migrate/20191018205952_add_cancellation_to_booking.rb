class AddCancellationToBooking < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :cancellation_num, :integer
  end
end

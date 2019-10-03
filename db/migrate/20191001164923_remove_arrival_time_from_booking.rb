class RemoveArrivalTimeFromBooking < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :expected_arrival
    add_column :bookings, :expected_arrival, :string
  end
end

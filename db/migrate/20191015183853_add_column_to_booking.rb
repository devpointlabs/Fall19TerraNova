class AddColumnToBooking < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :customer_payment_token, :string
  end
end

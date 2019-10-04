class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :start_date
      t.date :end_date
      t.integer :guests
      t.time :expected_arrival
      t.text :special_needs
      t.integer :booking_number
      t.belongs_to :user, foreign_key: true
      t.belongs_to :cabin, foreign_key: true
      t.belongs_to :payment, foreign_key: true
      t.timestamps
    end
  end
end

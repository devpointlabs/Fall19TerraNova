class CreatePriceevents < ActiveRecord::Migration[5.2]
  def change
    create_table :priceevents do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :cabin_id
      t.integer :multiplier
      t.integer :adder

      t.timestamps
    end
  end
end

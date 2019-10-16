class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.string :name
      t.integer :code
      t.decimal :multiplier
      t.integer :subtractor
      t.integer :set_price

      t.timestamps
    end
  end
end

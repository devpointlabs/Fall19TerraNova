class AddColumnToPriceevent < ActiveRecord::Migration[5.2]
  def change
    remove_column :priceevents, :multiplier
    remove_column :priceevents, :adder
    add_column :priceevents, :multiplier, :decimal
    add_column :priceevents, :adder, :decimal 
  end
end

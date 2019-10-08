class DropPriceEvent < ActiveRecord::Migration[5.2]
  def change
    drop_table :price_events
  end
end

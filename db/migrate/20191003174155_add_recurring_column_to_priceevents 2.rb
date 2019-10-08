class AddRecurringColumnToPriceevents < ActiveRecord::Migration[5.2]
  def change
    add_column :priceevents, :recurring, :boolean
  end
end

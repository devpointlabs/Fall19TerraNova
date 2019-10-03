class CreateCabins < ActiveRecord::Migration[5.2]
  def change
    create_table :cabins do |t|
      t.string :name
      t.integer :price
      t.boolean :occupied
      t.integer :occupancy
      t.text :description

      t.timestamps
    end
  end
end

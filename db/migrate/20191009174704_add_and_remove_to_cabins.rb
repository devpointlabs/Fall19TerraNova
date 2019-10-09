class AddAndRemoveToCabins < ActiveRecord::Migration[5.2]
  def change
    add_column :cabins, :cabin_number, :string
    add_column :cabins, :cabin_letter, :string
    remove_column :cabins, :occupied
    remove_column :cabins, :name
    remove_column :cabins, :description
    remove_column :cabins, :occupancy
  end
end

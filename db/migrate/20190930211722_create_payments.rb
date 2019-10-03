class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :name
      t.string :credit_card
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :expiration 
      t.string :price

      t.timestamps
    end
  end
end

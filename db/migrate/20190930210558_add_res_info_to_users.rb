class AddResInfoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :address, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zip, :integer
    add_column :users, :country, :string
    add_column :users, :cellphone, :string
    add_column :users, :birthday, :date
    add_column :users, :anniversary, :date
    add_column :users, :admin, :boolean
    remove_column :users, :name
  end
end

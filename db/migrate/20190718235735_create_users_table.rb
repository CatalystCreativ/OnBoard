class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, unique: true
      t.string :firstname
      t.string :lastname
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, unique: true
      t.float :x_coordinate
      t.float :y_coordinate
      t.float :rating
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end

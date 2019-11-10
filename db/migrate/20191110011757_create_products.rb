class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :owner_id
      t.string :name
      t.string :condition
      t.float :price
      t.string :type
      t.string :brand
      t.string :unit 
      t.float :length
      t.float :width
      t.float :height
      t.float :volume
      t.text :description
    end

    add_index :products, :owner_id
    add_index :products, :name
  end
end

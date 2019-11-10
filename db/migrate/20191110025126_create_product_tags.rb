class CreateProductTags < ActiveRecord::Migration[5.2]
  def change
    create_table :product_tags do |t|
      t.integer :product_id
      t.integer :tag_id
    end

    add_index :product_tags, :product_id
    add_index :product_tags, :tag_id
  end
end

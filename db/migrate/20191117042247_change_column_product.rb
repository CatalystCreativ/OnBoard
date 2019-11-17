class ChangeColumnProduct < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :owner_id, :user_id
  end
end

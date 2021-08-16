class CreateItem < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :day
      t.string :fridge_item
      t.string :fridge_item_amount
      t.text :recipe
      t.integer :guests
      t.date :date

      t.timestamps
    end
  end
end

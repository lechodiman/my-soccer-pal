class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :phone
      t.string :street
      t.string :number
      t.string :commune
      t.decimal :lat
      t.decimal :lon
      t.string :web_page
      t.string :email

      t.timestamps
    end
  end
end

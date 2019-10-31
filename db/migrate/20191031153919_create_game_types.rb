class CreateGameTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :game_types do |t|
      t.string :name, null: false
      t.integer :capacity, null: false

      t.timestamps
    end
  end
end

class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.date :date
      t.time :time
      t.references :place, null: false, foreign_key: true
      t.references :game_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end

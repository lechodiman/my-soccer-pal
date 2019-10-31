class CreatePlayerInvitations < ActiveRecord::Migration[6.0]
  def change
    create_table :player_invitations do |t|
      t.string :email, null: false
      t.string :status, null: false
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end

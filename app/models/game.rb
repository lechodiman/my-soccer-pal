class Game < ApplicationRecord
  belongs_to :place
  belongs_to :game_type
  has_many :player_invitations
end

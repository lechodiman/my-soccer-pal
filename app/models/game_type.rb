class GameType < ApplicationRecord
  validates :name, presence: true
  validates :capacity, presence: true

  has_many :games
end

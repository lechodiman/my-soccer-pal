class Place < ApplicationRecord
  validates :name, presence: true

  has_many :games
end

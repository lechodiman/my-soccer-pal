class PlayerInvitation < ApplicationRecord
  validates :email, presence: true
  validates :status, presence: true
  
  belongs_to :game
end

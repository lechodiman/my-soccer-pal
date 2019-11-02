class PlayerInvitationMailer < ApplicationMailer
  def welcome(player_invitation)
    @player_invitation = player_invitation
    @game = player_invitation.game
    @place = @game.place
    mail(to: player_invitation.email, subject: "You have an invitation to join a game!")
  end
end

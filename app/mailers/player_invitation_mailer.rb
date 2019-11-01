class PlayerInvitationMailer < ApplicationMailer
  def welcome(player_invitation)
    @player_invitation = player_invitation
    mail(to: player_invitation.email, subject: "You have an invitation to join a soccer game!")
  end
end

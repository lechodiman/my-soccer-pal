class Api::V1::PlayerInvitationsController < ApplicationController
  before_action :set_game, only: [:index, :create]
  before_action :set_player_invitation, only: [:show, :destroy, :update]

  def index
    player_invitations = @game.player_invitations
    render json: player_invitations
  end

  def create
    player_invitation = @game.player_invitations.new(player_invitation_params)
    player_invitation.status = "pending"

    if player_invitation.save
      render json: player_invitation
    else
      render json: player_invitation.errors
    end

    # TODO: Send email
  end

  def show
    if @player_invitation
      render json: @player_invitation
    else
      render json: @player_invitation.errors
    end
  end

  def update
    if @player_invitation.update(player_invitation_params)
      render json: @player_invitation
    else
      render json: @player_invitation.errors
    end
  end

  def destroy
    @player_invitation&.destroy
    render json: { message: 'player invitation deleted!' }
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end

  def set_player_invitation
    @player_invitation = PlayerInvitation.find(params[:id])
  end

  def player_invitation_params
    params.permit(:email, :status)
  end
end

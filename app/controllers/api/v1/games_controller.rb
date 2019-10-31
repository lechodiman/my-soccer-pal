class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: [:show, :destroy]

  def index
    games = Game.all.order(created_at: :desc)
    render json: games
  end

  def create
    game = Game.create!(game_params)
    if game
      render json: game
    else
      render json: game.errors
    end
  end

  def show
    if @game
      render json: @game
    else
      render json: recipe.errors
    end
  end

  def destroy
    @game&.destroy
    render json: { message: 'game deleted!' }
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.permit(:name, :date, :time, :place_id, 
                  :game_type_id)
  end
end

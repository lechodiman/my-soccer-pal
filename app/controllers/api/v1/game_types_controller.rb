class Api::V1::GameTypesController < ApplicationController
  before_action :set_game_type, only: [:show]
  
  def index
    game_types = GameType.all.order(created_at: :desc)
    render json: game_types
  end

  def show
    if @game_type
      render json: @game_type
    else
      render json: recipe.errors
    end
  end

  private

  def set_game_type
    @game_type = GameType.find(params[:id])
  end
end

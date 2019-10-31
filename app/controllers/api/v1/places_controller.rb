class Api::V1::PlacesController < ApplicationController
  before_action :set_place, only: [:show, :destroy]

  def index
    places = Place.all.order(created_at: :desc)
    render json: places
  end

  def create
    place = Place.create!(place_params)
    if place
      render json: place
    else
      render json: place.errors
    end
  end

  def show
    if @place
      render json: @place
    else
      render json: recipe.errors
    end
  end

  def destroy
    @place&.destroy
    render json: { message: 'place deleted!' }
  end

  private

  def set_place
    @place = Place.find(params[:id])
  end

  def place_params
    params.permit(:name, :phone, :street, :number, :commune,
                  :lat, :lon, :web_page, :email)
  end
end

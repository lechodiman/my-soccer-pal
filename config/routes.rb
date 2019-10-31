Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :places, except: [:edit, :update, :new]
      resources :game_types, only: [:index, :show]
      resources :games, except: [:edit, :update, :new]
    end
  end
  get 'homepage/index'
  root 'homepage#index'
end

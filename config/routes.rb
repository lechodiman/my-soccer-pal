Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :places, except: [:edit, :update, :new]
      resources :game_types, only: [:index, :show]
      resources :games, except: [:edit, :update, :new], shallow: true do
        resources :player_invitations, only: [:index, :create, :show, :update, :destroy]
      end
    end
  end
  get 'homepage/index'
  get '/*path' => 'homepage#index'
  root 'homepage#index'
end

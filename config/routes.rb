Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :places, except: [:edit, :update, :new]
    end
  end
  get 'homepage/index'
  root 'homepage#index'
end

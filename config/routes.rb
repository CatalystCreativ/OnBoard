Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_page#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show] do
      resources :products, only: [:index, :create, :destroy, :update, :show]
      resources :favorites, only: [:create, :index, :destroy]
    end
    resources :tags, only: [:show]
    resource :session, only: [:create, :destroy]
  end
end

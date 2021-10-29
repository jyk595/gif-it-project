Rails.application.routes.draw do
  # Users Routes
  post '/create-account', to: 'users#create'
  get '/me', to: 'users#show'

  #Sessions Routes
  post '/login', to: 'sessions#create'
end

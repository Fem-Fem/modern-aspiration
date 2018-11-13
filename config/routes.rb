Rails.application.routes.draw do
  resources :objectives
  get '/goals', to: "goals#index"
end

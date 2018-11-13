Rails.application.routes.draw do
  get '/goals', to: "goals#index"
end

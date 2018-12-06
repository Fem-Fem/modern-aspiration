Rails.application.routes.draw do

  scope :api do 
    resources :goals do 
      resources :objectives
    end
  end

  get '/api/goals/:id/toggle', to: 'goals#toggle'
  resources :objectives, only: [:destroy]
  
  patch '/api/objectives/:id', to: 'objectives#toggle'
end

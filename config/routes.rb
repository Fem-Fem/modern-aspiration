Rails.application.routes.draw do

  scope :api do 
    resources :goals do 
      resources :objectives
    end
  end
end

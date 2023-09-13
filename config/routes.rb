Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # for API versioning
  # namespace :api do
  #   namespace :v1 do
  #     resources :comics
  #   end
  # end
  
  root "comics#index"
  resources :comics
end

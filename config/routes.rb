Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  root 'application#index'
  # root 'home#item'
  resources :ingredient
  resources :home
  get 'ingredient/get_recipe', to: 'ingredient#get_recipe'
end

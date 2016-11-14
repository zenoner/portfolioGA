Rails.application.routes.draw do
  get "/" => "app#index"

  get "/about" => "about#index"

  get "/contact" => "contact#index"

  resources :works

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end



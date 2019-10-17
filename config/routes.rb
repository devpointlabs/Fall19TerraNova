Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    get "/contact", to: "contact#contact"
    
    resources :users 
    get "show_self", to: "users#show_self"

    resources :cabins
    get "avail_cabins", to: "cabins#avail_cabins"
    get "single_cabin_availability", to: "cabins#single_cabin_availability"

    resources :payments
    get "my_payments", to: "payments#my_payments"

    
    resources :bookings
    get "my_bookings", to: "bookings#my_bookings"
    get "single_day_bookings", to: "bookings#single_day_bookings"
    
    resources :price_events
    
  end

end


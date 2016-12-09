Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :drawings, only: [:index, :show]

  get '/lessons/:section/:id', to: 'lessons#show', as: 'lesson'

  root 'welcome#index'

end

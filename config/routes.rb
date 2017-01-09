Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :drawings, only: [:index, :show]
  resources :examples, only: [:index, :show]

  get '/lessons/:section/:id', to: 'lessons#show', as: 'lesson'
  get '/lessons/:section', to: 'lessons#index', as: 'lesson_index'

  root 'welcome#index'

end

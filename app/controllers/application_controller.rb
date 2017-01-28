class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      clear_rect: {count: 2, method: 'clearRect()'},
      fill_rect: {count: 6, method: 'fillRect()'},
      fill_style: {count: 3, method: 'fillStyle'},
      line_to: {count: 6, method: 'lineTo()'},
      translate: {count: 6, method: 'translate()'},
      random: {count: 4, method: 'random()'},
      round: {count: 3, method: 'round() / floor() / ceil()'},
      save: {count: 5, method: 'save() / restore()'},
      scale: {count: 7, method: 'scale()'},
      create_linear_gradient: {count: 3, method: 'createLinearGradient()'},

      coordinates: {count: 3, method: 'Coordinates'},
      event_listeners: {count: 0, method: 'Event Listeners'},
      for_loops: {count: 6, method: 'For Loops'},
      functions: {count: 5, method: 'Functions'},
      set_interval: {count: 0, method: 'setInterval()'},
      switch_statements: {count: 4, method: 'Switch Statements'},
      variables: {count: 5, method: 'Variables'},
      while_loops: {count: 3, method: 'While Loops'},
      if_statements: {count: 3, method: 'If Statements'},
      objects: {count: 3, method: 'Objects'},
      arrays: {count: 3, method: 'Arrays'}
    }

    @reference = {
      Context2D: [
        :clear_rect,
        :fill_rect,
        :fill_style,
        :line_to,
        :save,
        :scale,
        :translate,
      ],
      Math: [
        :round,
        :random
      ]
    }

    @concepts = [
      :variables,
      :for_loops,
      :while_loops,
      :coordinates,
      :functions,
      :switch_statements,
      :set_interval,
      :event_listeners
    ]

    @challenge_paths = [
      {
        experimental: true,
        name: 'Snake Game',
        slug: 'snake_game',
        stages: [],
        reference: [
        ],
        concepts: [
        ]
      },
      {
        experimental: true,
        name: 'Flappy Square',
        slug: 'flappy_square',
        stages: [6, 4, 3, 4, 2],
        reference: [
          :clear_rect,
          :fill_rect,
          :fill_style,
          :line_to,
          :random,
        ],
        concepts: [
          :coordinates,
          :event_listeners,
          :functions,
          :set_interval,
          :variables,
        ]
      },
      {
        experimental: true,
        name: 'Flappy Birds',
        slug: 'flappy_birds',
        stages: [1],
        reference: [
        ],
        concepts: [
        ]
      },
      {
        experimental: true,
        name: 'Basic Cityscape',
        slug: 'granular_basic_cityscape',
        stages: [8, 3, 4, 4],
        reference: [
          :fill_rect,
          :fill_style,
          :round,
          :line_to,
          :random,
          :translate,
          :save,
          :scale,
        ],
        concepts: [
          :variables,
          :for_loops,
          :while_loops,
          :coordinates,
          :functions,
          :switch_statements,
        ]
      },
      {
        name: 'Basic Cityscape',
        slug: 'basic_cityscape',
        stages: [6, 3, 4, 4],
        reference: [
          :fill_rect,
          :fill_style,
          :save,
          :translate,
          :line_to,
          :random,
          :round,
          :scale
        ],
        concepts: [
          :coordinates,
          :variables,
          :functions,
          :for_loops,
          :switch_statements,
          :while_loops
        ]
      },
      {
        experimental: true,
        name: 'Animated Cityscape',
        slug: 'animated_cityscape',
        stages: [7, 6, 6, 6],
        reference: [
          :fill_rect,
          :fill_style,
          :save,
          :translate,
          :line_to,
          :random,
          :round,
          :scale,
          :create_linear_gradient,
          :set_interval
        ],
        concepts: [
          :coordinates,
          :variables,
          :functions,
          :for_loops,
          :switch_statements,
          :while_loops,
          :if_statements,
          :event_listeners,
          :objects,
          :arrays
        ]
      }
    ]

  end

end

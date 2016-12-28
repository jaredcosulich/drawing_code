class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      clear_rect: {count: 2, method: 'clearRect()'},
      fill_rect: {count: 3, method: 'fillRect()'},
      fill_style: {count: 2, method: 'fillStyle'},
      floor: {count: 0, method: 'floor() / ceil()'},
      line_to: {count: 3, method: 'lineTo()'},
      translate: {count: 1, method: 'translate()'},
      random: {count: 0, method: 'random()'},
      save: {count: 1, method: 'save()'},
      scale: {count: 0, method: 'scale()'},

      coordinates: {count: 2, method: 'Coordinates'},
      event_listeners: {count: 0, method: 'Event Listeners'},
      for_loops: {count: 1, method: 'For Loops'},
      functions: {count: 1, method: 'Functions'},
      set_interval: {count: 0, method: 'setInterval()'},
      switch_statements: {count: 0, method: 'Switch Statements'},
      variables: {count: 2, method: 'Variables'},
      while_loops: {count: 0, method: 'While Loops'},

      dng_fill_rect: {count: 6, method: 'DNG fillRect()'},
      dng_fill_style: {count: 3, method: 'DNG fillStyle'},
      dng_save: {count: 5, method: 'DNG save()/restore()'},
      dng_translate: {count: 6, method: 'DNG translate()'},
      dng_coordinates: {count: 3, method: 'DNG Coordinates'},
      dng_variables: {count: 5, method: 'DNG Variables'},
      dng_functions: {count: 5, method: 'DNG Functions'},
      dng_for_loops: {count: 6, method: 'DNG For Loops'}
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
        :floor,
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
        name: 'Original Basic Cityscape',
        slug: 'basic_cityscape',
        stages: [4, 3, 4, 4],
        reference: [
          :fill_rect,
          :fill_style,
          :floor,
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
        stages: [5, 4],
        reference: [
          :clear_rect,
          :fill_rect,
        ],
        concepts: [
          :set_interval,
          :event_listeners
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
        name: 'Basic Cityscape',
        slug: 'granular_basic_cityscape',
        stages: [8, 3, 4, 4],
        reference: [
          :fill_rect,
          :fill_style,
          :floor,
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
        experimental: true,
        name: 'DNG Basic Cityscape',
        slug: 'dng_basic_cityscape',
        stages: [4, 3, 4, 4],
        reference: [
          :dng_fill_rect,
          :dng_fill_style,
          :dng_save,
          :dng_translate
        ],
        concepts: [
          :dng_coordinates,
          :dng_variables,
          :dng_functions,
          :dng_for_loops
        ]
      }
    ]

  end

end

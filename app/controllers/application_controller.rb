class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      clear_rect: {count: 2, method: 'clearRect()'},
      fill_rect: {count: 6, method: 'fillRect()'},
      fill_style: {count: 3, method: 'fillStyle'},
      floor: {count: 0, method: 'floor() / ceil()'},
      line_to: {count: 6, method: 'lineTo()'},
      translate: {count: 6, method: 'translate()'},
      random: {count: 4, method: 'random()'},
      round: {count: 3, method: 'round() / floor() / ceil()'},
      save: {count: 5, method: 'save() / restore()'},
      scale: {count: 7, method: 'scale()'},

      coordinates: {count: 3, method: 'Coordinates'},
      event_listeners: {count: 0, method: 'Event Listeners'},
      for_loops: {count: 6, method: 'For Loops'},
      functions: {count: 5, method: 'Functions'},
      set_interval: {count: 0, method: 'setInterval()'},
      switch_statements: {count: 4, method: 'Switch Statements'},
      variables: {count: 5, method: 'Variables'},
      while_loops: {count: 3, method: 'While Loops'},
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
        stages: [6, 4, 3, 4],
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
        experimental: true,
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
      }
    ]

  end

end

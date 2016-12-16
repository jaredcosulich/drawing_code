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
      for_loops: {count: 1, method: 'For Loops'},
      functions: {count: 1, method: 'Functions'},
      switch_statements: {count: 0, method: 'Switch Statements'},
      variables: {count: 2, method: 'Variables'},
      while_loops: {count: 0, method: 'While Loops'},

      dng_fill_rect: {count: 3, method: 'DNG fillRect()'},
      dng_fill_style: {count: 2, method: 'DNG fillStyle'},
      dng_coordinate_system: {count: 3, method: 'DNG Coordinate System'}
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
      :switch_statements
    ]

    @challenge_paths = [
      {
        name: 'Basic Cityscape',
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
        name: 'Basic Cityscape',
        slug: 'granular_basic_cityscape',
        stages: [2, 3, 4, 4],
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
          :dng_fill_style
        ],
        concepts: [
          :dng_coordinate_system
        ]
      }
    ]

  end

end

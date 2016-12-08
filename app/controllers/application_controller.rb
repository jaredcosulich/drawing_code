class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      clear_rect: {count: 2, method: 'clearRect()'},
      line_to: {count: 3, method: 'lineTo()'},
      fill_rect: {count: 3, method: 'fillRect()'},
      fill_style: {count: 2, method: 'fillStyle'},
      translate: {count: 1, method: 'translate()'},
      save: {count: 1, method: 'save()'},

      floor: {count: 0, method: 'floor() / ceil()'},
      random: {count: 0, method: 'random()'},

      variables: {count: 2, method: 'Variables'},
      for_loops: {count: 1, method: 'For Loops'},
      coordinates: {count: 2, method: 'Coordinates'},
      functions: {count: 1, method: 'Functions'},

      basic_cityscape_stage1: {count: 4, method: 'Stage 1'},
      basic_cityscape_stage2: {count: 3, method: 'Stage 2'}
    }

    @reference = {
      Context2D: [
        :clear_rect,
        :line_to,
        :fill_rect,
        :fill_style,
        :translate,
        :save
      ],
      Math: [
        :floor,
        :random
      ]
    }


    @concepts = [
      :variables,
      :for_loops,
      :coordinates,
      :functions
    ]

    @challenge_paths = [
      {
        name: 'Basic Cityscape',
        slug: 'basic_cityscape',
        stages: [
          :basic_cityscape_stage1,
          :basic_cityscape_stage2
        ],
        reference: [
          :clear_rect,
          :fill_rect,
          :fill_style,
          :translate,
          :save,
          :floor,
          :random
        ],
        concepts: [
          :variables,
          :for_loops,
          :coordinates,
          :functions
        ]
      }
    ]

  end

end

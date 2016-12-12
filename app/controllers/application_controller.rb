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
      scale: {count: 0, method: 'scale()'},

      floor: {count: 0, method: 'floor() / ceil()'},
      random: {count: 0, method: 'random()'},

      variables: {count: 2, method: 'Variables'},
      for_loops: {count: 1, method: 'For Loops'},
      while_loops: {count: 0, method: 'While Loops'},
      coordinates: {count: 2, method: 'Coordinates'},
      functions: {count: 1, method: 'Functions'},
      switch_statements: {count: 0, method: 'Switch Statements'},

      basic_cityscape_stage1: {count: 4, method: 'Stage 1'},
      basic_cityscape_stage2: {count: 3, method: 'Stage 2'},
      basic_cityscape_stage3: {count: 4, method: 'Stage 3'},
      basic_cityscape_stage4: {count: 4, method: 'Stage 4'}
    }

    @reference = {
      Context2D: [
        :clear_rect,
        :line_to,
        :fill_rect,
        :fill_style,
        :save,
        :translate,
        :scale
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
        stages: [
          :basic_cityscape_stage1,
          :basic_cityscape_stage2,
          :basic_cityscape_stage3,
          :basic_cityscape_stage4
        ],
        reference: [
          :fill_rect,
          :fill_style,
          :line_to,
          :save,
          :translate,
          :scale,
          :random,
          :floor
        ],
        concepts: [
          :variables,
          :for_loops,
          :while_loops,
          :coordinates,
          :functions,
          :switch_statements
        ]
      }
    ]

  end

end

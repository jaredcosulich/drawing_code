class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      line_to: {count: 3, method: 'lineTo()'},
      fill_rect: {count: 3, method: 'fillRect()'},
      fill_style: {count: 2, method: 'fillStyle()'},
      variables: {count: 2, method: 'Variables'},
      coordinates: {count: 2, method: 'Coordinates'},
      translate: {count: 1, method: 'translate()'},
      basic_cityscape_stage1: {count: 4, method: 'Stage 1'}
    }

    @reference = [
      :line_to,
      :fill_rect,
      :fill_style,
      :translate
    ]

    @concepts = [
      :variables,
      :coordinates
    ]

    @challenge_paths = [
      {
        name: 'Basic Cityscape',
        slug: 'basic_cityscape',
        lessons: [
          :fill_rect,
          :fill_style,
          :variables,
          :coordinates,
          :translate,
          :basic_cityscape_stage1
        ]
      }
    ]

  end

end

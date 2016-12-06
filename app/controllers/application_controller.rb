class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      line_to: {count: 3, method: 'lineTo()'},
      fill_rect: {count: 3, method: 'fillRect()'},
      fill_style: {count: 2, method: 'fillStyle'},
      translate: {count: 1, method: 'translate()'},
      save: {count: 1, method: 'save()'},
      variables: {count: 2, method: 'Variables'},
      coordinates: {count: 2, method: 'Coordinates'},
      basic_cityscape_stage1: {count: 4, method: 'Stage 1', stage: true}
    }

    @reference = [
      :line_to,
      :fill_rect,
      :fill_style,
      :translate,
      :save
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
          :save,
          :basic_cityscape_stage1
        ]
      }
    ]

  end

end

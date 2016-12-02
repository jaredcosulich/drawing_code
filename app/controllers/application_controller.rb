class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :lesson_map

  def lesson_map
    @lessons = {
      line_to: {count: 3, method: 'lineTo'},
      fill_rect: {count: 3, method: 'fillRect'},
      fill_style: {count: 2, method: 'fillStyle'},
      variables: {count: 2, method: 'Variables'}
    }

    @reference = [
      :line_to,
      :fill_rect,
      :fill_style
    ]

    @design = [
      :variables
    ]

    @challenge_paths = [
      {
        name: 'Basic Cityscape',
        slug: 'basic_cityscape',
        lessons: [
          :fill_rect,
          :fill_style,
          :variables
        ]
      }
    ]

  end

end

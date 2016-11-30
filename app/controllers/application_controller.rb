class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :challenge_map

  def challenge_map
    @challenges = {
      line_to: {count: 3, method: 'lineTo'},
      fill_rect: {count: 3, method: 'fillRect'}
    }

    @reference = [
      :line_to,
      :fill_rect
    ]

    @cityscape = [
      :line_to,
      :fill_rect
    ]

  end

end

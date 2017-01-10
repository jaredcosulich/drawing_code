class ExamplesController < ApplicationController

  def index
    @sections = [
      'Drawings',
      'Animations',
      'Games'
    ]

    @examples = {
      'Drawings' => [
        :flowers,
        :sunrise_text
      ],
      'Animations' => [
        :rolling_ball,
        :simple_cannonball
      ],
      'Games' => [
        :flappy_square,
        :snake_game
      ]
    }
  end

  def show
    @example = params[:id]
  end

end

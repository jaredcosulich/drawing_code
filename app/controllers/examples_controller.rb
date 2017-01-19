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
        :sunrise_text,
        :dragon_curve_fractal
      ],
      'Animations' => [
        :rolling_ball,
        :simple_cannonball,
        :bouncing_collisions
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

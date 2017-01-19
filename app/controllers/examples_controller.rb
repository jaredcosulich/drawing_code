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
        :transport_vehicle,
        :sunrise_text,
      ],
      'Animations' => [
        :rolling_ball,
        :bouncing_collisions,
        :dragon_curve_fractal,
        :simple_cannonball,
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

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
        :curve_stitching_hexagon,
        :curve_stitching_star,        
        :curve_stitching_triangle,
        :glass_and_bottle,
        :sunrise_text,
      ],
      'Animations' => [
        :spiral_squares,
        :dragon_curve_fractal,
        :rolling_ball,
        :bouncing_collisions,
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

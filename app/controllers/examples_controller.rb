class ExamplesController < ApplicationController

  def index
    @sections = [
      'Drawings',
      'Animations',
      'Games'
    ]

    @examples = {
      'Drawings' => [
        :sunrise_text
      ],
      'Animations' => [
        :rolling_ball,
        :simple_cannonball
      ],
      'Games' => [
        :flappy_square
      ]
    }
  end

  def show
    @example = params[:id]
  end

end

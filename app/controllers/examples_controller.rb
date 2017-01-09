class ExamplesController < ApplicationController

  def index
    @sections = [
      'Drawings',
      'Animations',
      'Games'
    ]
    
    @examples = {
      'Drawings' => [
        :sunrise_text,
        :sunrise_text,
        :sunrise_text,
        :sunrise_text,
        :sunrise_text,
        :sunrise_text,
      ],
      'Animations' => [
        :rolling_ball,
        :rolling_ball,
        :rolling_ball,
        :rolling_ball,
        :rolling_ball,
        :rolling_ball,
        :rolling_ball,
      ],
      'Games' => [
        :flappy_square,
        :flappy_square,
        :flappy_square,
        :flappy_square,
        :flappy_square,
        :flappy_square,
      ]
    }
  end

  def show
    @example = params[:id]
  end

end

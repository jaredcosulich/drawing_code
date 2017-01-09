class ExamplesController < ApplicationController

  def index
    @examples = [
      :rolling_ball,
      :rolling_ball,
      :rolling_ball,
      :rolling_ball,
      :rolling_ball,
      :rolling_ball
    ]
  end

  def show
    @example = params[:id]
  end

end

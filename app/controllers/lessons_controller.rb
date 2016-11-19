class LessonsController < ApplicationController

  def show
    render params[:id]
  end

end

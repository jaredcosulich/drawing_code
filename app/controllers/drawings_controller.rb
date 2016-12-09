class DrawingsController < ApplicationController

  def index
    @drawing = true
    @my_drawing = true
  end

  def show
    @drawing = true
  end

end

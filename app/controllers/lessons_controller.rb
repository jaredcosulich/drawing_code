class LessonsController < ApplicationController

  def show
    lessons = []
    if ['reference', 'design'].include?(params[:section])
      lessons = instance_variable_get("@#{params[:section]}")
    else
      lessons = @challenge_paths.first { |cp| cp[:slug] == params[:section] }[:stages]
    end

    if lesson_index = lessons.index(params[:id].to_sym)
      @next_lesson = lessons[lesson_index + 1]
    end
    
    render params[:id]
  end

end

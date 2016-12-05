class LessonsController < ApplicationController

  def show
    lessons = []
    if ['reference', 'design'].include?(params[:section])
      lessons = instance_variable_get("@#{params[:section]}")
    else
      lessons = @challenge_paths.first { |cp| cp[:slug] == params[:section] }[:lessons]
    end

    @next_lesson = lessons[lessons.index(params[:id].to_sym) + 1]

    render params[:id]
  end

end

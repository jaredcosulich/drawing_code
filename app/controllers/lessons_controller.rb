class LessonsController < ApplicationController

  def show
    lessons = []
    if ['reference', 'design'].include?(params[:section])
      lessons = instance_variable_get("@#{params[:section]}")
      lessons = lessons.values.flatten if lessons.try(:values).present?
    else
      lessons = @challenge_paths.first { |cp| cp[:slug] == params[:section] }[:stages]
    end

    lesson_index = lessons.index(params[:id].to_sym)

    if lesson_index.present?
      @next_lesson = lessons[lesson_index + 1]
    end

    render params[:id]
  end

end

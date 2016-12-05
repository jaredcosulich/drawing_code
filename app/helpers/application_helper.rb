module ApplicationHelper

  def link_to_lesson(link_text, lesson_id, section=params[:section])
    link_to(link_text, "/lessons/#{section}/#{lesson_id}")
  end

end

module ApplicationHelper

  def link_to_lesson(link_text, lesson_id, section, html_options={})
    section = params[:section] if section.nil?
    link_to(link_text, "/lessons/#{section}/#{lesson_id}", html_options)
  end

end

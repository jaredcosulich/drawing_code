class LessonsController < ApplicationController

  def show
    lesson_slug = params[:id].to_sym

    if ['reference', 'design'].include?(params[:section])

      lessons = instance_variable_get("@#{params[:section]}")
      lessons = lessons.values.flatten if lessons.try(:values).present?
      @challenge_count = @lessons[lesson_slug][:count]

      render_reference(lessons, lesson_slug)

    else

      challenge_path = @challenge_paths.first { |cp| cp[:slug] == params[:section] }

      if @lessons[lesson_slug].present?

        @challenge_count = @lessons[lesson_slug][:count]
        lessons = challenge_path[:reference].index(lesson_slug).present? ?
          challenge_path[:reference] : challenge_path[:concept]
        render_reference(lessons, lesson_slug)

      else

        lessons = challenge_path[:stages]
        lesson_index = params[:id].gsub(/stage/, '').to_i
        @challenge_count = lessons[lesson_index - 1]

        if lessons.length > lesson_index
          @next_lesson = {name: "Stage: #{lesson_index + 1}", slug: "stage#{lesson_index + 1}"}
        end
        render "lessons/#{params[:section]}/#{params[:id]}"

      end
    end
  end

  def index
    challenge_path = @challenge_paths.first { |cp| cp[:slug] == params[:section] }
    redirect_to root_path if challenge_path.nil?

    lessons = challenge_path[:stages]
    @challenge_count = lessons[0]

    if lessons.length > 1
      @next_lesson = {name: "Stage: 2", slug: "stage2"}
    end
    render "lessons/#{params[:section]}/stage1"
  end

  def render_reference(lessons, slug)
    if (lesson_index = lessons.index(slug)).present?
      next_lesson_slug = lessons[lesson_index + 1]
      if @lessons[next_lesson_slug].present?
        @next_lesson = {name: @lessons[next_lesson_slug][:method], slug: next_lesson_slug}
      end
    end
    render slug
  end

end

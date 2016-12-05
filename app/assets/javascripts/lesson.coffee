initChallengeCounts = ->
  for challenges in $('.challenges')
    challenges = $(challenges)
    lessonId = challenges.closest('.lesson').attr('id')
    challengesCompleted = App.currentProgress.challengesCompleted(lessonId)
    if challengesCompleted.length > 0
      challenges.find('.no_challenges_completed').hide()
    else
      challenges.find('.challenges_completed').hide()
    challenges.find('.completed_challenges_count').html(challengesCompleted.length)

$(document).on('initialization:complete', initChallengeCounts)

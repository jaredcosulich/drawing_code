initChallenges = ->
  lessonId = $('.lesson').attr('id')
  challengesCompleted = App.currentProgress.challengesCompleted(lessonId)
  initChallengeCounts(challengesCompleted)
  markChallengesComplete(challengesCompleted)

initChallengeCounts = (challengesCompleted) ->
  for challenges in $('.challenges')
    challenges = $(challenges)
    if challengesCompleted.length > 0
      challenges.find('.no_challenges_completed').hide()
    else
      challenges.find('.challenges_completed').hide()
    challenges.find('.completed_challenges_count').html(challengesCompleted.length)

markChallengesComplete = (challengesCompleted) ->
  tag = $(document.createElement('SPAN'))
  tag.addClass('tag').addClass('tag-success').html('Completed!')
  for challengeId in challengesCompleted
    $("##{challengeId}").find('.challenge-title').append(tag.clone())

$(document).on('initialization:complete', initChallenges)

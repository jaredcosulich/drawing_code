initChallenges = ->
  pageId = $('.page').attr('id')
  challengesCompleted = App.currentProgress.challengesCompleted(pageId)
  initChallengeCounts(challengesCompleted)
  App.currentProgress.markChallengeComplete(challengeId) for challengeId in challengesCompleted

initChallengeCounts = (challengesCompleted) ->
  for challenges in $('.challenges')
    challenges = $(challenges)
    if challengesCompleted.length > 0
      challenges.find('.no_challenges_completed').hide()
    else
      challenges.find('.challenges_completed').hide()
    challenges.find('.completed_challenges_count').html(challengesCompleted.length)


$(document).on('initialization:complete', initChallenges)

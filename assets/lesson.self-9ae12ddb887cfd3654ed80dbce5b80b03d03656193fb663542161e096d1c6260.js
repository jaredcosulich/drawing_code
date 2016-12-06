(function() {
  var initChallengeCounts, initChallenges;

  initChallenges = function() {
    var challengeId, challengesCompleted, i, len, lessonId, results;
    lessonId = $('.lesson').attr('id');
    challengesCompleted = App.currentProgress.challengesCompleted(lessonId);
    initChallengeCounts(challengesCompleted);
    results = [];
    for (i = 0, len = challengesCompleted.length; i < len; i++) {
      challengeId = challengesCompleted[i];
      results.push(App.currentProgress.markChallengeComplete(challengeId));
    }
    return results;
  };

  initChallengeCounts = function(challengesCompleted) {
    var challenges, i, len, ref, results;
    ref = $('.challenges');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      challenges = ref[i];
      challenges = $(challenges);
      if (challengesCompleted.length > 0) {
        challenges.find('.no_challenges_completed').hide();
      } else {
        challenges.find('.challenges_completed').hide();
      }
      results.push(challenges.find('.completed_challenges_count').html(challengesCompleted.length));
    }
    return results;
  };

  $(document).on('initialization:complete', initChallenges);

}).call(this);

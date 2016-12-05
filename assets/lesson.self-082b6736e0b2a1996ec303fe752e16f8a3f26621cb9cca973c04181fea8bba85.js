(function() {
  var initChallengeCounts;

  initChallengeCounts = function() {
    var challenges, challengesCompleted, i, len, lessonId, ref, results;
    ref = $('.challenges');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      challenges = ref[i];
      challenges = $(challenges);
      lessonId = challenges.closest('.lesson').attr('id');
      challengesCompleted = App.currentProgress.challengesCompleted(lessonId);
      if (challengesCompleted.length > 0) {
        challenges.find('.no_challenges_completed').hide();
      } else {
        challenges.find('.challenges_completed').hide();
      }
      results.push(challenges.find('.completed_challenges_count').html(challengesCompleted.length));
    }
    return results;
  };

  $(document).on('initialization:complete', initChallengeCounts);

}).call(this);

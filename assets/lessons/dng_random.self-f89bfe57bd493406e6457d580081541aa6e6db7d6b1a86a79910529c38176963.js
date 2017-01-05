(function() {
  var initDngRandomChallenge1, initDngRandomChallenge2, initDngRandomChallenge3, initDngRandomChallenge4, initDngRandomChallenges;

  initDngRandomChallenges = function() {
    var page;
    if ((page = $('#dng_random')).length > 0) {
      initDngRandomChallenge1(page);
      initDngRandomChallenge2(page);
      initDngRandomChallenge3(page);
      return initDngRandomChallenge4(page);
    }
  };

  initDngRandomChallenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_random', 'challenge1');
      });
    });
  };

  initDngRandomChallenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_random', 'challenge2');
      });
    });
  };

  initDngRandomChallenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_random', 'challenge3');
      });
    });
  };

  initDngRandomChallenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_random', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initDngRandomChallenges);

}).call(this);

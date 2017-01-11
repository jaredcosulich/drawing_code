(function() {
  var initRandomChallenge1, initRandomChallenge2, initRandomChallenge3, initRandomChallenge4, initRandomChallenges;

  initRandomChallenges = function() {
    var page;
    if ((page = $('#random')).length > 0) {
      initRandomChallenge1(page);
      initRandomChallenge2(page);
      initRandomChallenge3(page);
      return initRandomChallenge4(page);
    }
  };

  initRandomChallenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('random', 'challenge1');
      });
    });
  };

  initRandomChallenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('random', 'challenge2');
      });
    });
  };

  initRandomChallenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('random', 'challenge3');
      });
    });
  };

  initRandomChallenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('random', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initRandomChallenges);

}).call(this);

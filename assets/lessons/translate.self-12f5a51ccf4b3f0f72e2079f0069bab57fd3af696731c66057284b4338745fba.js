(function() {
  var initTranslateChallenge1, initTranslateChallenges;

  initTranslateChallenges = function() {
    var page;
    if ((page = $('#translate')).length > 0) {
      return initTranslateChallenge1(page);
    }
  };

  initTranslateChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 50,
        y: 50,
        colors: [42, 50, 163],
        canvas: canvas
      }), new Test.Point({
        x: 125,
        y: 125,
        colors: [42, 50, 163],
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 200,
        colors: [42, 50, 163],
        canvas: canvas
      })
    ];
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        var i, len, message, point, success;
        success = true;
        for (i = 0, len = points.length; i < len; i++) {
          point = points[i];
          if (point.test() < 1) {
            success = false;
            break;
          }
        }
        message = success ? '<strong>Success!</strong> You\'ve successfully translated the square to the right spots on the grid!' : 'Nice try, but you need to translate the square to cover each x.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('translate', 'challenge1');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initTranslateChallenges);

}).call(this);

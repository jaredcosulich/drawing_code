(function() {
  var initFunctionsChallenge1, initFunctionsChallenges;

  initFunctionsChallenges = function() {
    var page;
    if ((page = $('#functions')).length > 0) {
      return initFunctionsChallenge1(page);
    }
  };

  initFunctionsChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    editor.run();
    points = [
      new Test.Point({
        x: 50,
        y: 100,
        colors: [0, 0, 0],
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 100,
        colors: [255, 0, 0],
        canvas: canvas
      }), new Test.Point({
        x: 250,
        y: 100,
        colors: [0, 0, 0],
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
        message = success ? '<strong>Success!</strong> The third square is black while the second is still red and the first is still black!' : 'Nice try, but the first square should be black, the second should be red, and the third should be black again.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('functions', 'challenge1');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initFunctionsChallenges);

}).call(this);

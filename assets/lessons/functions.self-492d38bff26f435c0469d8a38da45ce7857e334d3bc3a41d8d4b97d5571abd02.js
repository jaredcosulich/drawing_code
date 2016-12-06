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
    points = [
      new Test.Point({
        x: 50,
        y: 50,
        colors: [255, 0, 0],
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 100,
        colors: [255, 0, 0],
        canvas: canvas
      }), new Test.Point({
        x: 50,
        y: 150,
        colors: [0, 128, 0],
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 200,
        colors: [0, 128, 0],
        canvas: canvas
      }), new Test.Point({
        x: 50,
        y: 250,
        colors: [0, 0, 255],
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 300,
        colors: [0, 0, 255],
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
        message = success ? '<strong>Success!</strong> Your function is building the correctly sized, positioned, and colored rectangles.' : 'Nice try, but your rectangles need to be the correct dimensions and colors and at the correct locations..';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('functions', 'challenge1');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initFunctionsChallenges);

}).call(this);

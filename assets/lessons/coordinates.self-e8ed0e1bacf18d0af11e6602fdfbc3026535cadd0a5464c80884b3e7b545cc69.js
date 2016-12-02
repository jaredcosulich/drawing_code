(function() {
  var initCoordinatesChallenge1, initCoordinatesChallenge2, initCoordinatesChallenges;

  initCoordinatesChallenges = function() {
    var page;
    if ((page = $('#coordinates')).length > 0) {
      initCoordinatesChallenge1(page);
      return initCoordinatesChallenge2(page);
    }
  };

  initCoordinatesChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 0,
        y: 0,
        canvas: canvas
      }), new Test.Point({
        x: 100,
        y: 100,
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
        message = success ? '<strong>Success!</strong> Your rectangle is starting at (0,0) and goes to (100,100)!' : 'Nice try, but your square needs to start in the upper left corner and be 100px on each side.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('coordinates', 'challenge1');
        }
      }), 200);
    });
  };

  initCoordinatesChallenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 0,
        y: 0,
        canvas: canvas
      }), new Test.Point({
        x: 0,
        y: 360,
        canvas: canvas
      }), new Test.Point({
        x: 600,
        y: 0,
        canvas: canvas
      }), new Test.Point({
        x: 600,
        y: 360,
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
        message = success ? '<strong>Success!</strong> You\'ve convered the whole canvas, from (0,0) to (600,360)!' : 'Nice try, but the whole canvas is not yet convered.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('coordinates', 'challenge2');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initCoordinatesChallenges);

}).call(this);

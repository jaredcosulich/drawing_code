(function() {
  var initClearRectsChallenge1, initClearRectsChallenge2, initClearRectsChallenges;

  initClearRectsChallenges = function() {
    var page;
    if ((page = $('#clear_rect')).length > 0) {
      initClearRectsChallenge1(page);
      return initClearRectsChallenge2(page);
    }
  };

  initClearRectsChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    editor.run();
    points = [
      new Test.Point({
        x: 99,
        y: 99,
        colors: [255, 0, 0],
        buffer: 0,
        canvas: canvas
      }), new Test.Point({
        x: 126,
        y: 201,
        colors: [255, 0, 0],
        buffer: 0,
        canvas: canvas
      }), new Test.Point({
        x: 100,
        y: 100,
        badPoint: true,
        buffer: 0,
        canvas: canvas
      }), new Test.Point({
        x: 124,
        y: 199,
        badPoint: true,
        buffer: 0,
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
        message = success ? '<strong>Success!</strong> You\'ve cleared an area on the canvas with the appropriate dimensions.' : 'Nice try, but you need to clear a 25x100 area starting at (150,150). Everywhere else should be red.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('clear_rect', 'challenge1');
        }
      }), 200);
    });
  };

  initClearRectsChallenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    editor.run();
    points = [
      new Test.Point({
        x: 0,
        y: 0,
        badPoint: true,
        canvas: canvas
      }), new Test.Point({
        x: canvas.canvasElement.width,
        y: 0,
        badPoint: true,
        canvas: canvas
      }), new Test.Point({
        x: 0,
        y: canvas.canvasElement.height,
        badPoint: true,
        canvas: canvas
      }), new Test.Point({
        x: canvas.canvasElement.width,
        y: canvas.canvasElement.height,
        badPoint: true,
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
        message = success ? '<strong>Success!</strong> You\'ve cleared the canvas.' : 'Nice try, but you need to clear the whole canvas.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('clear_rect', 'challenge2');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initClearRectsChallenges);

}).call(this);

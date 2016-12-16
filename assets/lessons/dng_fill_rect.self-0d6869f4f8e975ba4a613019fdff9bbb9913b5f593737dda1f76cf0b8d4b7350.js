(function() {
  var initDngFillRectChallenge1, initDngFillRectChallenge2, initDngFillRectChallenge3, initDngFillRectChallenges;

  initDngFillRectChallenges = function() {
    var page;
    if ((page = $('#dng_fill_rect')).length > 0) {
      initDngFillRectChallenge1(page);
      initDngFillRectChallenge2(page);
      return initDngFillRectChallenge3(page);
    }
  };

  initDngFillRectChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 100,
        y: 100,
        colors: [255, 0, 0],
        canvas: canvas
      })
    ];
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        var message, success;
        if ((success = points[0].test() === 1)) {
          message = '<strong>Success!</strong> Your red rectangle is covering the x!';
          App.currentProgress.challengeComplete('dng_fill_rect', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a red rectangle that covers the x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initDngFillRectChallenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 100,
        y: 100,
        canvas: canvas
      }), new Test.Point({
        x: 100,
        y: 200,
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
        message = success ? '<strong>Success!</strong> Your rectangle is covering the x\'s!' : 'Nice try, but you need to draw a rectangle that covers both x\'s.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('dng_fill_rect', 'challenge2');
        }
      }), 200);
    });
  };

  initDngFillRectChallenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 100,
        y: 150,
        colors: [15, 39, 143],
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 150,
        colors: [255, 255, 255],
        canvas: canvas
      }), new Test.Point({
        x: 300,
        y: 150,
        colors: [219, 84, 67],
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
        message = success ? '<strong>Success!</strong> Your rectangle is covering the x\'s with the right colors!' : 'Nice try, but you need to draw rectangles that cover each x in the right color.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('dng_fill_rect', 'challenge3');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initDngFillRectChallenges);

}).call(this);

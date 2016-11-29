(function() {
  var initFillRectChallenge1, initFillRectChallenge2, initFillRectChallenges;

  initFillRectChallenges = function() {
    var page;
    if ((page = $('#fill_rect')).length > 0) {
      initFillRectChallenge1(page);
      return initFillRectChallenge2(page);
    }
  };

  initFillRectChallenge1 = function(page) {
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
        } else {
          message = 'Nice try, but you need to draw a red rectangle that covers the x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initFillRectChallenge2 = function(page) {
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
        return canvas.alert(message, success);
      }), 200);
    });
  };

  $(document).on('turbolinks:load', initFillRectChallenges);

}).call(this);

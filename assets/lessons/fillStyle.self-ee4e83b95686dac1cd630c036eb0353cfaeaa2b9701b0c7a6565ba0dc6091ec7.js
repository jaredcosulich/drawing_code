(function() {
  var initFillStyleChallenge1, initFillStyleChallenge2, initFillStyleChallenges;

  initFillStyleChallenges = function() {
    var page;
    if ((page = $('#fill_style')).length > 0) {
      initFillStyleChallenge1(page);
      return initFillStyleChallenge2(page);
    }
  };

  initFillStyleChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 100,
        y: 100,
        colors: [0, 0, 0],
        badColor: true,
        canvas: canvas
      })
    ];
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        var message, success;
        if ((success = points[0].test() === 1)) {
          message = '<strong>Success!</strong> Your rectangle is covering the x and is a color other than black!';
          App.currentProgress.challengeComplete('fill_style', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a rectangle  that isn\'t black and that covers the x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initFillStyleChallenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 50,
        y: 100,
        colors: [128, 0, 128],
        canvas: canvas
      }), new Test.Point({
        x: 100,
        y: 100,
        colors: [128, 0, 128],
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 100,
        colors: [128, 0, 128],
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
        message = success ? '<strong>Success!</strong> Your rectangle are covering the x\'s and they\'re all purple!' : 'Nice try, but you need to draw rectangles covering all x\'s with the colors provided.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('fill_style', 'challenge2');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initFillStyleChallenges);

}).call(this);

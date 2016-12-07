(function() {
  var initFloorChallenge1, initFloorChallenges;

  initFloorChallenges = function() {
    var page;
    if ((page = $('#for_loops')).length > 0) {
      return initFloorChallenge1(page);
    }
  };

  initFloorChallenge1 = function(page) {
    var canvas, challenge, editor, ground, height, i, j, points, width, x, y;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    for (i = j = 0; j < 8; i = ++j) {
      ground = 250;
      width = 25;
      height = 200 - (25 * i);
      x = 50 + (width * i);
      y = ground - height;
      points.push(new Test.Point({
        x: x,
        y: ground,
        canvas: canvas
      }));
      points.push(new Test.Point({
        x: x + width,
        y: ground - height,
        canvas: canvas
      }));
      points.push(new Test.Point({
        x: x + width,
        y: ground - (height + 25),
        badPoint: true,
        canvas: canvas
      }));
    }
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        var k, len, message, point, success;
        success = true;
        for (k = 0, len = points.length; k < len; k++) {
          point = points[k];
          if (point.test() < 1) {
            success = false;
            break;
          }
        }
        message = success ? '<strong>Success!</strong> Your loop has drawn the stairs as described.' : 'Nice try, but your staircase does not fit the description provided.';
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('for_loops', 'challenge1');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initFloorChallenges);

}).call(this);

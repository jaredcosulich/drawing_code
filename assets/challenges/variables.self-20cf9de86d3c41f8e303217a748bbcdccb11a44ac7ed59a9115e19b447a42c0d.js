(function() {
  var initVariablesChallenge1, initVariablesChallenge2, initVariablesChallenges;

  initVariablesChallenges = function() {
    var page;
    if ((page = $('#variables')).length > 0) {
      initVariablesChallenge1(page);
      return initVariablesChallenge2(page);
    }
  };

  initVariablesChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
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
      }), new Test.Point({
        x: 150,
        y: 100,
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 200,
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 100,
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 200,
        canvas: canvas
      })
    ];
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        var failedPoints, j, len, message, point, successfulPoints;
        successfulPoints = [];
        failedPoints = [];
        for (j = 0, len = points.length; j < len; j++) {
          point = points[j];
          if (point.test() > 0) {
            point.display();
            successfulPoints.push(point);
          } else {
            failedPoints.push(point);
          }
        }
        if (failedPoints.length === 0) {
          message = '<strong>Success!</strong> Your line is going through all of the x\'s!';
        } else {
          message = 'Nice try, but your line isn\'t going through all of the x\'s.';
        }
        canvas.alert(message, failedPoints.length === 0);
        if (failedPoints.length === 0) {
          return App.currentProgress.challengeComplete('variables', 'challenge1');
        }
      }), 200);
    });
  };

  initVariablesChallenge2 = function(page) {
    var c, canvas, challenge, editor, i, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = (function() {
      var j, results;
      results = [];
      for (i = j = 0; j < 9; i = ++j) {
        c = 255 - (i * 25);
        results.push(new Test.Point({
          x: 62 + (25 * i),
          y: 100,
          colors: [c, c, c],
          canvas: canvas
        }));
      }
      return results;
    })();
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        var failedPoints, j, len, message, point, successfulPoints;
        successfulPoints = [];
        failedPoints = [];
        for (j = 0, len = points.length; j < len; j++) {
          point = points[j];
          if (point.test() > 0) {
            point.display();
            successfulPoints.push(point);
          } else {
            failedPoints.push(point);
          }
        }
        if (failedPoints.length === 0) {
          message = '<strong>Success!</strong> You\'ve created a grayscale pattern through all of the x\'s!';
        } else {
          message = 'Nice try, but your rectangles aren\'t going the x\'s while also moving from white to black.';
        }
        canvas.alert(message, failedPoints.length === 0);
        if (failedPoints.length === 0) {
          return App.currentProgress.challengeComplete('variables', 'challenge2');
        }
      }), 200);
    });
  };

  $(document).on('turbolinks:load', initVariablesChallenges);

}).call(this);

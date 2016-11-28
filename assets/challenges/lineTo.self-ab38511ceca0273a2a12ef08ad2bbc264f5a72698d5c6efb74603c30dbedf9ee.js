(function() {
  var initLineToChallenge1, initLineToChallenge2, initLineToChallenge3, initLineToChallenges, pointsMessage;

  initLineToChallenges = function() {
    initLineToChallenge1();
    initLineToChallenge2();
    return initLineToChallenge3();
  };

  pointsMessage = function(canvas, points) {
    var badPoints, failedPoints, i, len, message, point, successfulPoints;
    successfulPoints = [];
    failedPoints = [];
    badPoints = [];
    for (i = 0, len = points.length; i < len; i++) {
      point = points[i];
      if (point.test() > 0) {
        point.display();
        successfulPoints.push(point);
      } else {
        if (point.badPoint) {
          badPoints.push(point);
        } else {
          failedPoints.push(point);
        }
      }
    }
    if (failedPoints.length > 0 || badPoints.length > 0) {
      message = 'Nice try, but ';
      if (failedPoints.length > 0) {
        message += "you missed the x" + (failedPoints.length > 1 ? '\'s' : '') + " at ";
        message += ((function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = failedPoints.length; j < len1; j++) {
            point = failedPoints[j];
            results.push("(" + point.x + ", " + point.y + ")");
          }
          return results;
        })()).join(', ');
        if (badPoints.length > 0) {
          message += ' and ';
        }
      }
      if (badPoints.length > 0) {
        message += "your line is going through the x" + (failedPoints.length > 1 ? '\'s' : '') + " at ";
        message += ((function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = badPoints.length; j < len1; j++) {
            point = badPoints[j];
            results.push("(" + point.x + ", " + point.y + ")");
          }
          return results;
        })()).join(', ');
      }
    } else {
      message = '<strong>Success!</strong> Your line is going through all of the good X\'s!';
    }
    return canvas.alert(message, failedPoints.length === 0 && badPoints.length === 0);
  };

  initLineToChallenge1 = function() {
    var canvas, editor, points;
    canvas = new App.Canvas($('#line_to #challenge1 canvas'));
    editor = new App.Editor($('#line_to #challenge1 .editor'), canvas);
    points = [
      new Test.Point({
        x: 55,
        y: 226,
        canvas: canvas
      }), new Test.Point({
        x: 105,
        y: 153,
        canvas: canvas
      }), new Test.Point({
        x: 155,
        y: 80,
        canvas: canvas
      })
    ];
    return $('#line_to #challenge1 .run').click(function() {
      return setTimeout((function() {}), 200);
    });
  };

  initLineToChallenge2 = function() {
    var canvas, editor, points;
    canvas = new App.Canvas($('#line_to #challenge2 canvas'));
    editor = new App.Editor($('#line_to #challenge2 .editor'), canvas);
    points = [
      new Test.Point({
        x: 100,
        y: 50,
        canvas: canvas
      }), new Test.Point({
        x: 100,
        y: 250,
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 250,
        canvas: canvas
      })
    ];
    return $('#line_to #challenge2 .run').click(function() {
      return setTimeout((function() {
        return pointsMessage(canvas, points);
      }), 200);
    });
  };

  initLineToChallenge3 = function() {
    var canvas, editor, points;
    canvas = new App.Canvas($('#line_to #challenge3 canvas'));
    editor = new App.Editor($('#line_to #challenge3 .editor'), canvas);
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
        x: 200,
        y: 100,
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 200,
        canvas: canvas
      }), new Test.Point({
        x: 150,
        y: 100,
        canvas: canvas,
        badPoint: true
      }), new Test.Point({
        x: 150,
        y: 150,
        canvas: canvas,
        badPoint: true
      }), new Test.Point({
        x: 150,
        y: 200,
        canvas: canvas,
        badPoint: true
      })
    ];
    return $('#line_to #challenge3 .run').click(function() {
      return setTimeout((function() {
        return pointsMessage(canvas, points);
      }), 200);
    });
  };

  $(document).on('turbolinks:load', initLineToChallenges);

}).call(this);

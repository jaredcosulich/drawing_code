(function() {
  var initLineToChallenge1, initLineToChallenge2, initLineToChallenge3, initLineToChallenges, pointsMessage;

  initLineToChallenges = function() {
    var page;
    if ((page = $('#line_to')).length > 0) {
      initLineToChallenge1(page);
      initLineToChallenge2(page);
      return initLineToChallenge3(page);
    }
  };

  pointsMessage = function(canvas, points, bad) {
    var badPoints, failedPoints, i, len, message, point, successfulPoints;
    if (bad == null) {
      bad = false;
    }
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
      message = '<strong>Success!</strong> Your line is going through all of the ';
      if (bad) {
        message += 'good ';
      }
      message += 'X\'s!';
    }
    return canvas.alert(message, failedPoints.length === 0 && badPoints.length === 0);
  };

  initLineToChallenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
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
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return pointsMessage(canvas, points);
      }), 200);
    });
  };

  initLineToChallenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
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
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return pointsMessage(canvas, points);
      }), 200);
    });
  };

  initLineToChallenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
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
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return pointsMessage(canvas, points, true);
      }), 200);
    });
  };

  $(document).on('turbolinks:load', initLineToChallenges);

}).call(this);

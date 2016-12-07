(function() {
  var initBasicCityscapeStage2Challenge1, initBasicCityscapeStage2Challenge2, initBasicCityscapeStage2Challenge3, initBasicCityscapeStage2Challenge4, initBasicCityscapeStage2Challenges;

  initBasicCityscapeStage2Challenges = function() {
    var page;
    if ((page = $('#basic_cityscape_stage2')).length > 0) {
      initBasicCityscapeStage2Challenge1(page);
      initBasicCityscapeStage2Challenge2(page);
      initBasicCityscapeStage2Challenge3(page);
      return initBasicCityscapeStage2Challenge4(page);
    }
  };

  initBasicCityscapeStage2Challenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 40,
        y: 240,
        canvas: canvas
      }), new Test.Point({
        x: 360,
        y: 80,
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
        if (success) {
          message = '<strong>Success!</strong> Your building is sitting on the x!';
          App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a building sitting on the lower left x and covering the top right x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initBasicCityscapeStage2Challenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 120,
        y: 280,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 256,
        y: 112,
        colors: [153, 153, 153],
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
        if (success) {
          message = '<strong>Success!</strong> Your gray building is sitting on the x!';
          App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge2');
        } else {
          message = 'Nice try, but you need to draw a gray building sitting on the x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initBasicCityscapeStage2Challenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 50,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 186,
        y: 100,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 304,
        y: 4,
        colors: [153, 153, 153],
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
        if (success) {
          message = '<strong>Success!</strong> Your gray building is covering on the x\'s!';
          App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge3');
        } else {
          message = 'Nice try, but you need to draw a gray building covering the x\'s.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initBasicCityscapeStage2Challenge4 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 40,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 240,
        y: 196,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 280,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 448,
        y: 52,
        colors: [153, 153, 153],
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
        if (success) {
          message = '<strong>Success!</strong> Your gray building is covering on the x\'s!';
          App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge4');
        } else {
          message = 'Nice try, but you need to draw a gray building covering the x\'s.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage2Challenges);

}).call(this);

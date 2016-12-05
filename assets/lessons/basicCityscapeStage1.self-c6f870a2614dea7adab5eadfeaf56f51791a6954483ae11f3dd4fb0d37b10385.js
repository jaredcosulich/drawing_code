(function() {
  var initBasicCityscapeStage1Challenge1, initBasicCityscapeStage1Challenge2, initBasicCityscapeStage1Challenge3, initBasicCityscapeStage1Challenge4, initBasicCityscapeStage1Challenges;

  initBasicCityscapeStage1Challenges = function() {
    var page;
    if ((page = $('#basic_cityscape_stage1')).length > 0) {
      initBasicCityscapeStage1Challenge1(page);
      initBasicCityscapeStage1Challenge2(page);
      initBasicCityscapeStage1Challenge3(page);
      return initBasicCityscapeStage1Challenge4(page);
    }
  };

  initBasicCityscapeStage1Challenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 40,
        y: 240,
        colors: [0, 0, 0],
        canvas: canvas
      }), new Test.Point({
        x: 360,
        y: 80,
        colors: [0, 0, 0],
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
          message = '<strong>Success!</strong> Your black building is sitting on the x!';
          App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a black building sitting on the x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initBasicCityscapeStage1Challenge2 = function(page) {
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
          App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a gray building sitting on the x.';
        }
        canvas.alert(message, success);
        if (success) {
          return App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge2');
        }
      }), 200);
    });
  };

  initBasicCityscapeStage1Challenge3 = function(page) {
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
          return App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge3');
        }
      }), 200);
    });
  };

  initBasicCityscapeStage1Challenge4 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge4');
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
          return App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge4');
        }
      }), 200);
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage1Challenges);

}).call(this);

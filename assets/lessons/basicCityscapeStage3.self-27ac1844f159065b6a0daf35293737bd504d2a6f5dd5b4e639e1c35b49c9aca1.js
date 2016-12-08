(function() {
  var initBasicCityscapeStage3Challenge1, initBasicCityscapeStage3Challenge2, initBasicCityscapeStage3Challenge3, initBasicCityscapeStage3Challenges;

  initBasicCityscapeStage3Challenges = function() {
    var page;
    if ((page = $('#basic_cityscape_stage3')).length > 0) {
      initBasicCityscapeStage3Challenge1(page);
      initBasicCityscapeStage3Challenge2(page);
      return initBasicCityscapeStage3Challenge3(page);
    }
  };

  initBasicCityscapeStage3Challenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 100,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 204,
        y: 100,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 112,
        y: 112,
        colors: [102, 102, 102],
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
          message = '<strong>Success!</strong> Your building is sitting on the black x and your window is covering the red x!';
          App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge1');
        } else if (points[0].test() === 1 && points[1].test() === 1) {
          success = false;
          message = 'Nice try, but you need to draw a window covering the red x.';
        } else {
          message = 'Nice try, but you need to draw a building sitting on the black lower left x and covering the black top right x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initBasicCityscapeStage3Challenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 50,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 250,
        y: 164,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 62,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 78,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 94,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 110,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 126,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 142,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 158,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 174,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 190,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 206,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 222,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 238,
        y: 176,
        colors: [102, 102, 102],
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
          message = '<strong>Success!</strong> Your building is sitting on the black x and your windows are covering the red x\'s!';
          App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge2');
        } else if (points[0].test() === 1 && points[1].test() === 1) {
          success = false;
          message = 'Nice try, but you need to draw windows covering the red x\'s.';
        } else {
          message = 'Nice try, but you need to draw a building sitting on the black lower left x and covering the black top right x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  initBasicCityscapeStage3Challenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 80,
        y: 300,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 200,
        y: 132,
        colors: [153, 153, 153],
        canvas: canvas
      }), new Test.Point({
        x: 92,
        y: 144,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 108,
        y: 160,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 124,
        y: 176,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 140,
        y: 192,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 156,
        y: 208,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 172,
        y: 224,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 188,
        y: 240,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 92,
        y: 256,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 108,
        y: 272,
        colors: [102, 102, 102],
        canvas: canvas
      }), new Test.Point({
        x: 124,
        y: 288,
        colors: [102, 102, 102],
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
          message = '<strong>Success!</strong> Your building is sitting on the black x and your windows are covering the red x\'s!';
          App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge3');
        } else if (points[0].test() === 1 && points[1].test() === 1) {
          success = false;
          message = 'Nice try, but you need to draw windows covering the red x\'s.';
        } else {
          message = 'Nice try, but you need to draw a building sitting on the black lower left x and covering the black top right x.';
        }
        return canvas.alert(message, success);
      }), 200);
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage3Challenges);

}).call(this);

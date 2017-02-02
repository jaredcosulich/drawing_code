(function() {
  var initBasicCityscapeStage2Challenge1, initBasicCityscapeStage2Challenge2, initBasicCityscapeStage2Challenge3, initBasicCityscapeStage2Challenges;

  initBasicCityscapeStage2Challenges = function() {
    var page;
    if ((page = $('#granular_basic_cityscape_stage2')).length > 0) {
      initBasicCityscapeStage2Challenge1(page);
      initBasicCityscapeStage2Challenge2(page);
      return initBasicCityscapeStage2Challenge3(page);
    }
  };

  initBasicCityscapeStage2Challenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding;
      drawBuilding = function(leftX, groundY, units, floors) {
        var height, width;
        context.save();
        width = units * 16 + 4 * 2;
        height = floors * 16 + 4 * 2;
        context.translate(leftX, groundY - height);
        context.fillStyle = '#999999';
        context.fillRect(0, 0, width, height);
        context.save();
        context.fillStyle = '#666666';
        context.translate(4, 4);
        context.translate(4, 4);
        context.fillRect(0, 0, 8, 10);
        context.restore();
        context.restore();
      };
      return drawBuilding(100, 300, 6, 12);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your building now has a window in the correct location!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage2', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a building with a window in the right position. Check to make sure your window is postioned to account for both the building padding and the office padding.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage2Challenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding;
      drawBuilding = function(leftX, groundY, units, floors) {
        var height, i, width;
        context.save();
        width = units * 16 + 4 * 2;
        height = floors * 16 + 4 * 2;
        context.translate(leftX, groundY - height);
        context.fillStyle = '#999999';
        context.fillRect(0, 0, width, height);
        context.save();
        context.fillStyle = '#666666';
        context.translate(4, 4);
        context.translate(4, 4);
        i = 0;
        while (i < units) {
          context.fillRect(0, 0, 8, 10);
          context.translate(16, 0);
          ++i;
        }
        context.restore();
        context.restore();
      };
      return drawBuilding(50, 300, 12, 8);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your building has a row of windows in the correct positions!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage2', 'challenge2');
        } else {
          message = 'Nice try, but you need to draw a building with the right dimensions and a row of windows in the correct positions.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage2Challenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding;
      drawBuilding = function(leftX, groundY, units, floors) {
        var height, i, j, width;
        context.save();
        width = units * 16 + 4 * 2;
        height = floors * 16 + 4 * 2;
        context.translate(leftX, groundY - height);
        context.fillStyle = '#999999';
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(4, 4);
        context.fillStyle = '#666666';
        j = 0;
        while (j < floors) {
          context.save();
          context.translate(4, 4);
          i = 0;
          while (i < units) {
            context.fillRect(0, 0, 8, 10);
            context.translate(16, 0);
            ++i;
          }
          context.restore();
          context.translate(0, 16);
          ++j;
        }
        context.restore();
        context.restore();
      };
      return drawBuilding(80, 300, 7, 10);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your building has a row of windows on each floor!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage2', 'challenge3');
        } else {
          message = 'Nice try, but you need to draw a building with a row of windows on each floor.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage2Challenges);

}).call(this);

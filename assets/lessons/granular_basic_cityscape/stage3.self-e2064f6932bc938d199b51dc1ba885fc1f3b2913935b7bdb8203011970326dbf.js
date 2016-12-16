(function() {
  var initBasicCityscapeStage3Challenge1, initBasicCityscapeStage3Challenge2, initBasicCityscapeStage3Challenge3, initBasicCityscapeStage3Challenge4, initBasicCityscapeStage3Challenges, stage1Solution, stage2Solution;

  initBasicCityscapeStage3Challenges = function() {
    var page;
    if ((page = $('#granular_basic_cityscape_stage3')).length > 0) {
      initBasicCityscapeStage3Challenge1(page);
      initBasicCityscapeStage3Challenge2(page);
      initBasicCityscapeStage3Challenge3(page);
      return initBasicCityscapeStage3Challenge4(page);
    }
  };

  initBasicCityscapeStage3Challenge1 = function(page) {
    var canvas, challenge, editor, testImage;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testImage = new Test.ImageComparison({
      image: challenge.find('.test-image'),
      canvas: canvas,
      preview: true
    });
    return challenge.find('.run').click(function() {
      return testImage.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve create three buildings with three different window types!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge1');
        } else {
          message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with three different window types shown in the challenge.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage3Challenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {};
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve create three buildings with three different window types and roof types!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge2');
        } else {
          message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with different window and roof types shown in the challenge.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage3Challenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge3');
      });
    });
  };

  initBasicCityscapeStage3Challenge4 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage3Challenges);

  stage1Solution = function(canvas, context) {
    var drawBuilding, drawWindow;
    drawBuilding = function(leftX, groundY, units, floors, windowType) {
      var floorDimension, height, i, j, unitDimension, width;
      context.save();
      unitDimension = 16;
      floorDimension = 16;
      width = units * unitDimension + 4 * 2;
      height = floors * floorDimension + 4 * 2;
      context.translate(leftX, groundY - height);
      context.fillStyle = '#999999';
      context.fillRect(0, 0, width, height);
      context.translate(4, 4);
      i = 0;
      while (i < floors) {
        context.save();
        j = 0;
        while (j < units) {
          drawWindow(windowType);
          context.translate(16, 0);
          ++j;
        }
        context.restore();
        context.translate(0, 16);
        ++i;
      }
      context.restore();
    };
    drawWindow = function(windowType) {
      context.fillStyle = '#666666';
      switch (windowType) {
        case 0:
          context.fillRect(4, 4, 8, 10);
          break;
        case 1:
          context.fillRect(2, 3, 5, 8);
          context.fillRect(9, 3, 5, 8);
          break;
        case 2:
          context.fillRect(0, 3, 16, 8);
          break;
        case 3:
          context.fillRect(5, 1, 6, 14);
      }
    };
    drawBuilding(20, 320, 6, 10, 1);
    drawBuilding(136, 320, 10, 6, 2);
    return drawBuilding(316, 320, 5, 14, 3);
  };

  stage2Solution = function(canvas, context) {
    var drawBuilding, drawRoof, drawWindow;
    drawBuilding = function(leftX, groundY, units, floors, windowType, roofType) {
      var floorDimension, height, i, j, unitDimension, width;
      context.save();
      unitDimension = 16;
      floorDimension = 16;
      width = units * unitDimension + 4 * 2;
      height = floors * floorDimension + 4 * 2;
      context.translate(leftX, groundY - height);
      context.fillStyle = '#999999';
      context.fillRect(0, 0, width, height);
      context.save();
      context.translate(4, 4);
      i = 0;
      while (i < floors) {
        context.save();
        j = 0;
        while (j < units) {
          drawWindow(windowType);
          context.translate(16, 0);
          ++j;
        }
        context.restore();
        context.translate(0, 16);
        ++i;
      }
      context.restore();
      drawRoof(roofType, width);
      context.restore();
    };
    drawWindow = function(windowType) {
      context.save();
      context.fillStyle = '#666666';
      switch (windowType) {
        case 0:
          context.fillRect(4, 4, 8, 10);
          break;
        case 1:
          context.fillRect(2, 3, 5, 8);
          context.fillRect(9, 3, 5, 8);
          break;
        case 2:
          context.fillRect(0, 3, 16, 8);
          break;
        case 3:
          context.fillRect(5, 1, 6, 14);
      }
      context.restore();
    };
    drawRoof = function(roofType, width) {
      context.save();
      switch (roofType) {
        case 1:
          context.fillRect(8, -16, width - 16, 16);
          break;
        case 2:
          context.save();
          context.translate(8, -24);
          context.fillRect(0, 0, width - 16, 24);
          context.translate(-8 + width / 2 - (32 / 2), -24);
          context.fillRect(0, 0, 32, 24);
          context.translate(32 / 2 - (8 / 2), -32);
          context.fillRect(0, 0, 8, 32);
          context.restore();
          break;
        case 3:
          context.save();
          context.translate(width / 2 - (64 / 2), -16);
          context.fillRect(0, 0, 64, 16);
          context.translate(64 / 2 - (32 / 2), 0);
          context.beginPath();
          context.moveTo(0, 0);
          context.lineTo(32 / 2, -64);
          context.lineTo(32, 0);
          context.closePath();
          context.fill();
          context.restore();
      }
      context.restore();
    };
    drawBuilding(20, 320, 6, 10, 1, 2);
    drawBuilding(136, 320, 10, 6, 2, 1);
    return drawBuilding(316, 320, 5, 14, 3, 3);
  };

}).call(this);

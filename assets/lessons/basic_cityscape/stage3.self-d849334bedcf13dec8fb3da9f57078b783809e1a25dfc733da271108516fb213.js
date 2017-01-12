(function() {
  var initBasicCityscapeStage3Challenge1, initBasicCityscapeStage3Challenge2, initBasicCityscapeStage3Challenge3, initBasicCityscapeStage3Challenge4, initBasicCityscapeStage3Challenges;

  initBasicCityscapeStage3Challenges = function() {
    var page;
    if ((page = $('#basic_cityscape_stage3')).length > 0) {
      initBasicCityscapeStage3Challenge1(page);
      initBasicCityscapeStage3Challenge2(page);
      initBasicCityscapeStage3Challenge3(page);
      return initBasicCityscapeStage3Challenge4(page);
    }
  };

  initBasicCityscapeStage3Challenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding, drawWindow;
      drawWindow = function(windowType) {
        switch (windowType) {
          case 0:
            context.fillRect(4, 2, 8, 10);
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
      drawBuilding = function(leftX, groundY, units, floors, windowType) {
        var h, i, j, w, x, y;
        w = 8 + 16 * units;
        h = 8 + 16 * floors;
        x = leftX;
        y = groundY - h;
        context.save();
        context.translate(x, y);
        context.fillStyle = '#999999';
        context.fillRect(0, 0, w, h);
        context.translate(4, 4);
        context.fillStyle = '#666666';
        j = 0;
        while (j < floors) {
          context.save();
          i = 0;
          while (i < units) {
            drawWindow(windowType);
            context.translate(16, 0);
            i += 1;
          }
          context.restore();
          context.translate(0, 16);
          j += 1;
        }
        context.restore();
      };
      drawBuilding(20, 320, 6, 10, 1);
      drawBuilding(136, 320, 10, 6, 2);
      return drawBuilding(316, 320, 5, 14, 3);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You used a switch statement to draw three different types of windows on the three buildings!';
          App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge1');
        } else {
          message = 'Nice try, but you need to use a switch statement to draw three different types of windows on the three buildings.';
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
    solution = function(canvas, context) {
      var drawBuilding, drawRoof, drawWindow;
      drawWindow = function(windowType) {
        switch (windowType) {
          case 0:
            context.fillRect(4, 2, 8, 10);
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
      drawRoof = function(w, roofType) {
        context.save();
        switch (roofType) {
          case 1:
            context.translate(w / 2, -16);
            context.fillRect(-(w - 16) / 2, 0, w - 16, 16);
            break;
          case 2:
            context.translate(w / 2, -80);
            context.fillRect(-4, 0, 8, 32);
            context.fillRect(-16, 32, 32, 24);
            context.fillRect(-(w - 16) / 2, 56, w - 16, 24);
            break;
          case 3:
            context.translate(w / 2, -80);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(16, 64);
            context.lineTo(-16, 64);
            context.closePath();
            context.fill();
            context.fillRect(-32, 64, 64, 16);
        }
        context.restore();
      };
      drawBuilding = function(leftX, groundY, units, floors, windowType, roofType) {
        var h, i, j, w, x, y;
        w = 8 + 16 * units;
        h = 8 + 16 * floors;
        x = leftX;
        y = groundY - h;
        context.save();
        context.translate(x, y);
        context.fillStyle = '#999999';
        context.fillRect(0, 0, w, h);
        drawRoof(w, roofType);
        context.translate(4, 4);
        context.fillStyle = '#666666';
        j = 0;
        while (j < floors) {
          context.save();
          i = 0;
          while (i < units) {
            drawWindow(windowType);
            context.translate(16, 0);
            i += 1;
          }
          context.restore();
          context.translate(0, 16);
          j += 1;
        }
        context.restore();
      };
      drawBuilding(20, 320, 6, 10, 1, 2);
      drawBuilding(136, 320, 10, 6, 2, 1);
      return drawBuilding(316, 320, 5, 14, 3, 3);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You used switch statements to draw different types of windows and roofs on the three buildings!';
          App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge2');
        } else {
          message = 'Nice try, but you need to use switch statements to draw different types of windows and roofs on the three buildings.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage3Challenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge3');
      });
    });
  };

  initBasicCityscapeStage3Challenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage3Challenges);

}).call(this);

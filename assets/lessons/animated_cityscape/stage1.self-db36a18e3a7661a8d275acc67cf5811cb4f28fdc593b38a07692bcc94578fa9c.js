(function() {
  var initAnimatedCityscapeStage1Challenge1, initAnimatedCityscapeStage1Challenge2, initAnimatedCityscapeStage1Challenge3, initAnimatedCityscapeStage1Challenge4, initAnimatedCityscapeStage1Challenge5, initAnimatedCityscapeStage1Challenge6, initAnimatedCityscapeStage1Challenges;

  initAnimatedCityscapeStage1Challenges = function() {
    var page;
    if ((page = $('#animated_cityscape_stage1')).length > 0) {
      initAnimatedCityscapeStage1Challenge1(page);
      initAnimatedCityscapeStage1Challenge2(page);
      initAnimatedCityscapeStage1Challenge3(page);
      initAnimatedCityscapeStage1Challenge4(page);
      initAnimatedCityscapeStage1Challenge5(page);
      return initAnimatedCityscapeStage1Challenge6(page);
    }
  };

  initAnimatedCityscapeStage1Challenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawSky, horizonY;
      drawSky = function() {
        var gradient;
        gradient = context.createLinearGradient(0, horizonY, 0, horizonY - 300);
        gradient.addColorStop(0, 'rgb(255, 85, 85)');
        gradient.addColorStop(0.3, 'rgb(102, 119, 153)');
        gradient.addColorStop(1, 'rgb(68, 85, 119)');
        context.save();
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, horizonY);
        context.restore();
      };
      horizonY = canvas.height - 100;
      return drawSky();
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You created the linear gradient and drew the sky correctly!';
          App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge1');
        } else {
          message = 'Nice try, but you need to create the linear gradient and draw the sky correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initAnimatedCityscapeStage1Challenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawGround, horizonY, rgbColor, time;
      rgbColor = function(r, g, b) {
        return 'rgb(' + Math.round(r) + ', ' + Math.round(g) + ', ' + Math.round(b) + ')';
      };
      drawGround = function(y) {
        var c;
        if (time < 5) {
          c = 204;
        } else if (time > 7) {
          c = 102;
        } else {
          c = 204 - 102 * (time - 5) / 2;
        }
        context.save();
        context.fillStyle = rgbColor(c, c, c);
        context.fillRect(0, horizonY, 72, 100);
        context.restore();
      };
      horizonY = canvas.height - 100;
      context.save();
      time = 5.0;
      drawGround();
      context.translate(72, 0);
      time = 5.5;
      drawGround();
      context.translate(72, 0);
      time = 6.0;
      drawGround();
      context.translate(72, 0);
      time = 6.5;
      drawGround();
      context.translate(72, 0);
      time = 7.0;
      drawGround();
      context.translate(72, 0);
      return context.restore();
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You calculated the ground color and drew the ground correctly for each time!';
          App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge2');
        } else {
          message = 'Nice try, but you need to calcuate the ground color and draw the ground correctly for each time.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initAnimatedCityscapeStage1Challenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawGround, drawOffices, floors, h, units, w, x, y;
      drawOffices = function(x, y, units, floors) {
        var i, j;
        context.save();
        context.translate(x, y);
        context.strokeStyle = 'Black';
        i = 0;
        while (i < floors) {
          j = 0;
          while (j < units) {
            context.strokeRect(4 + 16 * j, 4 + 16 * i, 16, 16);
            j += 1;
          }
          i += 1;
        }
        context.restore();
      };
      drawGround = function(y) {
        context.save();
        context.fillStyle = 'Black';
        context.fillRect(0, y, canvas.width, 2);
        context.restore();
      };
      x = 120;
      y = 80;
      units = 8;
      floors = 10;
      w = 8 + 16 * units;
      h = 8 + 16 * floors;
      context.fillStyle = '#999999';
      context.fillRect(x, y, w, h);
      drawOffices(x, y, units, floors);
      return drawGround(y + h);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You drew the gray building with the correct size and position, and positioned the ground beneath it!';
          App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge3');
        } else {
          message = 'Nice try, but you need to draw the gray building with the correct size and position, and position the ground beneath it.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initAnimatedCityscapeStage1Challenge4 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding;
      drawBuilding = function(x, y, units, floors) {
        var h, w;
        w = 8 + 16 * units;
        h = 8 + 16 * floors;
        context.fillStyle = '#999999';
        context.fillRect(x, y, w, h);
      };
      drawBuilding(60, 20, 8, 10);
      return drawBuilding(210, 20, 6, 16);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You defined and used a function to draw both buildings with the correct size and position!';
          App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge4');
        } else {
          message = 'Nice try, but you need to define and then use a function to draw two buildings with the correct size and position.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initAnimatedCityscapeStage1Challenge5 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding, drawGround;
      drawBuilding = function(leftX, groundY, units, floors) {
        var h, w, x, y;
        w = 8 + 16 * units;
        h = 8 + 16 * floors;
        x = leftX;
        y = groundY - h;
        context.fillStyle = '#999999';
        context.fillRect(x, y, w, h);
      };
      drawGround = function(y) {
        context.save();
        context.fillStyle = 'Black';
        context.fillRect(0, y, canvas.width, 2);
        context.restore();
      };
      drawBuilding(20, 280, 12, 8);
      drawBuilding(230, 280, 9, 15);
      return drawGround(280);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You defined and used a function to draw both buildings anchored to the ground at the correct position!';
          App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge5');
        } else {
          message = 'Nice try, but you need to define and then use a function to draw two buildings anchored to the ground at the correct position.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initAnimatedCityscapeStage1Challenge6 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge6');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawBuilding, drawGround;
      drawBuilding = function(leftX, groundY, units, floors) {
        var h, w, x, y;
        w = 8 + 16 * units;
        h = 8 + 16 * floors;
        x = leftX;
        y = groundY - h;
        context.save();
        context.translate(x, y);
        context.fillStyle = '#999999';
        context.fillRect(0, 0, w, h);
        context.restore();
      };
      drawGround = function(y) {
        context.save();
        context.fillStyle = 'Black';
        context.fillRect(0, y, canvas.width, 2);
        context.restore();
      };
      drawBuilding(20, 290, 10, 16);
      drawBuilding(200, 290, 12, 10);
      return drawGround(290);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You positioned both buildings by translating the origin of the coordinate system!';
          App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge6');
        } else {
          message = 'Nice try, but you need to position the two buildings by translating the origin of the coordinate system.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initAnimatedCityscapeStage1Challenges);

}).call(this);

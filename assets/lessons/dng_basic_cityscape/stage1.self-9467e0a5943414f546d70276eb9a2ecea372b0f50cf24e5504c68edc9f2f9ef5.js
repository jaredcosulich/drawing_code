(function() {
  var initDngBasicCityscapeStage1Challenge1, initDngBasicCityscapeStage1Challenge2, initDngBasicCityscapeStage1Challenge3, initDngBasicCityscapeStage1Challenge4, initDngBasicCityscapeStage1Challenge5, initDngBasicCityscapeStage1Challenge6, initDngBasicCityscapeStage1Challenges;

  initDngBasicCityscapeStage1Challenges = function() {
    var page;
    if ((page = $('#dng_basic_cityscape_stage1')).length > 0) {
      initDngBasicCityscapeStage1Challenge1(page);
      initDngBasicCityscapeStage1Challenge2(page);
      initDngBasicCityscapeStage1Challenge3(page);
      initDngBasicCityscapeStage1Challenge4(page);
      initDngBasicCityscapeStage1Challenge5(page);
      return initDngBasicCityscapeStage1Challenge6(page);
    }
  };

  initDngBasicCityscapeStage1Challenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawGround;
      drawGround = function(y) {
        context.save();
        context.fillStyle = 'Black';
        context.fillRect(0, y, canvas.width, 2);
        context.restore();
      };
      context.fillStyle = 'Black';
      context.fillRect(40, 80, 320, 160);
      return drawGround(240);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You drew the building and positioned the ground correctly!';
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw the building and then figure out where to draw the ground correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage1Challenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawGround, h, w, x, y;
      drawGround = function(y) {
        context.save();
        context.fillStyle = 'Black';
        context.fillRect(0, y, canvas.width, 2);
        context.restore();
      };
      x = 100;
      y = 40;
      w = 150;
      h = 240;
      context.fillStyle = '#999999';
      context.fillRect(x, y, w, h);
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
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge2');
        } else {
          message = 'Nice try, but you need to draw the gray building with the correct size and position, and position the ground beneath it.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage1Challenge3 = function(page) {
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
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge3');
        } else {
          message = 'Nice try, but you need to draw the gray building with the correct size and position, and position the ground beneath it.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage1Challenge4 = function(page) {
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
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge4');
        } else {
          message = 'Nice try, but you need to define and then use a function to draw two buildings with the correct size and position.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage1Challenge5 = function(page) {
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
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge5');
        } else {
          message = 'Nice try, but you need to define and then use a function to draw two buildings anchored to the ground at the correct position.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage1Challenge6 = function(page) {
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
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge6');
        } else {
          message = 'Nice try, but you need to position the two buildings by translating the origin of the coordinate system.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngBasicCityscapeStage1Challenges);

}).call(this);

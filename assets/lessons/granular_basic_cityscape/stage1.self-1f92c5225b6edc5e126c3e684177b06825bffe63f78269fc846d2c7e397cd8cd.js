(function() {
  var challenge6Solution, challenge7Solution, challenge8Solution, initBasicCityscapeStage1Challenge1, initBasicCityscapeStage1Challenge2, initBasicCityscapeStage1Challenge3, initBasicCityscapeStage1Challenge4, initBasicCityscapeStage1Challenge5, initBasicCityscapeStage1Challenge6, initBasicCityscapeStage1Challenge7, initBasicCityscapeStage1Challenge8, initBasicCityscapeStage1Challenges;

  initBasicCityscapeStage1Challenges = function() {
    var page;
    if ((page = $('#granular_basic_cityscape_stage1')).length > 0) {
      initBasicCityscapeStage1Challenge1(page);
      initBasicCityscapeStage1Challenge2(page);
      initBasicCityscapeStage1Challenge3(page);
      initBasicCityscapeStage1Challenge4(page);
      initBasicCityscapeStage1Challenge5(page);
      initBasicCityscapeStage1Challenge6(page);
      initBasicCityscapeStage1Challenge7(page);
      return initBasicCityscapeStage1Challenge8(page);
    }
  };

  initBasicCityscapeStage1Challenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      return context.fillRect(60, 90, 45, 45);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your rectangle is in the correct position and is the correct size!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge1');
        } else {
          message = 'Nice try, but you need to draw a rectangle in the correct position that is the correct size.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      return context.fillRect(0, 260, canvas.width, 5);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve drawn the ground at the right distance from the top!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge2');
        } else {
          message = 'Nice try, but you need to draw the ground the right distance from the top.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      return context.fillRect(40, 240 - 160, 320, 160);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your building is in the correct position!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge3');
        } else {
          message = 'Nice try, but you need to draw a building that is it the correct position (over the building shadow).';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge4 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = '#999999';
      return context.fillRect(60, 280 - 210, 90, 210);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your gray building is sitting on the x!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge4');
        } else {
          message = 'Nice try, but you need to draw a gray (#999999) building sitting on the x.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge5 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var ground, height, width, x, y;
      ground = 240;
      width = 200;
      height = 80;
      x = 60;
      y = ground - height;
      context.fillStyle = '#666666';
      return context.fillRect(x, y, width, height);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your gray building is the proper size and in the proper position!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge5');
        } else {
          message = 'Nice try, but you need to gray building (#666666) that is the proper size and in the proper position.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge6 = function(page) {
    var canvas, challenge, editor, testCode;
    challenge = page.find('#challenge6');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testCode = new Test.Code({
      code: challenge6Solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your gray building matches the description!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge6');
        } else {
          message = 'Nice try, but you need to draw a gray (#999999) building that is in the proper position and is the proper width and height.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge7 = function(page) {
    var canvas, challenge, editor, testCode;
    challenge = page.find('#challenge7');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testCode = new Test.Code({
      code: challenge7Solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve draw two buildings using a function!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge7');
        } else {
          message = 'Nice try, but you need to buildings of color #999999 that meet the description provided.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initBasicCityscapeStage1Challenge8 = function(page) {
    var canvas, challenge, editor, testCode;
    challenge = page.find('#challenge8');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testCode = new Test.Code({
      code: challenge8Solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve successfully used translate() to draw your buildings!';
          App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge8');
        } else {
          message = 'Nice try, but you need to draw the buildings as described.\nIf you don\'t see anything make sure you aren\'t translating\nand then drawing the rectangle without factoring in the translation.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage1Challenges);

  challenge6Solution = function(canvas, context) {
    var floors, ground, h, units, w, x, y;
    ground = 280;
    units = 8;
    floors = 10;
    w = units * 16 + 4 * 2;
    h = floors * 16 + 4 * 2;
    x = 120;
    y = ground - h;
    context.fillStyle = '#999999';
    return context.fillRect(x, y, w, h);
  };

  challenge7Solution = function(canvas, context) {
    var drawBuilding, ground;
    ground = 300;
    drawBuilding = function(leftX, groundY, units, floors) {
      var height, width;
      context.save();
      context.fillStyle = '#999999';
      width = units * 16 + 4 * 2;
      height = floors * 16 + 4 * 2;
      context.fillRect(leftX, groundY - height, width, height);
      context.restore();
    };
    drawBuilding(50, ground, 8, 12);
    return drawBuilding(200, ground, 6, 18);
  };

  challenge8Solution = function(canvas, context) {
    var drawBuilding;
    drawBuilding = function(leftX, groundY, units, floors) {
      var height, width;
      context.save();
      width = units * 16 + 4 * 2;
      height = floors * 16 + 4 * 2;
      context.translate(leftX, groundY - height);
      context.fillStyle = '#999999';
      context.fillRect(0, 0, width, height);
      return context.restore();
    };
    drawBuilding(40, 300, 12, 6);
    return drawBuilding(280, 300, 10, 15);
  };

}).call(this);

(function() {
  var initFlappySquareStage1Challenge1, initFlappySquareStage1Challenge2, initFlappySquareStage1Challenge3, initFlappySquareStage1Challenge4, initFlappySquareStage1Challenge5, initFlappySquareStage1Challenge6, initFlappySquareStage1Challenges;

  initFlappySquareStage1Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage1')).length > 0) {
      initFlappySquareStage1Challenge1(page);
      initFlappySquareStage1Challenge2(page);
      initFlappySquareStage1Challenge3(page);
      initFlappySquareStage1Challenge4(page);
      initFlappySquareStage1Challenge5(page);
      return initFlappySquareStage1Challenge6(page);
    }
  };

  initFlappySquareStage1Challenge1 = function(page) {
    var canvas, challenge, editor, index, solution, testCode;
    index = 1;
    challenge = page.find("#challenge" + index);
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
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge" + index);
        } else {
          message = 'Nice try, but you need to draw a rectangle in the correct position that is the correct size.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge2 = function(page) {
    var canvas, challenge, editor, index, solution, testCode;
    index = 2;
    challenge = page.find("#challenge" + index);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      return context.fillRect(50, 100, 20, 20);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve drawn a flappy square!';
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge" + index);
        } else {
          message = 'Nice try, but your square needs to be the correct width and height and in the position described.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge3 = function(page) {
    var canvas, challenge, editor, index, solution, testCode;
    index = 3;
    challenge = page.find("#challenge" + index);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      return context.fillRect(50, 150, 20, 20);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve drawn a flappy square using variables!';
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge" + index);
        } else {
          message = 'Nice try, but you need to set your variables properly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge4 = function(page) {
    var canvas, challenge, editor, index, solution, testCode;
    index = 4;
    challenge = page.find("#challenge" + index);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      return context.fillRect(50, 100, 20, 20);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve drawn a flappy square using a function!';
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge" + index);
        } else {
          message = 'Nice try, but you need to write code in the function to draw the flappy square.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge5 = function(page) {
    var canvas, challenge, editor, index, testSolution;
    index = 5;
    challenge = page.find("#challenge" + index);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testSolution = function(index) {
      var solution, testCode;
      solution = function(canvas, context) {
        return context.fillRect(50, 100 + (index * 10), 20, 20);
      };
      testCode = new Test.Code({
        code: solution,
        canvas: canvas
      });
      return testCode.test(function(success) {
        var message;
        if (success) {
          if (index < 5) {
            return testSolution(index + 1);
          } else {
            message = '<strong>Success!</strong> You\'re successfull animated a flappy square moving down at the correct pace!';
            App.currentProgress.challengeComplete('flappy_square_stage1', "challenge" + index);
            return canvas.alert(message, success);
          }
        } else {
          message = 'Nice try, but you need to animate a flappy square moving down at the correct pace.';
          return canvas.alert(message, success);
        }
      });
    };
    return challenge.find('.run').click(function() {
      return testSolution(1);
    });
  };

  initFlappySquareStage1Challenge6 = function(page) {
    var canvas, challenge, editor, index, solution, testSolution;
    index = 6;
    challenge = page.find("#challenge" + index);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context, startTime) {
      var frames, gravity, i, j, ref, y, yVelocity;
      frames = Math.floor((new Date() - startTime) / 25) + 2;
      y = 100;
      yVelocity = 0;
      gravity = 0.5;
      for (i = j = 0, ref = frames; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        yVelocity -= gravity;
        y -= yVelocity;
      }
      return context.fillRect(50, y, 20, 20);
    };
    testSolution = function(i) {
      var testCode;
      testCode = new Test.Code({
        code: solution,
        canvas: canvas
      });
      return testCode.test(function(success) {
        var message;
        if (success) {
          if (i < 3) {
            return testSolution(i + 1);
          } else {
            message = '<strong>Success!</strong> You\'re successfull animated a flappy square affected by gravity!';
            App.currentProgress.challengeComplete('flappy_square_stage1', "challenge" + index);
            return canvas.alert(message, success);
          }
        } else {
          message = 'Nice try, but you need to animate a flappy square being affected by gravity.';
          return canvas.alert(message, success);
        }
      });
    };
    return challenge.find('.run').click(function() {
      return testSolution(1);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage1Challenges);

}).call(this);

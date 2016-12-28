(function() {
  var initFlappySquareStage1Challenge1, initFlappySquareStage1Challenge2, initFlappySquareStage1Challenge3, initFlappySquareStage1Challenge4, initFlappySquareStage1Challenge5, initFlappySquareStage1Challenges;

  initFlappySquareStage1Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage1')).length > 0) {
      initFlappySquareStage1Challenge1(page);
      initFlappySquareStage1Challenge2(page);
      initFlappySquareStage1Challenge3(page);
      initFlappySquareStage1Challenge4(page);
      return initFlappySquareStage1Challenge5(page);
    }
  };

  initFlappySquareStage1Challenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
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
          App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge1');
        } else {
          message = 'Nice try, but your square needs to be the correct width and height and in the position described.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
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
          App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge2');
        } else {
          message = 'Nice try, but you need to set your variables properly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
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
          App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge3');
        } else {
          message = 'Nice try, but you need to write code in the function to draw the flappy square.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage1Challenge4 = function(page) {
    var canvas, challenge, editor, testSolution;
    challenge = page.find('#challenge4');
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
            App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge4');
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

  initFlappySquareStage1Challenge5 = function(page) {
    var canvas, challenge, editor, solution, testSolution;
    challenge = page.find('#challenge5');
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
    testSolution = function(index) {
      var testCode;
      testCode = new Test.Code({
        code: solution,
        canvas: canvas
      });
      return testCode.test(function(success) {
        var message;
        if (success) {
          if (index < 3) {
            return testSolution(index + 1);
          } else {
            message = '<strong>Success!</strong> You\'re successfull animated a flappy square affected by gravity!';
            App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge5');
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

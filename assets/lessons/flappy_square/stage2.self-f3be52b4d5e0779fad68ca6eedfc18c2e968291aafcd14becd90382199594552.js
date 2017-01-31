(function() {
  var initFlappySquareStage2Challenge1, initFlappySquareStage2Challenge2, initFlappySquareStage2Challenge3, initFlappySquareStage2Challenge4, initFlappySquareStage2Challenges;

  initFlappySquareStage2Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage2')).length > 0) {
      initFlappySquareStage2Challenge1(page);
      initFlappySquareStage2Challenge2(page);
      initFlappySquareStage2Challenge3(page);
      return initFlappySquareStage2Challenge4(page);
    }
  };

  initFlappySquareStage2Challenge1 = function(page) {
    var canvas, challenge, editor, index, solution, testCode;
    index = 1;
    challenge = page.find("#challenge" + index);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawWall;
      drawWall = function(x) {
        context.fillRect(x, 25, 50, 100);
        return context.fillRect(x, 200, 50, 100);
      };
      context.fillRect(50, 100, 20, 20);
      context.beginPath();
      context.moveTo(25, 25);
      context.lineTo(450, 25);
      context.lineTo(450, 300);
      context.lineTo(25, 300);
      context.closePath();
      context.stroke();
      drawWall(150);
      drawWall(275);
      return drawWall(400);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve drawn the flappy square game using functions and there are three walls properly placed!';
          App.currentProgress.challengeComplete('flappy_square_stage2', "challenge" + index);
        } else {
          message = 'Nice try, but your game should be using functions and produce three walls that are spaced every 125 pixels.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initFlappySquareStage2Challenge2 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 2;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage2', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  initFlappySquareStage2Challenge3 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 3;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage2', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  initFlappySquareStage2Challenge4 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 4;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage2', "challenge" + challengeIndex);
        });
      }), 1000);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage2Challenges);

}).call(this);

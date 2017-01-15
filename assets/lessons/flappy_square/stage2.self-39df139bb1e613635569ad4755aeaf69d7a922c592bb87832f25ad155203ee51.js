(function() {
  var initFlappySquareStage2Challenge1, initFlappySquareStage2Challenge2, initFlappySquareStage2Challenge3, initFlappySquareStage2Challenge4, initFlappySquareStage2Challenge5, initFlappySquareStage2Challenge6, initFlappySquareStage2Challenges;

  initFlappySquareStage2Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage2')).length > 0) {
      initFlappySquareStage2Challenge1(page);
      initFlappySquareStage2Challenge2(page);
      initFlappySquareStage2Challenge3(page);
      initFlappySquareStage2Challenge4(page);
      initFlappySquareStage2Challenge5(page);
      return initFlappySquareStage2Challenge6(page);
    }
  };

  initFlappySquareStage2Challenge1 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 1;
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
      }), 2000);
    });
  };

  initFlappySquareStage2Challenge5 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 5;
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

  initFlappySquareStage2Challenge6 = function(page) {
    var canvas, challenge, challengeIndex, checkMultipleTimes, editor, points, successCount;
    challengeIndex = 6;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [
      new Test.Point({
        x: 20,
        y: 35,
        badPoint: true,
        canvas: canvas
      }), new Test.Point({
        x: 455,
        y: 35,
        badPoint: true,
        canvas: canvas
      }), new Test.Point({
        x: 20,
        y: 290,
        badPoint: true,
        canvas: canvas
      }), new Test.Point({
        x: 455,
        y: 290,
        badPoint: true,
        canvas: canvas
      })
    ];
    successCount = 0;
    checkMultipleTimes = function(callback) {
      var i, len, point, success;
      success = true;
      for (i = 0, len = points.length; i < len; i++) {
        point = points[i];
        if (point.test() < 1) {
          success = false;
          callback(false);
          return;
        }
      }
      successCount += 1;
      if (successCount > 5) {
        return callback(true);
      } else {
        return setTimeout((function() {
          return checkMultipleTimes(callback);
        }), 200);
      }
    };
    return challenge.find('.run').click(function() {
      successCount = 0;
      return setTimeout((function() {
        return checkMultipleTimes(function(success) {
          var message;
          if (success) {
            message = '<strong>Success!</strong> You\'ve cleared the area outside of the boundary!';
            App.currentProgress.challengeComplete('flappy_square_stage2', "challenge" + challengeIndex);
          } else {
            message = 'Nice try, but you need to clear all areas outside of the boundary.';
          }
          return canvas.alert(message, success);
        });
      }), 200);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage2Challenges);

}).call(this);

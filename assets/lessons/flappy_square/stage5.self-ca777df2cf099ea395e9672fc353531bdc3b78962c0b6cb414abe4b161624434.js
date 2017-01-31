(function() {
  var initFlappySquareStage5Challenge1, initFlappySquareStage5Challenge2, initFlappySquareStage5Challenge3, initFlappySquareStage5Challenge4, initFlappySquareStage5Challenges;

  initFlappySquareStage5Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage5')).length > 0) {
      initFlappySquareStage5Challenge1(page);
      initFlappySquareStage5Challenge2(page);
      initFlappySquareStage5Challenge3(page);
      return initFlappySquareStage5Challenge4(page);
    }
  };

  initFlappySquareStage5Challenge1 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 1;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage5', "challenge" + challengeIndex);
        });
      }), 500);
    });
  };

  initFlappySquareStage5Challenge2 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 2;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage5', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  initFlappySquareStage5Challenge3 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 3;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage5', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  initFlappySquareStage5Challenge4 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 4;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage5', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage5Challenges);

}).call(this);

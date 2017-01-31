(function() {
  var initFlappySquareStage4Challenge1, initFlappySquareStage4Challenge2, initFlappySquareStage4Challenge3, initFlappySquareStage4Challenges;

  initFlappySquareStage4Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage4')).length > 0) {
      initFlappySquareStage4Challenge1(page);
      initFlappySquareStage4Challenge2(page);
      return initFlappySquareStage4Challenge3(page);
    }
  };

  initFlappySquareStage4Challenge1 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 1;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', "challenge" + challengeIndex);
        });
      }), 500);
    });
  };

  initFlappySquareStage4Challenge2 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 2;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  initFlappySquareStage4Challenge3 = function(page) {
    var canvas, challenge, challengeIndex, editor;
    challengeIndex = 3;
    challenge = page.find("#challenge" + challengeIndex);
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', "challenge" + challengeIndex);
        });
      }), 2000);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage4Challenges);

}).call(this);

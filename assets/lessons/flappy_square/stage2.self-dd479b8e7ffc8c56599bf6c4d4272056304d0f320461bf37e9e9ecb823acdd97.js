(function() {
  var initFlappySquareStage2Challenge1, initFlappySquareStage2Challenge2, initFlappySquareStage2Challenge3, initFlappySquareStage2Challenges;

  initFlappySquareStage2Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage2')).length > 0) {
      initFlappySquareStage2Challenge1(page);
      initFlappySquareStage2Challenge2(page);
      return initFlappySquareStage2Challenge3(page);
    }
  };

  initFlappySquareStage2Challenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge1');
        });
      }), 1000);
    });
  };

  initFlappySquareStage2Challenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge2');
        });
      }), 2000);
    });
  };

  initFlappySquareStage2Challenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge3');
        });
      }), 2000);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage2Challenges);

}).call(this);

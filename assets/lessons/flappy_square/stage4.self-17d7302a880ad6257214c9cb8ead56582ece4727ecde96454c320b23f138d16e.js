(function() {
  var initFlappySquareStage4Challenge1, initFlappySquareStage4Challenge2, initFlappySquareStage4Challenge3, initFlappySquareStage4Challenge4, initFlappySquareStage4Challenges;

  initFlappySquareStage4Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage4')).length > 0) {
      initFlappySquareStage4Challenge1(page);
      initFlappySquareStage4Challenge2(page);
      initFlappySquareStage4Challenge3(page);
      return initFlappySquareStage4Challenge4(page);
    }
  };

  initFlappySquareStage4Challenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge1');
        });
      }), 500);
    });
  };

  initFlappySquareStage4Challenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge2');
        });
      }), 2000);
    });
  };

  initFlappySquareStage4Challenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge3');
        });
      }), 2000);
    });
  };

  initFlappySquareStage4Challenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge4');
        });
      }), 2000);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage4Challenges);

}).call(this);

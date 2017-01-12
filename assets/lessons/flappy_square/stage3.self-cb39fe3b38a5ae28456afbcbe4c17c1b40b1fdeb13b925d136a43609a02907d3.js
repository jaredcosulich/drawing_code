(function() {
  var initFlappySquareStage3Challenge1, initFlappySquareStage3Challenge2, initFlappySquareStage3Challenge3, initFlappySquareStage3Challenges;

  initFlappySquareStage3Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage3')).length > 0) {
      initFlappySquareStage3Challenge1(page);
      initFlappySquareStage3Challenge2(page);
      return initFlappySquareStage3Challenge3(page);
    }
  };

  initFlappySquareStage3Challenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage3', 'challenge1');
        });
      }), 3000);
    });
  };

  initFlappySquareStage3Challenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage3', 'challenge2');
        });
      }), 3000);
    });
  };

  initFlappySquareStage3Challenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return setTimeout((function() {
        return canvas.selfAssess(function() {
          return App.currentProgress.challengeComplete('flappy_square_stage3', 'challenge3');
        });
      }), 3000);
    });
  };

  $(document).on('initialization:complete', initFlappySquareStage3Challenges);

}).call(this);

(function() {
  var initFlappySquareStage4Challenge1, initFlappySquareStage4Challenges;

  initFlappySquareStage4Challenges = function() {
    var page;
    if ((page = $('#flappy_square_stage4')).length > 0) {
      return initFlappySquareStage4Challenge1(page);
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

  $(document).on('initialization:complete', initFlappySquareStage4Challenges);

}).call(this);

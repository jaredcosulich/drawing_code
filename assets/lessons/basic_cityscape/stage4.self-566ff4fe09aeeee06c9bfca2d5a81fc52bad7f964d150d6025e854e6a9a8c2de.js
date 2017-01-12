(function() {
  var initBasicCityscapeStage4Challenge1, initBasicCityscapeStage4Challenge2, initBasicCityscapeStage4Challenge3, initBasicCityscapeStage4Challenge4, initBasicCityscapeStage4Challenges;

  initBasicCityscapeStage4Challenges = function() {
    var page;
    if ((page = $('#basic_cityscape_stage4')).length > 0) {
      initBasicCityscapeStage4Challenge1(page);
      initBasicCityscapeStage4Challenge2(page);
      initBasicCityscapeStage4Challenge3(page);
      return initBasicCityscapeStage4Challenge4(page);
    }
  };

  initBasicCityscapeStage4Challenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge1');
      });
    });
  };

  initBasicCityscapeStage4Challenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge2');
      });
    });
  };

  initBasicCityscapeStage4Challenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge3');
      });
    });
  };

  initBasicCityscapeStage4Challenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage4Challenges);

}).call(this);

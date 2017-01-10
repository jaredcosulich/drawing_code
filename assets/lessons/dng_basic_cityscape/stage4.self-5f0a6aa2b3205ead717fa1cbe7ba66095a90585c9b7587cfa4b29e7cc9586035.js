(function() {
  var initDngBasicCityscapeStage4Challenge1, initDngBasicCityscapeStage4Challenge2, initDngBasicCityscapeStage4Challenge3, initDngBasicCityscapeStage4Challenge4, initDngBasicCityscapeStage4Challenges;

  initDngBasicCityscapeStage4Challenges = function() {
    var page;
    if ((page = $('#dng_basic_cityscape_stage4')).length > 0) {
      initDngBasicCityscapeStage4Challenge1(page);
      initDngBasicCityscapeStage4Challenge2(page);
      initDngBasicCityscapeStage4Challenge3(page);
      return initDngBasicCityscapeStage4Challenge4(page);
    }
  };

  initDngBasicCityscapeStage4Challenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge1');
      });
    });
  };

  initDngBasicCityscapeStage4Challenge2 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge2');
      });
    });
  };

  initDngBasicCityscapeStage4Challenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge3');
      });
    });
  };

  initDngBasicCityscapeStage4Challenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initDngBasicCityscapeStage4Challenges);

}).call(this);

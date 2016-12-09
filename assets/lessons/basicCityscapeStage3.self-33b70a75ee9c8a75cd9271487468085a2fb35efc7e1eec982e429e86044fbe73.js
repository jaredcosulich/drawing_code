(function() {
  var initBasicCityscapeStage3Challenge1, initBasicCityscapeStage3Challenge2, initBasicCityscapeStage3Challenge3, initBasicCityscapeStage3Challenge4, initBasicCityscapeStage3Challenges;

  initBasicCityscapeStage3Challenges = function() {
    var page;
    if ((page = $('#basic_cityscape_stage3')).length > 0) {
      initBasicCityscapeStage3Challenge1(page);
      initBasicCityscapeStage3Challenge2(page);
      initBasicCityscapeStage3Challenge3(page);
      return initBasicCityscapeStage3Challenge4(page);
    }
  };

  initBasicCityscapeStage3Challenge1 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge1');
      });
    });
  };

  initBasicCityscapeStage3Challenge2 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge2');
      });
    });
  };

  initBasicCityscapeStage3Challenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge3');
      });
    });
  };

  initBasicCityscapeStage3Challenge4 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initBasicCityscapeStage3Challenges);

}).call(this);

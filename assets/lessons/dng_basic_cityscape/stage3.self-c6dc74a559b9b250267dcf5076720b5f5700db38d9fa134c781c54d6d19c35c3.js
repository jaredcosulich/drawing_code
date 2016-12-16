(function() {
  var initDngBasicCityscapeStage3Challenge1, initDngBasicCityscapeStage3Challenge2, initDngBasicCityscapeStage3Challenge3, initDngBasicCityscapeStage3Challenge4, initDngBasicCityscapeStage3Challenges;

  initDngBasicCityscapeStage3Challenges = function() {
    var page;
    if ((page = $('#dng_basic_cityscape_stage3')).length > 0) {
      initDngBasicCityscapeStage3Challenge1(page);
      initDngBasicCityscapeStage3Challenge2(page);
      initDngBasicCityscapeStage3Challenge3(page);
      return initDngBasicCityscapeStage3Challenge4(page);
    }
  };

  initDngBasicCityscapeStage3Challenge1 = function(page) {
    var canvas, challenge, editor, testImage;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testImage = new Test.ImageComparison({
      image: challenge.find('.test-image'),
      canvas: canvas,
      preview: true
    });
    return challenge.find('.run').click(function() {
      return testImage.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve create three buildings with three different window types!';
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage3', 'challenge1');
        } else {
          message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with three different window types shown in the challenge.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage3Challenge2 = function(page) {
    var canvas, challenge, editor, testImage;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    testImage = new Test.ImageComparison({
      image: challenge.find('.test-image'),
      canvas: canvas,
      preview: true
    });
    return challenge.find('.run').click(function() {
      return testImage.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You\'ve create three buildings with three different window types and roof types!';
          App.currentProgress.challengeComplete('dng_basic_cityscape_stage3', 'challenge2');
        } else {
          message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with different window and roof types shown in the challenge.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngBasicCityscapeStage3Challenge3 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_basic_cityscape_stage3', 'challenge3');
      });
    });
  };

  initDngBasicCityscapeStage3Challenge4 = function(page) {
    var canvas, challenge, editor, points;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    points = [];
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_basic_cityscape_stage3', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initDngBasicCityscapeStage3Challenges);

}).call(this);

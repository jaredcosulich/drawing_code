(function() {
  var initDngTranslateChallenge1, initDngTranslateChallenge2, initDngTranslateChallenge3, initDngTranslateChallenge4, initDngTranslateChallenge5, initDngTranslateChallenges;

  initDngTranslateChallenges = function() {
    var page;
    if ((page = $('#dng_translate')).length > 0) {
      initDngTranslateChallenge1(page);
      initDngTranslateChallenge2(page);
      initDngTranslateChallenge3(page);
      initDngTranslateChallenge4(page);
      return initDngTranslateChallenge5(page);
    }
  };

  initDngTranslateChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.translate(120, 40);
      context.fillStyle = '#0055A4';
      context.fillRect(0, 0, 80, 160);
      context.fillStyle = '#FFFFFF';
      context.fillRect(80, 0, 80, 160);
      context.fillStyle = '#EF4135';
      return context.fillRect(160, 0, 80, 160);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You moved the origin of the coordinate system to draw the French flag at the correct position!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge1');
        } else {
          message = 'Nice try, but you need move the origin of the coordinate system to draw the French flag at the correct position.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngTranslateChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawFrenchFlag;
      drawFrenchFlag = function() {
        context.fillStyle = '#0055A4';
        context.fillRect(0, 0, 60, 120);
        context.fillStyle = '#FFFFFF';
        context.fillRect(60, 0, 60, 120);
        context.fillStyle = '#EF4135';
        context.fillRect(120, 0, 60, 120);
      };
      context.translate(20, 40);
      drawFrenchFlag();
      context.translate(200, 0);
      drawFrenchFlag();
      context.translate(-80, 140);
      return drawFrenchFlag();
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You positioned the three French flags correctly!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge2');
        } else {
          message = 'Nice try, but you need to position the three French flags correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngTranslateChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawFrenchFlag;
      drawFrenchFlag = function() {
        context.fillStyle = '#0055A4';
        context.fillRect(0, 0, 60, 120);
        context.fillStyle = '#FFFFFF';
        context.fillRect(60, 0, 60, 120);
        context.fillStyle = '#EF4135';
        context.fillRect(120, 0, 60, 120);
      };
      context.save();
      context.translate(10, 50);
      drawFrenchFlag();
      context.restore();
      context.translate(220, 100);
      return drawFrenchFlag();
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You positioned the two French flags correctly!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge3');
        } else {
          message = 'Nice try, but you need to position the two French flags correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngTranslateChallenge4 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.save();
      context.fillStyle = 'DodgerBlue';
      context.translate(40, 40);
      context.fillRect(0, 0, 45, 45);
      context.translate(0, 50);
      context.fillRect(0, 0, 45, 45);
      context.translate(0, 50);
      context.save();
      context.fillRect(0, 0, 45, 45);
      context.translate(0, 50);
      context.fillRect(0, 0, 45, 45);
      context.translate(0, 50);
      context.fillRect(0, 0, 45, 45);
      context.restore();
      context.translate(50, 0);
      context.fillRect(0, 0, 45, 45);
      context.translate(50, 0);
      context.save();
      context.fillRect(0, 0, 45, 45);
      context.translate(0, -50);
      context.fillRect(0, 0, 45, 45);
      context.translate(0, -50);
      context.fillRect(0, 0, 45, 45);
      context.restore();
      context.translate(0, 50);
      context.fillRect(0, 0, 45, 45);
      context.translate(0, 50);
      context.fillRect(0, 0, 45, 45);
      return context.restore();
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You drew the letter H by saving and restoring the position of the coordinate system in the correct order!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge4');
        } else {
          message = 'Nice try, but you need to draw the letter H by saving and restoring the position of the coordinate system in the correct order.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngTranslateChallenge5 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.save();
      context.fillStyle = 'Crimson';
      context.translate(40, 40);
      context.fillRect(0, 0, 45, 45);
      context.translate(50, 50);
      context.fillRect(0, 0, 45, 45);
      context.translate(50, 50);
      context.save();
      context.fillRect(0, 0, 45, 45);
      context.translate(50, 50);
      context.fillRect(0, 0, 45, 45);
      context.translate(50, 50);
      context.fillRect(0, 0, 45, 45);
      context.restore();
      context.save();
      context.translate(50, -50);
      context.fillRect(0, 0, 45, 45);
      context.translate(50, -50);
      context.fillRect(0, 0, 45, 45);
      context.restore();
      context.translate(-50, 50);
      context.fillRect(0, 0, 45, 45);
      context.translate(-50, 50);
      context.fillRect(0, 0, 45, 45);
      return context.restore();
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You drew the letter X by saving and restoring the position of the coordinate system in the correct order!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge5');
        } else {
          message = 'Nice try, but you need to draw the letter X by saving and restoring the position of the coordinate system in the correct order.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngTranslateChallenges);

}).call(this);

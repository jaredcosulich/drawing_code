(function() {
  var initDngFunctionsChallenge1, initDngFunctionsChallenge2, initDngFunctionsChallenge3, initDngFunctionsChallenge4, initDngFunctionsChallenge5, initDngFunctionsChallenges;

  initDngFunctionsChallenges = function() {
    var page;
    if ((page = $('#dng_functions')).length > 0) {
      initDngFunctionsChallenge1(page);
      initDngFunctionsChallenge2(page);
      initDngFunctionsChallenge3(page);
      initDngFunctionsChallenge4(page);
      return initDngFunctionsChallenge5(page);
    }
  };

  initDngFunctionsChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = '#FF0000';
      return context.fillRect(60, 40, 200, 200);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You defined and called the drawRedSquare() function!';
          App.currentProgress.challengeComplete('dng_functions', 'challenge1');
        } else {
          message = 'Nice try, but you need to define and call the drawRedSquare() function.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngFunctionsChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = '#FF0000';
      context.fillRect(160, 20, 50, 50);
      context.fillRect(40, 80, 120, 120);
      return context.fillRect(70, 210, 90, 90);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You re-defined the drawRedSquare() function and used it to draw the three squares!';
          App.currentProgress.challengeComplete('dng_functions', 'challenge2');
        } else {
          message = 'Nice try, but you need to re-define the drawRedSquare() function and use it to draw the squares.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngFunctionsChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'SlateBlue';
      context.fillRect(20, 120, 30, 120);
      context.fillRect(50, 210, 60, 30);
      context.fillRect(110, 70, 30, 120);
      context.fillRect(140, 160, 60, 30);
      context.fillRect(200, 20, 30, 120);
      return context.fillRect(230, 110, 60, 30);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You re-defined the drawTheLetterL() function and used it to draw three letter L\'s!';
          App.currentProgress.challengeComplete('dng_functions', 'challenge3');
        } else {
          message = 'Nice try, but you need to re-define the drawTheLetterL() function and use it to draw three letter L\'s.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngFunctionsChallenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_functions', 'challenge4');
      });
    });
  };

  initDngFunctionsChallenge5 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_functions', 'challenge5');
      });
    });
  };

  $(document).on('initialization:complete', initDngFunctionsChallenges);

}).call(this);

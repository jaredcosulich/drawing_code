(function() {
  var initDngFillStyleChallenge1, initDngFillStyleChallenge2, initDngFillStyleChallenge3, initDngFillStyleChallenges;

  initDngFillStyleChallenges = function() {
    var page;
    if ((page = $('#dng_fill_style')).length > 0) {
      initDngFillStyleChallenge1(page);
      initDngFillStyleChallenge2(page);
      return initDngFillStyleChallenge3(page);
    }
  };

  initDngFillStyleChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'OrangeRed';
      return context.fillRect(100, 50, 200, 150);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your rectangle is the correct color!';
          App.currentProgress.challengeComplete('dng_fill_style', 'challenge1');
        } else {
          message = 'Nice try, but the rectangle is not the correct color.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngFillStyleChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = '#7B68EE';
      context.fillRect(20, 160, 260, 140);
      context.fillStyle = 'rgba(46, 139, 87, 0.4)';
      return context.fillRect(140, 40, 200, 200);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your rectangles are the correct color!';
          App.currentProgress.challengeComplete('dng_fill_style', 'challenge2');
        } else {
          message = 'Nice try, but the rectangles are not the correct color.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngFillStyleChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'DarkOrange';
      context.fillRect(40, 40, 40, 200);
      context.fillRect(120, 40, 40, 200);
      context.fillRect(80, 120, 40, 40);
      context.fillStyle = 'FireBrick';
      context.fillRect(200, 40, 80, 40);
      context.fillRect(220, 80, 40, 120);
      context.fillRect(200, 200, 80, 40);
      context.fillStyle = 'Gold';
      context.fillRect(320, 40, 40, 140);
      return context.fillRect(320, 200, 40, 40);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> The lines of code are all in the correct order!';
          App.currentProgress.challengeComplete('dng_fill_style', 'challenge3');
        } else {
          message = 'Nice try, but you need to rearrange the lines of code to draw the image to the right.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngFillStyleChallenges);

}).call(this);

(function() {
  var initDngSaveChallenge1, initDngSaveChallenge2, initDngSaveChallenge3, initDngSaveChallenge4, initDngSaveChallenge5, initDngSaveChallenges;

  initDngSaveChallenges = function() {
    var page;
    if ((page = $('#dng_save')).length > 0) {
      initDngSaveChallenge1(page);
      initDngSaveChallenge2(page);
      initDngSaveChallenge3(page);
      initDngSaveChallenge4(page);
      return initDngSaveChallenge5(page);
    }
  };

  initDngSaveChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'Gray';
      context.fillRect(20, 20, 320, 240);
      context.save();
      context.fillStyle = 'MediumSeaGreen';
      context.fillRect(40, 40, 130, 200);
      context.fillRect(190, 40, 130, 200);
      context.restore();
      context.fillRect(60, 60, 90, 70);
      context.fillRect(60, 150, 90, 70);
      return context.fillRect(210, 60, 90, 160);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You rearranged the lines of code and saved and restored the drawing state correctly!';
          App.currentProgress.challengeComplete('dng_save', 'challenge1');
        } else {
          message = 'Nice try, but you need rearrange the lines of code to save and restore the drawing state correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngSaveChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var fillCircle, fillWhiteCircle;
      fillCircle = function(x, y, r) {
        context.save();
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
        context.restore();
      };
      fillWhiteCircle = function(x, y, r) {
        context.save();
        context.fillStyle = 'White';
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
        context.restore();
      };
      context.fillStyle = 'DarkOrange';
      fillCircle(210, 100, 80);
      fillWhiteCircle(210, 100, 60);
      fillCircle(210, 100, 40);
      fillWhiteCircle(210, 100, 20);
      context.fillStyle = 'SaddleBrown';
      fillCircle(100, 220, 80);
      fillWhiteCircle(100, 220, 60);
      fillCircle(100, 220, 40);
      fillWhiteCircle(100, 220, 20);
      context.fillStyle = 'FireBrick';
      fillCircle(320, 220, 80);
      fillWhiteCircle(320, 220, 60);
      fillCircle(320, 220, 40);
      return fillWhiteCircle(320, 220, 20);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You defined the fillWhiteCircle() function correctly and made it self-contained!';
          App.currentProgress.challengeComplete('dng_save', 'challenge2');
        } else {
          message = 'Nice try, but you need to define the fillWhiteCircle() function correctly and make it self-contained.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngSaveChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'Red';
      context.fillRect(10, 20, 40, 240);
      context.fillStyle = 'Orange';
      context.fillRect(50, 20, 40, 240);
      context.fillStyle = 'Yellow';
      context.fillRect(90, 20, 40, 240);
      context.fillStyle = 'Green';
      context.fillRect(130, 20, 40, 240);
      context.fillStyle = 'Blue';
      context.fillRect(170, 20, 40, 240);
      context.fillStyle = 'Indigo';
      context.fillRect(210, 20, 40, 240);
      context.fillStyle = 'Violet';
      context.fillRect(250, 20, 40, 240);
      context.fillStyle = 'Blue';
      context.fillRect(290, 20, 40, 240);
      context.fillStyle = 'Green';
      context.fillRect(330, 20, 40, 240);
      context.fillStyle = 'Orange';
      return context.fillRect(370, 20, 40, 240);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You drew the image by saving and restoring multiple drawing states to the stack in the correct order!';
          App.currentProgress.challengeComplete('dng_save', 'challenge3');
        } else {
          message = 'Nice try, but you need to draw the image by saving and restoring multiple drawing states to the stack in the correct order.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngSaveChallenge4 = function(page) {
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
          App.currentProgress.challengeComplete('dng_save', 'challenge4');
        } else {
          message = 'Nice try, but you need to draw the letter H by saving and restoring the position of the coordinate system in the correct order.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngSaveChallenge5 = function(page) {
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
          App.currentProgress.challengeComplete('dng_save', 'challenge5');
        } else {
          message = 'Nice try, but you need to draw the letter X by saving and restoring the position of the coordinate system in the correct order.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngSaveChallenges);

}).call(this);

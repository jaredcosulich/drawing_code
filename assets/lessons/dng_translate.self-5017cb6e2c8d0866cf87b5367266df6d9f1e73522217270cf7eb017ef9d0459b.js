(function() {
  var initDngTranslateChallenge1, initDngTranslateChallenge2, initDngTranslateChallenge3, initDngTranslateChallenge4, initDngTranslateChallenge5, initDngTranslateChallenge6, initDngTranslateChallenges;

  initDngTranslateChallenges = function() {
    var page;
    if ((page = $('#dng_translate')).length > 0) {
      initDngTranslateChallenge1(page);
      initDngTranslateChallenge2(page);
      initDngTranslateChallenge3(page);
      initDngTranslateChallenge4(page);
      initDngTranslateChallenge5(page);
      return initDngTranslateChallenge6(page);
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
      var drawPineTree;
      drawPineTree = function(x, y) {
        context.save();
        context.translate(x, y);
        context.fillStyle = 'ForestGreen';
        context.fillRect(40, 0, 20, 40);
        context.fillRect(30, 40, 40, 40);
        context.fillRect(20, 80, 60, 40);
        context.fillRect(10, 120, 80, 40);
        context.fillRect(0, 160, 100, 40);
        context.fillStyle = 'Sienna';
        context.fillRect(40, 200, 20, 40);
        context.restore();
      };
      drawPineTree(5, 40);
      drawPineTree(105, 10);
      drawPineTree(205, 60);
      return drawPineTree(305, 30);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You updated the function and positioned the four pine trees correctly!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge4');
        } else {
          message = 'Nice try, but you need to update the function and position the four pine trees correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngTranslateChallenge5 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_translate', 'challenge5');
      });
    });
  };

  initDngTranslateChallenge6 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge6');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawPineTree, drawTheGround;
      drawTheGround = function(groundY) {
        context.save();
        context.strokeStyle = 'Black';
        context.beginPath();
        context.moveTo(0, groundY);
        context.lineTo(canvas.width, groundY);
        context.stroke();
        context.restore();
      };
      drawPineTree = function(centerX, groundY) {
        context.save();
        context.translate(centerX, groundY);
        context.translate(-50, -240);
        context.fillStyle = 'ForestGreen';
        context.fillRect(40, 0, 20, 40);
        context.fillRect(30, 40, 40, 40);
        context.fillRect(20, 80, 60, 40);
        context.fillRect(10, 120, 80, 40);
        context.fillRect(0, 160, 100, 40);
        context.fillStyle = 'Sienna';
        context.fillRect(40, 200, 20, 40);
        context.restore();
      };
      drawTheGround(280);
      return drawPineTree(150, 280);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You updated the function to position a pine tree by its anchor point correctly!';
          App.currentProgress.challengeComplete('dng_translate', 'challenge6');
        } else {
          message = 'Nice try, but you need to update the function to position a pine tree by its anchor point and then draw a pine tree on the ground.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngTranslateChallenges);

}).call(this);

(function() {
  var initDngScaleChallenge1, initDngScaleChallenge2, initDngScaleChallenge3, initDngScaleChallenge4, initDngScaleChallenge5, initDngScaleChallenge6, initDngScaleChallenge7, initDngScaleChallenges;

  initDngScaleChallenges = function() {
    var page;
    if ((page = $('#dng_scale')).length > 0) {
      initDngScaleChallenge1(page);
      initDngScaleChallenge2(page);
      initDngScaleChallenge3(page);
      initDngScaleChallenge4(page);
      initDngScaleChallenge5(page);
      initDngScaleChallenge6(page);
      return initDngScaleChallenge7(page);
    }
  };

  initDngScaleChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.scale(2.5, 2.5);
      context.fillStyle = '#0055A4';
      context.fillRect(20, 20, 40, 80);
      context.fillStyle = '#FFFFFF';
      context.fillRect(60, 20, 40, 80);
      context.fillStyle = '#EF4135';
      return context.fillRect(100, 20, 40, 80);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You scaled the French flag so it is 2.5 times wider and 2.5 times taller!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge1');
        } else {
          message = 'Nice try, but you need to scale the French flag so it is 2.5 times wider and 2.5 times taller.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngScaleChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawFrenchFlag;
      drawFrenchFlag = function(x, y) {
        context.fillStyle = '#0055A4';
        context.fillRect(x, y, 40, 80);
        context.fillStyle = '#FFFFFF';
        context.fillRect(x + 40, y, 40, 80);
        context.fillStyle = '#EF4135';
        context.fillRect(x + 80, y, 40, 80);
      };
      context.scale(1.0, 1.4);
      drawFrenchFlag(40, 20);
      drawFrenchFlag(240, 20);
      drawFrenchFlag(60, 120);
      return drawFrenchFlag(260, 120);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You scaled and positioned the four French flags correctly!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge2');
        } else {
          message = 'Nice try, but you need to scale and position the four French flags correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngScaleChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'HotPink';
      context.fillRect(20, 20, 80, 80);
      context.scale(2, 3);
      context.fillStyle = 'MediumVioletRed';
      context.fillRect(110, 15, 80, 80);
      context.scale(2, 0.5);
      context.fillStyle = 'RebeccaPurple';
      return context.fillRect(5, 90, 80, 80);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You scaled the three rectangles correctly!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge3');
        } else {
          message = 'Nice try, but you need to scale the three rectangles by combining scale factors correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngScaleChallenge4 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawTree;
      drawTree = function(x, y) {
        context.fillStyle = 'Sienna';
        context.fillRect(x - 10, y, 20, 100);
        context.fillStyle = 'ForestGreen';
        context.beginPath();
        context.arc(x, y, 30, 0, 2 * Math.PI, false);
        context.fill();
      };
      drawTree(40, 80);
      context.save();
      context.scale(1, 1.3);
      drawTree(140, 80);
      context.restore();
      context.save();
      context.scale(1, 0.8);
      drawTree(240, 80);
      context.restore();
      context.save();
      context.scale(1, 1.2);
      drawTree(340, 80);
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
          message = '<strong>Success!</strong> You scaled the four trees correctly by saving and restoring the drawing state!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge4');
        } else {
          message = 'Nice try, but you need to scale the four trees correctly by saving and restoring the drawing state.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngScaleChallenge5 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawFrame;
      drawFrame = function(x, y, color) {
        context.fillStyle = color;
        context.fillRect(x, y, 60, 4);
        context.fillRect(x, y, 4, 60);
        context.fillRect(x + 56, y, 4, 60);
        context.fillRect(x, y + 56, 60, 4);
      };
      context.save();
      context.translate(20, 20);
      context.scale(4, 3);
      drawFrame(0, 0, 'MediumBlue');
      context.restore();
      context.save();
      context.translate(180, 80);
      context.scale(3, 3.5);
      drawFrame(0, 0, 'DodgerBlue');
      context.restore();
      context.save();
      context.translate(60, 140);
      context.scale(4, 2);
      drawFrame(0, 0, 'LightSkyBlue');
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
          message = '<strong>Success!</strong> You positioned and scaled the three frames correctly by anchoring their top left corners!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge5');
        } else {
          message = 'Nice try, but you need to position and scale the three frames correctly by anchoring their top left corners.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngScaleChallenge6 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge6');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawHorizon, drawTree, drawVanishingPoint, i, x, y;
      drawTree = function(x, y) {
        context.fillStyle = 'Sienna';
        context.fillRect(x - 5, y - 50, 10, 50);
        context.fillStyle = 'ForestGreen';
        context.beginPath();
        context.arc(x, y - 50, 15, 0, 2 * Math.PI, false);
        context.fill();
      };
      drawHorizon = function() {
        context.save();
        context.strokeStyle = 'Black';
        context.beginPath();
        context.moveTo(-x, 0);
        context.lineTo(Math.abs(x) + canvas.width, 0);
        context.stroke();
        context.restore();
      };
      drawVanishingPoint = function() {
        context.save();
        context.fillStyle = 'Black';
        context.beginPath();
        context.arc(0, 0, 3, 0, 2 * Math.PI, false);
        context.fill();
        context.restore();
      };
      x = -80;
      y = 140;
      context.save();
      context.translate(x, y);
      drawHorizon();
      drawVanishingPoint();
      i = 0;
      while (i < 6) {
        context.scale(1.2, 1.2);
        drawTree(120, 45);
        i += 1;
      }
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
          message = '<strong>Success!</strong> You created a vanishing point and drew the six trees so they appear to be moving closer!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge6');
        } else {
          message = 'Nice try, but you need to create a vanishing point and draw the six trees so they appear to be moving closer.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngScaleChallenge7 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge7');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawFrenchFlag, x, y;
      drawFrenchFlag = function(x, y) {
        context.fillStyle = '#0055A4';
        context.fillRect(x, y, 50, 100);
        context.fillStyle = '#FFFFFF';
        context.fillRect(x + 50, y, 50, 100);
        context.fillStyle = '#EF4135';
        context.fillRect(x + 100, y, 50, 100);
      };
      x = 200;
      y = 0;
      context.save();
      context.translate(x, y);
      drawFrenchFlag(30, 60);
      context.scale(-1, 1);
      drawFrenchFlag(30, 60);
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
          message = '<strong>Success!</strong> You created a mirror image of a French flag and positioned both flags correctly!';
          App.currentProgress.challengeComplete('dng_scale', 'challenge7');
        } else {
          message = 'Nice try, but you need to create a mirror image of a French flag and position both flags correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngScaleChallenges);

}).call(this);

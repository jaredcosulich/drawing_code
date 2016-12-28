(function() {
  var initDngForLoopsChallenge1, initDngForLoopsChallenge2, initDngForLoopsChallenge3, initDngForLoopsChallenge4, initDngForLoopsChallenge5, initDngForLoopsChallenge6, initDngForLoopsChallenges;

  initDngForLoopsChallenges = function() {
    var page;
    if ((page = $('#dng_for_loops')).length > 0) {
      initDngForLoopsChallenge1(page);
      initDngForLoopsChallenge2(page);
      initDngForLoopsChallenge3(page);
      initDngForLoopsChallenge4(page);
      initDngForLoopsChallenge5(page);
      return initDngForLoopsChallenge6(page);
    }
  };

  initDngForLoopsChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var i, k, results;
      context.fillStyle = 'BlueViolet';
      results = [];
      for (i = k = 0; k <= 4; i = ++k) {
        results.push(context.fillRect(40 * i, 60 * i, 200, 50));
      }
      return results;
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your for loop is drawing the rectangles correctly!';
          App.currentProgress.challengeComplete('dng_for_loops', 'challenge1');
        } else {
          message = 'Nice try, but you need to change the for loop to draw the rectangles correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngForLoopsChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var i, k, results;
      context.fillStyle = 'MediumSeaGreen';
      results = [];
      for (i = k = 0; k <= 9; i = ++k) {
        results.push(context.fillRect(10, 10 + 25 * i, 80 + 30 * i, 20));
      }
      return results;
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your for loop is drawing the rectangles correctly!';
          App.currentProgress.challengeComplete('dng_for_loops', 'challenge2');
        } else {
          message = 'Nice try, but you need to create a for loop to draw the rectangles correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngForLoopsChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawSquare, i, k, results;
      drawSquare = function() {
        context.fillRect(0, 0, 20, 20);
        context.translate(20, 20);
      };
      context.fillStyle = 'SaddleBrown';
      context.translate(100, 20);
      results = [];
      for (i = k = 0; k <= 11; i = ++k) {
        results.push(drawSquare());
      }
      return results;
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your for loop is drawing the squares using transformations correctly!';
          App.currentProgress.challengeComplete('dng_for_loops', 'challenge3');
        } else {
          message = 'Nice try, but you need to create a for loop to draw the squares using transformations correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngForLoopsChallenge4 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawRectangle, i, k, results;
      drawRectangle = function(b) {
        context.fillStyle = 'rgb(0, 0, ' + b + ')';
        context.fillRect(0, 0, 20, 200);
        context.translate(20, 0);
      };
      context.translate(10, 10);
      results = [];
      for (i = k = 0; k <= 255; i = k += 15) {
        results.push(drawRectangle(i));
      }
      return results;
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your for loop is drawing rectangles and filling them with shades of blue correctly!';
          App.currentProgress.challengeComplete('dng_for_loops', 'challenge4');
        } else {
          message = 'Nice try, but you need to create a for loop to draw rectangles and fill them with shades of blue correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngForLoopsChallenge5 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawRectangle, i, k, len, ref, results;
      drawRectangle = function(w) {
        context.fillRect(0, 0, w, 20);
        context.translate(0, 25);
      };
      context.translate(10, 10);
      context.fillStyle = 'MediumSeaGreen';
      ref = [120, 280, 150, 90, 300, 400, 220, 250];
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        i = ref[k];
        results.push(drawRectangle(i));
      }
      return results;
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your for loop is iterating over the array and drawing the bar graph correctly!';
          App.currentProgress.challengeComplete('dng_for_loops', 'challenge5');
        } else {
          message = 'Nice try, but you need to create a for loop to iterate over the array and draw the bar graph correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngForLoopsChallenge6 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge6');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawRectangle, drawRow, i, k, results;
      drawRectangle = function() {
        context.fillRect(0, 0, 30, 20);
        context.translate(40, 0);
      };
      drawRow = function() {
        var j, k;
        context.save();
        for (j = k = 0; k <= 9; j = ++k) {
          drawRectangle();
        }
        context.restore();
        context.translate(0, 30);
      };
      context.translate(10, 10);
      context.fillStyle = 'SlateBlue';
      results = [];
      for (i = k = 0; k <= 7; i = ++k) {
        results.push(drawRow());
      }
      return results;
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your nested for loops are drawing the grid of rectangles correctly!';
          App.currentProgress.challengeComplete('dng_for_loops', 'challenge6');
        } else {
          message = 'Nice try, but you need to create nested for loops to draw the grid of rectangles correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngForLoopsChallenges);

}).call(this);

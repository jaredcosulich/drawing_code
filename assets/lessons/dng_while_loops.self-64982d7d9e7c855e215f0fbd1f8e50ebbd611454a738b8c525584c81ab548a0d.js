(function() {
  var initDngWhileLoopsChallenge1, initDngWhileLoopsChallenge2, initDngWhileLoopsChallenge3, initDngWhileLoopsChallenges;

  initDngWhileLoopsChallenges = function() {
    var page;
    if ((page = $('#dng_while_loops')).length > 0) {
      initDngWhileLoopsChallenge1(page);
      initDngWhileLoopsChallenge2(page);
      return initDngWhileLoopsChallenge3(page);
    }
  };

  initDngWhileLoopsChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawGround, drawTree, results, x, x1, x2;
      drawTree = function(x) {
        context.save();
        context.translate(x, 150);
        context.fillStyle = 'Sienna';
        context.fillRect(-5, 0, 10, 50);
        context.fillStyle = 'ForestGreen';
        context.beginPath();
        context.arc(0, 0, 15, 0, 2 * Math.PI, false);
        context.fill();
        context.restore();
      };
      drawGround = function(x1, x2) {
        context.save();
        context.translate(x1 - 5, 200);
        context.fillStyle = '#666666';
        context.fillRect(0, 0, x2 - x1 + 10, 10);
        context.restore();
      };
      x1 = 20;
      x2 = 380;
      drawGround(x1, x2);
      x = x1;
      results = [];
      while (x <= x2) {
        drawTree(x);
        results.push(x = x + 40);
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
          message = '<strong>Success!</strong> Your while loop is drawing the trees on the ground correctly!';
          App.currentProgress.challengeComplete('dng_while_loops', 'challenge1');
        } else {
          message = 'Nice try, but you need to update the while loop to draw the trees on the ground correctly.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngWhileLoopsChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var i, j, results;
      context.fillStyle = 'HotPink';
      i = 0;
      while (i < 6) {
        context.fillRect(40 * i, 50 * i, 45, 45);
        i = i + 1;
      }
      context.fillStyle = 'DarkOrange';
      j = 0;
      results = [];
      while (j < 6) {
        context.fillRect(40 * j + 100, 50 * j, 45, 45);
        results.push(j = j + 1);
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
          message = '<strong>Success!</strong> You created a while loop that draws the same six squares as the for loop, just shifted to the right!';
          App.currentProgress.challengeComplete('dng_while_loops', 'challenge2');
        } else {
          message = 'Nice try, but you need to create a while loop that will draw the same six squares as the for loop, just shifted to the right.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngWhileLoopsChallenge3 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('dng_while_loops', 'challenge3');
      });
    });
  };

  $(document).on('initialization:complete', initDngWhileLoopsChallenges);

}).call(this);

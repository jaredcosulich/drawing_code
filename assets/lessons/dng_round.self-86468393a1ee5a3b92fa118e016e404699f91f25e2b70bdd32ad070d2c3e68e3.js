(function() {
  var initDngRoundChallenge1, initDngRoundChallenge2, initDngRoundChallenge3, initDngRoundChallenges;

  initDngRoundChallenges = function() {
    var page;
    if ((page = $('#dng_round')).length > 0) {
      initDngRoundChallenge1(page);
      initDngRoundChallenge2(page);
      return initDngRoundChallenge3(page);
    }
  };

  initDngRoundChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var a, b, h, w;
      a = 90 * Math.PI;
      b = 1.6 * Math.exp(5);
      w = Math.ceil(a);
      h = Math.ceil(b);
      context.fillStyle = 'Orchid';
      return context.fillRect(40, 40, w, h);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You rounded the dimensions of the rectangle correctly!';
          App.currentProgress.challengeComplete('dng_round', 'challenge1');
        } else {
          message = 'Nice try, but you need to round the values of a and b up to get the dimensions of the rectangle.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngRoundChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var b, g, r;
      r = 255;
      g = 165;
      b = 0;
      context.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
      context.fillRect(10, 10, 90, 280);
      context.fillStyle = 'rgb(' + Math.round(0.75 * r) + ', ' + Math.round(0.75 * g) + ', ' + Math.round(0.75 * b) + ')';
      context.fillRect(100, 10, 90, 280);
      context.fillStyle = 'rgb(' + Math.round(0.5 * r) + ', ' + Math.round(0.5 * g) + ', ' + Math.round(0.5 * b) + ')';
      context.fillRect(190, 10, 90, 280);
      context.fillStyle = 'rgb(' + Math.round(0.25 * r) + ', ' + Math.round(0.25 * g) + ', ' + Math.round(0.25 * b) + ')';
      return context.fillRect(280, 10, 90, 280);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You have calculated and rounded the RGB values correctly!';
          App.currentProgress.challengeComplete('dng_round', 'challenge2');
        } else {
          message = 'Nice try, but you need to calculate and round the RGB values, and use them to fill the rectangles.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngRoundChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var a, b, h, w;
      a = 90 * Math.PI;
      b = 1.6 * Math.exp(5);
      w = 50 * Math.round(a / 50);
      h = 30 * Math.round(b / 30);
      context.fillStyle = 'OrangeRed';
      context.fillRect(50, 30, w, h);
      context.fillStyle = 'Black';
      context.font = '16px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      return context.fillText(w + ' x ' + h, 50 + w / 2, 30 + h / 2);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You rounded the dimensions of the rectangle correctly!';
          App.currentProgress.challengeComplete('dng_round', 'challenge3');
        } else {
          message = 'Nice try, but you need round the width of the rectangle to the nearest multiple of 50 and the height to the nearest multiple of 30.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngRoundChallenges);

}).call(this);

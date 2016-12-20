(function() {
  var initDngVariablesChallenge1, initDngVariablesChallenge2, initDngVariablesChallenge3, initDngVariablesChallenge4, initDngVariablesChallenge5, initDngVariablesChallenges;

  initDngVariablesChallenges = function() {
    var page;
    if ((page = $('#dng_variables')).length > 0) {
      initDngVariablesChallenge1(page);
      initDngVariablesChallenge2(page);
      initDngVariablesChallenge3(page);
      initDngVariablesChallenge4(page);
      return initDngVariablesChallenge5(page);
    }
  };

  initDngVariablesChallenge1 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = '#483D8B';
      return context.fillRect(60, 40, 300, 150);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your variables contain the correct values!';
          App.currentProgress.challengeComplete('dng_variables', 'challenge1');
        } else {
          message = 'Nice try, but your variables do not contain the correct values.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngVariablesChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = '#A0522D';
      context.fillRect(100, 30, 160, 160);
      return context.fillRect(260, 190, 80, 80);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your variables contain the correct values!';
          App.currentProgress.challengeComplete('dng_variables', 'challenge2');
        } else {
          message = 'Nice try, but your variables do not contain the correct values.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngVariablesChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'Crimson';
      context.fillRect(40, 20, 260, 200);
      context.fillStyle = 'Tomato';
      return context.fillRect(60, 40, 220, 160);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your variable expressions are correct!';
          App.currentProgress.challengeComplete('dng_variables', 'challenge3');
        } else {
          message = 'Nice try, but your variable expressions are incorrect.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngVariablesChallenge4 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'DarkViolet';
      context.fillRect(100, 40, 80, 240);
      context.fillRect(260, 40, 80, 240);
      context.fillStyle = 'Violet';
      return context.fillRect(180, 120, 80, 80);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your variable expressions are correct!';
          App.currentProgress.challengeComplete('dng_variables', 'challenge4');
        } else {
          message = 'Nice try, but your variable expressions are incorrect.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initDngVariablesChallenge5 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge5');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.fillStyle = 'Khaki';
      context.fillRect(20, 40, 360, 200);
      context.fillStyle = 'White';
      context.fillRect(20, 40, 25, 25);
      context.fillRect(355, 40, 25, 25);
      context.fillRect(20, 215, 25, 25);
      return context.fillRect(355, 215, 25, 25);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> Your variable expressions are correct!';
          App.currentProgress.challengeComplete('dng_variables', 'challenge5');
        } else {
          message = 'Nice try, but your variable expressions are incorrect.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  $(document).on('initialization:complete', initDngVariablesChallenges);

}).call(this);

(function() {
  var initSwitchStatementsChallenge1, initSwitchStatementsChallenge2, initSwitchStatementsChallenge3, initSwitchStatementsChallenge4, initSwitchStatementsChallenges;

  initSwitchStatementsChallenges = function() {
    var page;
    if ((page = $('#switch_statements')).length > 0) {
      initSwitchStatementsChallenge1(page);
      initSwitchStatementsChallenge2(page);
      initSwitchStatementsChallenge3(page);
      return initSwitchStatementsChallenge4(page);
    }
  };

  initSwitchStatementsChallenge1 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge1');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('switch_statements', 'challenge1');
      });
    });
  };

  initSwitchStatementsChallenge2 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge2');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      context.save();
      context.translate(200, 10);
      context.fillStyle = '#0055A4';
      context.fillRect(0, 0, 60, 120);
      context.fillStyle = '#FFFFFF';
      context.fillRect(60, 0, 60, 120);
      context.fillStyle = '#EF4135';
      context.fillRect(120, 0, 60, 120);
      context.restore();
      context.save();
      context.translate(10, 90);
      context.fillStyle = '#FCD116';
      context.fillRect(0, 0, 180, 60);
      context.fillStyle = '#003893';
      context.fillRect(0, 60, 180, 30);
      context.fillStyle = '#CE1126';
      context.fillRect(0, 90, 180, 30);
      context.restore();
      context.save();
      context.translate(200, 170);
      context.fillStyle = '#FFFFFF';
      context.fillRect(0, 0, 180, 120);
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
          message = '<strong>Success!</strong> You used a switch statement to draw three different flags!';
          App.currentProgress.challengeComplete('switch_statements', 'challenge2');
        } else {
          message = 'Nice try, but you need to create a switch statement to draw three different flags.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initSwitchStatementsChallenge3 = function(page) {
    var canvas, challenge, editor, solution, testCode;
    challenge = page.find('#challenge3');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    solution = function(canvas, context) {
      var drawRedDoor;
      drawRedDoor = function(x, y, detailLevel) {
        context.save();
        context.translate(x, y);
        context.fillStyle = '#FF0000';
        context.fillRect(0, 0, 120, 240);
        switch (detailLevel) {
          case 3:
            context.fillStyle = '#99CCFF';
            context.fillRect(20, 20, 80, 60);
            context.fillStyle = '#FFD700';
            context.fillRect(90, 120, 16, 16);
            context.fillRect(40, 180, 40, 16);
            break;
          case 2:
            context.fillStyle = '#99CCFF';
            context.fillRect(20, 20, 80, 60);
            context.fillStyle = '#FFD700';
            context.fillRect(90, 120, 16, 16);
            break;
          case 1:
            context.fillStyle = '#FFD700';
            context.fillRect(90, 120, 16, 16);
        }
        context.restore();
      };
      drawRedDoor(10, 20, 1);
      drawRedDoor(140, 20, 2);
      return drawRedDoor(270, 20, 3);
    };
    testCode = new Test.Code({
      code: solution,
      canvas: canvas
    });
    return challenge.find('.run').click(function() {
      return testCode.test(function(success) {
        var message;
        if (success) {
          message = '<strong>Success!</strong> You used a switch statement to draw three red doors with increasing levels of detail!';
          App.currentProgress.challengeComplete('switch_statements', 'challenge3');
        } else {
          message = 'Nice try, but you need to create a switch statement to draw three red doors with increasing levels of detail.';
        }
        return canvas.alert(message, success);
      });
    });
  };

  initSwitchStatementsChallenge4 = function(page) {
    var canvas, challenge, editor;
    challenge = page.find('#challenge4');
    canvas = new App.Canvas(challenge.find('canvas'));
    editor = new App.Editor(challenge.find('.editor'), canvas);
    return challenge.find('.run').click(function() {
      return canvas.selfAssess(function() {
        return App.currentProgress.challengeComplete('switch_statements', 'challenge4');
      });
    });
  };

  $(document).on('initialization:complete', initSwitchStatementsChallenges);

}).call(this);

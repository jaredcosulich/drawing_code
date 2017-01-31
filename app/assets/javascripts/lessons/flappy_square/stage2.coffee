initFlappySquareStage2Challenges = ->
  if (page = $('#flappy_square_stage2')).length > 0
    initFlappySquareStage2Challenge1(page)
    initFlappySquareStage2Challenge2(page)
    initFlappySquareStage2Challenge3(page)
    initFlappySquareStage2Challenge4(page)
    # initFlappySquareStage2Challenge5(page)
    # initFlappySquareStage2Challenge6(page)


initFlappySquareStage2Challenge1 = (page) ->
  index = 1
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawWall = (x) ->
      context.fillRect(x, 25, 50, 100);
      context.fillRect(x, 200, 50, 100);

    context.fillRect(50, 100, 20, 20);

    context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(450, 25);
    context.lineTo(450, 300);
    context.lineTo(25, 300);
    context.closePath();
    context.stroke();

    drawWall(150);
    drawWall(275);
    drawWall(400);


  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn the flappy square game using functions and there are three walls properly placed!'
        App.currentProgress.challengeComplete('flappy_square_stage2', "challenge#{index}")
      else
        message = 'Nice try, but your game should be using functions and produce three walls that are spaced every 125 pixels.'

      canvas.alert(message, success)

initFlappySquareStage2Challenge2 = (page) ->
  challengeIndex = 2
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  # testSolution = (index) ->
  #   solution = (canvas, context) ->
  #     for i in [1..index]
  #       context.fillRect(50, 100 + (i * 25), 20, 20)
  #
  #     context.beginPath();
  #     context.moveTo(25, 25);
  #     context.lineTo(450, 25);
  #     context.lineTo(450, 300);
  #     context.lineTo(25, 300);
  #     context.closePath();
  #     context.stroke();
  #
  #     drawWall = (x) ->
  #       context.fillRect(x, 25, 50, 100);
  #       context.fillRect(x, 200, 50, 100);
  #
  #     drawWall(150);
  #     drawWall(275);
  #     drawWall(400);
  #
  #   testCode = new Test.Code(code: solution, canvas: canvas)
  #
  #   testCode.test (success) ->
  #     if success
  #       if index < 5
  #         setTimeout(( => testSolution(index + 1)), 300)
  #       else
  #         message = '<strong>Success!</strong> You\'re successfull animated a flappy square moving down!'
  #         App.currentProgress.challengeComplete('flappy_square_stage2', "challenge#{index}")
  #         canvas.alert(message, success)
  #     else
  #       message = 'Nice try, but you need to animate a flappy square moving down.'
  #       canvas.alert(message, success)
  #
  # challenge.find('.run').click ->
  #   setTimeout(( => testSolution(1)), 400)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', "challenge#{challengeIndex}")
    ), 2000)


initFlappySquareStage2Challenge3 = (page) ->
  challengeIndex = 3
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', "challenge#{challengeIndex}")
    ), 2000)


initFlappySquareStage2Challenge4 = (page) ->
  challengeIndex = 4
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', "challenge#{challengeIndex}")
    ), 1000)

$(document).on('initialization:complete', initFlappySquareStage2Challenges)

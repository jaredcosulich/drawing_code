initFlappySquareStage1Challenges = ->
  if (page = $('#flappy_square_stage1')).length > 0
    initFlappySquareStage1Challenge1(page)
    initFlappySquareStage1Challenge2(page)
    initFlappySquareStage1Challenge3(page)
    initFlappySquareStage1Challenge4(page)
    initFlappySquareStage1Challenge5(page)
    initFlappySquareStage1Challenge6(page)
    initFlappySquareStage1Challenge7(page)

initFlappySquareStage1Challenge1 = (page) ->
  index = 1
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(60, 90, 45, 60)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your rectangle is in the correct position and is the correct size!'
        App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
      else
        message = 'Nice try, but you need to draw a rectangle in the correct position that is the correct size.'

      canvas.alert(message, success)


initFlappySquareStage1Challenge2 = (page) ->
  index = 2
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(50, 100, 20, 20)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn a flappy square!'
        App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
      else
        message = 'Nice try, but your square needs to be the correct width and height and in the position described.'

      canvas.alert(message, success)


initFlappySquareStage1Challenge3 = (page) ->
  index = 3
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(50, 150, 20, 20)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn a flappy square using variables!'
        App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
      else
        message = 'Nice try, but you need to set your variables properly.'

      canvas.alert(message, success)


initFlappySquareStage1Challenge4 = (page) ->
  index = 4
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(50, 100, 20, 20)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn a flappy square using a function!'
        App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
      else
        message = 'Nice try, but you need to write code in the function to draw the flappy square.'

      canvas.alert(message, success)


initFlappySquareStage1Challenge5 = (page) ->
  index = 5
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testSolution = (index) ->
    solution = (canvas, context) ->
      for i in [1..index]
        context.fillRect(50, 100 + (i * 10), 20, 20)

    testCode = new Test.Code(code: solution, canvas: canvas)

    testCode.test (success) ->
      if success
        if index < 5
          testSolution(index + 1)
        else
          message = '<strong>Success!</strong> You\'re successfull animated a flappy square moving down!'
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
          canvas.alert(message, success)
      else
        message = 'Nice try, but you need to animate a flappy square moving down.'
        canvas.alert(message, success)

  challenge.find('.run').click ->
    testSolution(1)


initFlappySquareStage1Challenge6 = (page) ->
  index = 6
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testSolution = (index) ->
    solution = (canvas, context) ->
      context.fillRect(50, 100 + (index * 10), 20, 20)

    testCode = new Test.Code(code: solution, canvas: canvas)

    testCode.test (success) ->
      if success
        if index < 5
          testSolution(index + 1)
        else
          message = '<strong>Success!</strong> You\'re successfull cleared the canvas to complete the animation cycle!'
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
          canvas.alert(message, success)
      else
        message = 'Nice try, but you need to clear the whole canvas in between each frame.'
        canvas.alert(message, success)

  challenge.find('.run').click ->
    testSolution(1)


initFlappySquareStage1Challenge7 = (page) ->
  index = 7
  challenge = page.find("#challenge#{index}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context, startTime)->
    frames = Math.floor((new Date() - startTime) / 25) + 2
    y = 100
    yVelocity = 0
    gravity = 0.5
    for i in [0...frames]
      yVelocity -= gravity
      y -= yVelocity
    context.fillRect(50, y, 20, 20)

  testSolution = (i) ->
    testCode = new Test.Code(code: solution, canvas: canvas)

    testCode.test (success) ->
      if success
        if i < 3
          testSolution(i + 1)
        else
          message = '<strong>Success!</strong> You\'re successfull animated a flappy square affected by gravity!'
          App.currentProgress.challengeComplete('flappy_square_stage1', "challenge#{index}")
          canvas.alert(message, success)
      else
        message = 'Nice try, but you need to animate a flappy square being affected by gravity.'
        canvas.alert(message, success)

  challenge.find('.run').click ->
    testSolution(1)



$(document).on('initialization:complete', initFlappySquareStage1Challenges)

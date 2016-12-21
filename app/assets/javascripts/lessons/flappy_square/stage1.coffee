initFlappySquareStage1Challenges = ->
  if (page = $('#flappy_square_stage1')).length > 0
    initFlappySquareStage1Challenge1(page)
    initFlappySquareStage1Challenge2(page)
    initFlappySquareStage1Challenge3(page)


initFlappySquareStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(50, 100, 20, 20)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn a flappy square!'
        App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge1')
      else
        message = 'Nice try, but your square needs to be the correct width and height and in the position described.'

      canvas.alert(message, success)


initFlappySquareStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(50, 150, 20, 20)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn a flappy square using variables!'
        App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge2')
      else
        message = 'Nice try, but you need to set your variables properly.'

      canvas.alert(message, success)

initFlappySquareStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(50, 100, 20, 20)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve drawn a flappy square using a function!'
        App.currentProgress.challengeComplete('flappy_square_stage1', 'challenge3')
      else
        message = 'Nice try, but you need to write code in the function to draw the flappy square.'

      canvas.alert(message, success)

$(document).on('initialization:complete', initFlappySquareStage1Challenges)

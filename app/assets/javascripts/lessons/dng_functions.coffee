initDngFunctionsChallenges = ->
  if (page = $('#dng_functions')).length > 0
    initDngFunctionsChallenge1(page)
    initDngFunctionsChallenge2(page)
    initDngFunctionsChallenge3(page)
    initDngFunctionsChallenge4(page)
    initDngFunctionsChallenge5(page)


initDngFunctionsChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = '#FF0000'
    context.fillRect(60, 40, 200, 200)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You defined and called the function drawRedSquare()!'
        App.currentProgress.challengeComplete('dng_functions', 'challenge1')
      else
        message = 'Nice try, but you need to define and call the function drawRedSquare().'

      canvas.alert(message, success)


initDngFunctionsChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = '#FF0000'
    context.fillRect(160, 20, 50, 50)
    context.fillRect(40, 80, 120, 120)
    context.fillRect(70, 210, 90, 90)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You re-defined the function drawRedSquare() and used it to draw the three squares!'
        App.currentProgress.challengeComplete('dng_functions', 'challenge2')
      else
        message = 'Nice try, but you need to re-define the function drawRedSquare() and use it to draw the squares.'

      canvas.alert(message, success)


initDngFunctionsChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'SlateBlue'
    context.fillRect(20, 120, 30, 120)
    context.fillRect(50, 210, 60, 30)
    context.fillRect(110, 70, 30, 120)
    context.fillRect(140, 160, 60, 30)
    context.fillRect(200, 20, 30, 120)
    context.fillRect(230, 110, 60, 30)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You re-defined the function drawTheLetterL() and used it to draw three letter L\'s!'
        App.currentProgress.challengeComplete('dng_functions', 'challenge3')
      else
        message = 'Nice try, but you need to re-define the function drawTheLetterL() and use it to draw three letter L\'s.'

      canvas.alert(message, success)


initDngFunctionsChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'DarkViolet'
    context.fillRect(100, 40, 80, 240)
    context.fillRect(260, 40, 80, 240)
    context.fillStyle = 'Violet'
    context.fillRect(180, 120, 80, 80)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your variable expressions are correct!'
        App.currentProgress.challengeComplete('dng_functions', 'challenge4')
      else
        message = 'Nice try, but your variable expressions are incorrect.'

      canvas.alert(message, success)


initDngFunctionsChallenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'Khaki'
    context.fillRect(20, 40, 360, 200)
    context.fillStyle = 'White'
    context.fillRect(20, 40, 25, 25)
    context.fillRect(355, 40, 25, 25)
    context.fillRect(20, 215, 25, 25)
    context.fillRect(355, 215, 25, 25)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your variable expressions are correct!'
        App.currentProgress.challengeComplete('dng_functions', 'challenge5')
      else
        message = 'Nice try, but your variable expressions are incorrect.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngFunctionsChallenges)

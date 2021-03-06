initFunctionsChallenges = ->
  if (page = $('#functions')).length > 0
    initFunctionsChallenge1(page)
    initFunctionsChallenge2(page)
    initFunctionsChallenge3(page)
    initFunctionsChallenge4(page)
    initFunctionsChallenge5(page)


initFunctionsChallenge1 = (page) ->
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
        message = '<strong>Success!</strong> You defined and called the drawRedSquare() function!'
        App.currentProgress.challengeComplete('functions', 'challenge1')
      else
        message = 'Nice try, but you need to define and call the drawRedSquare() function.'

      canvas.alert(message, success)


initFunctionsChallenge2 = (page) ->
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
        message = '<strong>Success!</strong> You re-defined the drawRedSquare() function and used it to draw the three squares!'
        App.currentProgress.challengeComplete('functions', 'challenge2')
      else
        message = 'Nice try, but you need to re-define the drawRedSquare() function and use it to draw the squares.'

      canvas.alert(message, success)


initFunctionsChallenge3 = (page) ->
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
        message = '<strong>Success!</strong> You re-defined the drawTheLetterL() function and used it to draw three letter L\'s!'
        App.currentProgress.challengeComplete('functions', 'challenge3')
      else
        message = 'Nice try, but you need to re-define the drawTheLetterL() function and use it to draw three letter L\'s.'

      canvas.alert(message, success)


initFunctionsChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('functions', 'challenge4')


initFunctionsChallenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('functions', 'challenge5')


$(document).on('initialization:complete', initFunctionsChallenges)

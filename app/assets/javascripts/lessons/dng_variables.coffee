initVariablesChallenges = ->
  if (page = $('#variables')).length > 0
    initVariablesChallenge1(page)
    initVariablesChallenge2(page)
    initVariablesChallenge3(page)
    initVariablesChallenge4(page)
    initVariablesChallenge5(page)


initVariablesChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = '#483D8B'
    context.fillRect(60, 40, 300, 150)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your variables contain the correct values!'
        App.currentProgress.challengeComplete('variables', 'challenge1')
      else
        message = 'Nice try, but your variables do not contain the correct values.'

      canvas.alert(message, success)


initVariablesChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = '#A0522D'
    context.fillRect(100, 30, 160, 160)
    context.fillRect(260, 190, 80, 80)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your variables contain the correct values!'
        App.currentProgress.challengeComplete('variables', 'challenge2')
      else
        message = 'Nice try, but your variables do not contain the correct values.'

      canvas.alert(message, success)


initVariablesChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'Crimson'
    context.fillRect(40, 20, 260, 200)
    context.fillStyle = 'Tomato'
    context.fillRect(60, 40, 220, 160)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your variable expressions are correct!'
        App.currentProgress.challengeComplete('variables', 'challenge3')
      else
        message = 'Nice try, but your variable expressions are incorrect.'

      canvas.alert(message, success)


initVariablesChallenge4 = (page) ->
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
        App.currentProgress.challengeComplete('variables', 'challenge4')
      else
        message = 'Nice try, but your variable expressions are incorrect.'

      canvas.alert(message, success)


initVariablesChallenge5 = (page) ->
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
        App.currentProgress.challengeComplete('variables', 'challenge5')
      else
        message = 'Nice try, but your variable expressions are incorrect.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initVariablesChallenges)

initDngFillStyleChallenges = ->
  if (page = $('#fill_style')).length > 0
    initDngFillStyleChallenge1(page)
    initDngFillStyleChallenge2(page)
    initDngFillStyleChallenge3(page)


initDngFillStyleChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'OrangeRed'
    context.fillRect(100, 50, 200, 150)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your rectangle is the correct color!'
        App.currentProgress.challengeComplete('fill_style', 'challenge1')
      else
        message = 'Nice try, but the rectangle is not the correct color.'

      canvas.alert(message, success)


initDngFillStyleChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = '#7B68EE'
    context.fillRect(20, 160, 260, 140)
    context.fillStyle = 'rgba(46, 139, 87, 0.4)'
    context.fillRect(140, 40, 200, 200)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your rectangles are the correct color!'
        App.currentProgress.challengeComplete('fill_style', 'challenge2')
      else
        message = 'Nice try, but the rectangles are not the correct color.'

      canvas.alert(message, success)


initDngFillStyleChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'DarkOrange'
    context.fillRect(40, 40, 40, 200)
    context.fillRect(120, 40, 40, 200)
    context.fillRect(80, 120, 40, 40)
    context.fillStyle = 'FireBrick'
    context.fillRect(200, 40, 80, 40)
    context.fillRect(220, 80, 40, 120)
    context.fillRect(200, 200, 80, 40)
    context.fillStyle = 'Gold'
    context.fillRect(320, 40, 40, 140)
    context.fillRect(320, 200, 40, 40)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> The lines of code are all in the correct order!'
        App.currentProgress.challengeComplete('fill_style', 'challenge3')
      else
        message = 'Nice try, but you need to rearrange the lines of code to draw the image to the right.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngFillStyleChallenges)

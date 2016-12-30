initDngLineToChallenges = ->
  if (page = $('#dng_line_to')).length > 0
    initDngLineToChallenge1(page)
    initDngLineToChallenge2(page)
    initDngLineToChallenge3(page)
    initDngLineToChallenge4(page)
    initDngLineToChallenge5(page)
    initDngLineToChallenge6(page)


initDngLineToChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.beginPath()
    context.moveTo(40, 20)
    context.lineTo(240, 280)
    context.stroke()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your black line has the correct end points!'
        App.currentProgress.challengeComplete('dng_line_to', 'challenge1')
      else
        message = 'Nice try, but you need to draw the black line so it has the correct end points.'

      canvas.alert(message, success)


initDngLineToChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.lineWidth = 4
    context.lineCap = 'square'
    context.strokeStyle = 'SlateBlue'
    context.beginPath()
    context.moveTo(40, 120)
    context.lineTo(340, 240)
    context.stroke()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your line has the correct end points and the correct appearance!'
        App.currentProgress.challengeComplete('dng_line_to', 'challenge2')
      else
        message = 'Nice try, but you need to draw the line with the correct end points and the correct appearance.'

      canvas.alert(message, success)


initDngLineToChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.lineWidth = 3
    context.strokeStyle = 'OrangeRed'
    context.beginPath()
    context.moveTo(200, 160)
    context.lineTo(280, 120)
    context.lineTo(380, 240)
    context.lineTo(140, 280)
    context.lineTo(60, 40)
    context.stroke()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your connected straight lines are drawn correctly!'
        App.currentProgress.challengeComplete('dng_line_to', 'challenge3')
      else
        message = 'Nice try, but you need to draw a line that connects the five points correctly.'

      canvas.alert(message, success)


initDngLineToChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'Green'
    context.fillRect(140, 80, 120, 120)
    context.fillRect(80, 20, 60, 60)
    context.fillRect(260, 20, 60, 60)
    context.fillRect(80, 200, 60, 60)
    context.fillRect(260, 200, 60, 60)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> All five of your green squares are positioned and drawn correctly!'
        App.currentProgress.challengeComplete('dng_line_to', 'challenge4')
      else
        message = 'Nice try, but not all of your five green squares are positioned and drawn correctly.'

      canvas.alert(message, success)


initDngLineToChallenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'SaddleBrown'
    context.fillRect(60, 40, 280, 240)
    context.fillStyle = 'SkyBlue'
    context.fillRect(100, 80, 200, 160)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> The sky blue and saddle brown rectangles are layered, positioned, and drawn correctly!'
        App.currentProgress.challengeComplete('dng_line_to', 'challenge5')
      else
        message = 'Nice try, but the sky blue and saddle brown rectangles are not layered, positioned, and drawn correctly.'

      canvas.alert(message, success)


initDngLineToChallenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'MidnightBlue'
    context.fillRect(20, 20, 360, 240)
    context.fillStyle = 'Plum'
    context.fillRect(80, 80, 240, 120)
    context.fillStyle = 'LemonChiffon'
    context.fillRect(80, 80, 120, 60)
    context.fillRect(200, 140, 120, 60)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your drawing matches the image precisely!'
        App.currentProgress.challengeComplete('dng_line_to', 'challenge6')
      else
        message = 'Nice try, but your drawing does not match the image precisely.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngLineToChallenges)

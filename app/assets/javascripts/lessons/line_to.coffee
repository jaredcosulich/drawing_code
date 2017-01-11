initLineToChallenges = ->
  if (page = $('#line_to')).length > 0
    initLineToChallenge1(page)
    initLineToChallenge2(page)
    initLineToChallenge3(page)
    initLineToChallenge4(page)
    initLineToChallenge5(page)
    initLineToChallenge6(page)


initLineToChallenge1 = (page) ->
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
        App.currentProgress.challengeComplete('line_to', 'challenge1')
      else
        message = 'Nice try, but you need to draw the black line so it has the correct end points.'

      canvas.alert(message, success)


initLineToChallenge2 = (page) ->
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
        App.currentProgress.challengeComplete('line_to', 'challenge2')
      else
        message = 'Nice try, but you need to draw the line with the correct end points and the correct appearance.'

      canvas.alert(message, success)


initLineToChallenge3 = (page) ->
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
        App.currentProgress.challengeComplete('line_to', 'challenge3')
      else
        message = 'Nice try, but you need to draw a line that connects the five points correctly.'

      canvas.alert(message, success)


initLineToChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.lineWidth = 5
    context.strokeStyle = 'SaddleBrown'
    context.beginPath()
    context.moveTo(20, 180)
    context.lineTo(20, 100)
    context.lineTo(80, 95)
    context.lineTo(110, 40)
    context.lineTo(220, 40)
    context.lineTo(270, 95)
    context.lineTo(360, 110)
    context.lineTo(360, 180)
    context.closePath()
    context.stroke()
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You drew the outline of the polygon correctly!'
        App.currentProgress.challengeComplete('line_to', 'challenge4')
      else
        message = 'Nice try, but you need to draw a polygon by connecting all of the points correctly.'

      canvas.alert(message, success)


initLineToChallenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'MediumPurple'
    context.beginPath()
    context.moveTo(20, 90)
    context.lineTo(60, 20)
    context.lineTo(210, 20)
    context.lineTo(270, 90)
    context.lineTo(360, 110)
    context.lineTo(360, 200)
    context.lineTo(20, 200)
    context.fill()
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You connected the points and filled the polygon correctly!'
        App.currentProgress.challengeComplete('line_to', 'challenge5')
      else
        message = 'Nice try, but you need to connect the points and fill the polygon correctly.'

      canvas.alert(message, success)


initLineToChallenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.lineWidth = 6
    context.strokeStyle = 'DarkGreen'
    context.fillStyle = 'MediumSeaGreen'
    context.beginPath()
    context.moveTo(200, 20)
    context.lineTo(320, 220)
    context.lineTo(160, 280)
    context.lineTo(90, 140)
    context.closePath()
    context.fill()
    context.stroke()
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You connected the points and filled and outlined the polygon correctly!'
        App.currentProgress.challengeComplete('line_to', 'challenge6')
      else
        message = 'Nice try, but you need to connect the points and fill and outline the polygon correctly.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initLineToChallenges)

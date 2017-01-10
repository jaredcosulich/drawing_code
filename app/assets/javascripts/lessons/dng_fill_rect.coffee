initDngFillRectChallenges = ->
  if (page = $('#fill_rect')).length > 0
    initDngFillRectChallenge1(page)
    initDngFillRectChallenge2(page)
    initDngFillRectChallenge3(page)
    initDngFillRectChallenge4(page)
    initDngFillRectChallenge5(page)
    initDngFillRectChallenge6(page)


initDngFillRectChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'Red'
    context.fillRect(80, 40, 300, 200)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your red rectangle is at the correct coordinates and it has the correct width and height!'
        App.currentProgress.challengeComplete('fill_rect', 'challenge1')
      else
        message = 'Nice try, but you need to draw a red rectangle at (80, 40) with a width of 300 and a height of 200.'

      canvas.alert(message, success)


initDngFillRectChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'White'
    context.fillRect(30, 40, 120, 240)
    context.fillStyle = '#FC3D32'
    context.fillRect(150, 40, 240, 120)
    context.fillStyle = '#007E3A'
    context.fillRect(150, 160, 240, 120)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your white, red, and green rectangles are positioned correctly!'
        App.currentProgress.challengeComplete('fill_rect', 'challenge2')
      else
        message = 'Nice try, but you need to position and size the white, red, and green rectangles correctly.'

      canvas.alert(message, success)


initDngFillRectChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'DarkViolet'
    context.fillRect(50, 200, 320, 80)
    context.fillStyle = 'DarkBlue'
    context.fillRect(50, 40, 320, 160)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your dark blue rectangle is directly above the dark violet rectangle!'
        App.currentProgress.challengeComplete('fill_rect', 'challenge3')
      else
        message = 'Nice try, but you need to draw the dark blue rectangle directly above the dark violet rectangle with the correct dimensions.'

      canvas.alert(message, success)


initDngFillRectChallenge4 = (page) ->
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
        App.currentProgress.challengeComplete('fill_rect', 'challenge4')
      else
        message = 'Nice try, but not all of your five green squares are positioned and drawn correctly.'

      canvas.alert(message, success)


initDngFillRectChallenge5 = (page) ->
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
        App.currentProgress.challengeComplete('fill_rect', 'challenge5')
      else
        message = 'Nice try, but the sky blue and saddle brown rectangles are not layered, positioned, and drawn correctly.'

      canvas.alert(message, success)


initDngFillRectChallenge6 = (page) ->
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
        App.currentProgress.challengeComplete('fill_rect', 'challenge6')
      else
        message = 'Nice try, but your drawing does not match the image precisely.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngFillRectChallenges)

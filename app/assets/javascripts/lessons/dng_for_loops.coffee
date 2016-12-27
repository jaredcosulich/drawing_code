initDngForLoopsChallenges = ->
  if (page = $('#dng_for_loops')).length > 0
    initDngForLoopsChallenge1(page)
    initDngForLoopsChallenge2(page)
    initDngForLoopsChallenge3(page)
    initDngForLoopsChallenge4(page)
    initDngForLoopsChallenge5(page)
    initDngForLoopsChallenge6(page)


initDngForLoopsChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'BlueViolet'
    context.fillRect(40 * i, 60 * i, 200, 50) for i in [0..4]

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your for loop is drawing the rectangles correctly!'
        App.currentProgress.challengeComplete('dng_for_loops', 'challenge1')
      else
        message = 'Nice try, but you need to change the for loop to draw the rectangles correctly.'

      canvas.alert(message, success)


initDngForLoopsChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'MediumSeaGreen'
    context.fillRect(10, 10 + 25 * i, 80 + 30 * i, 20) for i in [0..9]

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your for loop is drawing the rectangles correctly!'
        App.currentProgress.challengeComplete('dng_for_loops', 'challenge2')
      else
        message = 'Nice try, but you need to create a for loop to draw the rectangles correctly.'

      canvas.alert(message, success)


initDngForLoopsChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawSquare = ->
      context.fillRect(0, 0, 20, 20)
      context.translate(20, 20)
      return
    
    context.fillStyle = 'SaddleBrown'
    context.translate(100, 20)
    drawSquare() for i in [0..11]

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your for loop is drawing the squares using transformations correctly!'
        App.currentProgress.challengeComplete('dng_for_loops', 'challenge3')
      else
        message = 'Nice try, but you need to create a for loop to draw the squares using transformations correctly.'

      canvas.alert(message, success)


initDngForLoopsChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawRectangle = (b) ->
      context.fillStyle = 'rgb(0, 0, ' + b + ')'
      context.fillRect(0, 0, 20, 200)
      context.translate(20, 0)
      return
    
    context.translate(10, 10)
    drawRectangle(i) for i in [0..255] by 15

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your for loop is drawing rectangles and filling them with shades of blue correctly!'
        App.currentProgress.challengeComplete('dng_for_loops', 'challenge4')
      else
        message = 'Nice try, but you need to create a for loop to draw rectangles and fill them with shades of blue correctly.'

      canvas.alert(message, success)


initDngForLoopsChallenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawRectangle = (w) ->
      context.fillRect(0, 0, w, 20)
      context.translate(0, 25)
      return
    
    context.translate(10, 10)
    context.fillStyle = 'MediumSeaGreen'
    drawRectangle(i) for i in [120, 280, 150, 90, 300, 400, 220, 250]

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your for loop is iterating over the array and drawing the bar graph correctly!'
        App.currentProgress.challengeComplete('dng_for_loops', 'challenge5')
      else
        message = 'Nice try, but you need to create a for loop to iterate over the array and draw the bar graph correctly.'

      canvas.alert(message, success)


initDngForLoopsChallenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawRectangle = ->
      context.fillRect(0, 0, 30, 20)
      context.translate(40, 0)
      return
    
    drawRow = ->
      context.save()
      drawRectangle() for j in [0..9]
      context.restore()
      context.translate(0, 30)
      return
    
    context.translate(10, 10)
    context.fillStyle = 'SlateBlue'
    drawRow() for i in [0..7]

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your nested for loops are drawing the grid of rectangles correctly!'
        App.currentProgress.challengeComplete('dng_for_loops', 'challenge6')
      else
        message = 'Nice try, but you need to create nested for loops to draw the grid of rectangles correctly.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngForLoopsChallenges)

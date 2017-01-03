initDngWhileLoopsChallenges = ->
  if (page = $('#dng_while_loops')).length > 0
    initDngWhileLoopsChallenge1(page)
    initDngWhileLoopsChallenge2(page)
    initDngWhileLoopsChallenge3(page)
    initDngWhileLoopsChallenge4(page)
    initDngWhileLoopsChallenge5(page)
    initDngWhileLoopsChallenge6(page)


initDngWhileLoopsChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    drawTree = (x) ->
      context.save()
      context.translate(x, 150)
      context.fillStyle = 'Sienna'
      context.fillRect(-5, 0, 10, 50)
      context.fillStyle = 'ForestGreen'
      context.beginPath()
      context.arc(0, 0, 15, 0, 2 * Math.PI, false)
      context.fill()
      context.restore()
      return
    
    drawGround = (x1, x2) ->
      context.save()
      context.translate(x1 - 5, 200)
      context.fillStyle = '#666666'
      context.fillRect(0, 0, x2 - x1 + 10, 10)
      context.restore()
      return
    
    x1 = 20
    x2 = 380
    
    drawGround(x1, x2)
    
    x = x1
    while x <= x2
      drawTree(x)
      x = x + 40
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your while loop is drawing the trees on the ground correctly!'
        App.currentProgress.challengeComplete('dng_while_loops', 'challenge1')
      else
        message = 'Nice try, but you need to update the while loop to draw the trees on the ground correctly.'

      canvas.alert(message, success)


initDngWhileLoopsChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'HotPink'
    i = 0
    while i < 6
      context.fillRect(40 * i, 50 * i, 45, 45)
      i = i + 1
    
    context.fillStyle = 'DarkOrange'
    j = 0
    while j < 6
      context.fillRect(40 * j + 100, 50 * j, 45, 45)
      j = j + 1

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You created a while loop that draws the same six squares as the for loop, just shifted to the right!'
        App.currentProgress.challengeComplete('dng_while_loops', 'challenge2')
      else
        message = 'Nice try, but you need to create a while loop that will draw the same six squares as the for loop, just shifted to the right.'

      canvas.alert(message, success)


initDngWhileLoopsChallenge3 = (page) ->
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
        App.currentProgress.challengeComplete('dng_while_loops', 'challenge3')
      else
        message = 'Nice try, but you need to create a for loop to draw the squares using transformations correctly.'

      canvas.alert(message, success)


initDngWhileLoopsChallenge4 = (page) ->
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
        App.currentProgress.challengeComplete('dng_while_loops', 'challenge4')
      else
        message = 'Nice try, but you need to create a for loop to draw rectangles and fill them with shades of blue correctly.'

      canvas.alert(message, success)


initDngWhileLoopsChallenge5 = (page) ->
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
        App.currentProgress.challengeComplete('dng_while_loops', 'challenge5')
      else
        message = 'Nice try, but you need to create a for loop to iterate over the array and draw the bar graph correctly.'

      canvas.alert(message, success)


initDngWhileLoopsChallenge6 = (page) ->
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
        App.currentProgress.challengeComplete('dng_while_loops', 'challenge6')
      else
        message = 'Nice try, but you need to create nested for loops to draw the grid of rectangles correctly.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngWhileLoopsChallenges)

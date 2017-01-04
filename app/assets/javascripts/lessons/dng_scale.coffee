initDngScaleChallenges = ->
  if (page = $('#dng_scale')).length > 0
    initDngScaleChallenge1(page)
    initDngScaleChallenge2(page)
    initDngScaleChallenge3(page)
    initDngScaleChallenge4(page)
    initDngScaleChallenge5(page)
    initDngScaleChallenge6(page)


initDngScaleChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.scale(2.5, 2.5)
    context.fillStyle = '#0055A4'
    context.fillRect(20, 20, 40, 80)
    context.fillStyle = '#FFFFFF'
    context.fillRect(60, 20, 40, 80)
    context.fillStyle = '#EF4135'
    context.fillRect(100, 20, 40, 80)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You scaled the French flag so it is 2.5 times wider and 2.5 times taller!'
        App.currentProgress.challengeComplete('dng_scale', 'challenge1')
      else
        message = 'Nice try, but you need to scale the French flag so it is 2.5 times wider and 2.5 times taller.'

      canvas.alert(message, success)


initDngScaleChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    drawFrenchFlag = (x, y) ->
      context.fillStyle = '#0055A4'
      context.fillRect(x, y, 40, 80)
      context.fillStyle = '#FFFFFF'
      context.fillRect(x + 40, y, 40, 80)
      context.fillStyle = '#EF4135'
      context.fillRect(x + 80, y, 40, 80)
      return
    
    context.scale(1.0, 1.4)
    drawFrenchFlag(40, 20)
    drawFrenchFlag(240, 20)
    drawFrenchFlag(60, 120)
    drawFrenchFlag(260, 120)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You scaled and positioned the four French flags correctly!'
        App.currentProgress.challengeComplete('dng_scale', 'challenge2')
      else
        message = 'Nice try, but you need to scale and position the four French flags correctly.'

      canvas.alert(message, success)


initDngScaleChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = 'HotPink'
    context.fillRect(20, 20, 80, 80)
    
    context.scale(2, 3);
    context.fillStyle = 'MediumVioletRed'
    context.fillRect(110, 15, 80, 80)
    
    context.scale(2, 0.5);
    context.fillStyle = 'RebeccaPurple'
    context.fillRect(5, 90, 80, 80)
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You scaled the three rectangles correctly!'
        App.currentProgress.challengeComplete('dng_scale', 'challenge3')
      else
        message = 'Nice try, but you need to scale the three rectangles by combining scale factors correctly.'

      canvas.alert(message, success)


initDngScaleChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawTree = (x, y) ->
      context.fillStyle = 'Sienna'
      context.fillRect(x - 10, y, 20, 100)
      context.fillStyle = 'ForestGreen'
      context.beginPath()
      context.arc(x, y, 30, 0, 2 * Math.PI, false)
      context.fill()
      return
    
    drawTree(40, 80)
    
    context.save()
    context.scale(1, 1.3)
    drawTree(140, 80)
    context.restore()
    
    context.save()
    context.scale(1, 0.8)
    drawTree(240, 80)
    context.restore()
    
    context.save()
    context.scale(1, 1.2)
    drawTree(340, 80)
    context.restore()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You scaled the four trees correctly by saving and restoring the drawing state!'
        App.currentProgress.challengeComplete('dng_scale', 'challenge4')
      else
        message = 'Nice try, but you need to scale the four trees correctly by saving and restoring the drawing state.'

      canvas.alert(message, success)


initDngScaleChallenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('dng_scale', 'challenge5')


initDngScaleChallenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawTheGround = (groundY) ->
      context.save()
      context.strokeStyle = 'Black'
      context.beginPath()
      context.moveTo(0, groundY)
      context.lineTo(canvas.width, groundY)
      context.stroke()
      context.restore()
      return
    
    drawPineTree = (centerX, groundY) ->
      context.save()
      context.translate(centerX, groundY)
      context.translate(-50, -240)
      context.fillStyle = 'ForestGreen'
      context.fillRect(40, 0, 20, 40)
      context.fillRect(30, 40, 40, 40)
      context.fillRect(20, 80, 60, 40)
      context.fillRect(10, 120, 80, 40)
      context.fillRect(0, 160, 100, 40)
      context.fillStyle = 'Sienna'
      context.fillRect(40, 200, 20, 40)
      context.restore()
      return
    
    drawTheGround(280)
    drawPineTree(150, 280)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You updated the function to position a pine tree by its anchor point correctly!'
        App.currentProgress.challengeComplete('dng_scale', 'challenge6')
      else
        message = 'Nice try, but you need to update the function to position a pine tree by its anchor point and then draw a pine tree on the ground.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngScaleChallenges)

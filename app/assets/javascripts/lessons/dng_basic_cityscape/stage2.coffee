initDngBasicCityscapeStage2Challenges = ->
  if (page = $('#basic_cityscape_stage2')).length > 0
    initDngBasicCityscapeStage2Challenge1(page)
    initDngBasicCityscapeStage2Challenge2(page)
    initDngBasicCityscapeStage2Challenge3(page)


initDngBasicCityscapeStage2Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      x = leftX
      y = groundY - h
      context.save()
      context.translate(x, y)
      context.fillStyle = '#999999'
      context.fillRect(0, 0, w, h)
      context.translate(4, 4)
      context.fillStyle = '#666666'
      context.fillRect(4, 2, 8, 10)
      context.restore()
      return
    
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    drawBuilding(100, 300, 6, 12)
    drawGround(300)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You moved the coordinate system to draw a window in the top left office of the building!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge1')
      else
        message = 'Nice try, but you need to move the coordinate system to draw a window in the top left office of the building.'

      canvas.alert(message, success)


initDngBasicCityscapeStage2Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      x = leftX
      y = groundY - h
      context.save()
      context.translate(x, y)
      context.fillStyle = '#999999'
      context.fillRect(0, 0, w, h)
      context.translate(4, 4)
      context.fillStyle = '#666666'
      i = 0
      while i < units
        context.fillRect(4, 2, 8, 10)
        context.translate(16, 0)
        i += 1
      context.restore()
      return
    
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    drawBuilding(50, 300, 12, 8)
    drawGround(300)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You used a for loop to draw a window in each office unit on the top floor of the building!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge2')
      else
        message = 'Nice try, but you need to use a for loop to draw a window in each office unit on the top floor of the building.'

      canvas.alert(message, success)


initDngBasicCityscapeStage2Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      x = leftX
      y = groundY - h
      context.save()
      context.translate(x, y)
      context.fillStyle = '#999999'
      context.fillRect(0, 0, w, h)
      context.translate(4, 4)
      context.fillStyle = '#666666'
      j = 0
      while j < floors
        context.save()
        i = 0
        while i < units
          context.fillRect(4, 2, 8, 10)
          context.translate(16, 0)
          i += 1
        context.restore()
        context.translate(0, 16)
        j += 1
      context.restore()
      return
    
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    drawBuilding(80, 300, 7, 10)
    drawGround(300)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You used two for loops to draw a window in every office unit on every floor of the building!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge3')
      else
        message = 'Nice try, but you need to use two for loops to draw a window in every office unit on every floor of the building.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngBasicCityscapeStage2Challenges)

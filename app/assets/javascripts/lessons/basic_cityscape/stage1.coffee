initBasicCityscapeStage1Challenges = ->
  if (page = $('#basic_cityscape_stage1')).length > 0
    initBasicCityscapeStage1Challenge1(page)
    initBasicCityscapeStage1Challenge2(page)
    initBasicCityscapeStage1Challenge3(page)
    initBasicCityscapeStage1Challenge4(page)
    initBasicCityscapeStage1Challenge5(page)
    initBasicCityscapeStage1Challenge6(page)


initBasicCityscapeStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    context.fillStyle = 'Black'
    context.fillRect(40, 80, 320, 160)
    drawGround(240)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You drew the building and positioned the ground correctly!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw the building and then figure out where to draw the ground correctly.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    x = 100
    y = 40
    w = 150
    h = 240
    
    context.fillStyle = '#999999'
    context.fillRect(x, y, w, h)
    drawGround(y + h)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You drew the gray building with the correct size and position, and positioned the ground beneath it!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge2')
      else
        message = 'Nice try, but you need to draw the gray building with the correct size and position, and position the ground beneath it.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawOffices = (x, y, units, floors) ->
      context.save()
      context.translate(x, y)
      context.strokeStyle = 'Black'
      i = 0
      while i < floors
        j = 0
        while j < units
          context.strokeRect(4 + 16 * j, 4 + 16 * i, 16, 16)
          j += 1
        i += 1
      context.restore()
      return
    
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    x = 120
    y = 80
    units = 8
    floors = 10
    w = 8 + 16 * units
    h = 8 + 16 * floors
    
    context.fillStyle = '#999999'
    context.fillRect(x, y, w, h)
    drawOffices(x, y, units, floors)
    drawGround(y + h)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You drew the gray building with the correct size and position, and positioned the ground beneath it!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge3')
      else
        message = 'Nice try, but you need to draw the gray building with the correct size and position, and position the ground beneath it.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (x, y, units, floors) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      context.fillStyle = '#999999'
      context.fillRect(x, y, w, h)
      return
    
    drawBuilding(60, 20, 8, 10)
    drawBuilding(210, 20, 6, 16)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You defined and used a function to draw both buildings with the correct size and position!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge4')
      else
        message = 'Nice try, but you need to define and then use a function to draw two buildings with the correct size and position.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      x = leftX
      y = groundY - h
      context.fillStyle = '#999999'
      context.fillRect(x, y, w, h)
      return
    
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    drawBuilding(20, 280, 12, 8)
    drawBuilding(230, 280, 9, 15)
    drawGround(280)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You defined and used a function to draw both buildings anchored to the ground at the correct position!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge5')
      else
        message = 'Nice try, but you need to define and then use a function to draw two buildings anchored to the ground at the correct position.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge6 = (page) ->
  challenge = page.find('#challenge6')
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
      context.restore()
      return
    
    drawGround = (y) ->
      context.save()
      context.fillStyle = 'Black'
      context.fillRect(0, y, canvas.width, 2)
      context.restore()
      return
    
    drawBuilding(20, 290, 10, 16)
    drawBuilding(200, 290, 12, 10)
    drawGround(290)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You positioned both buildings by translating the origin of the coordinate system!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge6')
      else
        message = 'Nice try, but you need to position the two buildings by translating the origin of the coordinate system.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initBasicCityscapeStage1Challenges)

initBasicCityscapeStage1Challenges = ->
  if (page = $('#granular_basic_cityscape_stage1')).length > 0
    initBasicCityscapeStage1Challenge1(page)
    initBasicCityscapeStage1Challenge2(page)
    initBasicCityscapeStage1Challenge3(page)
    initBasicCityscapeStage1Challenge4(page)
    initBasicCityscapeStage1Challenge5(page)
    initBasicCityscapeStage1Challenge6(page)
    initBasicCityscapeStage1Challenge7(page)
    initBasicCityscapeStage1Challenge8(page)


initBasicCityscapeStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(60, 90, 45, 45)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your rectangle is in the correct position and is the correct size!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw a rectangle in the correct position that is the correct size.'

      canvas.alert(message, success)

initBasicCityscapeStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(0, 260, canvas.width, 5)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      console.log('2', success)
      if success
        message = '<strong>Success!</strong> You\'ve drawn the ground at the right distance from the top!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge2')
      else
        message = 'Nice try, but you need to draw the ground the right distance from the top.'

      canvas.alert(message, success)

initBasicCityscapeStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 40, y: 240, canvas: canvas),
    new Test.Point(x: 360, y: 80, canvas: canvas),
    new Test.Point(x: 20, y: 240, badPoint: true, canvas: canvas)
    new Test.Point(x: 40, y: 260, badPoint: true, canvas: canvas)
    new Test.Point(x: 360, y: 60, badPoint: true, canvas: canvas)
    new Test.Point(x: 380, y: 80, badPoint: true, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      if success
        message = '<strong>Success!</strong> Your building is sitting on the x!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge3')
      else
        message = 'Nice try, but you need to draw a building sitting on the lower left x and covering the top right x.'

      canvas.alert(message, success)
    ), 200)

initBasicCityscapeStage1Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillStyle = '#999999'
    context.fillRect(60, 280 - 210, 90, 210)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your gray building is sitting on the x!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge4')
      else
        message = 'Nice try, but you need to draw a gray (#999999) building sitting on the x.'

      canvas.alert(message, success)

initBasicCityscapeStage1Challenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    ground = 240
    width = 200
    height = 80
    x = 60
    y = ground - height
    context.fillStyle = '#666666'
    context.fillRect x, y, width, height

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your gray building is the proper size and in the proper position!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge5')
      else
        message = 'Nice try, but you need to gray building (#666666) that is the proper size and in the proper position.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testCode = new Test.Code(code: challenge6Solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your gray building matches the description!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge6')
      else
        message = 'Nice try, but you need to draw a gray (#999999) building that is in the proper position and is the proper width and height.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge7 = (page) ->
  challenge = page.find('#challenge7')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testCode = new Test.Code(code: challenge7Solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve draw two buildings using a function!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge7')
      else
        message = 'Nice try, but you need to buildings of color #999999 that meet the description provided.'

      canvas.alert(message, success)


initBasicCityscapeStage1Challenge8 = (page) ->
  challenge = page.find('#challenge8')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testCode = new Test.Code(code: challenge8Solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve successfully used translate() to draw your buildings!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge8')
      else
        message = '''
          Nice try, but you need to draw the buildings as described.
          If you don\'t see anything make sure you aren\'t translating
          and then drawing the rectangle without factoring in the translation.
        '''

      canvas.alert(message, success)

$(document).on('initialization:complete', initBasicCityscapeStage1Challenges)



challenge6Solution = (canvas, context) ->
  ground = 280
  units = 8
  floors = 10
  w = units * 16 + 4 * 2
  h = floors * 16 + 4 * 2
  x = 120
  y = ground - h

  drawOffices = (x, y, w, h) ->
    u = Math.floor((w - 4) / 16)
    f = Math.floor((h - 4) / 16)
    context.save()
    context.translate x + 4, y + 4
    context.strokeWidth = 1
    context.strokeStyle = '#000000'
    i = 0
    while i < f
      j = 0
      while j < u
        context.strokeRect 16 * j, 16 * i, 16, 16
        j++
      i++
    context.restore()
    return

  context.fillStyle = '#999999'
  context.fillRect x, y, w, h
  drawOffices x, y, w, h


challenge7Solution = (canvas, context) ->
  ground = 300

  drawBuilding = (leftX, groundY, units, floors) ->
    context.save()
    context.fillStyle = '#999999'
    width = units * 16 + 4 * 2
    height = floors * 16 + 4 * 2
    context.fillRect leftX, groundY - height, width, height
    context.restore()
    return

  drawBuilding 50, ground, 8, 12
  drawBuilding 200, ground, 6, 18


challenge8Solution = (canvas, context) ->
  drawBuilding = (leftX, groundY, units, floors) ->
    context.save()
    width = units * 16 + 4 * 2
    height = floors * 16 + 4 * 2
    context.translate leftX, groundY - height
    context.fillStyle = '#999999'
    context.fillRect 0, 0, width, height
    context.restore()

  drawBuilding 40, 300, 12, 6
  drawBuilding 280, 300, 10, 15

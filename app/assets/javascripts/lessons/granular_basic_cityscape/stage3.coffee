initBasicCityscapeStage3Challenges = ->
  if (page = $('#granular_basic_cityscape_stage3')).length > 0
    initBasicCityscapeStage3Challenge1(page)
    initBasicCityscapeStage3Challenge2(page)
    initBasicCityscapeStage3Challenge3(page)
    initBasicCityscapeStage3Challenge4(page)


initBasicCityscapeStage3Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testImage = new Test.ImageComparison(image: challenge.find('.test-image'), canvas: canvas, preview: true)

  challenge.find('.run').click ->
    testImage.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve create three buildings with three different window types!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge1')
      else
        message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with three different window types shown in the challenge.'

      canvas.alert(message, success)


initBasicCityscapeStage3Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve create three buildings with three different window types and roof types!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge2')
      else
        message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with different window and roof types shown in the challenge.'

      canvas.alert(message, success)



initBasicCityscapeStage3Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge3')


initBasicCityscapeStage3Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('granular_basic_cityscape_stage3', 'challenge4')


$(document).on('initialization:complete', initBasicCityscapeStage3Challenges)



stage1Solution = (canvas, context) ->
  drawBuilding = (leftX, groundY, units, floors, windowType) ->
    context.save()
    unitDimension = 16
    floorDimension = 16
    width = units * unitDimension + 4 * 2
    height = floors * floorDimension + 4 * 2
    context.translate leftX, groundY - height
    context.fillStyle = '#999999'
    context.fillRect 0, 0, width, height
    context.translate 4, 4
    i = 0
    while i < floors
      context.save()
      j = 0
      while j < units
        drawWindow windowType
        context.translate 16, 0
        ++j
      context.restore()
      context.translate 0, 16
      ++i
    context.restore()
    return

  drawWindow = (windowType) ->
    context.fillStyle = '#666666'
    switch windowType
      when 0
        context.fillRect 4, 4, 8, 10
      when 1
        context.fillRect 2, 3, 5, 8
        context.fillRect 9, 3, 5, 8
      when 2
        context.fillRect 0, 3, 16, 8
      when 3
        context.fillRect 5, 1, 6, 14
    return

  drawBuilding 20, 320, 6, 10, 1
  drawBuilding 136, 320, 10, 6, 2
  drawBuilding 316, 320, 5, 14, 3


stage2Solution = (canvas, context) ->
  drawBuilding = (leftX, groundY, units, floors, windowType, roofType) ->
    context.save()
    unitDimension = 16
    floorDimension = 16
    width = units * unitDimension + 4 * 2
    height = floors * floorDimension + 4 * 2
    context.translate leftX, groundY - height
    context.fillStyle = '#999999'
    context.fillRect 0, 0, width, height
    context.save()
    context.translate 4, 4
    i = 0
    while i < floors
      context.save()
      j = 0
      while j < units
        drawWindow windowType
        context.translate 16, 0
        ++j
      context.restore()
      context.translate 0, 16
      ++i
    context.restore()
    drawRoof roofType, width
    context.restore()
    return

  drawWindow = (windowType) ->
    context.save()
    context.fillStyle = '#666666'
    switch windowType
      when 0
        context.fillRect 4, 4, 8, 10
      when 1
        context.fillRect 2, 3, 5, 8
        context.fillRect 9, 3, 5, 8
      when 2
        context.fillRect 0, 3, 16, 8
      when 3
        context.fillRect 5, 1, 6, 14
    context.restore()
    return

  drawRoof = (roofType, width) ->
    context.save()
    switch roofType
      when 1
        context.fillRect 8, -16, width - 16, 16
      when 2
        context.save()
        context.translate 8, -24
        context.fillRect 0, 0, width - 16, 24
        context.translate -8 + width / 2 - (32 / 2), -24
        context.fillRect 0, 0, 32, 24
        context.translate 32 / 2 - (8 / 2), -32
        context.fillRect 0, 0, 8, 32
        context.restore()
      when 3
        context.save()
        context.translate width / 2 - (64 / 2), -16
        context.fillRect 0, 0, 64, 16
        context.translate 64 / 2 - (32 / 2), 0
        context.beginPath()
        context.moveTo 0, 0
        context.lineTo 32 / 2, -64
        context.lineTo 32, 0
        context.closePath()
        context.fill()
        context.restore()
    context.restore()
    return

  drawBuilding 20, 320, 6, 10, 1, 2
  drawBuilding 136, 320, 10, 6, 2, 1
  drawBuilding 316, 320, 5, 14, 3, 3

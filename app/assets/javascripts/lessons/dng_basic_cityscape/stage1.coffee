initDngBasicCityscapeStage1Challenges = ->
  if (page = $('#dng_basic_cityscape_stage1')).length > 0
    initDngBasicCityscapeStage1Challenge1(page)
    initDngBasicCityscapeStage1Challenge2(page)
    initDngBasicCityscapeStage1Challenge3(page)
    initDngBasicCityscapeStage1Challenge4(page)


initDngBasicCityscapeStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawGround = (y) ->
      context.save()
      context.strokeStyle = 'Black'
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(canvas.width, y)
      context.stroke()
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
        App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw the building and then figure out where to draw the ground correctly.'

      canvas.alert(message, success)


initDngBasicCityscapeStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
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
      context.strokeStyle = 'Black'
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(canvas.width, y)
      context.stroke()
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
        App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge2')
      else
        message = 'Nice try, but you need to draw the gray building with the correct size and position, and position the ground beneath it.'

      canvas.alert(message, success)


initDngBasicCityscapeStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
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
        App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge3')
      else
        message = 'Nice try, but you need to define and then use a function to draw two buildings with the correct size and position.'

      canvas.alert(message, success)


initDngBasicCityscapeStage1Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 40, y: 300, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 240, y: 196, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 280, y: 300, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 448, y: 52, colors: [153, 153, 153], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      if success
        message = '<strong>Success!</strong> Your gray building is covering on the x\'s!'
        App.currentProgress.challengeComplete('dng_basic_cityscape_stage1', 'challenge4')
      else
        message = 'Nice try, but you need to draw a gray building covering the x\'s.'

      canvas.alert(message, success)
    ), 200)


$(document).on('initialization:complete', initDngBasicCityscapeStage1Challenges)



#
# context.moveTo(52, 223);
# context.lineTo(58, 229);
# context.moveTo(58, 223);
# context.lineTo(52, 229);




# context.fillStyle = '#0F278F';
# context.fillRect(50, 50, 100, 200);
#
# context.fillStyle = 'white';
# context.fillRect(150, 50, 100, 200);
#
# context.fillStyle = '#DB5443';
# context.fillRect(250, 50, 100, 200);

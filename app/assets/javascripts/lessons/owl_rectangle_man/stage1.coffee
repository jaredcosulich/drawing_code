initOwlRectangleManStage1Challenges = ->
  if (page = $('#owl_rectangle_man_stage1')).length > 0
    initOwlRectangleManStage1Challenge1(page)
    initOwlRectangleManStage1Challenge2(page)
    initOwlRectangleManStage1Challenge3(page)
    initOwlRectangleManStage1Challenge4(page)
    initOwlRectangleManStage1Challenge5(page)
    initOwlRectangleManStage1Challenge6(page)


initOwlRectangleManStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.fillRect(80, 40, 240, 160)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You drew the rectangle at the correct position and with the correct size!'
        App.currentProgress.challengeComplete('owl_rectangle_man_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw the rectangle at the correct position and with the correct size.'

      canvas.alert(message, success)


initOwlRectangleManStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    
    context.fillStyle = '#660099'
    context.fillRect(60, 40, 100, 80)
    context.fillStyle = 'rgb(255, 153, 51)'
    context.fillRect(20, 160, 300, 120)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You drew two rectangles filled with the correct colors!'
        App.currentProgress.challengeComplete('owl_rectangle_man_stage1', 'challenge2')
      else
        message = 'Nice try, but you need to draw two rectangles filled with the correct colors.'

      canvas.alert(message, success)


initOwlRectangleManStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('owl_rectangle_man_stage1', 'challenge3')


initOwlRectangleManStage1Challenge4 = (page) ->
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
        App.currentProgress.challengeComplete('owl_rectangle_man_stage1', 'challenge4')
      else
        message = 'Nice try, but you need to define and then use a function to draw two buildings with the correct size and position.'

      canvas.alert(message, success)


initOwlRectangleManStage1Challenge5 = (page) ->
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
        App.currentProgress.challengeComplete('owl_rectangle_man_stage1', 'challenge5')
      else
        message = 'Nice try, but you need to define and then use a function to draw two buildings anchored to the ground at the correct position.'

      canvas.alert(message, success)


initOwlRectangleManStage1Challenge6 = (page) ->
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
        App.currentProgress.challengeComplete('owl_rectangle_man_stage1', 'challenge6')
      else
        message = 'Nice try, but you need to position the two buildings by translating the origin of the coordinate system.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initOwlRectangleManStage1Challenges)

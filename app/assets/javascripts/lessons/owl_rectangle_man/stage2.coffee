initOwlRectangleManStage2Challenges = ->
  if (page = $('#owl_rectangle_man_stage2')).length > 0
    initOwlRectangleManStage2Challenge1(page)
    initOwlRectangleManStage2Challenge2(page)
    initOwlRectangleManStage2Challenge3(page)
    initOwlRectangleManStage2Challenge4(page)
    initOwlRectangleManStage2Challenge5(page)
    initOwlRectangleManStage2Challenge6(page)
    initOwlRectangleManStage2Challenge7(page)
    initOwlRectangleManStage2Challenge8(page)


initOwlRectangleManStage2Challenge1 = (page) ->
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
        App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge1')
      else
        message = 'Nice try, but you need to draw the rectangle at the correct position and with the correct size.'

      canvas.alert(message, success)


initOwlRectangleManStage2Challenge2 = (page) ->
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
        App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge2')
      else
        message = 'Nice try, but you need to draw two rectangles filled with the correct colors.'

      canvas.alert(message, success)


initOwlRectangleManStage2Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge3')


initOwlRectangleManStage2Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge4')


initOwlRectangleManStage2Challenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    context.save()
    context.translate(240, 80)
    context.fillStyle = '#CCAA77'
    context.fillRect(-4, 25, 68, 20)
    context.fillStyle = '#DDBB88'
    context.fillRect(10, 0, 40, 100)
    context.fillRect(0, 0, 60, 80)
    context.fillStyle = '#CCAA77'
    context.fillRect(25, 35, 10, 20)
    context.fillRect(23, 47, 14, 8)
    context.fillStyle = 'White'
    context.fillRect(10, 25, 15, 10)
    context.fillRect(35, 25, 15, 10)
    context.fillStyle = '#6699FF'
    context.fillRect(15, 28, 5, 4)
    context.fillRect(40, 28, 5, 4)
    context.fillStyle = '#994444'
    context.fillRect(22, 60, 16, 6)
    context.restore()
    
    context.save()
    context.translate(60, 180)
    context.fillStyle = '#884411'
    context.fillRect(0, 0, 10, 90)
    context.fillRect(50, 0, 10, 90)
    context.fillRect(0, 10, 60, 80)
    context.fillRect(10, 10, 40, 95)
    context.fillStyle = '#DDBB88'
    context.fillRect(5, 15, 50, 40)
    context.fillStyle = 'Yellow'
    context.fillRect(10, 25, 15, 10)
    context.fillRect(35, 25, 15, 10)
    context.fillStyle = 'Black'
    context.fillRect(15, 28, 5, 4)
    context.fillRect(40, 28, 5, 4)
    context.fillRect(28, 36, 4, 10)
    context.fillStyle = '#BB8833'
    context.fillRect(5, 85, 10, 22)
    context.fillRect(2, 100, 16, 7)
    context.fillRect(2, 104, 4, 6)
    context.fillRect(8, 104, 4, 6)
    context.fillRect(14, 104, 4, 6)
    context.fillRect(45, 85, 10, 22)
    context.fillRect(42, 100, 16, 7)
    context.fillRect(42, 104, 4, 6)
    context.fillRect(48, 104, 4, 6)
    context.fillRect(54, 104, 4, 6)
    context.restore()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You positioned Rectangle Man and Owl correctly!'
        App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge5')
      else
        message = 'Nice try, but you need to position Rectangle Man and Owl correctly.'

      canvas.alert(message, success)


initOwlRectangleManStage2Challenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge6')


initOwlRectangleManStage2Challenge7 = (page) ->
  challenge = page.find('#challenge7')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge7')


initOwlRectangleManStage2Challenge8 = (page) ->
  challenge = page.find('#challenge8')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('owl_rectangle_man_stage2', 'challenge8')


$(document).on('initialization:complete', initOwlRectangleManStage2Challenges)

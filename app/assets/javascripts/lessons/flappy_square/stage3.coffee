initFlappySquareStage3Challenges = ->
  if (page = $('#flappy_square_stage3')).length > 0
    initFlappySquareStage3Challenge1(page)
    initFlappySquareStage3Challenge2(page)
    initFlappySquareStage3Challenge3(page)
    initFlappySquareStage3Challenge4(page)
    initFlappySquareStage3Challenge5(page)


initFlappySquareStage3Challenge1 = (page) ->
  challengeIndex = 1
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{challengeIndex}")
    ), 3000)


initFlappySquareStage3Challenge2 = (page) ->
  challengeIndex = 2
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{challengeIndex}")
    ), 3000)


initFlappySquareStage3Challenge3 = (page) ->
  challengeIndex = 3
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{challengeIndex}")
    ), 3000)


initFlappySquareStage3Challenge4 = (page) ->
  challengeIndex = 4
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{challengeIndex}")
    ), 3000)


initFlappySquareStage3Challenge5 = (page) ->
  challengeIndex = 5
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 20, y: 35, badPoint: true, canvas: canvas)
    new Test.Point(x: 455, y: 35, badPoint: true, canvas: canvas)
    new Test.Point(x: 20, y: 290, badPoint: true, canvas: canvas)
    new Test.Point(x: 455, y: 290, badPoint: true, canvas: canvas)
  ]

  successCount = 0
  checkMultipleTimes = (callback) ->
    success = true
    for point in points
      if point.test() < 1
        success = false
        callback(false)
        return

    successCount += 1
    if successCount > 5
      callback(true)
    else
      setTimeout(( -> checkMultipleTimes(callback)), 200)

  challenge.find('.run').click ->
    successCount = 0
    setTimeout(( ->
      checkMultipleTimes (success) ->
        if success
          message = '<strong>Success!</strong> You\'ve cleared the area outside of the boundary!'
          App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{challengeIndex}")
        else
          message = 'Nice try, but you need to clear all areas outside of the boundary.'

        canvas.alert(message, success)
    ), 2500)



$(document).on('initialization:complete', initFlappySquareStage3Challenges)

initFlappySquareStage2Challenges = ->
  if (page = $('#flappy_square_stage2')).length > 0
    initFlappySquareStage2Challenge1(page)
    initFlappySquareStage2Challenge2(page)
    initFlappySquareStage2Challenge3(page)
    initFlappySquareStage2Challenge4(page)


initFlappySquareStage2Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge1')
    ), 1000)

initFlappySquareStage2Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge2')
    ), 2000)

initFlappySquareStage2Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge3')
    ), 2000)


initFlappySquareStage2Challenge4 = (page) ->
  challenge = page.find('#challenge4')
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
          App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge4')
        else
          message = 'Nice try, but you need to clear all areas outside of the boundary.'

        canvas.alert(message, success)
    ), 200)

$(document).on('initialization:complete', initFlappySquareStage2Challenges)

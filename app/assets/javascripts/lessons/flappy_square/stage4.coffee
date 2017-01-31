initFlappySquareStage4Challenges = ->
  if (page = $('#flappy_square_stage4')).length > 0
    initFlappySquareStage4Challenge1(page)
    initFlappySquareStage4Challenge2(page)
    initFlappySquareStage4Challenge3(page)


initFlappySquareStage4Challenge1 = (page) ->
  challengeIndex = 1
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', "challenge#{challengeIndex}")
    ), 500)


initFlappySquareStage4Challenge2 = (page) ->
  challengeIndex = 2
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', "challenge#{challengeIndex}")
    ), 2000)


initFlappySquareStage4Challenge3 = (page) ->
  challengeIndex = 3
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', "challenge#{challengeIndex}")
    ), 2000)


$(document).on('initialization:complete', initFlappySquareStage4Challenges)

initFlappySquareStage5Challenges = ->
  if (page = $('#flappy_square_stage5')).length > 0
    initFlappySquareStage5Challenge1(page)
    initFlappySquareStage5Challenge2(page)
    initFlappySquareStage5Challenge3(page)
    initFlappySquareStage5Challenge4(page)


initFlappySquareStage5Challenge1 = (page) ->
  challengeIndex = 1
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_Stage5', "challenge#{challengeIndex}")
    ), 500)


initFlappySquareStage5Challenge2 = (page) ->
  challengeIndex = 2
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_Stage5', "challenge#{challengeIndex}")
    ), 2000)


initFlappySquareStage5Challenge3 = (page) ->
  challengeIndex = 3
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_Stage5', "challenge#{challengeIndex}")
    ), 2000)


initFlappySquareStage5Challenge4 = (page) ->
  challengeIndex = 4
  challenge = page.find("#challenge#{challengeIndex}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_Stage5', "challenge#{challengeIndex}")
    ), 2000)


$(document).on('initialization:complete', initFlappySquareStage5Challenges)

initFlappySquareStage3Challenges = ->
  if (page = $('#flappy_square_stage3')).length > 0
    initFlappySquareStage3Challenge1(page)
    initFlappySquareStage3Challenge2(page)
    initFlappySquareStage3Challenge3(page)
    initFlappySquareStage3Challenge4(page)


initFlappySquareStage3Challenge1 = (page) ->
  stage = 1
  challenge = page.find("#challenge#{stage}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{stage}")
    ), 3000)


initFlappySquareStage3Challenge2 = (page) ->
  stage = 2
  challenge = page.find("#challenge#{stage}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{stage}")
    ), 3000)


initFlappySquareStage3Challenge3 = (page) ->
  stage = 3
  challenge = page.find("#challenge#{stage}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{stage}")
    ), 3000)


initFlappySquareStage3Challenge4 = (page) ->
  stage = 4
  challenge = page.find("#challenge#{stage}")
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', "challenge#{stage}")
    ), 3000)


$(document).on('initialization:complete', initFlappySquareStage3Challenges)

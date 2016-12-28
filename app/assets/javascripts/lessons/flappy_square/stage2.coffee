initFlappySquareStage2Challenges = ->
  if (page = $('#flappy_square_stage2')).length > 0
    initFlappySquareStage2Challenge1(page)
    initFlappySquareStage2Challenge2(page)
    initFlappySquareStage2Challenge3(page)


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

$(document).on('initialization:complete', initFlappySquareStage2Challenges)

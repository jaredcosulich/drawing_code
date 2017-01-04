initFlappySquareStage4Challenges = ->
  if (page = $('#flappy_square_stage4')).length > 0
    initFlappySquareStage4Challenge1(page)
    initFlappySquareStage4Challenge2(page)
    initFlappySquareStage4Challenge3(page)
    initFlappySquareStage4Challenge4(page)


initFlappySquareStage4Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge1')
    ), 500)



initFlappySquareStage4Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge2')
    ), 2000)



initFlappySquareStage4Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge3')
    ), 2000)



initFlappySquareStage4Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage4', 'challenge4')
    ), 2000)


$(document).on('initialization:complete', initFlappySquareStage4Challenges)

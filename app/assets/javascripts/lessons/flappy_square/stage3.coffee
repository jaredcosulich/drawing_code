initFlappySquareStage3Challenges = ->
  if (page = $('#flappy_square_stage3')).length > 0
    initFlappySquareStage3Challenge1(page)
    initFlappySquareStage3Challenge2(page)
    # initFlappySquareStage3Challenge3(page)


initFlappySquareStage3Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', 'challenge1')
    ), 3000)


initFlappySquareStage3Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', 'challenge2')
    ), 3000)


initFlappySquareStage3Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage3', 'challenge3')
    ), 3000)



$(document).on('initialization:complete', initFlappySquareStage3Challenges)

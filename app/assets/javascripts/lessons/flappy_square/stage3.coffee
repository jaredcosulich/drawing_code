initFlappySquareStage3Challenges = ->
  if (page = $('#flappy_square_stage3')).length > 0
    initFlappySquareStage3Challenge1(page)


initFlappySquareStage3Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      canvas.selfAssess ->
        App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge1')
    ), 1000)

$(document).on('initialization:complete', initFlappySquareStage3Challenges)

initFlappySquareStage2Challenges = ->
  if (page = $('#flappy_square_stage2')).length > 0
    initFlappySquareStage2Challenge1(page)


initFlappySquareStage2Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('flappy_square_stage2', 'challenge1')




$(document).on('initialization:complete', initFlappySquareStage2Challenges)

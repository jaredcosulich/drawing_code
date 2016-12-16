initBasicCityscapeStage4Challenges = ->
  if (page = $('#granular_basic_cityscape_stage4')).length > 0
    initBasicCityscapeStage4Challenge1(page)
    initBasicCityscapeStage4Challenge2(page)
    initBasicCityscapeStage4Challenge3(page)
    initBasicCityscapeStage4Challenge4(page)


initBasicCityscapeStage4Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('granular_basic_cityscape_stage4', 'challenge1')


initBasicCityscapeStage4Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('granular_basic_cityscape_stage4', 'challenge2')


initBasicCityscapeStage4Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('granular_basic_cityscape_stage4', 'challenge3')


initBasicCityscapeStage4Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('granular_basic_cityscape_stage4', 'challenge4')


$(document).on('initialization:complete', initBasicCityscapeStage4Challenges)



#
# context.moveTo(52, 223);
# context.lineTo(58, 229);
# context.moveTo(58, 223);
# context.lineTo(52, 229);




# context.fillStyle = '#0F278F';
# context.fillRect(50, 50, 100, 200);
#
# context.fillStyle = 'white';
# context.fillRect(150, 50, 100, 200);
#
# context.fillStyle = '#DB5443';
# context.fillRect(250, 50, 100, 200);

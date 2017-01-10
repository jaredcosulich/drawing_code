initDngBasicCityscapeStage4Challenges = ->
  if (page = $('#basic_cityscape_stage4')).length > 0
    initDngBasicCityscapeStage4Challenge1(page)
    initDngBasicCityscapeStage4Challenge2(page)
    initDngBasicCityscapeStage4Challenge3(page)
    initDngBasicCityscapeStage4Challenge4(page)


initDngBasicCityscapeStage4Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge1')


initDngBasicCityscapeStage4Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge2')


initDngBasicCityscapeStage4Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge3')


initDngBasicCityscapeStage4Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge4')


$(document).on('initialization:complete', initDngBasicCityscapeStage4Challenges)



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

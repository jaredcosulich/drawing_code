initDngBasicCityscapeStage4Challenges = ->
  if (page = $('#dng_basic_cityscape_stage4')).length > 0
    initDngBasicCityscapeStage4Challenge1(page)
    initDngBasicCityscapeStage4Challenge2(page)
    initDngBasicCityscapeStage4Challenge3(page)
    initDngBasicCityscapeStage4Challenge4(page)


initDngBasicCityscapeStage4Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge1')


initDngBasicCityscapeStage4Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge2')


initDngBasicCityscapeStage4Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge3')


initDngBasicCityscapeStage4Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('dng_basic_cityscape_stage4', 'challenge4')


$(document).on('initialization:complete', initDngBasicCityscapeStage4Challenges)

initBasicCityscapeStage4Challenges = ->
  if (page = $('#basic_cityscape_stage4')).length > 0
    initBasicCityscapeStage4Challenge1(page)
    initBasicCityscapeStage4Challenge2(page)
    initBasicCityscapeStage4Challenge3(page)
    initBasicCityscapeStage4Challenge4(page)


initBasicCityscapeStage4Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge1')


initBasicCityscapeStage4Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge2')


initBasicCityscapeStage4Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge3')


initBasicCityscapeStage4Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage4', 'challenge4')


$(document).on('initialization:complete', initBasicCityscapeStage4Challenges)

initDngBasicCityscapeStage3Challenges = ->
  if (page = $('#basic_cityscape_stage3')).length > 0
    initDngBasicCityscapeStage3Challenge1(page)
    initDngBasicCityscapeStage3Challenge2(page)
    initDngBasicCityscapeStage3Challenge3(page)
    initDngBasicCityscapeStage3Challenge4(page)


initDngBasicCityscapeStage3Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testImage = new Test.ImageComparison(image: challenge.find('.test-image'), canvas: canvas, preview: true)

  challenge.find('.run').click ->
    testImage.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve create three buildings with three different window types!'
        App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge1')
      else
        message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with three different window types shown in the challenge.'

      canvas.alert(message, success)


initDngBasicCityscapeStage3Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  testImage = new Test.ImageComparison(image: challenge.find('.test-image'), canvas: canvas, preview: true)

  challenge.find('.run').click ->
    testImage.test (success) ->
      if success
        message = '<strong>Success!</strong> You\'ve create three buildings with three different window types and roof types!'
        App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge2')
      else
        message = 'Nice try, but your drawing doesn\'t yet match the image of three buildings with different window and roof types shown in the challenge.'

      canvas.alert(message, success)


initDngBasicCityscapeStage3Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge3')


initDngBasicCityscapeStage3Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge4')


$(document).on('initialization:complete', initDngBasicCityscapeStage3Challenges)



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

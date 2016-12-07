initBasicCityscapeStage2Challenges = ->
  if (page = $('#basic_cityscape_stage2')).length > 0
    initBasicCityscapeStage2Challenge1(page)
    initBasicCityscapeStage2Challenge2(page)
    initBasicCityscapeStage2Challenge3(page)
    initBasicCityscapeStage2Challenge4(page)


initBasicCityscapeStage2Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 40, y: 240, canvas: canvas),
    new Test.Point(x: 360, y: 80, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      if success
        message = '<strong>Success!</strong> Your building is sitting on the x!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge1')
      else
        message = 'Nice try, but you need to draw a building sitting on the lower left x and covering the top right x.'

      canvas.alert(message, success)
    ), 200)


initBasicCityscapeStage2Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 120, y: 280, colors: [153,153,153], canvas: canvas),
    new Test.Point(x: 256, y: 112, colors: [153,153,153], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      if success
        message = '<strong>Success!</strong> Your gray building is sitting on the x!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge2')
      else
        message = 'Nice try, but you need to draw a gray building sitting on the x.'

      canvas.alert(message, success)
    ), 200)


initBasicCityscapeStage2Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 50, y: 300, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 186, y: 100, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 200, y: 300, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 304, y: 4, colors: [153, 153, 153], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      if success
        message = '<strong>Success!</strong> Your gray building is covering on the x\'s!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge3')
      else
        message = 'Nice try, but you need to draw a gray building covering the x\'s.'

      canvas.alert(message, success)
    ), 200)


initBasicCityscapeStage2Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 40, y: 300, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 240, y: 196, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 280, y: 300, colors: [153, 153, 153], canvas: canvas),
    new Test.Point(x: 448, y: 52, colors: [153, 153, 153], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      if success
        message = '<strong>Success!</strong> Your gray building is covering on the x\'s!'
        App.currentProgress.challengeComplete('basic_cityscape_stage2', 'challenge4')
      else
        message = 'Nice try, but you need to draw a gray building covering the x\'s.'

      canvas.alert(message, success)
    ), 200)


$(document).on('initialization:complete', initBasicCityscapeStage2Challenges)



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

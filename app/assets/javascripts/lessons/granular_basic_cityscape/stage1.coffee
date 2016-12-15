initBasicCityscapeStage1Challenges = ->
  if (page = $('#granular_basic_cityscape_stage1')).length > 0
    initBasicCityscapeStage1Challenge1(page)
    initBasicCityscapeStage1Challenge2(page)
    # initBasicCityscapeStage1Challenge3(page)
    # initBasicCityscapeStage1Challenge4(page)


initBasicCityscapeStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 40, y: 240, canvas: canvas),
    new Test.Point(x: 360, y: 80, canvas: canvas),
    new Test.Point(x: 20, y: 240, badPoint: true, canvas: canvas)
    new Test.Point(x: 40, y: 260, badPoint: true, canvas: canvas)
    new Test.Point(x: 360, y: 60, badPoint: true, canvas: canvas)
    new Test.Point(x: 380, y: 80, badPoint: true, canvas: canvas)
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
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw a building sitting on the lower left x and covering the top right x.'

      canvas.alert(message, success)
    ), 200)


initBasicCityscapeStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  # points = [
  #   new Test.Point(x: 120, y: 280, colors: [153,153,153], canvas: canvas),
  #   new Test.Point(x: 256, y: 112, colors: [153,153,153], canvas: canvas)
  # ]
  #
  # challenge.find('.run').click ->
  #   setTimeout(( ->
  #     success = true
  #     for point in points
  #       if point.test() < 1
  #         success = false
  #         break
  #
  #     if success
  #       message = '<strong>Success!</strong> Your gray building is sitting on the x!'
  #       App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge2')
  #     else
  #       message = 'Nice try, but you need to draw a gray (#999999) building sitting on the x.'
  #
  #     canvas.alert(message, success)
  #   ), 200)


initBasicCityscapeStage1Challenge3 = (page) ->
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
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge3')
      else
        message = 'Nice try, but you need to draw a gray building covering the x\'s.'

      canvas.alert(message, success)
    ), 200)


initBasicCityscapeStage1Challenge4 = (page) ->
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
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage1', 'challenge4')
      else
        message = 'Nice try, but you need to draw a gray building covering the x\'s.'

      canvas.alert(message, success)
    ), 200)


$(document).on('initialization:complete', initBasicCityscapeStage1Challenges)



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

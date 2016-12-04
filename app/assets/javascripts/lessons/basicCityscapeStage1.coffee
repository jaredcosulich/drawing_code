initBasicCityscapeStage1Challenges = ->
  if (page = $('#basic_cityscape_stage1')).length > 0
    initBasicCityscapeStage1Challenge1(page)
    initBasicCityscapeStage1Challenge2(page)
    initBasicCityscapeStage1Challenge3(page)


initBasicCityscapeStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 40, y: 240, colors: [0,0,0], canvas: canvas),
    new Test.Point(x: 360, y: 80, colors: [0,0,0], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break
      
      if success
        message = '<strong>Success!</strong> Your black building is sitting on the x!'
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw a black building sitting on the x.'

      canvas.alert(message, success)
    ), 200)


initBasicCityscapeStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 120, y: 280, colors: [153,153,153], canvas: canvas),
    new Test.Point(x: 288, y: 128, colors: [153,153,153], canvas: canvas)
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
        App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to draw a gray building sitting on the x.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge2') if success
    ), 200)


initBasicCityscapeStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 150, colors: [15, 39, 143], canvas: canvas),
    new Test.Point(x: 200, y: 150, colors: [255,255,255], canvas: canvas),
    new Test.Point(x: 300, y: 150, colors: [219, 84, 67], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> Your rectangle is covering the x\'s with the right colors!'
        else
          'Nice try, but you need to draw rectangles that cover each x in the right color.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('basic_cityscape_stage1', 'challenge3') if success
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

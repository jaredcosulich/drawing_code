initBasicCityscapeStage2Challenges = ->
  if (page = $('#granular_basic_cityscape_stage2')).length > 0
    initBasicCityscapeStage2Challenge1(page)
    initBasicCityscapeStage2Challenge2(page)
    initBasicCityscapeStage2Challenge3(page)


initBasicCityscapeStage2Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      context.save()
      width = units * 16 + 4 * 2
      height = floors * 16 + 4 * 2
      context.translate leftX, groundY - height
      context.fillStyle = '#999999'
      context.fillRect 0, 0, width, height
      context.save()
      context.fillStyle = '#666666'
      context.translate 4, 4
      context.translate 4, 4
      context.fillRect 0, 0, 8, 10
      context.restore()
      context.restore()
      return

    drawBuilding 100, 300, 6, 12

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your building now has a window in the correct location!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage2', 'challenge1')
      else
        message = 'Nice try, but you need to draw a building with a window in the right position. Check to make sure your window is postioned to account for both the building padding and the office padding.'

      canvas.alert(message, success)


initBasicCityscapeStage2Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      context.save()
      width = units * 16 + 4 * 2
      height = floors * 16 + 4 * 2
      context.translate leftX, groundY - height
      context.fillStyle = '#999999'
      context.fillRect 0, 0, width, height
      context.save()
      context.fillStyle = '#666666'
      context.translate 4, 4
      context.translate 4, 4
      i = 0
      while i < units
        context.fillRect 0, 0, 8, 10
        context.translate 16, 0
        ++i
      context.restore()
      context.restore()
      return

    drawBuilding 50, 300, 12, 8

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your building has a row of windows in the correct positions!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage2', 'challenge2')
      else
        message = 'Nice try, but you need to draw a building with the right dimensions and a row of windows in the correct positions.'
      canvas.alert(message, success)


initBasicCityscapeStage2Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawBuilding = (leftX, groundY, units, floors) ->
      context.save()
      width = units * 16 + 4 * 2
      height = floors * 16 + 4 * 2
      context.translate leftX, groundY - height
      context.fillStyle = '#999999'
      context.fillRect 0, 0, width, height
      context.save()
      context.translate 4, 4
      context.fillStyle = '#666666'
      j = 0
      while j < floors
        context.save()
        context.translate 4, 4
        i = 0
        while i < units
          context.fillRect 0, 0, 8, 10
          context.translate 16, 0
          ++i
        context.restore()
        context.translate 0, 16
        ++j
      context.restore()
      context.restore()
      return

    drawBuilding 80, 300, 7, 10


  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your building has a row of windows on each floor!'
        App.currentProgress.challengeComplete('granular_basic_cityscape_stage2', 'challenge3')
      else
        message = 'Nice try, but you need to draw a building with a row of windows on each floor.'

      canvas.alert(message, success)


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

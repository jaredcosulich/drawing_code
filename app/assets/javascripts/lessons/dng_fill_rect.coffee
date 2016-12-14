initDngFillRectChallenges = ->
  if (page = $('#dng_fill_rect')).length > 0
    initDngFillRectChallenge1(page)
    initDngFillRectChallenge2(page)
    initDngFillRectChallenge3(page)


initDngFillRectChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 100, colors: [255,0,0], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      if (success = (points[0].test() == 1))
        message = '<strong>Success!</strong> Your red rectangle is covering the x!'
        App.currentProgress.challengeComplete('dng_fill_rect', 'challenge1')
      else
        message = 'Nice try, but you need to draw a red rectangle that covers the x.'

      canvas.alert(message, success)
    ), 200)


initDngFillRectChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 100, canvas: canvas),
    new Test.Point(x: 100, y: 200, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> Your rectangle is covering the x\'s!'
        else
          'Nice try, but you need to draw a rectangle that covers both x\'s.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('dng_fill_rect', 'challenge2') if success
    ), 200)


initDngFillRectChallenge3 = (page) ->
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
      App.currentProgress.challengeComplete('dng_fill_rect', 'challenge3') if success
    ), 200)



$(document).on('initialization:complete', initDngFillRectChallenges)



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

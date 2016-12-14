initDngFillStyleChallenges = ->
  if (page = $('#dng_fill_style')).length > 0
    initDngFillStyleChallenge1(page)
    initDngFillStyleChallenge2(page)


initDngFillStyleChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 100, colors: [0,0,0], badColor: true, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      if (success = (points[0].test() == 1))
        message = '<strong>Success!</strong> Your rectangle is covering the x and is a color other than black!'
        App.currentProgress.challengeComplete('dng_fill_style', 'challenge1')
      else
        message = 'Nice try, but you need to draw a rectangle  that isn\'t black and that covers the x.'

      canvas.alert(message, success)
    ), 200)


initDngFillStyleChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 50, y: 100, colors: [128,0,128], canvas: canvas),
    new Test.Point(x: 100, y: 100, colors: [128,0,128], canvas: canvas),
    new Test.Point(x: 150, y: 100, colors: [128,0,128], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> Your rectangle are covering the x\'s and they\'re all purple!'
        else
          'Nice try, but you need to draw rectangles covering all x\'s with the colors provided.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('dng_fill_style', 'challenge2') if success
    ), 200)



$(document).on('initialization:complete', initDngFillStyleChallenges)

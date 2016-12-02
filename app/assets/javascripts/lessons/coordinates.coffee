initCoordinatesChallenges = ->
  if (page = $('#coordinates')).length > 0
    initCoordinatesChallenge1(page)
    initCoordinatesChallenge2(page)


initCoordinatesChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 0, y: 0, canvas: canvas),
    new Test.Point(x: 100, y: 100, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> Your rectangle is starting at (0,0) and goes to (100,100)!'
        else
          'Nice try, but your square needs to start in the upper left corner and be 100px on each side.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('coordinates', 'challenge1') if success
    ), 200)


initCoordinatesChallenge2 = (page) ->
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
      App.currentProgress.challengeComplete('coordinates', 'challenge2') if success
    ), 200)



$(document).on('initialization:complete', initCoordinatesChallenges)

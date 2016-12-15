initDngCoordinateSystemChallenges = ->
  if (page = $('#dng_coordinate_system')).length > 0
    initDngCoordinateSystemChallenge1(page)
    initDngCoordinateSystemChallenge2(page)
    initDngCoordinateSystemChallenge3(page)


initDngCoordinateSystemChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 50, y: 150, canvas: canvas),
    new Test.Point(x: 200, y: 100, canvas: canvas),
    new Test.Point(x: 250, y: 200, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      errorCount = 0
      for point in points
        if point.test() < 1
          success = false
          errorCount += 1
      successCount = 3 - errorCount
      
      if success
        message = '<strong>Success!</strong> You drew all three points!'
      else if (successCount == 0)
        message = 'Nice try, but you need to draw the points at the correct coordinates.'
      else if (successCount == 1)
        message = 'Good start. One point is correct. Only two more to go.'
      else
        message = 'Almost there. Two points are correct. Only one more to go.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('dng_coordinate_system', 'challenge1') if success
    ), 200)


initDngCoordinateSystemChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 80, y: 40, canvas: canvas),
    new Test.Point(x: 280, y: 40, canvas: canvas),
    new Test.Point(x: 80, y: 160, canvas: canvas),
    new Test.Point(x: 280, y: 160, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      errorCount = 0
      for point in points
        if point.test() < 1
          success = false
          errorCount += 1
      successCount = 4 - errorCount
      
      if success
        message = '<strong>Success!</strong> You drew points at all four corners of the rectangle!'
      else if (successCount == 0)
        message = 'Nice try, but you need to draw points at all four corners of the rectangle.'
      else if (successCount == 1)
        message = 'Good start. One point is correct. Only three more to go.'
      else if (successCount == 2)
        message = 'Keep going. Two points are correct. Only two more to go.'
      else
        message = 'Almost there. Three points are correct. Only one more to go.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('dng_coordinate_system', 'challenge2') if success
    ), 200)


initDngCoordinateSystemChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 50, y: 260, canvas: canvas),
    new Test.Point(x: 410, y: 80, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      errorCount = 0
      for point in points
        if point.test() < 1
          success = false
          errorCount += 1
      successCount = 2 - errorCount
      
      if success
        message = '<strong>Success!</strong> You drew points at both corners!'
      else if (successCount == 0)
        message = 'Nice try, but you need to draw points at the two corners.'
      else
        message = 'Good start. One point is correct. Only one more to go.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('dng_coordinate_system', 'challenge3') if success
    ), 200)


$(document).on('initialization:complete', initDngCoordinateSystemChallenges)

initFunctionsChallenges = ->
  if (page = $('#functions')).length > 0
    initFunctionsChallenge1(page)


initFunctionsChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 50, y: 50, colors: [255, 0, 0], canvas: canvas),
    new Test.Point(x: 150, y: 100, colors: [255, 0, 0], canvas: canvas),
    new Test.Point(x: 50, y: 150, colors: [0, 128, 0], canvas: canvas),
    new Test.Point(x: 150, y: 200, colors: [0, 128, 0], canvas: canvas),
    new Test.Point(x: 50, y: 250, colors: [0, 0, 255], canvas: canvas)
    new Test.Point(x: 150, y: 300, colors: [0, 0, 255], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> Your function is building the correctly sized, positioned, and colored rectangles.'
        else
          'Nice try, but your rectangles need to be the correct dimensions and colors and at the correct locations..'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('functions', 'challenge1') if success
    ), 200)

$(document).on('initialization:complete', initFunctionsChallenges)

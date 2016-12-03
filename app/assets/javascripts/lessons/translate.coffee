initTranslateChallenges = ->
  if (page = $('#translate')).length > 0
    initTranslateChallenge1(page)


initTranslateChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 50, y: 50, colors: [42, 50, 163], canvas: canvas),
    new Test.Point(x: 125, y: 125, colors: [42, 50, 163], canvas: canvas),
    new Test.Point(x: 200, y: 200, colors: [42, 50, 163], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> You\'ve successfully translated the square to the right spots on the grid!'
        else
          'Nice try, but you need to translate the square to cover each x.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('translate', 'challenge1') if success
    ), 200)

$(document).on('initialization:complete', initTranslateChallenges)

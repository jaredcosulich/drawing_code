initSaveChallenges = ->
  if (page = $('#save')).length > 0
    initSaveChallenge1(page)


initSaveChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  editor.run()

  points = [
    new Test.Point(x: 50, y: 100, colors: [0, 0, 0], canvas: canvas),
    new Test.Point(x: 150, y: 100, colors: [255, 0, 0], canvas: canvas),
    new Test.Point(x: 250, y: 100, colors: [0, 0, 0], canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> The third square is black while the second is still red and the first is still black!'
        else
          'Nice try, but the first square should be black, the second should be red, and the third should be black again.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('save', 'challenge1') if success
    ), 200)

$(document).on('initialization:complete', initSaveChallenges)

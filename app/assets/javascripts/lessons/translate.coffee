initTranslateChallenges = ->
  if (page = $('#translate')).length > 0
    initTranslateChallenge1(page)
    initTranslateChallenge2(page)


initTranslateChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  # points = [
  #   new Test.Point(x: 0, y: 0, canvas: canvas),
  #   new Test.Point(x: 100, y: 100, canvas: canvas)
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
  #     message = if success
  #         '<strong>Success!</strong> Your rectangle is starting at (0,0) and goes to (100,100)!'
  #       else
  #         'Nice try, but your square needs to start in the upper left corner and be 100px on each side.'
  #
  #     canvas.alert(message, success)
  #     App.currentProgress.challengeComplete('translate', 'challenge1') if success
  #   ), 200)


initTranslateChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  # points = [
  #   new Test.Point(x: 0, y: 0, canvas: canvas),
  #   new Test.Point(x: 0, y: 360, canvas: canvas),
  #   new Test.Point(x: 600, y: 0, canvas: canvas),
  #   new Test.Point(x: 600, y: 360, canvas: canvas)
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
  #     message = if success
  #         '<strong>Success!</strong> You\'ve convered the whole canvas, from (0,0) to (600,360)!'
  #       else
  #         'Nice try, but the whole canvas is not yet convered.'
  #
  #     canvas.alert(message, success)
  #     App.currentProgress.challengeComplete('translate', 'challenge2') if success
  #   ), 200)

$(document).on('initialization:complete', initTranslateChallenges)

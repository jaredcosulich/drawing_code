initFloorChallenges = ->
  if (page = $('#for_loops')).length > 0
    initFloorChallenge1(page)


initFloorChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = []
  for i in [0...8]
    ground = 250
    width = 25
    height = 200 - (25 * i)
    x = 50 + (width * i)
    y = ground - height
    points.push(new Test.Point(x: x, y: ground, canvas: canvas))
    points.push(new Test.Point(x: x+width, y: ground-height, canvas: canvas))
    points.push(new Test.Point(x: x+width, y: ground-(height+25), badPoint: true, canvas: canvas))

  challenge.find('.run').click ->
    setTimeout(( ->
      success = true
      for point in points
        if point.test() < 1
          success = false
          break

      message = if success
          '<strong>Success!</strong> Your loop has drawn the stairs as described.'
        else
          'Nice try, but your staircase does not fit the description provided.'

      canvas.alert(message, success)
      App.currentProgress.challengeComplete('for_loops', 'challenge1') if success
    ), 200)

$(document).on('initialization:complete', initFloorChallenges)

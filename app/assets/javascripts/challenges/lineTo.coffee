initLineToChallenges = ->
  initLineToChallenge1()
  initLineToChallenge2()
  initLineToChallenge3()

pointsMessage = (canvas, points) ->
  successfulPoints = []
  failedPoints = []
  badPoints = []
  for point in points
    if point.test() > 0
      point.display()
      successfulPoints.push(point)
    else
      if point.badPoint
        badPoints.push(point)
      else
        failedPoints.push(point)

  if failedPoints.length > 0 || badPoints.length > 0
    message = 'Nice try, but '
    if failedPoints.length > 0
      message += "you missed the x#{if failedPoints.length > 1 then '\'s' else ''} at "
      message += ("(#{point.x}, #{point.y})" for point in failedPoints).join(', ')
      message += ' and ' if badPoints.length > 0
    if badPoints.length > 0
      message += "your line is going through the x#{if failedPoints.length > 1 then '\'s' else ''} at "
      message += ("(#{point.x}, #{point.y})" for point in badPoints).join(', ')
  else
    message = '<strong>Success!</strong> Your line is going through all of the good X\'s!'

  canvas.alert(message, (failedPoints.length == 0 && badPoints.length == 0))


initLineToChallenge1 = ->
  canvas = new App.Canvas($('#line_to #challenge1 canvas'))
  editor = new App.Editor($('#line_to #challenge1 .editor'), canvas)

  points = [
    new Test.Point(x: 55, y: 226, canvas: canvas),
    new Test.Point(x: 105, y: 153, canvas: canvas),
    new Test.Point(x: 155, y: 80, canvas: canvas)
  ]

  $('#line_to #challenge1 .run').click ->
    setTimeout(( ->
      pointsMessage(canvas, points)
    ), 200)


initLineToChallenge2 = ->
  canvas = new App.Canvas($('#line_to #challenge2 canvas'))
  editor = new App.Editor($('#line_to #challenge2 .editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 50, canvas: canvas),
    new Test.Point(x: 100, y: 250, canvas: canvas),
    new Test.Point(x: 200, y: 250, canvas: canvas)
  ]

  $('#line_to #challenge2 .run').click ->
    setTimeout(( ->
      pointsMessage(canvas, points)
    ), 200)


initLineToChallenge3 = ->
  canvas = new App.Canvas($('#line_to #challenge3 canvas'))
  editor = new App.Editor($('#line_to #challenge3 .editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 100, canvas: canvas),
    new Test.Point(x: 100, y: 200, canvas: canvas),
    new Test.Point(x: 200, y: 100, canvas: canvas),
    new Test.Point(x: 200, y: 200, canvas: canvas),
    new Test.Point(x: 150, y: 100, canvas: canvas, badPoint: true),
    new Test.Point(x: 150, y: 150, canvas: canvas, badPoint: true),
    new Test.Point(x: 150, y: 200, canvas: canvas, badPoint: true)
  ]

  $('#line_to #challenge3 .run').click ->
    setTimeout(( ->
      pointsMessage(canvas, points)
    ), 200)

$(document).on('turbolinks:load', initLineToChallenges)



# var canvas = document.getElementById('line_to_challenge');
# var context = canvas.getContext("2d");
# context.clearRect(0, 0, 300, 300);
# context.beginPath();
#
# context.moveTo(52, 223);
# context.lineTo(58, 229);
# context.moveTo(58, 223);
# context.lineTo(52, 229);
#
# context.moveTo(102, 150);
# context.lineTo(108, 156);
# context.moveTo(108, 150);
# context.lineTo(102, 156);
#
# context.moveTo(152, 77);
# context.lineTo(158, 83);
# context.moveTo(158, 77);
# context.lineTo(152, 83);
#
# context.stroke();




# var canvas = document.getElementById('line_to_challenge');
# var context = canvas.getContext("2d");
# context.clearRect(0, 0, 300, 300);
# context.beginPath();
# context.moveTo(55,226);
# context.lineTo(155,80);
# context.stroke();

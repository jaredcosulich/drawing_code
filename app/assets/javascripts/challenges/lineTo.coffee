initLineToChallenges = ->
  initLineToChallenge1()
  initLineToChallenge2()

pointsMessage = (canvas, points) ->
  successfulPoints = []
  failedPoints = []
  for point in points
    if point.test() > 0
      point.display()
      successfulPoints.push(point)
    else
      failedPoints.push(point)

  if failedPoints.length > 0
    message = 'Nice try, but you missed the '
    message += "x#{if failedPoints.length > 1 then '\'s' else ''} at "
    message += ("(#{point.x}, #{point.y})" for point in failedPoints).join(', ')
  else
    message = '<strong>Success!</strong> Your line is going through all of the X\'s!'

  canvas.alert(message, (failedPoints.length == 0))


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

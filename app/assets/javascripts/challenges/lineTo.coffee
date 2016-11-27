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

initLineToChallenges = ->
  editor = new App.Editor($('#line_to #challenge1 .editor'))
  canvas = new App.Canvas($('#line_to #challenge1 canvas'))

  points = [
    new Test.Point(x: 55, y: 226, canvas: canvas),
    new Test.Point(x: 105, y: 153, canvas: canvas),
    new Test.Point(x: 155, y: 80, canvas: canvas)
  ]

  $('#line_to #challenge1 .run').click ->
    setTimeout(( ->
      point.display(point.test()) for point in points


    ), 100)

$(document).on('turbolinks:load', initLineToChallenges)

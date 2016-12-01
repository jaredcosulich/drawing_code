initVariablesChallenges = ->
  if (page = $('#variables')).length > 0
    initVariablesChallenge1(page)
    initVariablesChallenge2(page)
    # initVariablesChallenge3(page)


initVariablesChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 100, canvas: canvas),
    new Test.Point(x: 100, y: 200, canvas: canvas),
    new Test.Point(x: 150, y: 100, canvas: canvas),
    new Test.Point(x: 150, y: 200, canvas: canvas),
    new Test.Point(x: 200, y: 100, canvas: canvas),
    new Test.Point(x: 200, y: 200, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      successfulPoints = []
      failedPoints = []
      for point in points
        if point.test() > 0
          point.display()
          successfulPoints.push(point)
        else
          failedPoints.push(point)


      if (failedPoints.length == 0)
        message = '<strong>Success!</strong> Your line is going through all of the x\'s!'
      else
        message = 'Nice try, but your line isn\'t going through all of the x\'s.'

      canvas.alert(message, failedPoints.length == 0)
      App.currentProgress.challengeComplete('variables', 'challenge1') if failedPoints.length == 0
    ), 200)


initVariablesChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = for i in [0...9]
    c = 255 - (i * 25)
    new Test.Point(x: 62 + (25 * i), y: 100, colors: [c,c,c], canvas: canvas)

  challenge.find('.run').click ->
    setTimeout(( ->
      successfulPoints = []
      failedPoints = []
      for point in points
        if point.test() > 0
          point.display()
          successfulPoints.push(point)
        else
          failedPoints.push(point)


      if (failedPoints.length == 0)
        message = '<strong>Success!</strong> You\'ve created a grayscale pattern through all of the x\'s!'
      else
        message = 'Nice try, but your rectangles aren\'t going the x\'s while also moving from white to black.'

      canvas.alert(message, failedPoints.length == 0)
      App.currentProgress.challengeComplete('variables', 'challenge2') if failedPoints.length == 0
    ), 200)



$(document).on('initialization:complete', initVariablesChallenges)



#
# context.moveTo(52, 223);
# context.lineTo(58, 229);
# context.moveTo(58, 223);
# context.lineTo(52, 229);




# context.fillStyle = '#0F278F';
# context.Variables(50, 50, 100, 200);
#
# context.fillStyle = 'white';
# context.Variables(150, 50, 100, 200);
#
# context.fillStyle = '#DB5443';
# context.Variables(250, 50, 100, 200);

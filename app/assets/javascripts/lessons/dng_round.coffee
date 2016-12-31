initDngRoundChallenges = ->
  if (page = $('#dng_round')).length > 0
    initDngRoundChallenge1(page)
    initDngRoundChallenge2(page)
    initDngRoundChallenge3(page)


initDngRoundChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    a = 90 * Math.PI
    b = 1.6 * Math.exp(5)
    w = Math.ceil(a)
    h = Math.ceil(b)
    context.fillStyle = 'Orchid'
    context.fillRect(40, 40, w, h)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You rounded the dimensions of the rectangle correctly!'
        App.currentProgress.challengeComplete('dng_round', 'challenge1')
      else
        message = 'Nice try, but you need to round the values of a and b up to get the dimensions of the rectangle.'

      canvas.alert(message, success)


initDngRoundChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    r = 255
    g = 165
    b = 0
    
    context.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    context.fillRect(10, 10, 90, 280)
    context.fillStyle = 'rgb(' + Math.round(0.75 * r) + ', ' + Math.round(0.75 * g) + ', ' + Math.round(0.75 * b) + ')'
    context.fillRect(100, 10, 90, 280)
    context.fillStyle = 'rgb(' + Math.round(0.5 * r) + ', ' + Math.round(0.5 * g) + ', ' + Math.round(0.5 * b) + ')'
    context.fillRect(190, 10, 90, 280)
    context.fillStyle = 'rgb(' + Math.round(0.25 * r) + ', ' + Math.round(0.25 * g) + ', ' + Math.round(0.25 * b) + ')'
    context.fillRect(280, 10, 90, 280)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You have calculated and rounded the RGB values correctly!'
        App.currentProgress.challengeComplete('dng_round', 'challenge2')
      else
        message = 'Nice try, but you need to calculate and round the RGB values, and use them to fill the rectangles.'

      canvas.alert(message, success)


initDngRoundChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    a = 90 * Math.PI
    b = 1.6 * Math.exp(5)
    w = 50 * Math.round(a / 50)
    h = 30 * Math.round(b / 30)
    
    context.fillStyle = 'OrangeRed'
    context.fillRect(50, 30, w, h)
    
    context.fillStyle = 'Black'
    context.font = '16px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(w + ' x ' + h, 50 + w / 2, 30 + h / 2)
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You rounded the dimensions of the rectangle correctly!'
        App.currentProgress.challengeComplete('dng_round', 'challenge3')
      else
        message = 'Nice try, but you need round the width of the rectangle to the nearest multiple of 50 and the height to the nearest multiple of 30.'

      canvas.alert(message, success)


$(document).on('initialization:complete', initDngRoundChallenges)

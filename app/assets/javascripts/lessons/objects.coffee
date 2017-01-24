initObjectsChallenges = ->
  if (page = $('#objects')).length > 0
    initObjectsChallenge1(page)
    initObjectsChallenge2(page)
    initObjectsChallenge3(page)


initObjectsChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    drawTree = (x) ->
      context.save()
      context.translate(x, 150)
      context.fillStyle = 'Sienna'
      context.fillRect(-5, 0, 10, 50)
      context.fillStyle = 'ForestGreen'
      context.beginPath()
      context.arc(0, 0, 15, 0, 2 * Math.PI, false)
      context.fill()
      context.restore()
      return
    
    drawGround = (x1, x2) ->
      context.save()
      context.translate(x1 - 5, 200)
      context.fillStyle = '#666666'
      context.fillRect(0, 0, x2 - x1 + 10, 10)
      context.restore()
      return
    
    x1 = 20
    x2 = 380
    
    drawGround(x1, x2)
    
    x = x1
    while x <= x2
      drawTree(x)
      x = x + 40
  
  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> Your while loop is drawing the trees on the ground correctly!'
        App.currentProgress.challengeComplete('objects', 'challenge1')
      else
        message = 'Nice try, but you need to update the while loop to draw the trees on the ground correctly.'

      canvas.alert(message, success)


initObjectsChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.fillStyle = 'HotPink'
    i = 0
    while i < 6
      context.fillRect(40 * i, 50 * i, 45, 45)
      i = i + 1
    
    context.fillStyle = 'DarkOrange'
    j = 0
    while j < 6
      context.fillRect(40 * j + 100, 50 * j, 45, 45)
      j = j + 1

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You created a while loop that draws the same six squares as the for loop, just shifted to the right!'
        App.currentProgress.challengeComplete('objects', 'challenge2')
      else
        message = 'Nice try, but you need to create a while loop that will draw the same six squares as the for loop, just shifted to the right.'

      canvas.alert(message, success)


initObjectsChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('objects', 'challenge3')


$(document).on('initialization:complete', initObjectsChallenges)

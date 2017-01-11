initSwitchStatementsChallenges = ->
  if (page = $('#switch_statements')).length > 0
    initSwitchStatementsChallenge1(page)
    initSwitchStatementsChallenge2(page)
    initSwitchStatementsChallenge3(page)
    initSwitchStatementsChallenge4(page)


initSwitchStatementsChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('switch_statements', 'challenge1')


initSwitchStatementsChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  solution = (canvas, context) ->
    context.save()
    context.translate(200, 10)
    context.fillStyle = '#0055A4'
    context.fillRect(0, 0, 60, 120)
    context.fillStyle = '#FFFFFF'
    context.fillRect(60, 0, 60, 120)
    context.fillStyle = '#EF4135'
    context.fillRect(120, 0, 60, 120)
    context.restore()
    
    context.save()
    context.translate(10, 90)
    context.fillStyle = '#FCD116'
    context.fillRect(0, 0, 180, 60)
    context.fillStyle = '#003893'
    context.fillRect(0, 60, 180, 30)
    context.fillStyle = '#CE1126'
    context.fillRect(0, 90, 180, 30)
    context.restore()
    
    context.save()
    context.translate(200, 170)
    context.fillStyle = '#FFFFFF'
    context.fillRect(0, 0, 180, 120)
    context.restore()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You used a switch statement to draw three different flags!'
        App.currentProgress.challengeComplete('switch_statements', 'challenge2')
      else
        message = 'Nice try, but you need to create a switch statement to draw three different flags.'

      canvas.alert(message, success)


initSwitchStatementsChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawRedDoor = (x, y, detailLevel) ->
      context.save()
      context.translate(x, y)
      context.fillStyle = '#FF0000'
      context.fillRect(0, 0, 120, 240)
      
      switch detailLevel
        when 3
          context.fillStyle = '#99CCFF'
          context.fillRect(20, 20, 80, 60)
          context.fillStyle = '#FFD700'
          context.fillRect(90, 120, 16, 16)
          context.fillRect(40, 180, 40, 16)
        when 2
          context.fillStyle = '#99CCFF'
          context.fillRect(20, 20, 80, 60)
          context.fillStyle = '#FFD700'
          context.fillRect(90, 120, 16, 16)
        when 1
          context.fillStyle = '#FFD700'
          context.fillRect(90, 120, 16, 16)
      
      context.restore()
      return
    
    drawRedDoor(10, 20, 1)
    drawRedDoor(140, 20, 2)
    drawRedDoor(270, 20, 3)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You used a switch statement to draw three red doors with increasing levels of detail!'
        App.currentProgress.challengeComplete('switch_statements', 'challenge3')
      else
        message = 'Nice try, but you need to create a switch statement to draw three red doors with increasing levels of detail.'

      canvas.alert(message, success)


initSwitchStatementsChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('switch_statements', 'challenge4')


$(document).on('initialization:complete', initSwitchStatementsChallenges)

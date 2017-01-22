initAnimatedCityscapeStage1Challenges = ->
  if (page = $('#animated_cityscape_stage1')).length > 0
    initAnimatedCityscapeStage1Challenge1(page)
    initAnimatedCityscapeStage1Challenge2(page)
    initAnimatedCityscapeStage1Challenge3(page)
    initAnimatedCityscapeStage1Challenge4(page)
    initAnimatedCityscapeStage1Challenge5(page)
    initAnimatedCityscapeStage1Challenge6(page)
    initAnimatedCityscapeStage1Challenge7(page)


initAnimatedCityscapeStage1Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawSky = ->
      gradient = context.createLinearGradient(0, horizonY, 0, horizonY - 300)
      gradient.addColorStop(0, 'rgb(255, 85, 85)')
      gradient.addColorStop(0.3, 'rgb(102, 119, 153)')
      gradient.addColorStop(1, 'rgb(68, 85, 119)')
      
      context.save()
      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, horizonY)
      context.restore()
      return
    
    horizonY = canvas.height - 100
    drawSky()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You created the linear gradient and drew the sky correctly!'
        App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge1')
      else
        message = 'Nice try, but you need to create the linear gradient and draw the sky correctly.'

      canvas.alert(message, success)


initAnimatedCityscapeStage1Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    rgbColor = (r, g, b) ->
      'rgb(' + Math.round(r) + ', ' + Math.round(g) + ', ' + Math.round(b) + ')'
    drawGround = ->
      if time < 5
        c = 204
      else if time > 7
        c = 102
      else
        c = 204 - 102 * (time - 5) / 2
      
      context.save()
      context.fillStyle = rgbColor(c, c, c)
      context.fillRect(0, horizonY, canvas.width, 100)
      context.restore()
      return
    
    horizonY = canvas.height - 100
    
    context.save()
    time = 5.0
    drawGround()
    context.translate(72, 0)
    time = 5.5
    drawGround()
    context.translate(72, 0)
    time = 6.0
    drawGround()
    context.translate(72, 0)
    time = 6.5
    drawGround()
    context.translate(72, 0)
    time = 7.0
    drawGround()
    context.translate(72, 0)
    context.restore()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You calculated the ground color and drew the ground correctly for each time!'
        App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge2')
      else
        message = 'Nice try, but you need to calculate the ground color and draw the ground correctly for each time.'

      canvas.alert(message, success)


initAnimatedCityscapeStage1Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    rgbColor = (r, g, b) ->
      'rgb(' + Math.round(r) + ', ' + Math.round(g) + ', ' + Math.round(b) + ')'
    drawSky = ->
      if time < 5
        r0 = 255
        g0 = 255
        b0 = 255
        r1 = 102
        g1 = 153
        b1 = 255
      else if time > 7
        r0 = 102
        g0 = 102
        b0 = 102
        r1 = 51
        g1 = 51
        b1 = 51
      else
        r0 = 255 - 153 * (time - 5) / 2
        g0 = 255 - 153 * (time - 5) / 2
        b0 = 255 - 153 * (time - 5) / 2
        r1 = 102 - 51 * (time - 5) / 2
        g1 = 153 - 102 * (time - 5) / 2
        b1 = 255 - 204 * (time - 5) / 2
      
      gradient = context.createLinearGradient(0, horizonY, 0, horizonY - 300)
      gradient.addColorStop(0, rgbColor(r0, g0, b0))
      gradient.addColorStop(1, rgbColor(r1, g1, b1))
      
      context.save()
      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, horizonY)
      context.restore()
      return
    
    horizonY = canvas.height - 100
    
    context.save()
    time = 5.0
    drawSky()
    context.translate(72, 0)
    time = 5.5
    drawSky()
    context.translate(72, 0)
    time = 6.0
    drawSky()
    context.translate(72, 0)
    time = 6.5
    drawSky()
    context.translate(72, 0)
    time = 7.0
    drawSky()
    context.translate(72, 0)
    context.restore()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You calculated the sky gradient and drew the sky correctly for each time!'
        App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge3')
      else
        message = 'Nice try, but you need to calculate the sky gradient and draw the sky correctly for each time.'

      canvas.alert(message, success)


initAnimatedCityscapeStage1Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    rgbColor = (r, g, b) ->
      'rgb(' + Math.round(r) + ', ' + Math.round(g) + ', ' + Math.round(b) + ')'
    drawSky = ->
      if time < 5
        r0 = 255
        g0 = 255
        b0 = 255
        r1 = 102
        g1 = 153
        b1 = 255
        pMiddle = -1
      else if time > 7
        r0 = 102
        g0 = 102
        b0 = 102
        r1 = 51
        g1 = 51
        b1 = 51
        pMiddle = -1
      else
        r0 = 255
        g0 = 255 - 255 * (time - 5) / 2
        b0 = 255 - 255 * (time - 5) / 2
        r1 = 102 - 51 * (time - 5) / 2
        g1 = 153 - 102 * (time - 5) / 2
        b1 = 255 - 204 * (time - 5) / 2
        pMiddle = 1 - 1 * (time - 5) / 2
        rMiddle = 102
        gMiddle = 153 - 51 * (time - 5) / 2
        bMiddle = 255 - 153 * (time - 5) / 2
      
      gradient = context.createLinearGradient(0, horizonY, 0, horizonY - 300)
      gradient.addColorStop(0, rgbColor(r0, g0, b0))
      gradient.addColorStop(1, rgbColor(r1, g1, b1))
      if pMiddle >= 0 then gradient.addColorStop(pMiddle, rgbColor(rMiddle, gMiddle, bMiddle))
      
      context.save()
      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, horizonY)
      context.restore()
      return
    
    horizonY = canvas.height - 100
    
    context.save()
    time = 5.0
    drawSky()
    context.translate(72, 0)
    time = 5.5
    drawSky()
    context.translate(72, 0)
    time = 6.0
    drawSky()
    context.translate(72, 0)
    time = 6.5
    drawSky()
    context.translate(72, 0)
    time = 7.0
    drawSky()
    context.translate(72, 0)
    context.restore()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You calculated the sky gradient and drew the sky correctly for each time!'
        App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge4')
      else
        message = 'Nice try, but you need to calculate the sky gradient and draw the sky correctly for each time.'

      canvas.alert(message, success)


initAnimatedCityscapeStage1Challenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge5')


initAnimatedCityscapeStage1Challenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge6')


initAnimatedCityscapeStage1Challenge7 = (page) ->
  challenge = page.find('#challenge7')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('animated_cityscape_stage1', 'challenge7')


$(document).on('initialization:complete', initAnimatedCityscapeStage1Challenges)

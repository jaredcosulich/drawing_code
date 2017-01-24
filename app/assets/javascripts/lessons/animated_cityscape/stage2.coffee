initAnimatedCityscapeStage2Challenges = ->
  if (page = $('#animated_cityscape_stage2')).length > 0
    initAnimatedCityscapeStage2Challenge1(page)
    initAnimatedCityscapeStage2Challenge2(page)
    initAnimatedCityscapeStage2Challenge3(page)
    initAnimatedCityscapeStage2Challenge4(page)
    initAnimatedCityscapeStage2Challenge5(page)
    initAnimatedCityscapeStage2Challenge6(page)
    initAnimatedCityscapeStage2Challenge7(page)


initAnimatedCityscapeStage2Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    buildingA = {}
    buildingB = {}
    buildingC = {}
    
    drawWindow = (windowType) ->
      switch windowType
        when 0
          context.fillRect(4, 2, 8, 10)
        when 1
          context.fillRect(2, 3, 5, 8)
          context.fillRect(9, 3, 5, 8)
        when 2
          context.fillRect(0, 3, 16, 8)
        when 3
          context.fillRect(5, 1, 6, 14)
      return

    drawRoof = (w, roofType) ->
      context.save()
      switch roofType
        when 1
          context.translate(w / 2, -16)
          context.fillRect(-(w - 16) / 2, 0, w - 16, 16)
        when 2
          context.translate(w / 2, -80)
          context.fillRect(-4, 0, 8, 32)
          context.fillRect(-16, 32, 32, 24)
          context.fillRect(-(w - 16) / 2, 56, w - 16, 24)
        when 3
          context.translate(w / 2, -80)
          context.beginPath()
          context.moveTo(0, 0)
          context.lineTo(16, 64)
          context.lineTo(-16, 64)
          context.closePath()
          context.fill()
          context.fillRect(-32, 64, 64, 16)
      context.restore()
      return

    drawBuilding = (b, buildingColor, windowColor) ->
      x = b.leftX
      y = b.groundY - b.h
      context.save()
      context.translate(x, y)
      context.fillStyle = buildingColor
      context.fillRect(0, 0, b.w, b.h)
      drawRoof(b.w, b.roofType)
      context.translate(4, 4)
      context.fillStyle = windowColor
      j = 0
      while j < b.floors
        context.save()
        i = 0
        while i < b.units
          drawWindow(b.windowType)
          context.translate(16, 0)
          i += 1
        context.restore()
        context.translate(0, 16)
        j += 1
      context.restore()
      return
    
    drawScene = ->
      buildingColor = 'rgb(153, 153, 153)'
      windowColor = 'rgb(102, 102, 102)'
      drawBuilding(buildingA, buildingColor, windowColor)
      drawBuilding(buildingB, buildingColor, windowColor)
      drawBuilding(buildingC, buildingColor, windowColor)
      return
    
    initScene = ->
      buildingA = {leftX:   6, groundY: 300, w:  88, h: 200, units:  5, floors: 12, windowType: 3, roofType: 2}
      buildingB = {leftX: 106, groundY: 300, w: 168, h: 136, units: 10, floors:  8, windowType: 2, roofType: 1}
      buildingC = {leftX: 286, groundY: 300, w:  72, h: 248, units:  4, floors: 15, windowType: 0, roofType: 0}
      drawScene()
      return
    
    initScene()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You stored the data for each building in an object and drew the buildings correctly!'
        App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge1')
      else
        message = 'Nice try, but you need to store the data for each building in an object and draw the buildings correctly.'

      canvas.alert(message, success)


initAnimatedCityscapeStage2Challenge2 = (page) ->
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
        App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge2')
      else
        message = 'Nice try, but you need to calculate the ground color and draw the ground correctly for each time.'

      canvas.alert(message, success)


initAnimatedCityscapeStage2Challenge3 = (page) ->
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
        App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge3')
      else
        message = 'Nice try, but you need to calculate the sky gradient and draw the sky correctly for each time.'

      canvas.alert(message, success)


initAnimatedCityscapeStage2Challenge4 = (page) ->
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
        App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge4')
      else
        message = 'Nice try, but you need to calculate the sky gradient and draw the sky correctly for each time.'

      canvas.alert(message, success)


initAnimatedCityscapeStage2Challenge5 = (page) ->
  challenge = page.find('#challenge5')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge5')


initAnimatedCityscapeStage2Challenge6 = (page) ->
  challenge = page.find('#challenge6')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge6')


initAnimatedCityscapeStage2Challenge7 = (page) ->
  challenge = page.find('#challenge7')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge7')


$(document).on('initialization:complete', initAnimatedCityscapeStage2Challenges)

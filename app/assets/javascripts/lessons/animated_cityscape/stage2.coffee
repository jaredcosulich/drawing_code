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
    buildingRow = []
    
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
      
      i = 0
      while i < buildingRow.length
        drawBuilding(buildingRow[i], buildingColor, windowColor)
        i += 1
      return
    
    initScene = ->
      buildingRow = []
      buildingRow.push( {leftX:   6, groundY: 300, w:  88, h: 200, units:  5, floors: 12, windowType: 3, roofType: 2} )
      buildingRow.push( {leftX: 106, groundY: 300, w: 168, h: 136, units: 10, floors:  8, windowType: 2, roofType: 1} )
      buildingRow.push( {leftX: 286, groundY: 300, w:  72, h: 248, units:  4, floors: 15, windowType: 0, roofType: 0} )
      drawScene()
      return
    
    initScene()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You stored the data for all three buildings in an array and drew the buildings correctly'
        App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge2')
      else
        message = 'Nice try, but you need to store the data for all three buildings in an array and draw the buildings correctly.'

      canvas.alert(message, success)


initAnimatedCityscapeStage2Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    buildingRow = []
    
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
    
    drawBuildingRow = (rowX, groundY, scale) ->
      context.save()
      context.translate(rowX, groundY)
      context.scale(scale, scale)
      
      c = Math.round(153 * scale)
      buildingColor = 'rgb(' + c + ', ' + c + ', ' + c + ')'
      windowColor = 'rgb(102, 102, 102)'
      
      i = 0
      while i < buildingRow.length
        drawBuilding(buildingRow[i], buildingColor, windowColor)
        i += 1
      
      context.restore()
      return
    
    drawScene = ->
      drawBuildingRow(0, 280, 0.6)
      return
    
    initScene = ->
      buildingRow = []
      buildingRow.push( {leftX:   6, groundY: 0, w:  88, h: 200, units:  5, floors: 12, windowType: 3, roofType: 2} )
      buildingRow.push( {leftX: 106, groundY: 0, w: 168, h: 136, units: 10, floors:  8, windowType: 2, roofType: 1} )
      buildingRow.push( {leftX: 286, groundY: 0, w:  72, h: 248, units:  4, floors: 15, windowType: 0, roofType: 0} )
      drawScene()
      return
    
    initScene()

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
        message = '<strong>Success!</strong> You defined a function to draw a row of buildings at a set position and scale, using a building color based on the scale!'
        App.currentProgress.challengeComplete('animated_cityscape_stage2', 'challenge3')
      else
        message = 'Nice try, but you need to define a function to draw a row of buildings at a set position and scale, using a building color based on the scale.'

      canvas.alert(message, success)


initAnimatedCityscapeStage2Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
    drawRect = (scale) ->
      context.scale(scale, scale)
      context.fillRect(87, 87, 207, 207)
      return
    
    drawRect(0.37)

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

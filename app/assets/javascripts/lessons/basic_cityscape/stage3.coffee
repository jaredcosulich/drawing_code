initBasicCityscapeStage3Challenges = ->
  if (page = $('#basic_cityscape_stage3')).length > 0
    initBasicCityscapeStage3Challenge1(page)
    initBasicCityscapeStage3Challenge2(page)
    initBasicCityscapeStage3Challenge3(page)
    initBasicCityscapeStage3Challenge4(page)


initBasicCityscapeStage3Challenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
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

    drawBuilding = (leftX, groundY, units, floors, windowType) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      x = leftX
      y = groundY - h
      context.save()
      context.translate(x, y)
      context.fillStyle = '#999999'
      context.fillRect(0, 0, w, h)
      context.translate(4, 4)
      context.fillStyle = '#666666'
      j = 0
      while j < floors
        context.save()
        i = 0
        while i < units
          drawWindow(windowType)
          context.translate(16, 0)
          i += 1
        context.restore()
        context.translate(0, 16)
        j += 1
      context.restore()
      return

    drawBuilding(20, 320, 6, 10, 1)
    drawBuilding(136, 320, 10, 6, 2)
    drawBuilding(316, 320, 5, 14, 3)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
<<<<<<< HEAD
        message = '<strong>Success!</strong> You\'ve create three buildings with three different window types!'
        App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge1')
=======
        message = '<strong>Success!</strong> You used a switch statement to draw three different types of windows on the three buildings!'
        App.currentProgress.challengeComplete('dng_basic_cityscape_stage3', 'challenge1')
>>>>>>> 98bf60f5d35300cdfe63fdd56f2f5022fa1c1ee7
      else
        message = 'Nice try, but you need to use a switch statement to draw three different types of windows on the three buildings.'

      canvas.alert(message, success)


initBasicCityscapeStage3Challenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  solution = (canvas, context) ->
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

    drawBuilding = (leftX, groundY, units, floors, windowType, roofType) ->
      w = 8 + 16 * units
      h = 8 + 16 * floors
      x = leftX
      y = groundY - h
      context.save()
      context.translate(x, y)
      context.fillStyle = '#999999'
      context.fillRect(0, 0, w, h)
      drawRoof(w, roofType)
      context.translate(4, 4)
      context.fillStyle = '#666666'
      j = 0
      while j < floors
        context.save()
        i = 0
        while i < units
          drawWindow(windowType)
          context.translate(16, 0)
          i += 1
        context.restore()
        context.translate(0, 16)
        j += 1
      context.restore()
      return

    drawBuilding(20, 320, 6, 10, 1, 2)
    drawBuilding(136, 320, 10, 6, 2, 1)
    drawBuilding(316, 320, 5, 14, 3, 3)

  testCode = new Test.Code(code: solution, canvas: canvas)

  challenge.find('.run').click ->
    testCode.test (success) ->
      if success
<<<<<<< HEAD
        message = '<strong>Success!</strong> You\'ve create three buildings with three different window types and roof types!'
        App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge2')
=======
        message = '<strong>Success!</strong> You used switch statements to draw different types of windows and roofs on the three buildings!'
        App.currentProgress.challengeComplete('dng_basic_cityscape_stage3', 'challenge2')
>>>>>>> 98bf60f5d35300cdfe63fdd56f2f5022fa1c1ee7
      else
        message = 'Nice try, but you need to use switch statements to draw different types of windows and roofs on the three buildings.'

      canvas.alert(message, success)


initBasicCityscapeStage3Challenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge3')


initBasicCityscapeStage3Challenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('basic_cityscape_stage3', 'challenge4')


$(document).on('initialization:complete', initBasicCityscapeStage3Challenges)

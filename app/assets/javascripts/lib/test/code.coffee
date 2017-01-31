class Test.Code
  constructor: (options) ->
    {@code, @canvas} = options

  initTestCanvas: ->
    $(@testCanvas.remove()) if @testCanvas
    @testCanvas = document.createElement('CANVAS')
    $(@testCanvas).css(width: @canvas.canvasElement.width, height: @canvas.canvasElement.height)
    @testCanvas.width = @canvas.canvasElement.width
    @testCanvas.height = @canvas.canvasElement.height
    @testContext = @testCanvas.getContext('2d')

    # $(@testCanvas).css(position: 'absolute', top: 0, left: 0, zIndex: 9999)
    # row = @canvas.canvas.closest('.row')
    # row.css(position: 'relative').append(@testCanvas)

  drawCode: ->
    unless (startTime = @canvas.canvas.data('startTime'))
      setTimeout(( => @drawCode()), 5)
      return
    @code(@testCanvas, @testContext, @canvas.canvas.data('startTime'))

  test: (callback) ->
    @initTestCanvas()

    count = 0
    testInterval = setInterval(( =>
      @drawCode() if count == 0
      success = @compareImageData()
      if success || count >= 0 #30
        clearInterval(testInterval)
        callback(success)
      count += 1
    ), 10)

  compareImageData: ->
    context = @canvas.context
    width = @canvas.canvasElement.width
    height = @canvas.canvasElement.height
    imageData = context.getImageData(0,0,width,height).data
    testImageData = @testCanvas.getContext('2d').getImageData(0,0,width,height).data
    diffCount = 0
    for pixel, index in imageData
      if Math.abs(testImageData[index] - pixel) != 0
        return false
    #     context.save()
    #     w = Math.ceil(index/4) % width
    #     h = Math.floor(Math.ceil(index/4) / width)
    #     # console.log(w, h, testImageData[index], pixel, testImageData[index] - pixel)
    #     context.translate(w, h)
    #     context.fillStyle = '#ff0000'
    #     context.fillRect(-2,-2,5,5)
    #     context.restore()
    #     diffCount += 1
    # return false if diffCount > 0
    return true

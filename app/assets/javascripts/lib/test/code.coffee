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

  drawCode: ->
    @code(@testCanvas, @testContext)

  test: (callback) ->
    @initTestCanvas()
    @drawCode()

    setTimeout(( =>
      callback(@compareImageData())
    ), 300)

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
    #     context.translate(w, h)
    #     context.fillStyle = '#ff0000'
    #     context.fillRect(-2,-2,5,5)
    #     context.restore()
    #     diffCount += 1
    # return false if diffCount > 0
    return true

class Test.ImageComparison
  constructor: (options) ->
    {@src, @image, @canvas} = options
    @image = @image[0] if @image?.length
    @context = @canvas.context

  initImage: ->
    @image = new Image()
    @image.src = @src

  initTestCanvas: ->
    @testCanvas = document.createElement('CANVAS')
    @testCanvas.width = @canvas.canvasElement.width
    @testCanvas.height = @canvas.canvasElement.height

    @testCanvas.getContext('2d').drawImage(@image, 0, 0)

  test: (callback) ->
    @initImage() unless @image?
    @initTestCanvas() unless @testCanvas?

    setTimeout(( =>
      callback(@compareImageData())
    ), 300)

  compareImageData: ->
    width = @canvas.canvasElement.width
    height = @canvas.canvasElement.height
    imageData = @context.getImageData(0,0,width,height).data
    testImageData = @testCanvas.getContext('2d').getImageData(0,0,width,height).data
    diffCount = 0
    for pixel, index in imageData
      if (Math.abs(testImageData[index] - pixel) > 50) || (testImageData[index] == 0 && pixel != 0) || (pixel == 0 && testImageData[index] != 0)
        @context.save()
        w = Math.ceil(index/4) % width
        h = Math.floor(Math.ceil(index/4) / width)
        @context.translate(w, h)
        @context.fillStyle = '#ff0000'
        @context.fillRect(-2,-2,5,5)
        @context.restore()
        diffCount += 1
        # return false
    return false if diffCount > 0
    return true

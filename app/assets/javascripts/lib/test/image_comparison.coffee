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
    for pixel, index in imageData
      return false if testImageData[index] != pixel
    return true

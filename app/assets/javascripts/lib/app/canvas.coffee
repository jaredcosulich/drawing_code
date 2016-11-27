class App.Canvas
  constructor: (canvas) ->
    @canvasElement = $(canvas)[0]
    @canvas = $(@canvasElement)
    @context = @canvasElement.getContext('2d')
    @canvas.attr(width: @canvas.width(), height: @canvas.height())

  message: (message) ->

class Test.Point
  constructor: (options) ->
    {@x, @y, @canvas} = options
    if @canvas.length > 0
      @context = @canvas[0].getContext('2d')
    else
      @context = @canvas.getContext('2d')

  test: ->
    pointData = @context.getImageData(@x, @y, 1, 1)
    parseInt(pointData.data[3]) > 0

  display: (success)->
    strokeStyle = @context.strokeStyle;
    console.log(success)
    @context.strokeStyle = if success then '#00FF00' else '#FF0000'

    @context.beginPath()

    @context.moveTo(@x-3, @y)
    @context.lineTo(@x+3, @y)

    @context.moveTo(@x, @y-3)
    @context.lineTo(@x, @y+3)

    @context.stroke()
    @context.strokeStyle = strokeStyle

class Test.Point
  constructor: (options) ->
    {@x, @y, @canvas} = options
    @context = @canvas.context
    @status = 0

  test: ->
    pointData = @context.getImageData(@x, @y, 1, 1)
    @status = if parseInt(pointData.data[3]) > 0 then 1 else -1
    return @status

  display: (success)->
    return unless success > 0
    strokeStyle = @context.strokeStyle;
    @context.strokeStyle = '#00FF00'
    @context.beginPath()
    @context.moveTo(@x-3, @y)
    @context.lineTo(@x+3, @y)
    @context.moveTo(@x, @y-3)
    @context.lineTo(@x, @y+3)
    @context.stroke()
    @context.strokeStyle = strokeStyle

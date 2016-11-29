class Test.Point
  constructor: (options) ->
    {@x, @y, @canvas, @buffer=0, @badPoint=false} = options
    @context = @canvas.context
    @status = 0

  test: (buffer=@buffer)->
    pointData = @context.getImageData(@x-buffer, @y-buffer, ((buffer*2) + 1), ((buffer*2) + 1))
    totalAlpha = 0
    totalAlpha += alpha for alpha, i in pointData.data when i % 3 == 0
    @status = if totalAlpha > 0 then 1 else -1
    @status = @status * -1 if @badPoint
    return @status

  display: (success=@status) ->
    return if success <= 0 || @badPoint
    strokeStyle = @context.strokeStyle;
    @context.strokeStyle = '#00FF00'
    @context.beginPath()
    @context.moveTo(@x-3, @y)
    @context.lineTo(@x+3, @y)
    @context.moveTo(@x, @y-3)
    @context.lineTo(@x, @y+3)
    @context.stroke()
    @context.strokeStyle = strokeStyle

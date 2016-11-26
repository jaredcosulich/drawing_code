class Point
  constructor: (options) ->
    {@x, @y} = options

  test: (canvas) ->
    context = anvas.getContext('2d')
    pointData = context.getImageData(@x, @y, 1, 1)
    if pointData.data[0] == 0 && pointData.data[1] == 0 && pointData[2] == 0
      return false
    else
      return true

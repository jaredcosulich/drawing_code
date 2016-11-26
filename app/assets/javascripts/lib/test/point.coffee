class Test.Point
  constructor: (options) ->
    {@x, @y} = options

  test: (canvas) ->
    if canvas.length > 0
      context = canvas[0].getContext('2d')
    else
      context = canvas.getContext('2d')

    pointData = context.getImageData(@x, @y, 1, 1)
    console.log(pointData)
    if parseInt(pointData.data[0]) == 0 && parseInt(pointData.data[1]) == 0 && parseInt(pointData[2]) == 0
      return false
    else
      return true

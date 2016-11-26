initCanvas = ->
  $('canvas').each (index, canvasElement) ->
    canvas = $(canvasElement)
    canvas.attr(width: canvas.width(), height: canvas.height())

$(document).on('turbolinks:load', initCanvas)

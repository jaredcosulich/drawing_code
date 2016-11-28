window.App ||= {}
window.Test ||= {}

initInteractives = ->
  for interactiveElement in $('.interactive')
    interactive = $(interactiveElement)
    canvas = new App.Canvas(interactive.find('canvas'))
    editor = new App.Editor(interactive.find('.editor'), canvas)
    editor.run()

$(document).on('turbolinks:load', initInteractives)

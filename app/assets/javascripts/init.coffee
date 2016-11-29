window.App ||= {}
window.Test ||= {}

App.confirmOnPageExit = (e) ->
  e = e || window.event
  message = 'Are you sure you want to leave this page? Your code changes will be lost.'
  e.returnValue = message if e
  return message

initInteractives = ->
  for interactiveElement in $('.interactive')
    interactive = $(interactiveElement)
    canvas = new App.Canvas(interactive.find('canvas'))
    editor = new App.Editor(interactive.find('.editor'), canvas)
    editor.run()

$(document).on('turbolinks:load', initInteractives)

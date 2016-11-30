window.App ||= {}
window.Test ||= {}

App.confirmOnPageExit = (e) ->
  e = e || window.event
  message = 'Are you sure you want to leave this page? Your code changes will be lost.'
  e.returnValue = message if e
  return message

init = ->
  initInteractives()
  initProgress()

initInteractives = ->
  for interactiveElement in $('.interactive')
    interactive = $(interactiveElement)
    canvas = new App.Canvas(interactive.find('canvas'))
    editor = new App.Editor(interactive.find('.editor'), canvas)
    editor.run()

initProgress = ->
  App.currentProgress = new App.Progress()
  App.currentProgress.updateNavigation()

$(document).on('turbolinks:load', init)

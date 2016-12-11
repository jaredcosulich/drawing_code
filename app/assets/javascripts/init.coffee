window.App ||= {}
window.Test ||= {}
window.log = (messageText...) ->
  App.currentEditor?.log(messageText...)

# App.confirmOnPageExit = (e) ->
#   e = e || window.event
#   message = 'Are you sure you want to leave this page? Your code changes will be lost.'
#   e.returnValue = message if e
#   return message

init = ->
  initProgress()
  initInteractives()
  initFreeform()
  $(document).trigger('initialization:complete')

initInteractives = ->
  for interactiveElement in $('.interactive')
    interactive = $(interactiveElement)
    canvas = new App.Canvas(interactive.find('canvas'))
    editor = new App.Editor(interactive.find('.editor'), canvas)
    editor.run()

initFreeform = ->
  for freeformElement in $('.freeform')
    freeform = $(freeformElement)
    canvas = new App.Canvas(freeform.find('canvas'))
    editor = new App.Editor(freeform.find('.editor'), canvas)

initProgress = ->
  App.currentProgress = new App.Progress()
  App.currentProgress.updateNavigation()

$(document).on('turbolinks:load', init)

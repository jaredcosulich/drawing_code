window.App ||= {}
window.Test ||= {}
window.log = (messageText...) ->
  App.currentEditor?.log(messageText...)

window.onerror = ->
  App.currentEditor?.log("<strong class='text-danger'>Unknown Error</strong> Check Console")

# App.confirmOnPageExit = (e) ->
#   e = e || window.event
#   message = 'Are you sure you want to leave this page? Your code changes will be lost.'
#   e.returnValue = message if e
#   return message

init = ->
  initProgress()
  initInteractives()
  initFreeform()
  initOutput()
  initCheats()
  $(document).trigger('initialization:complete')

initInteractives = ->
  for interactiveElement in $('.interactive')
    interactive = $(interactiveElement)
    canvas = new App.Canvas(interactive.find('canvas'))
    editor = new App.Editor(interactive.find('.editor'), canvas, 300)
    interactive.find('.instructions').html('(change the code below)')
    editor.run()

initFreeform = ->
  for freeformElement in $('.freeform')
    freeform = $(freeformElement)
    canvas = new App.Canvas(freeform.find('canvas'))
    editor = new App.Editor(freeform.find('.editor'), canvas)
    editor.run()
    setTimeout(( -> canvas.canvas.focus()), 10)


initOutput = ->
  App.output = (canvasId) ->
    canvas = document.getElementById(canvasId)
    img    = canvas.toDataURL("image/png")
    document.write('<img src="'+img+'"/>')

  App.outputCode = ->
    console.log($('.editor').data('editor').getCode())

initCheats = ->
  mousedown = false
  page = $('.page')
  page.find('h1').mousedown (e) ->
    mousedown = true
    setTimeout(( ->
      if mousedown
        if (confirm('Are you sure you want to reset this page?'))
          $(editor).data('editor').reset() for editor in page.find('.editor')
          App.currentProgress.resetPage(page.attr('id'))
    ), 2000)
    page.mouseup -> mousedown = false

initProgress = ->
  App.currentProgress = new App.Progress()
  App.currentProgress.updateNavigation()

$(document).on('turbolinks:load', init)

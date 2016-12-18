initDrawings = ->
  initDrawingsForm()
  initSavedDrawing()


drawingSlug = (title) ->
  title.replace(/\s/ig, '-').toLowerCase()


saveDrawing = (form) ->
  title = form.find('.my_drawing_title').val()
  description = form.find('.my_drawing_description').val()
  code = $('.editor').data('ace').getValue()

  App.currentProgress.deleteDrawing($('#saved_drawing').data('slug'))

  slug = drawingSlug(title)
  App.currentProgress.saveDrawing(slug, title, description, code)
  return slug

initDrawingsForm = ->
  $('#my_drawings .save .btn').click ->
    saveForm = $(this).closest('.save')
    slug = saveDrawing(saveForm)
    location.href = "/drawings/#{slug}"
    return false


initSavedDrawing = ->
  if (page = $('#saved_drawing')).length > 0
    slug = page.data('slug')
    drawingInfo = App.currentProgress.getDrawing(slug)
    page.find('.drawing-title').html(drawingInfo['title'])
    page.find('.drawing-description').html(drawingInfo['description'])
    page.find('.my_drawing_title').val(drawingInfo['title'])
    page.find('.my_drawing_description').val(drawingInfo['description'])
    page.find('.editor').data('editor').setCode(drawingInfo['code'])
    page.find('.run').click()
    $("#drawings #navigation-drawing-#{slug}").addClass('active')

    page.find('.save .submit').click ->
      saveForm = $(this).closest('.save')
      slug = saveDrawing(saveForm)
      location.href = "/drawings/#{slug}"
      return false

    page.find('.save .delete').click ->
      if confirm('Are you sure you want to delete this drawing?')
        title = $(this).closest('.save').find('.my_drawing_title').val()
        App.currentProgress.deleteDrawing(drawingSlug(title))
        location.href = '/drawings'




$(document).on('initialization:complete', initDrawings)

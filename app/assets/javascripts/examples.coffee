initExamples = ->
  return if (examples = $('#examples')).length == 0
  examples.find('.more').click (e) ->
    more = $(e.currentTarget)
    more.closest('.group').next('.group').slideDown()
    more.hide()



$(document).on('initialization:complete', initExamples  )

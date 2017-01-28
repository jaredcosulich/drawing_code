initCodeIWrote = ->
  $('.code-i-wrote-link').click ->
    codeIWrote = $(this).closest('.code-i-wrote')
    view = codeIWrote.find('.code-i-wrote-view')

    if view.is(':visible')
      view.slideUp()
    else
      viewCode = view.find('.code-i-wrote-code')
      viewCode = ace.edit(viewCode[0])
      viewCode.$blockScrolling = Infinity
      viewCode.session.setOptions
          mode: "ace/mode/javascript"
          wrap: 'on'
      viewCode.setReadOnly(true)
      view.slideDown()


$(document).on('initialization:complete', initCodeIWrote)

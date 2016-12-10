initCodePreview = ->
  unless App.currentProgress?
    $('.code-preview').hide()
    return

  $('.code-preview-link').click ->
    preview = $(this).closest('.code-preview').find('.code-preview-view')

    if preview.is(':visible')
      preview.slideUp()
    else
      editorId = $(this).data('editorid')
      previousCode = App.currentProgress.getEditorValue(editorId)
      return unless previousCode?

      previewCode = preview.find('.code-preview-code')
      previewCode = ace.edit(previewCode[0])
      previewCode.$blockScrolling = Infinity
      previewCode.session.setOptions
          mode: "ace/mode/javascript"
          wrap: 'on'
      previewCode.setReadOnly(true)
      previewCode.setValue(previousCode)
      preview.slideDown()


$(document).on('initialization:complete', initCodePreview)

(function() {
  var initCodePreview;

  initCodePreview = function() {
    if (App.currentProgress == null) {
      $('.code-preview').hide();
      return;
    }
    return $('.code-preview-link').click(function() {
      var editorId, preview, previewCode, previousCode;
      preview = $(this).closest('.code-preview').find('.code-preview-view');
      if (preview.is(':visible')) {
        return preview.slideUp();
      } else {
        editorId = $(this).data('editorid');
        previousCode = App.currentProgress.getEditorValue(editorId);
        if (previousCode == null) {
          return;
        }
        previewCode = preview.find('.code-preview-code');
        previewCode = ace.edit(previewCode[0]);
        previewCode.$blockScrolling = Infinity;
        previewCode.session.setOptions({
          mode: "ace/mode/javascript",
          wrap: 'on'
        });
        previewCode.setReadOnly(true);
        previewCode.setValue(previousCode);
        return preview.slideDown();
      }
    });
  };

  $(document).on('initialization:complete', initCodePreview);

}).call(this);

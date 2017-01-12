(function() {
  var initCodePreview;

  initCodePreview = function() {
    if (App.currentProgress == null) {
      $('.code-preview').hide();
      return;
    }
    return $('.code-preview-link').click(function() {
      var codePreview, editorId, preview, previewCode, previewMissing, previousCode;
      codePreview = $(this).closest('.code-preview');
      preview = codePreview.find('.code-preview-view');
      previewMissing = codePreview.find('.code-preview-missing');
      if (preview.is(':visible') || previewMissing.is(':visible')) {
        preview.slideUp();
        previewMissing.slideUp();
        return;
      }
      editorId = $(this).data('editorid');
      previousCode = App.currentProgress.getEditorValue(editorId);
      if (previousCode == null) {
        previewMissing.slideDown();
        preview.slideUp();
        return;
      }
      previewMissing.slideUp();
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
    });
  };

  $(document).on('initialization:complete', initCodePreview);

}).call(this);

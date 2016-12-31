(function() {
  var drawingSlug, initDrawings, initDrawingsForm, initSavedDrawing, saveDrawing;

  initDrawings = function() {
    initDrawingsForm();
    return initSavedDrawing();
  };

  drawingSlug = function(title) {
    return title.replace(/\s/ig, '-').toLowerCase();
  };

  saveDrawing = function(form) {
    var code, description, slug, title;
    title = form.find('.my_drawing_title').val();
    description = form.find('.my_drawing_description').val();
    code = $('.editor').data('editor').getCode();
    App.currentProgress.deleteDrawing($('#saved_drawing').data('slug'));
    slug = drawingSlug(title);
    App.currentProgress.saveDrawing(slug, title, description, code);
    return slug;
  };

  initDrawingsForm = function() {
    return $('#my_drawings .save .btn').click(function() {
      var saveForm, slug;
      saveForm = $(this).closest('.save');
      slug = saveDrawing(saveForm);
      location.href = "/drawings/" + slug;
      return false;
    });
  };

  initSavedDrawing = function() {
    var drawingInfo, editor, page, slug;
    if ((page = $('#saved_drawing')).length > 0) {
      slug = page.data('slug');
      drawingInfo = App.currentProgress.getDrawing(slug);
      page.find('.drawing-title').html(drawingInfo['title']);
      page.find('.drawing-description').html(drawingInfo['description']);
      page.find('.my_drawing_title').val(drawingInfo['title']);
      page.find('.my_drawing_description').val(drawingInfo['description']);
      editor = page.find('.editor').data('editor');
      editor.setStartCode(drawingInfo['code']);
      if ((App.currentProgress.getEditorValue(editor.editorElement.id)) == null) {
        editor.setCode(drawingInfo['code']);
      }
      page.find('.run').click();
      $("#drawings #navigation-drawing-" + slug).addClass('active');
      page.find('.save .submit').click(function() {
        var saveForm;
        saveForm = $(this).closest('.save');
        slug = saveDrawing(saveForm);
        location.href = "/drawings/" + slug;
        return false;
      });
      return page.find('.save .delete').click(function() {
        var title;
        if (confirm('Are you sure you want to delete this drawing?')) {
          title = $(this).closest('.save').find('.my_drawing_title').val();
          App.currentProgress.deleteDrawing(drawingSlug(title));
          return location.href = '/drawings';
        }
      });
    }
  };

  $(document).on('initialization:complete', initDrawings);

}).call(this);

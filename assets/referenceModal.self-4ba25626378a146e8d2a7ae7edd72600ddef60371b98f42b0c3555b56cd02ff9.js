(function() {
  var initReferenceModal;

  initReferenceModal = function() {
    $('#reference-modal').modal('hide');
    return $('.reference-link').click(function() {
      var href, modal, modalContent, slug;
      slug = $(this).data('slug');
      modal = $('#reference-modal');
      modalContent = $("#reference-modal-" + slug);
      if (modalContent.length === 0) {
        return true;
      }
      modal.find('.modal-title').html(modalContent.find('.title').html());
      modal.find('.modal-body').html(modalContent.find('.content').html());
      href = $(this).attr('href');
      modal.find('.lesson-link').click(function() {
        modal.modal('hide');
        return location.href = href;
      });
      modal.modal('show');
      return false;
    });
  };

  $(document).on('turbolinks:load', initReferenceModal);

}).call(this);

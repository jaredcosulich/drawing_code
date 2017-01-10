(function() {
  var initExamples;

  initExamples = function() {
    var examples;
    if ((examples = $('#examples')).length === 0) {
      return;
    }
    return examples.find('.more').click(function(e) {
      var more;
      more = $(e.currentTarget);
      more.closest('.group').next('.group').slideDown();
      return more.hide();
    });
  };

  $(document).on('initialization:complete', initExamples);

}).call(this);

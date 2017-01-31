(function() {
  var initCodeIWrote;

  initCodeIWrote = function() {
    return $('.code-i-wrote-link').click(function() {
      var codeIWrote, view, viewCode;
      codeIWrote = $(this).closest('.code-i-wrote');
      view = codeIWrote.find('.code-i-wrote-view');
      if (view.is(':visible')) {
        return view.slideUp();
      } else {
        viewCode = view.find('.code-i-wrote-code');
        viewCode = ace.edit(viewCode[0]);
        viewCode.$blockScrolling = Infinity;
        viewCode.session.setOptions({
          mode: "ace/mode/javascript",
          wrap: 'on'
        });
        viewCode.setReadOnly(true);
        return view.slideDown();
      }
    });
  };

  $(document).on('initialization:complete', initCodeIWrote);

}).call(this);

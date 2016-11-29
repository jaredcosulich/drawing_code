(function() {
  var initInteractives;

  window.App || (window.App = {});

  window.Test || (window.Test = {});

  App.confirmOnPageExit = function(e) {
    var message;
    e = e || window.event;
    message = 'Are you sure you want to leave this page? Your code changes will be lost.';
    if (e) {
      e.returnValue = message;
    }
    return message;
  };

  initInteractives = function() {
    var canvas, editor, i, interactive, interactiveElement, len, ref, results;
    ref = $('.interactive');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      interactiveElement = ref[i];
      interactive = $(interactiveElement);
      canvas = new App.Canvas(interactive.find('canvas'));
      editor = new App.Editor(interactive.find('.editor'), canvas);
      results.push(editor.run());
    }
    return results;
  };

  $(document).on('turbolinks:load', initInteractives);

}).call(this);

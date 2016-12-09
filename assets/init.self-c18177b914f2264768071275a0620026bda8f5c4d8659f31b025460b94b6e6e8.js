(function() {
  var init, initFreeform, initInteractives, initProgress;

  window.App || (window.App = {});

  window.Test || (window.Test = {});

  init = function() {
    initProgress();
    initInteractives();
    initFreeform();
    return $(document).trigger('initialization:complete');
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

  initFreeform = function() {
    var canvas, editor, freeform, freeformElement, i, len, ref, results;
    ref = $('.freeform');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      freeformElement = ref[i];
      freeform = $(freeformElement);
      canvas = new App.Canvas(freeform.find('canvas'));
      results.push(editor = new App.Editor(freeform.find('.editor'), canvas));
    }
    return results;
  };

  initProgress = function() {
    App.currentProgress = new App.Progress();
    return App.currentProgress.updateNavigation();
  };

  $(document).on('turbolinks:load', init);

}).call(this);

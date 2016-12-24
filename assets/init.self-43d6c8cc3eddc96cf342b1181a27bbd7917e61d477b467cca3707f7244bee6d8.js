(function() {
  var init, initFreeform, initInteractives, initOutput, initProgress,
    slice = [].slice;

  window.App || (window.App = {});

  window.Test || (window.Test = {});

  window.log = function() {
    var messageText, ref;
    messageText = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = App.currentEditor) != null ? ref.log.apply(ref, messageText) : void 0;
  };

  window.onerror = function() {
    var ref;
    return (ref = App.currentEditor) != null ? ref.log("<strong class='text-danger'>Unknown Error</strong> Check Console") : void 0;
  };

  init = function() {
    initProgress();
    initInteractives();
    initFreeform();
    initOutput();
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
      editor = new App.Editor(interactive.find('.editor'), canvas, 300);
      interactive.find('.instructions').html('(change the code below)');
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

  initOutput = function() {
    return App.output = function(canvasId) {
      var canvas, img;
      canvas = document.getElementById(canvasId);
      img = canvas.toDataURL("image/png");
      return document.write('<img src="' + img + '"/>');
    };
  };

  initProgress = function() {
    App.currentProgress = new App.Progress();
    return App.currentProgress.updateNavigation();
  };

  $(document).on('turbolinks:load', init);

}).call(this);

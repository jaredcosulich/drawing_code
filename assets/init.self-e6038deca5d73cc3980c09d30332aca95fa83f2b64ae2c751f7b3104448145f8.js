(function() {
  var init, initCheats, initFreeform, initInteractives, initOutput, initProgress,
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
    initCheats();
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
      editor = new App.Editor(freeform.find('.editor'), canvas);
      editor.run();
      results.push(setTimeout((function() {
        return canvas.canvas.focus();
      }), 10));
    }
    return results;
  };

  initOutput = function() {
    App.output = function(canvasId) {
      var canvas, img;
      canvas = document.getElementById(canvasId);
      img = canvas.toDataURL("image/png");
      return document.write('<img src="' + img + '"/>');
    };
    return App.outputCode = function() {
      return console.log($('.editor').data('editor').getCode());
    };
  };

  initCheats = function() {
    var mousedown, page;
    mousedown = false;
    page = $('.page');
    return page.find('h1').mousedown(function(e) {
      mousedown = true;
      setTimeout((function() {
        var editor, i, len, ref;
        if (mousedown) {
          if (confirm('Are you sure you want to reset this page?')) {
            ref = page.find('.editor');
            for (i = 0, len = ref.length; i < len; i++) {
              editor = ref[i];
              $(editor).data('editor').reset();
            }
            return App.currentProgress.resetPage(page.attr('id'));
          }
        }
      }), 2000);
      return page.mouseup(function() {
        return mousedown = false;
      });
    });
  };

  initProgress = function() {
    App.currentProgress = new App.Progress();
    return App.currentProgress.updateNavigation();
  };

  $(document).on('turbolinks:load', init);

}).call(this);

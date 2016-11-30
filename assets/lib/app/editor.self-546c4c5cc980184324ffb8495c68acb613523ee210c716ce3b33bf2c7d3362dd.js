(function() {
  App.Editor = (function() {
    function Editor(editor, canvas) {
      this.canvas = canvas;
      this.editorElement = $(editor)[0];
      this.editor = $(this.editorElement);
      this.aceEditor = ace.edit(this.editorElement);
      this.aceEditor.$blockScrolling = Infinity;
      this.editor.on('input', function() {
        return window.onbeforeunload = App.confirmOnPageExit;
      });
      this.aceEditor.session.setOptions({
        mode: "ace/mode/javascript",
        tabSize: 2,
        useSoftTabs: true
      });
      this.startCode = this.aceEditor.getValue();
      this.initRun();
      this.reset();
    }

    Editor.prototype.initRun = function() {
      this.editor.closest('.code-editor').find('.buttons .run').click((function(_this) {
        return function(e) {
          return _this.run();
        };
      })(this));
      return this.editor.closest('.code-editor').find('.buttons .reset').click((function(_this) {
        return function(e) {
          if (confirm('Are you sure you want to reset your code?')) {
            return _this.reset();
          }
        };
      })(this));
    };

    Editor.prototype.reset = function() {
      this.canvas.hideAlert();
      return this.aceEditor.setValue(this.startCode, -1);
    };

    Editor.prototype.run = function() {
      this.canvas.hideAlert();
      return eval(this.aceEditor.getValue());
    };

    return Editor;

  })();

}).call(this);

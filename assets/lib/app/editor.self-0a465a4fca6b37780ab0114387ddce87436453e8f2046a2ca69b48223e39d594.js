(function() {
  App.Editor = (function() {
    function Editor(editor, canvas) {
      var previousCode;
      this.canvas = canvas;
      this.editorElement = $(editor)[0];
      this.editor = $(this.editorElement);
      ace.config.set('workerPath', '/ace/');
      this.aceEditor = ace.edit(this.editorElement);
      this.aceEditor.$blockScrolling = Infinity;
      this.aceEditor.session.setOptions({
        mode: "ace/mode/javascript",
        tabSize: 2,
        useSoftTabs: true,
        wrap: 'on'
      });
      this.editor.on('input', (function(_this) {
        return function() {
          return App.currentProgress.storeEditorValue(_this.editorElement.id, _this.aceEditor.getValue());
        };
      })(this));
      this.startCode = this.aceEditor.getValue();
      this.initRun();
      if ((previousCode = App.currentProgress.getEditorValue(this.editorElement.id)) != null) {
        this.aceEditor.setValue(previousCode, -1);
      }
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
      var ref;
      this.canvas.hideAlert();
      this.aceEditor.setValue(this.startCode, -1);
      return (ref = App.currentProgress) != null ? ref.storeEditorValue(this.editorElement.id, this.startCode) : void 0;
    };

    Editor.prototype.run = function() {
      var e, error;
      this.canvas.hideAlert();
      try {
        return eval(this.aceEditor.getValue());
      } catch (error) {
        e = error;
        return console.log(e);
      }
    };

    return Editor;

  })();

}).call(this);

(function() {
  var slice = [].slice;

  App.Editor = (function() {
    function Editor(editor, canvas) {
      var previousCode;
      this.canvas = canvas;
      this.editorElement = $(editor)[0];
      this.editor = $(this.editorElement);
      this.codeEditor = this.editor.closest('.code-editor');
      ace.config.set('workerPath', '/ace/');
      this.aceEditor = ace.edit(this.editorElement);
      this.editor.data({
        ace: this.aceEditor
      });
      this.aceEditor.$blockScrolling = Infinity;
      this.aceEditor.session.setOptions({
        mode: "ace/mode/javascript",
        tabSize: 2,
        useSoftTabs: true,
        wrap: 'on'
      });
      this.editor.on('keyup', (function(_this) {
        return function() {
          _this.ensureValidCanvasReference();
          return App.currentProgress.storeEditorValue(_this.editorElement.id, _this.aceEditor.getValue());
        };
      })(this));
      this.startCode = this.aceEditor.getValue();
      this.initLog();
      this.initRun();
      if ((previousCode = App.currentProgress.getEditorValue(this.editorElement.id)) != null) {
        this.aceEditor.setValue(previousCode, -1);
      }
      this.ensureValidCanvasReference();
    }

    Editor.prototype.ensureValidCanvasReference = function() {
      var canvasId, code;
      code = this.aceEditor.getValue();
      canvasId = this.canvas.canvasElement.id;
      if (code.match(canvasId) != null) {
        return;
      }
      code = code.replace(/getElementById\('([^)]*)'\);/, "getElementById('" + canvasId + "');");
      return this.setCode(code);
    };

    Editor.prototype.setCode = function(code) {
      var ref;
      this.aceEditor.setValue(code, -1);
      return (ref = App.currentProgress) != null ? ref.storeEditorValue(this.editorElement.id, code) : void 0;
    };

    Editor.prototype.initRun = function() {
      this.codeEditor.find('.buttons .run').click((function(_this) {
        return function(e) {
          return _this.run();
        };
      })(this));
      return this.codeEditor.find('.buttons .reset').click((function(_this) {
        return function(e) {
          if (confirm('Are you sure you want to reset your code?')) {
            return _this.reset();
          }
        };
      })(this));
    };

    Editor.prototype.reset = function() {
      this.hideLog();
      this.clearLog();
      this.canvas.hideAlert();
      return this.setCode(this.startCode);
    };

    Editor.prototype.run = function() {
      var e, error, error1, error2, errorLineNumber;
      this.hideLog();
      this.clearLog();
      this.canvas.hideAlert();
      try {
        return eval(this.aceEditor.getValue());
      } catch (error1) {
        e = error1;
        try {
          errorLineNumber = e.stack.split(/\n/)[1].split('<anonymous>:')[1].split(':')[0];
        } catch (error2) {
          error = error2;
          errorLineNumber = 'N/A';
          console.log('Could not split stack.', e.stack);
        }
        return this.log("<strong class='text-danger'>Error:</strong> " + e.message + " (Line " + errorLineNumber + ")");
      }
    };

    Editor.prototype.initLog = function() {
      this.logElement = this.codeEditor.find('.log');
      this.logElement.find('.close').click((function(_this) {
        return function() {
          return _this.hideLog();
        };
      })(this));
      return window.log = (function(_this) {
        return function() {
          var messageText;
          messageText = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return _this.log(messageText);
        };
      })(this);
    };

    Editor.prototype.log = function() {
      var message, messageText;
      messageText = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      message = $(document.createElement('DIV'));
      message.addClass('message');
      message.html(messageText.join(', '));
      this.logElement.find('.messages').append(message);
      return this.logElement.slideDown();
    };

    Editor.prototype.clearLog = function() {
      return this.logElement.find('.messages').html('');
    };

    Editor.prototype.hideLog = function() {
      return this.logElement.slideUp();
    };

    return Editor;

  })();

}).call(this);

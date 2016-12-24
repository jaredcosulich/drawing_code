(function() {
  var slice = [].slice;

  App.Editor = (function() {
    function Editor(editor, canvas, runDelay) {
      var previousCode;
      this.canvas = canvas;
      this.runDelay = runDelay != null ? runDelay : 0;
      this.editorElement = $(editor)[0];
      this.editor = $(this.editorElement);
      this.codeEditor = this.editor.closest('.code-editor');
      ace.config.set('workerPath', '/drawing_code/ace/');
      this.aceEditor = ace.edit(this.editorElement);
      this.editor.data({
        editor: this
      });
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
      if (this.codeEditor.data('files')) {
        this.initFiles();
      }
      this.resize();
      this.editor.on('mousemove', (function(_this) {
        return function() {
          if (_this.editor.height() !== _this.currentEditorHeight) {
            return _this.resize();
          }
        };
      })(this));
      this.aceEditor.session.on('changeScrollTop', (function(_this) {
        return function() {
          return _this.resize();
        };
      })(this));
      this.editor.on('keyup', (function(_this) {
        return function() {
          _this.ensureValidCanvasReference();
          return App.currentProgress.storeEditorValue(_this.editorElement.id, _this.getCode());
        };
      })(this));
      this.startCode = this.aceEditor.getValue();
      this.initLog();
      this.initRun();
      if ((previousCode = App.currentProgress.getEditorValue(this.editorElement.id)) != null) {
        this.setCode(previousCode);
      }
      this.ensureValidCanvasReference();
    }

    Editor.prototype.resize = function() {
      this.currentEditorHeight = this.editor.height();
      this.aceEditor.resize();
      return setTimeout(((function(_this) {
        return function() {
          _this.editor.find('.ace_scroller').css({
            bottom: '18px'
          });
          return _this.editor.find('.ace_scrollbar-v').css({
            bottom: '18px'
          });
        };
      })(this)), 250);
    };

    Editor.prototype.ensureValidCanvasReference = function() {
      var canvasId, code;
      code = this.aceEditor.getValue();
      canvasId = this.canvas.canvasElement.id;
      if ((code.match(canvasId) != null) || (code.match(/var canvas = document/) == null)) {
        return;
      }
      code = code.replace(/var canvas = document.getElementById\('([^)]*)'\);/, "var canvas = document.getElementById('" + canvasId + "');");
      return this.setCode(code);
    };

    Editor.prototype.setStartCode = function(code) {
      return this.startCode = code;
    };

    Editor.prototype.setCode = function(code) {
      var ref;
      if (this.files && this.files.validAllCode(code)) {
        this.files.setAllCode(code);
      } else {
        this.aceEditor.setValue(code, -1);
      }
      this.ensureValidCanvasReference();
      if (this.files) {
        code = this.files.getAllCode();
      }
      return (ref = App.currentProgress) != null ? ref.storeEditorValue(this.editorElement.id, code) : void 0;
    };

    Editor.prototype.getCode = function() {
      if (this.files) {
        return this.files.getAllCode();
      } else {
        return this.aceEditor.getValue();
      }
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

    Editor.prototype.initFiles = function() {
      var filesElement;
      filesElement = this.codeEditor.find('.files');
      filesElement.show();
      return this.files = new App.Files(filesElement, (function(_this) {
        return function() {
          return _this.aceEditor.getValue();
        };
      })(this), (function(_this) {
        return function(code) {
          return _this.setCode(code);
        };
      })(this));
    };

    Editor.prototype.reset = function() {
      this.hideLog();
      this.clearLog();
      this.canvas.reset();
      return this.setCode(this.startCode);
    };

    Editor.prototype.run = function() {
      this.hideLog();
      this.clearLog();
      this.canvas.hideAlert();
      App.currentEditor = this;
      this.canvas.reset();
      return setTimeout(((function(_this) {
        return function() {
          var fileName, i, len, reverseFileNames;
          if (_this.files) {
            _this.files.files[_this.files.selected].code = _this.aceEditor.getValue();
            reverseFileNames = ((function() {
              var i, len, ref, results;
              ref = this.files.order;
              results = [];
              for (i = 0, len = ref.length; i < len; i++) {
                fileName = ref[i];
                results.push(fileName);
              }
              return results;
            }).call(_this)).reverse();
            for (i = 0, len = reverseFileNames.length; i < len; i++) {
              fileName = reverseFileNames[i];
              _this.runCode(_this.files.files[fileName].code, fileName);
            }
          } else {
            _this.runCode(_this.aceEditor.getValue());
          }
          return _this.canvas.canvas.focus();
        };
      })(this)), this.runDelay);
    };

    Editor.prototype.runCode = function(code, fileName) {
      var e, error, error1, error2, errorLineNumber, errorMessage;
      try {
        return eval(code);
      } catch (error1) {
        e = error1;
        try {
          errorLineNumber = e.stack.split(/\n/)[1].split('<anonymous>:')[1].split(':')[0];
        } catch (error2) {
          error = error2;
          errorLineNumber = 'N/A';
          console.log('Could not split stack.', e.stack);
        }
        errorMessage = "<strong class='text-danger'>Error:</strong> " + e.message + " (";
        if (fileName) {
          errorMessage += "File: " + fileName + ", ";
        }
        errorMessage += "Line: " + errorLineNumber + ")";
        return this.log(errorMessage);
      }
    };

    Editor.prototype.initLog = function() {
      this.logElement = this.codeEditor.find('.log');
      return this.logElement.find('.close').click((function(_this) {
        return function() {
          return _this.hideLog();
        };
      })(this));
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

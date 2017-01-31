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
      this.editor.on('mousemove', (function(_this) {
        return function() {
          if (_this.editor.height() !== _this.currentEditorHeight) {
            return _this.resize();
          }
        };
      })(this));
      this.aceEditor.session.on('changeScrollTop', (function(_this) {
        return function() {
          if (_this.editor.height() !== _this.currentEditorHeight) {
            return _this.resize();
          }
        };
      })(this));
      this.editor.on('keyup', (function(_this) {
        return function() {
          _this.ensureValidCanvasReference();
          App.currentProgress.storeEditorValue(_this.editorElement.id, _this.getCode());
          return _this.codeEditor.find('.edit-text-message').html("You've changed the code. To see the results:");
        };
      })(this));
      this.startCode = this.aceEditor.getValue();
      this.initLog();
      this.initRun();
      if ((previousCode = App.currentProgress.getEditorValue(this.editorElement.id)) != null) {
        this.setCode(previousCode);
      } else {
        this.setCode(this.startCode);
      }
      this.ensureValidCanvasReference();
    }

    Editor.prototype.resize = function() {
      this.currentEditorHeight = this.editor.height();
      return this.aceEditor.resize();
    };

    Editor.prototype.ensureValidCanvasReference = function() {
      var canvasId, code;
      code = this.aceEditor.getValue();
      canvasId = this.canvas.canvasElement.id;
      if ((code.match(canvasId) != null) || (code.match(/var canvas = document/) == null)) {
        return;
      }
      code = code.replace(/var canvas = document.getElementById\(['"]([^)]*)['"]\);/, "var canvas = document.getElementById('" + canvasId + "');");
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
      this.codeEditor.find('.buttons .run-only').click((function(_this) {
        return function(e) {
          return _this.run();
        };
      })(this));
      this.codeEditor.find('.buttons .run-and-focus').click((function(_this) {
        return function(e) {
          return _this.run(function() {
            return _this.canvas.canvas.focus();
          });
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
      var ref;
      this.hideLog();
      this.clearLog();
      this.canvas.reset();
      this.setCode(this.startCode);
      return (ref = App.currentProgress) != null ? ref.clearEditorValue(this.editorElement.id) : void 0;
    };

    Editor.prototype.run = function(callback) {
      this.hideLog();
      this.clearLog();
      this.canvas.hideAlert();
      App.currentEditor = this;
      this.canvas.reset();
      return setTimeout(((function(_this) {
        return function() {
          var code, fileMap, fileName, fileStart, i, j, len, len1, line, ref, reverseFileNames;
          _this.canvas.canvas.data({
            startTime: new Date()
          });
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
            fileMap = [];
            code = [];
            for (i = 0, len = reverseFileNames.length; i < len; i++) {
              fileName = reverseFileNames[i];
              fileStart = code.length;
              ref = _this.files.files[fileName].code.split(/\n/);
              for (j = 0, len1 = ref.length; j < len1; j++) {
                line = ref[j];
                code.push(line);
                fileMap.push({
                  name: fileName,
                  start: fileStart
                });
              }
            }
            _this.runCode(code.join('\n'), fileMap);
          } else {
            _this.runCode(_this.aceEditor.getValue());
          }
          if (callback) {
            return callback();
          }
        };
      })(this)), this.runDelay);
    };

    Editor.prototype.wrapCode = function(code, event) {
      var e, error, error1, error2, errorLineNumber, errorMessage, fileInfo;
      errorLineNumber = 'N/A';
      try {
        return code(event);
      } catch (error1) {
        e = error1;
        try {
          errorLineNumber = parseInt(e.stack.split(/\n/)[1].split('<anonymous>:')[1].split(':')[0]) - 2;
        } catch (error2) {
          error = error2;
          console.log('Could not split stack.', e.stack);
        }
        errorMessage = "<strong class='text-danger'>Error: </strong> " + e.message + " (";
        if (this.currentFileMap && !isNaN(errorLineNumber)) {
          fileInfo = this.currentFileMap[errorLineNumber];
          errorLineNumber = errorLineNumber - fileInfo.start;
          errorMessage += "File: " + fileInfo.name + ", ";
        }
        errorMessage += "Line: " + errorLineNumber + ")";
        return this.log(errorMessage);
      }
    };

    Editor.prototype.initTimeouts = function() {
      var i, len, ref, timeout;
      if (this.timeouts != null) {
        ref = this.timeouts;
        for (i = 0, len = ref.length; i < len; i++) {
          timeout = ref[i];
          clearTimeout(timeout);
        }
      }
      return this.timeouts = [];
    };

    Editor.prototype.initIntervals = function() {
      var i, interval, len, ref;
      if (this.intervals != null) {
        ref = this.intervals;
        for (i = 0, len = ref.length; i < len; i++) {
          interval = ref[i];
          clearTimeout(interval);
        }
      }
      return this.intervals = [];
    };

    Editor.prototype.setTimeout = function(f, time) {
      var timeout;
      timeout = setTimeout(((function(_this) {
        return function() {
          return _this.wrapCode(f);
        };
      })(this)), time);
      this.timeouts.push(timeout);
      return timeout;
    };

    Editor.prototype.setInterval = function(f, time) {
      var interval;
      interval = setInterval(((function(_this) {
        return function() {
          return _this.wrapCode(f);
        };
      })(this)), time);
      this.intervals.push(interval);
      return interval;
    };

    Editor.prototype.addCanvasEventListener = function(event, f) {
      return this.canvas.canvasElement.addEventListener(event, (function(_this) {
        return function(e) {
          return _this.wrapCode(f, e);
        };
      })(this));
    };

    Editor.prototype.runCode = function(code, fileMap) {
      var wrappedCode;
      this.initTimeouts();
      this.initIntervals();
      code = code.replace(/setTimeout/g, 'wrapper.setTimeout');
      code = code.replace(/setInterval/g, 'wrapper.setInterval');
      code = code.replace(/canvas\.addEventListener/g, 'wrapper.addCanvasEventListener');
      this.currentFileMap = fileMap;
      wrappedCode = "this.wrapCode(function() {\n  var wrapper = this;\n  " + code + "\n}.bind(this))";
      return eval(wrappedCode);
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
      var message, messageText, messages;
      messageText = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      messages = this.logElement.find('.messages');
      message = $(document.createElement('DIV'));
      message.addClass('message');
      message.html(messageText.join(', '));
      if (messages.find('.message').length >= 3) {
        messages.find('.message').first().remove();
      }
      messages.append(message);
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

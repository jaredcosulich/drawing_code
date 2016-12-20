(function() {
  App.Files = (function() {
    function Files(element, getCode, setCode) {
      this.element = element;
      this.getCode = getCode;
      this.setCode = setCode;
      this.editorElement = this.element.closest('.code-editor').find('.editor')[0];
      this.button = this.element.find('button');
      this.menu = this.element.find('.dropdown-menu');
      this.reset();
    }

    Files.prototype.reset = function() {
      this.selected = 'Base';
      this.order = ['Base'];
      this.files = {
        Base: {}
      };
      return this.buildMenu();
    };

    Files.prototype.buildMenu = function() {
      var addItem, deleteItem, fn, i, len, name, ref, renameItem;
      this.menu.html('');
      ref = this.order;
      fn = (function(_this) {
        return function(name) {
          var fileItem;
          fileItem = $(document.createElement('span'));
          fileItem.addClass('dropdown-item');
          if (_this.selected === name) {
            _this.button.html("Files (" + name + ")");
            fileItem.addClass('active');
          }
          fileItem.html(name);
          fileItem.click(function() {
            return _this.switchFiles(name);
          });
          return _this.menu.append(fileItem);
        };
      })(this);
      for (i = 0, len = ref.length; i < len; i++) {
        name = ref[i];
        fn(name);
      }
      this.menu.append('<div class=\'dropdown-divider\'></div>');
      addItem = $(document.createElement('span'));
      addItem.addClass('dropdown-item');
      addItem.html('Add New File');
      addItem.click((function(_this) {
        return function() {
          return _this.addFile(prompt('What would you like to call your new file?'), true);
        };
      })(this));
      this.menu.append(addItem);
      renameItem = $(document.createElement('span'));
      renameItem.addClass('dropdown-item');
      renameItem.html('Rename Current File');
      renameItem.click((function(_this) {
        return function() {
          return _this.renameFile(prompt('What would you like to rename the current file to?'));
        };
      })(this));
      this.menu.append(renameItem);
      deleteItem = $(document.createElement('span'));
      deleteItem.addClass('dropdown-item');
      deleteItem.html('Delete Current File');
      deleteItem.click((function(_this) {
        return function() {
          return _this.deleteFile(_this.selected);
        };
      })(this));
      return this.menu.append(deleteItem);
    };

    Files.prototype.addFile = function(name, switchToFile, code) {
      if (name.length === 0) {
        return;
      }
      this.files[name] = {};
      if (code) {
        this.files[name].code = code;
      }
      if (this.order.indexOf(name) === -1) {
        this.order.push(name);
      }
      this.buildMenu();
      if (switchToFile) {
        return this.switchFiles(name);
      }
    };

    Files.prototype.renameFile = function(name) {
      var ref;
      this.files[name] = this.files[this.selected];
      this.order[this.order.indexOf(this.selected)] = name;
      delete this.files[this.selected];
      this.selected = name;
      this.buildMenu();
      return (ref = App.currentProgress) != null ? ref.storeEditorValue(this.editorElement.id, this.getAllCode()) : void 0;
    };

    Files.prototype.deleteFile = function(name) {
      var ref;
      if (!confirm('Are you sure you want to delete this file?')) {
        return;
      }
      if (this.order.length === 1) {
        return alert('This is the only file. You can not delete the only file.');
      } else {
        this.switchFiles(this.order[0]);
        delete this.files[name];
        this.order.splice(this.order.indexOf(name), 1);
        this.buildMenu();
        return (ref = App.currentProgress) != null ? ref.storeEditorValue(this.editorElement.id, this.getAllCode()) : void 0;
      }
    };

    Files.prototype.switchFiles = function(name) {
      if (this.selected === name) {
        return;
      }
      this.files[this.selected].code = this.getCode();
      this.selected = name;
      this.setCode(this.files[name].code || '');
      return this.buildMenu();
    };

    Files.prototype.getAllCode = function() {
      var allCode, fileName, i, len, ref;
      this.files[this.selected].code = this.getCode();
      allCode = [];
      ref = this.order;
      for (i = 0, len = ref.length; i < len; i++) {
        fileName = ref[i];
        allCode.push(fileName + "@!~" + this.files[fileName].code);
      }
      return allCode.join('~!@');
    };

    Files.prototype.setAllCode = function(allCode) {
      var code, fileInfo, i, len, name, ref, ref1, results;
      this.reset();
      if (this.validAllCode(allCode)) {
        ref = allCode.split('~!@');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          fileInfo = ref[i];
          ref1 = fileInfo.split('@!~'), name = ref1[0], code = ref1[1];
          if (!name || name.length === 0 || !code || code.length === 0) {
            continue;
          }
          code = code.replace(/\s*/, '');
          this.addFile(name, false, code);
          if (name === this.selected) {
            results.push(this.setCode(code));
          } else {
            results.push(void 0);
          }
        }
        return results;
      } else {
        return this.setCode(allCode);
      }
    };

    Files.prototype.validAllCode = function(code) {
      return code.indexOf('@!~') > -1;
    };

    return Files;

  })();

}).call(this);

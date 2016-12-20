describe("Files", function() {
  var currentCode;

  var getCode = function() {};
  var setCode = function(code) { currentCode = code };

  var files;
  var element;

  function createElement() {
    var codeEditor = $(document.createElement('DIV'));
    codeEditor.addClass('code-editor')
    codeEditor.append('<div class=\'files\'><button/><div class=\'dropdown-menu\'></div></div>')
    codeEditor.append('<div class=\'editor\'></div>')
    return codeEditor.find('.files')
  }

  beforeEach(function() {
    element = createElement();
    files = new App.Files(element, getCode, setCode);
  });

  afterEach(function() {
  });

  describe("Loading Code", function() {
    var dropdownItems;

    beforeEach(function() {
      code = "\
        ~!@File1@!~\
        var canvas = document.getElementById('my_drawings_canvas');\
        var context = canvas.getContext('2d');\
        ~!@File2@!~\
        var file2 = 'something';\
        ~!@File3@!~\
        var file3 = 'something else';\
      "

      files.setAllCode(code)
      dropdownItems = element.find('.dropdown-item');
    })

    it('should create a link to each file in the dropdown menu', function() {
      expect(dropdownItems.length).toBe(7);

      expect($(dropdownItems[3]).html()).toBe('File3');
    });

    it('should load the code for File2 when that link is clicked', function() {
      $(dropdownItems[2]).click();

      expect(files.button.html()).toBe('Files (File2)');
      expect(currentCode).toBe('var file2 = \'something\';');
    });
  });
});

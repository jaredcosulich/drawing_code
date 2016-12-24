(function() {
  Test.Code = (function() {
    function Code(options) {
      this.code = options.code, this.canvas = options.canvas;
    }

    Code.prototype.initTestCanvas = function() {
      if (this.testCanvas) {
        $(this.testCanvas.remove());
      }
      this.testCanvas = document.createElement('CANVAS');
      $(this.testCanvas).css({
        width: this.canvas.canvasElement.width,
        height: this.canvas.canvasElement.height
      });
      this.testCanvas.width = this.canvas.canvasElement.width;
      this.testCanvas.height = this.canvas.canvasElement.height;
      return this.testContext = this.testCanvas.getContext('2d');
    };

    Code.prototype.drawCode = function() {
      return this.code(this.testCanvas, this.testContext);
    };

    Code.prototype.test = function(callback) {
      this.initTestCanvas();
      this.drawCode();
      return setTimeout(((function(_this) {
        return function() {
          return callback(_this.compareImageData());
        };
      })(this)), 300);
    };

    Code.prototype.compareImageData = function() {
      var context, diffCount, height, i, imageData, index, len, pixel, testImageData, width;
      context = this.canvas.context;
      width = this.canvas.canvasElement.width;
      height = this.canvas.canvasElement.height;
      imageData = context.getImageData(0, 0, width, height).data;
      testImageData = this.testCanvas.getContext('2d').getImageData(0, 0, width, height).data;
      diffCount = 0;
      for (index = i = 0, len = imageData.length; i < len; index = ++i) {
        pixel = imageData[index];
        if (Math.abs(testImageData[index] - pixel) !== 0) {
          return false;
        }
      }
      return true;
    };

    return Code;

  })();

}).call(this);

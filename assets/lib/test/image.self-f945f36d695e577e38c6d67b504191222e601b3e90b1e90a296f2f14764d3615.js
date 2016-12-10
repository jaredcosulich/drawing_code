(function() {
  Test.ImageComparison = (function() {
    function ImageComparison(options) {
      this.src = options.src, this.canvas = options.canvas;
      this.context = this.canvas.context;
    }

    ImageComparison.prototype.initImage = function() {
      this.image = new Image();
      return this.image.src = this.src;
    };

    ImageComparison.prototype.initTestCanvas = function() {
      this.testCanvas = document.createElement('CANVAS');
      this.testCanvas.width = this.canvas.canvasElement.width;
      this.testCanvas.height = this.canvas.canvasElement.height;
      return this.testCanvas.getContext('2d').drawImage(this.image, 0, 0);
    };

    ImageComparison.prototype.test = function(callback) {
      if (this.image == null) {
        this.initImage();
      }
      if (this.testCanvas == null) {
        this.initTestCanvas();
      }
      return setTimeout(((function(_this) {
        return function() {
          return callback(_this.compareImageData());
        };
      })(this)), 300);
    };

    ImageComparison.prototype.compareImageData = function() {
      var height, i, imageData, index, len, pixel, testImageData, width;
      width = this.canvas.canvasElement.width;
      height = this.canvas.canvasElement.height;
      imageData = this.context.getImageData(0, 0, width, height).data;
      testImageData = this.testCanvas.getContext('2d').getImageData(0, 0, width, height).data;
      for (index = i = 0, len = imageData.length; i < len; index = ++i) {
        pixel = imageData[index];
        if (testImageData[index] !== pixel) {
          return false;
        }
      }
      return true;
    };

    return ImageComparison;

  })();

}).call(this);

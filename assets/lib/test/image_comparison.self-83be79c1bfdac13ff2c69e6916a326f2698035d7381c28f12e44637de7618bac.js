(function() {
  Test.ImageComparison = (function() {
    function ImageComparison(options) {
      var ref;
      this.src = options.src, this.image = options.image, this.canvas = options.canvas;
      if ((ref = this.image) != null ? ref.length : void 0) {
        this.image = this.image[0];
      }
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
      var context, diffCount, height, i, imageData, index, len, pixel, testImageData, width;
      context = this.canvas.context;
      width = this.canvas.canvasElement.width;
      height = this.canvas.canvasElement.height;
      imageData = context.getImageData(0, 0, width, height).data;
      testImageData = this.testCanvas.getContext('2d').getImageData(0, 0, width, height).data;
      diffCount = 0;
      for (index = i = 0, len = imageData.length; i < len; index = ++i) {
        pixel = imageData[index];
        if ((Math.abs(testImageData[index] - pixel) > 50) || (testImageData[index] === 0 && pixel !== 0) || (pixel === 0 && testImageData[index] !== 0)) {
          return false;
        }
      }
      return true;
    };

    return ImageComparison;

  })();

}).call(this);

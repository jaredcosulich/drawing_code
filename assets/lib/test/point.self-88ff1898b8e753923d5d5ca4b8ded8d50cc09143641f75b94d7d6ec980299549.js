(function() {
  Test.Point = (function() {
    function Point(options) {
      var ref;
      this.x = options.x, this.y = options.y, this.canvas = options.canvas, this.badPoint = (ref = options.badPoint) != null ? ref : false;
      this.context = this.canvas.context;
      this.status = 0;
    }

    Point.prototype.test = function() {
      var alpha, i, j, len, pointData, ref, totalAlpha;
      pointData = this.context.getImageData(this.x - 1, this.y - 1, 3, 3);
      totalAlpha = 0;
      ref = pointData.data;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        alpha = ref[i];
        if (i % 3 === 0) {
          totalAlpha += alpha;
        }
      }
      this.status = totalAlpha > 0 ? 1 : -1;
      if (this.badPoint) {
        this.status = this.status * -1;
      }
      return this.status;
    };

    Point.prototype.display = function(success) {
      var strokeStyle;
      if (success == null) {
        success = this.status;
      }
      if (success <= 0 || this.badPoint) {
        return;
      }
      strokeStyle = this.context.strokeStyle;
      this.context.strokeStyle = '#00FF00';
      this.context.beginPath();
      this.context.moveTo(this.x - 3, this.y);
      this.context.lineTo(this.x + 3, this.y);
      this.context.moveTo(this.x, this.y - 3);
      this.context.lineTo(this.x, this.y + 3);
      this.context.stroke();
      return this.context.strokeStyle = strokeStyle;
    };

    return Point;

  })();

}).call(this);

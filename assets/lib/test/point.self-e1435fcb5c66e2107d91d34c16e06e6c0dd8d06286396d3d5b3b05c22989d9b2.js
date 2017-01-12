(function() {
  Test.Point = (function() {
    function Point(options) {
      var ref, ref1, ref2, ref3;
      this.x = options.x, this.y = options.y, this.canvas = options.canvas, this.colors = (ref = options.colors) != null ? ref : [], this.buffer = (ref1 = options.buffer) != null ? ref1 : 1, this.badPoint = (ref2 = options.badPoint) != null ? ref2 : false, this.badColor = (ref3 = options.badColor) != null ? ref3 : false;
      this.status = 0;
    }

    Point.prototype.test = function(buffer) {
      var alpha, colorFound, colorMatch, colorValue, context, i, index, j, k, l, len, len1, len2, pointColor, pointData, ref, ref1, ref2, totalAlpha;
      if (buffer == null) {
        buffer = this.buffer;
      }
      context = this.canvas.context;
      pointData = context.getImageData(this.x - buffer, this.y - buffer, (buffer * 2) + 1, (buffer * 2) + 1);
      totalAlpha = 0;
      ref = pointData.data;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        alpha = ref[i];
        if ((i + 1) % 4 === 0) {
          totalAlpha += alpha;
        }
      }
      this.status = totalAlpha > 0 ? 1 : -1;
      if (this.badPoint) {
        this.status = this.status * -1;
      }
      if (this.status > -1 && this.colors.length > 0) {
        colorFound = false;
        ref1 = pointData.data;
        for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
          pointColor = ref1[i];
          if (!((i + 1) % 4 === 1)) {
            continue;
          }
          ref2 = this.colors;
          for (index = l = 0, len2 = ref2.length; l < len2; index = ++l) {
            colorValue = ref2[index];
            colorMatch = true;
            if (pointData.data[i + index] !== colorValue) {
              colorMatch = false;
              break;
            }
          }
          if (colorMatch) {
            colorFound = true;
            break;
          }
        }
        if (this.badColor) {
          colorFound = !colorFound;
        }
        this.status = colorFound ? 1 : -1;
        if (this.badPoint) {
          this.status = this.status * -1;
        }
      }
      return this.status;
    };

    Point.prototype.display = function(success) {
      var context, strokeStyle;
      if (success == null) {
        success = this.status;
      }
      if (success <= 0 || this.badPoint) {
        return;
      }
      context = this.canvas.context;
      strokeStyle = context.strokeStyle;
      context.strokeStyle = '#00FF00';
      context.beginPath();
      context.moveTo(this.x - 3, this.y);
      context.lineTo(this.x + 3, this.y);
      context.moveTo(this.x, this.y - 3);
      context.lineTo(this.x, this.y + 3);
      context.stroke();
      return context.strokeStyle = strokeStyle;
    };

    return Point;

  })();

}).call(this);

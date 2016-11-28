(function() {
  App.Canvas = (function() {
    function Canvas(canvas) {
      this.canvasElement = $(canvas)[0];
      this.canvas = $(this.canvasElement);
      this.context = this.canvasElement.getContext('2d');
      this.canvas.attr({
        width: this.canvas.width(),
        height: this.canvas.height()
      });
      this.alertElement = this.canvas.closest('.visual').find('.alert');
    }

    Canvas.prototype.alert = function(message, success) {
      this.alertElement.html(message);
      if (success) {
        this.alertElement.removeClass('alert-danger');
        this.alertElement.addClass('alert-success');
      } else {
        this.alertElement.removeClass('alert-success');
        this.alertElement.addClass('alert-danger');
      }
      return this.alertElement.slideDown();
    };

    Canvas.prototype.hideAlert = function() {
      return this.alertElement.slideUp(100);
    };

    return Canvas;

  })();

}).call(this);

(function() {
  App.Canvas = (function() {
    function Canvas(canvas) {
      var backgroundImage;
      this.canvasElement = $(canvas)[0];
      this.canvas = $(this.canvasElement);
      this.container = this.canvas.closest('.canvas');
      if ((backgroundImage = this.canvas.closest('.canvas').find('.background img')).length > 0) {
        this.canvas.css('background-image', 'url(' + backgroundImage.attr('src') + ')');
      }
      this.context = this.canvasElement.getContext('2d');
      this.canvas.attr({
        width: this.canvas.width(),
        height: this.canvas.height()
      });
      if (this.container.width() > this.canvas.width()) {
        this.container.width(this.canvas.width());
      }
      this.initAlert();
    }

    Canvas.prototype.reset = function() {
      var i, j, results;
      this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      results = [];
      for (i = j = 0; j <= 50; i = ++j) {
        results.push(this.context.restore());
      }
      return results;
    };

    Canvas.prototype.initAlert = function() {
      this.alertElement = this.canvas.closest('.visual').find('.alert');
      return this.alertElement.width(this.container.width() - 39);
    };

    Canvas.prototype.alert = function(message, success) {
      this.alertElement.html(message);
      if (success === void 0) {
        this.alertElement.removeClass('alert-danger alert-success');
        this.alertElement.addClass('alert-warning');
      } else if (success) {
        this.alertElement.removeClass('alert-danger alert-warning');
        this.alertElement.addClass('alert-success');
      } else {
        this.alertElement.removeClass('alert-success alert-warning');
        this.alertElement.addClass('alert-danger');
      }
      return this.alertElement.slideDown();
    };

    Canvas.prototype.hideAlert = function() {
      return this.alertElement.slideUp(100);
    };

    Canvas.prototype.selfAssess = function(successCallback) {
      var confirm, message, noButton, yesButton;
      message = $(document.createElement('DIV'));
      message.html('Do you feel satisfied with your drawing?');
      confirm = $(document.createElement('DIV'));
      confirm.addClass('mt-1');
      yesButton = $(document.createElement('BUTTON'));
      yesButton.addClass('btn btn-success mr-1');
      yesButton.html('Yes, it looks good');
      yesButton.click((function(_this) {
        return function() {
          _this.alert('<strong>Congrats!</strong> Nice work :)', true);
          return successCallback();
        };
      })(this));
      noButton = $(document.createElement('BUTTON'));
      noButton.addClass('btn btn-danger');
      noButton.html('No, I\'d like to work on it more');
      noButton.click((function(_this) {
        return function() {
          return _this.hideAlert();
        };
      })(this));
      confirm.append(yesButton).append(noButton);
      message.append(confirm);
      return this.alert(message);
    };

    return Canvas;

  })();

}).call(this);

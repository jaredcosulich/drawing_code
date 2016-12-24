(function() {
  App.Canvas = (function() {
    function Canvas(canvas) {
      this.canvas = canvas;
      this.index = 0;
      this.init();
      this.initAlert();
    }

    Canvas.prototype.init = function() {
      var backgroundImage;
      this.canvasElement = $(this.canvas)[0];
      this.canvas = $(this.canvasElement);
      this.container = this.canvas.closest('.canvas');
      if ((backgroundImage = this.canvas.closest('.canvas').find('.background img')).length > 0) {
        this.canvas.css('background-image', 'url(' + backgroundImage.attr('src') + ')');
      }
      this.context = this.canvasElement.getContext('2d');
      this.canvas.attr({
        tabIndex: 0,
        width: this.canvas.width(),
        height: this.canvas.height()
      });
      this.index += 1;
      return this.canvas.data({
        index: this.index
      });
    };

    Canvas.prototype.reset = function() {
      var c;
      this.hideAlert();
      c = this.canvas.clone();
      this.canvas.remove();
      this.container.append(c);
      this.canvas = c;
      return this.init();
    };

    Canvas.prototype.initAlert = function() {
      return this.alertElement = this.canvas.closest('.visual').find('.alert');
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

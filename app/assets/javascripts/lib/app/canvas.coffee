class App.Canvas
  constructor: (canvas) ->
    @canvasElement = $(canvas)[0]
    @canvas = $(@canvasElement)
    if (backgroundImage = @canvas.closest('.canvas').find('.background img')).length > 0
      @canvas.css('background-image', 'url(' + backgroundImage.attr('src') + ')')

    @context = @canvasElement.getContext('2d')
    @canvas.attr(width: @canvas.width(), height: @canvas.height())
    @alertElement = @canvas.closest('.visual').find('.alert')

  alert: (message, success) ->
    @alertElement.html(message)
    if success
      @alertElement.removeClass('alert-danger')
      @alertElement.addClass('alert-success')
    else
      @alertElement.removeClass('alert-success')
      @alertElement.addClass('alert-danger')
    @alertElement.slideDown()

  hideAlert: ->
    @alertElement.slideUp(100)

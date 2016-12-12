class App.Canvas
  constructor: (canvas) ->
    @canvasElement = $(canvas)[0]
    @canvas = $(@canvasElement)
    @container = @canvas.closest('.canvas')
    if (backgroundImage = @canvas.closest('.canvas').find('.background img')).length > 0
      @canvas.css('background-image', 'url(' + backgroundImage.attr('src') + ')')

    @context = @canvasElement.getContext('2d')
    @canvas.attr(width: @canvas.width(), height: @canvas.height())

    @container.width(@canvas.width()) if @container.width() > @canvas.width()

    @initAlert()

  reset: ->
    @context.clearRect(0, 0, @canvasElement.width, @canvasElement.height);
    @context.restore() for i in [0..50] # is there a better way to reset the canvas?

  initAlert: ->
    @alertElement = @canvas.closest('.visual').find('.alert')
    @alertElement.width(@container.width() - 39)


  alert: (message, success) ->
    @alertElement.html(message)
    if success == undefined
      @alertElement.removeClass('alert-danger alert-success')
      @alertElement.addClass('alert-warning')
    else if success
      @alertElement.removeClass('alert-danger alert-warning')
      @alertElement.addClass('alert-success')
    else
      @alertElement.removeClass('alert-success alert-warning')
      @alertElement.addClass('alert-danger')
    @alertElement.slideDown()

  hideAlert: ->
    @alertElement.slideUp(100)

  selfAssess: (successCallback) ->
    message = $(document.createElement('DIV'))
    message.html('Do you feel satisfied with your drawing?')

    confirm = $(document.createElement('DIV'))
    confirm.addClass('mt-1')

    yesButton = $(document.createElement('BUTTON'))
    yesButton.addClass('btn btn-success mr-1')
    yesButton.html('Yes, it looks good')
    yesButton.click =>
      @alert('<strong>Congrats!</strong> Nice work :)', true)
      successCallback()

    noButton = $(document.createElement('BUTTON'))
    noButton.addClass('btn btn-danger')
    noButton.html('No, I\'d like to work on it more')
    noButton.click => @hideAlert()

    confirm.append(yesButton).append(noButton)
    message.append(confirm)

    @alert(message)

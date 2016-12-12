class App.Editor
  constructor: (editor, @canvas) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)

    @codeEditor = @editor.closest('.code-editor')

    ace.config.set('workerPath', '/drawing_code/ace/')
    @aceEditor = ace.edit(@editorElement)
    @editor.data(ace: @aceEditor)

    @aceEditor.$blockScrolling = Infinity
    # @aceEditor.config.set("basePath", "/ace");
    @aceEditor.session.setOptions
        mode: "ace/mode/javascript"
        tabSize: 2
        useSoftTabs: true
        wrap: 'on'

    @resize()
    @editor.on 'mousemove', =>
      if @editor.height() != currentEditorHeight
        @resize()

    @aceEditor.session.on 'changeScrollTop', => @resize()

    @editor.on 'keyup', =>
      @ensureValidCanvasReference()
      App.currentProgress.storeEditorValue(@editorElement.id, @aceEditor.getValue())

    @startCode = @aceEditor.getValue()

    @initLog()
    @initRun()

    if (previousCode = App.currentProgress.getEditorValue(@editorElement.id))?
      @aceEditor.setValue(previousCode, -1)

    @ensureValidCanvasReference()

  resize: ->
    currentEditorHeight = @editor.height()
    @aceEditor.resize()
    setTimeout(( =>
      @editor.find('.ace_scrollbar-v').css(bottom: '15px')
    ), 250)

  ensureValidCanvasReference: ->
    code = @aceEditor.getValue()
    canvasId = @canvas.canvasElement.id
    return if code.match(canvasId)?
    code = code.replace(/getElementById\('([^)]*)'\);/, "getElementById('#{canvasId}');")
    @setCode(code)

  setCode: (code) ->
    @aceEditor.setValue(code, -1)
    App.currentProgress?.storeEditorValue(@editorElement.id, code)

  initRun: ->
    @codeEditor.find('.buttons .run').click (e) =>
      @run()

    @codeEditor.find('.buttons .reset').click (e) =>
      if (confirm('Are you sure you want to reset your code?'))
        @reset()

  reset: ->
    @hideLog()
    @clearLog()
    @canvas.hideAlert()
    @setCode(@startCode)

  run: ->
    @hideLog()
    @clearLog()
    @canvas.hideAlert()
    try
      App.currentEditor = @
      @canvas.reset()
      eval(@aceEditor.getValue())
    catch e
      try
        errorLineNumber = e.stack.split(/\n/)[1].split('<anonymous>:')[1].split(':')[0]
      catch error
        errorLineNumber = 'N/A'
        console.log('Could not split stack.', e.stack)
      @log("<strong class='text-danger'>Error:</strong> #{e.message} (Line #{errorLineNumber})")

  initLog: ->
    @logElement = @codeEditor.find('.log')
    @logElement.find('.close').click => @hideLog()

  log: (messageText...) ->
    message = $(document.createElement('DIV'))
    message.addClass('message')
    message.html(messageText.join(', '))
    @logElement.find('.messages').append(message)
    @logElement.slideDown()

  clearLog: ->
    @logElement.find('.messages').html('')

  hideLog: ->
    @logElement.slideUp();

class App.Editor
  constructor: (editor, @canvas) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)

    @codeEditor = @editor.closest('.code-editor')

    ace.config.set('workerPath', '/drawing_code/ace/')
    @aceEditor = ace.edit(@editorElement)
    @editor.data(editor: @)
    @editor.data(ace: @aceEditor)

    @aceEditor.$blockScrolling = Infinity
    # @aceEditor.config.set("basePath", "/ace");
    @aceEditor.session.setOptions
        mode: "ace/mode/javascript"
        tabSize: 2
        useSoftTabs: true
        wrap: 'on'

    @initFiles() if @codeEditor.data('files')

    @resize()
    @editor.on 'mousemove', =>
      @resize() if @editor.height() != @currentEditorHeight

    @aceEditor.session.on 'changeScrollTop', => @resize()

    @editor.on 'keyup', =>
      @ensureValidCanvasReference()
      App.currentProgress.storeEditorValue(@editorElement.id, @getCode())

    @startCode = @aceEditor.getValue()

    @initLog()
    @initRun()

    if (previousCode = App.currentProgress.getEditorValue(@editorElement.id))?
      @setCode(previousCode)

    @ensureValidCanvasReference()

  resize: ->
    @currentEditorHeight = @editor.height()
    @aceEditor.resize()
    setTimeout(( =>
      @editor.find('.ace_scroller').css(right: '18px')
      @editor.find('.ace_scrollbar-v').css(bottom: '18px')
    ), 250)

  ensureValidCanvasReference: ->
    code = @aceEditor.getValue()
    canvasId = @canvas.canvasElement.id
    return if code.match(canvasId)? || !code.match(/var canvas = document/)?
    code = code.replace(/var canvas = document.getElementById\('([^)]*)'\);/, "var canvas = document.getElementById('#{canvasId}');")
    @setCode(code)

  setCode: (code) ->
    if @files && @files.validAllCode(code)
      @files.setAllCode(code)
    else
      @aceEditor.setValue(code, -1)
    @ensureValidCanvasReference()

    code = @files.getAllCode() if @files
    App.currentProgress?.storeEditorValue(@editorElement.id, code)

  getCode: ->
    if @files
      @files.getAllCode()
    else
      @aceEditor.getValue()

  initRun: ->
    @codeEditor.find('.buttons .run').click (e) =>
      @run()

    @codeEditor.find('.buttons .reset').click (e) =>
      if (confirm('Are you sure you want to reset your code?'))
        @reset()

  initFiles: ->
    filesElement = @codeEditor.find('.files')
    filesElement.show()
    @files = new App.Files(
      filesElement,
      () => @aceEditor.getValue(),
      (code) => @setCode(code)
    )
    @files.buildMenu()

  reset: ->
    @hideLog()
    @clearLog()
    @canvas.hideAlert()
    @setCode(@startCode)

  run: ->
    @hideLog()
    @clearLog()
    @canvas.hideAlert()
    App.currentEditor = @
    @canvas.reset()
    if @files
      @files.files[@files.selected].code = @aceEditor.getValue()
      @runCode(@files.files[fileName].code, fileName) for fileName in @files.order.reverse()
    else
      @runCode(@aceEditor.getValue())

  runCode: (code, fileName) ->
    try
      eval(code)
    catch e
      try
        errorLineNumber = e.stack.split(/\n/)[1].split('<anonymous>:')[1].split(':')[0]
      catch error
        errorLineNumber = 'N/A'
        console.log('Could not split stack.', e.stack)
      errorMessage = "<strong class='text-danger'>Error:</strong> #{e.message} ("
      errorMessage += "File: #{fileName}, " if fileName
      errorMessage += "Line: #{errorLineNumber})"
      @log(errorMessage)

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

class App.Editor
  constructor: (editor, @canvas) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)

    @codeEditor = @editor.closest('.code-editor')

    ace.config.set('workerPath', '/ace/')
    @aceEditor = ace.edit(@editorElement)
    @aceEditor.$blockScrolling = Infinity
    # @aceEditor.config.set("basePath", "/ace");
    @aceEditor.session.setOptions
        mode: "ace/mode/javascript"
        tabSize: 2
        useSoftTabs: true
        wrap: 'on'

    @editor.on 'input', =>
      App.currentProgress.storeEditorValue(@editorElement.id, @aceEditor.getValue())

    @startCode = @aceEditor.getValue()

    @initLog()
    @initRun()

    if (previousCode = App.currentProgress.getEditorValue(@editorElement.id))?
      @aceEditor.setValue(previousCode, -1)

  initRun: ->
    @codeEditor.find('.buttons .run').click (e) =>
      @run()

    @codeEditor.find('.buttons .reset').click (e) =>
      if (confirm('Are you sure you want to reset your code?'))
        @reset()

  reset: ->
    @canvas.hideAlert()
    @aceEditor.setValue(@startCode, -1)
    App.currentProgress?.storeEditorValue(@editorElement.id, @startCode)

  run: ->
    @canvas.hideAlert()
    try
      eval(@aceEditor.getValue())
    catch e
      @log("<strong class='text-danger'>Error:</strong> #{e.message}")
      console.log(e)

  initLog: ->
    @logElement = @codeEditor.find('.log')
    @logElement.find('.close').click => @hideLog()

  log: (messageText) ->
    message = $(document.createElement('DIV'))
    message.addClass('message')
    message.html(messageText)
    @logElement.find('.messages').append(message)
    @logElement.slideDown()

  hideLog: ->
    @logElement.slideUp();

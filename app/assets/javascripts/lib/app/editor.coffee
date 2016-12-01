class App.Editor
  constructor: (editor, @canvas) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)

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

    @initRun()
    @reset()

    if (previousCode = App.currentProgress.getEditorValue(@editorElement.id))?
      @aceEditor.setValue(previousCode, -1)

  initRun: ->
    @editor.closest('.code-editor').find('.buttons .run').click (e) =>
      @run()

    @editor.closest('.code-editor').find('.buttons .reset').click (e) =>
      if (confirm('Are you sure you want to reset your code?'))
        @reset()

  reset: ->
    @canvas.hideAlert()
    @aceEditor.setValue(@startCode, -1)

  run: ->
    @canvas.hideAlert()
    eval(@aceEditor.getValue())

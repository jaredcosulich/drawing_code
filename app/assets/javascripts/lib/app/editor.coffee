class App.Editor
  constructor: (editor, @canvas) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)

    @aceEditor = ace.edit(@editorElement)
    @aceEditor.$blockScrolling = Infinity
    @editor.on 'input', -> window.onbeforeunload = App.confirmOnPageExit
    @aceEditor.session.setOptions
        mode: "ace/mode/javascript",
        tabSize: 2,
        useSoftTabs: true


    @startCode = @aceEditor.getValue()

    @initRun()
    @reset()

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

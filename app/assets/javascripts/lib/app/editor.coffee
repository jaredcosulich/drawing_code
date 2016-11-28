class App.Editor
  constructor: (editor, @canvas) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)
    @aceEditor = ace.edit(@editorElement)
    @startCode = @aceEditor.getValue().replace(/\n\s{22}/ig, '\n')
    @aceEditor.setValue(@startCode)
    # editor.getSession().setMode('ace/mode/javascript')
    @initRun()

  initRun: ->
    @editor.closest('.code-editor').find('.buttons .run').click (e) =>
      @canvas.hideAlert()
      eval(@aceEditor.getValue())

    @editor.closest('.code-editor').find('.buttons .reset').click (e) =>
      if (confirm('Are you sure you want to reset your code?'))
        @canvas.hideAlert()
        @aceEditor.setValue(@startCode)

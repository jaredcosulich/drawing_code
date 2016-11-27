class App.Editor
  constructor: (editor) ->
    @editorElement = $(editor)[0]
    @editor = $(@editorElement)
    @aceEditor = ace.edit(@editorElement)
    @aceEditor.setValue(@aceEditor.getValue().replace(/\n\s+/ig, '\n'))
    # editor.getSession().setMode('ace/mode/javascript')
    @initRun()

  initRun: ->
    @editor.closest('.code-editor').find('.run').click (e) =>
      eval(@aceEditor.getValue())

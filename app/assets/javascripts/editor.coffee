loadEditors = ->
  $('.editor').each (index, editorElement) ->
    editor = ace.edit(editorElement)
    # editor.getSession().setMode('ace/mode/javascript')
    $(editorElement).closest('.code-editor').find('.run').click (e) ->
      eval(editor.getValue())



$(document).on('turbolinks:load', loadEditors)

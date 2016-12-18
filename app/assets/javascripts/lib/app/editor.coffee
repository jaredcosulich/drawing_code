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

    @resize()
    @editor.on 'mousemove', =>
      @resize() if @editor.height() != @currentEditorHeight

    @aceEditor.session.on 'changeScrollTop', => @resize()

    @editor.on 'keyup', =>
      @ensureValidCanvasReference()
      App.currentProgress.storeEditorValue(@editorElement.id, @aceEditor.getValue())

    @startCode = @aceEditor.getValue()

    @initLog()
    @initRun()
    @initFiles() if @codeEditor.data('files')

    if (previousCode = App.currentProgress.getEditorValue(@editorElement.id))?
      @aceEditor.setValue(previousCode, -1)

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
    @aceEditor.setValue(code, -1)
    @ensureValidCanvasReference()
    App.currentProgress?.storeEditorValue(@editorElement.id, code)

  initRun: ->
    @codeEditor.find('.buttons .run').click (e) =>
      @run()

    @codeEditor.find('.buttons .reset').click (e) =>
      if (confirm('Are you sure you want to reset your code?'))
        @reset()

  initFiles: ->
    filesElement = @codeEditor.find('.files')
    filesElement.show()

    @files = {
      selected: 'Base'
      button: filesElement.find('button')
      menu: filesElement.find('.dropdown-menu')
      files: [
        {name: 'Base'}
      ]
    }

    @buildFileMenu()

  buildFileMenu: ->
    @files.menu.html('')
    for file in @files.files
      do (file) =>
        fileItem = $(document.createElement('span'))
        fileItem.addClass('dropdown-item')
        if @files.selected == file.name
          @files.button.html("Files (#{file.name})")
          fileItem.addClass('active')
        fileItem.html(file.name)
        fileItem.click => @switchFiles(file.name)
        @files.menu.append(fileItem)

    @files.menu.append('<div class=\'dropdown-divider\'></div>')
    @files.menu.append('<a class=\'dropdown-item\'>Rename Current File</a>')

    addItem = $(document.createElement('span'))
    addItem.addClass('dropdown-item')
    addItem.html('Add New File')
    addItem.click =>
      name = prompt('What would you like to call your new file?')
      @files.files.push({name: name})
      @switchFiles(name)
    @files.menu.append(addItem)

  switchFiles: (name) ->
    return if @files.selected == name
    currentFile = @files.files.find((file) => file.name == @files.selected)
    currentFile.code = @aceEditor.getValue()
    newFile = @files.files.find((file) => file.name == name)
    @setCode(newFile.code || '')
    @files.selected = name
    @buildFileMenu()

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
    try
      if @files
      else
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

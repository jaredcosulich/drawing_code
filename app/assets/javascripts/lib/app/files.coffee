class App.Files
  constructor: (@element, @getCode, @setCode) ->
    @editorElement = @element.closest('.code-editor').find('.editor')[0]
    @button = @element.find('button')
    @menu = @element.find('.dropdown-menu')
    @reset()
    window.files = @

  reset: ->
    @selected = 'Base'
    @order = ['Base']
    @files = {
      Base: {}
    }
    @buildMenu()

  buildMenu: ->
    @menu.html('')
    for name in @order
      do (name) =>
        fileItem = $(document.createElement('span'))
        fileItem.addClass('dropdown-item')
        if @selected == name
          @button.html("Files (#{name})")
          fileItem.addClass('active')
        fileItem.html(name)
        fileItem.click => @switchFiles(name)
        @menu.append(fileItem)

    @menu.append('<div class=\'dropdown-divider\'></div>')

    addItem = $(document.createElement('span'))
    addItem.addClass('dropdown-item')
    addItem.html('Add New File')
    addItem.click =>
      @addFile(prompt('What would you like to call your new file?'), true)
    @menu.append(addItem)

    renameItem = $(document.createElement('span'))
    renameItem.addClass('dropdown-item')
    renameItem.html('Rename Current File')
    renameItem.click =>
      @renameFile(prompt('What would you like to rename the current file to?'))
    @menu.append(renameItem)

    deleteItem = $(document.createElement('span'))
    deleteItem.addClass('dropdown-item')
    deleteItem.html('Delete Current File')
    deleteItem.click => @deleteFile(@selected)
    @menu.append(deleteItem)

  addFile: (name, switchToFile, code) ->
    return if name.length == 0
    @files[name] = {}
    @files[name].code = code if code
    @order.push(name) if @order.indexOf(name) == -1
    @buildMenu()
    @switchFiles(name) if switchToFile

  renameFile: (name) ->
    @files[name] = @files[@selected]
    @order[@order.indexOf(@selected)] = name
    delete @files[@selected]
    @selected = name
    @buildMenu()
    App.currentProgress?.storeEditorValue(@editorElement.id, @getAllCode())

  deleteFile: (name) ->
    return unless confirm('Are you sure you want to delete this file?')
    if @order.length == 1
      alert('This is the only file. You can not delete the only file.')
    else
      @switchFiles(@order[0])
      delete @files[name]
      @order.splice(@order.indexOf(name), 1)
      @buildMenu()
      App.currentProgress?.storeEditorValue(@editorElement.id, @getAllCode())

  switchFiles: (name) ->
    return if @selected == name
    @files[@selected].code = @getCode()
    @selected = name
    @setCode(@files[name].code || '')
    @buildMenu()

  getAllCode: ->
    @files[@selected].code = @getCode()
    allCode = []
    for fileName in @order
      allCode.push("#{fileName}@!~#{@files[fileName].code}")
    allCode.join('~!@')

  setAllCode: (allCode) ->
    @reset()
    if (@validAllCode(allCode))
      for fileInfo in allCode.split('~!@')
        [name, code] = fileInfo.split('@!~')
        continue if !name || name.length == 0 || !code || code.length == 0
        code = code.replace(/\s*/, '')
        @addFile(name, false, code)
        @setCode(code) if name == @selected
    else
      @setCode(allCode)

  validAllCode: (code) -> code.indexOf('@!~') > -1

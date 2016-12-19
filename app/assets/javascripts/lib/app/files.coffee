class App.Files
  constructor: (@element, @getCode, @setCode) ->
    @selected = 'Base'
    @button = @element.find('button')
    @menu = @element.find('.dropdown-menu')
    @order = ['Base']
    @files = {
      Base: {}
    }

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
      @addFile(prompt('What would you like to call your new file?'))
    @menu.append(addItem)

    @menu.append('<a class=\'dropdown-item\'>Rename Current File</a>')
    @menu.append('<a class=\'dropdown-item\'>Delete Current File</a>')


  addFile: (name, switchFile=true) ->
    return if name.length == 0
    @files[name] = {}
    @order.push(name) if @order.indexOf(name) == -1
    @buildMenu()
    @switchFiles(name) if switchFile

  switchFiles: (name) ->
    return if @selected == name
    @files[@selected].code = @getCode()
    @setCode(@files[name].code || '')
    @selected = name
    @buildMenu()

  getAllCode: ->
    @files[@selected].code = @getCode()
    code = []
    for fileName in @order
      code.push("#{fileName}~!@#{@files[fileName].code}")
    code.join('@!~')

  setAllCode: (allCode) ->
    for fileInfo in allCode.split('@!~')
      [name, code] = fileInfo.split('~!@')
      continue if !name || name.length == 0 || !code || code.length == 0
      @addFile(name, false)
      @files[name].code = code

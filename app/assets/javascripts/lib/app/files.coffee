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
    @menu.append('<a class=\'dropdown-item\'>Rename Current File</a>')

    addItem = $(document.createElement('span'))
    addItem.addClass('dropdown-item')
    addItem.html('Add New File')
    addItem.click =>
      name = prompt('What would you like to call your new file?')
      @files[name] = {}
      @order.push(name)
      @switchFiles(name)
    @menu.append(addItem)

  switchFiles: (name) ->
    return if @selected == name
    @files[@selected].code = @getCode()
    @setCode(@files[name].code || '')
    @selected = name
    @buildMenu()

class App.Progress
  constructor: ->
    @storageAvailable = Storage?

  challengeComplete: (page, challenge) ->
    return unless @storageAvailable
    pages = {}
    pages[p] = true for p in (localStorage.getItem('pages') || '').split(/,/) when p.length > 0
    pages[page] = true
    localStorage.setItem('pages', (p for p of pages).join(','))

    challenges = {}
    challenges[c] = true for c in (localStorage.getItem(page) || '').split(/,/) when c.length > 0
    challenges[challenge] = true
    localStorage.setItem(page, (c for c of challenges).join(','))

    @updateNavigation()
    @markChallengeComplete(challenge)

  challengesCompleted: (page) ->
    (localStorage.getItem(page) || '').split(/,/).filter((challengeId) => challengeId.length > 0)

  updateNavigation: ->
    return unless @storageAvailable
    if localStorage.getItem('pages')?
      for page in localStorage.getItem('pages').split(/,/)
        if localStorage.getItem(page)?
          completedChallengeCount = @challengesCompleted(page).length

          if (challengeCount = $(".nav-sidebar .#{page}")).length > 0
            totalChallengeCount = parseInt(challengeCount.html().split(' / ')[1])
            completedChallengeCount = totalChallengeCount if completedChallengeCount > totalChallengeCount
            challengeCount.html("#{completedChallengeCount} / #{totalChallengeCount}")
            if completedChallengeCount == totalChallengeCount
              challengeCount.closest('.tag').removeClass('tag-default tag-warning').addClass('tag-success')
            else if completedChallengeCount > 0
              challengeCount.closest('.tag').removeClass('tag-default').addClass('tag-warning')

    drawingsElement = $('.nav-sidebar #drawings')
    drawingsElement.find('.my_drawing').remove()
    if (drawings = @getDrawings()).length > 0
      drawingsElement.find('.drawings-list').removeClass('hidden-xs-up')
      for slug in drawings
        item = $(document.createElement('LI'))
        item.addClass('small my_drawing')
        item.attr(id: "navigation-drawing-#{slug}")
        link =  $(document.createElement('A'))
        link.attr(href: "/drawings/#{slug}")
        link.html(@getDrawing(slug)['title'])
        item.append(link)
        drawingsElement.append(item)


  markChallengeComplete: (challengeId) ->
    challengeTitle = $("##{challengeId}").find('.challenge-title')
    return if challengeTitle.find('.tag-success').length > 0
    tag = $(document.createElement('SPAN'))
    tag.addClass('tag').addClass('tag-success').html('Completed!')
    challengeTitle.append(tag)
    sectionId = challengeId.replace(/challenge/, 'section')
    $(".nav-sidebar #page_#{sectionId} .tag-success").removeClass('hidden-xs-up')

  toggleChallenge: (page, challengeId) ->
    successTag = $("##{challengeId}").find('.challenge-title .tag-success')
    if successTag.length > 0
      challenges = {}
      challenges[c] = true for c in localStorage.getItem(page).split(/,/) when c != challengeId
      localStorage.setItem(page, (c for c of challenges).join(','))
      successTag.remove()
    else
      @challengeComplete(page, challengeId)
    @updateNavigation()

  storeEditorValue: (editorId, code) ->
    return unless @storageAvailable
    localStorage.setItem(editorId, code)

  getEditorValue: (editorId) ->
    return unless @storageAvailable
    localStorage.getItem(editorId)

  clearEditorValue: (editorId) ->
    return unless @storageAvailable
    localStorage.removeItem(editorId)

  saveDrawing: (slug, title, description, code) ->
    return unless @storageAvailable

    drawings = {}
    drawings[t] = true for t in (localStorage.getItem('drawings') || '').split('|||') when t.length > 0
    drawings[slug] = true
    localStorage.setItem('drawings', (t for t of drawings).join('|||'))

    localStorage.setItem("drawing-title-#{slug}", title)
    localStorage.setItem("drawing-description-#{slug}", description)
    localStorage.setItem("drawing-code-#{slug}", code)

    @updateNavigation()

  deleteDrawing: (slug) ->
    drawings = {}
    for t in (localStorage.getItem('drawings') || '').split('|||')
      continue if t.length == 0
      continue if t == slug
      drawings[t] = true

    localStorage.setItem('drawings', (t for t of drawings).join('|||'))
    localStorage.removeItem(slug)

  getDrawings: ->
    (localStorage.getItem('drawings') || '').split('|||').filter (title) -> title.length > 0

  getDrawing: (slug) ->
    return {
      title: localStorage.getItem("drawing-title-#{slug}"),
      description: localStorage.getItem("drawing-description-#{slug}"),
      code: localStorage.getItem("drawing-code-#{slug}")
    }

  resetPage: (page) ->
    return unless @storageAvailable
    localStorage.removeItem(page)
    location.reload()

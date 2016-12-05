class App.Progress
  constructor: ->
    @storageAvailable = Storage?

  challengeComplete: (page, challenge) ->
    return unless @storageAvailable
    pages = {}
    pages[p] = 1 for p in (localStorage.getItem('pages') || '').split(/,/) when p.length > 0
    pages[page] = 1
    localStorage.setItem('pages', (p for p of pages).join(','))

    challenges = {}
    challenges[c] = 1 for c in (localStorage.getItem(page) || '').split(/,/) when c.length > 0
    challenges[challenge] = 1
    localStorage.setItem(page, (c for c of challenges).join(','))

    @updateNavigation()

  challengesCompleted: (page) ->
    (localStorage.getItem(page) || '').split(/,/)

  updateNavigation: ->
    return unless @storageAvailable
    if localStorage.getItem('pages')?
      for page in localStorage.getItem('pages').split(/,/)
        if localStorage.getItem(page)?
          completedChallengeCount = @challengesCompleted(page).length
          challengeCount = $(".nav-sidebar .#{page}")
          totalChallengeCount = parseInt(challengeCount.html().split(' / ')[1])
          challengeCount.html("#{completedChallengeCount} / #{totalChallengeCount}")
          if completedChallengeCount == totalChallengeCount
            challengeCount.closest('.tag').removeClass('tag-default').addClass('tag-success')

  storeEditorValue: (editorName, code) ->
    return unless @storageAvailable
    localStorage.setItem(editorName, code)

  getEditorValue: (editorName) ->
    return unless @storageAvailable
    localStorage.getItem(editorName)

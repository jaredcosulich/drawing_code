class App.Progress
  constructor: ->
    @storageAvailable = Storage?

  challengeComplete: (page, challege) ->
    pages = (localStorage.getItem('pages') || '').split(/,/)
    pages.push(page)
    localStorage.setItem('pages', pages.join(','))

    challenges = (localStorage.getItem(page) || '').split(/,/)
    challenges.push(challenge)
    localStorage.setItem(page, challenges.join(','))

    @updateNavigation()

  updateNavigation: ->
    for page in (localStorage.getItem('pages') || '').split(/,/)
      for challenge in (localStorage.getItem(page) || '').split(/,/)
        challengeCounts = $(".nav-sidebar .#{page} .#{challenge}").split(' / ')
        challengeCounts = "#{challengeCounts[0] + 1} / #{challengeCounts[1]}"

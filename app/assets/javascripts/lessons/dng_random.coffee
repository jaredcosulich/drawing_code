initRandomChallenges = ->
  if (page = $('#random')).length > 0
    initRandomChallenge1(page)
    initRandomChallenge2(page)
    initRandomChallenge3(page)
    initRandomChallenge4(page)


initRandomChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge1')


initRandomChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge2')


initRandomChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge3')


initRandomChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge4')


$(document).on('initialization:complete', initRandomChallenges)

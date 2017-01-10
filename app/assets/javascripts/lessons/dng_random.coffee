initDngRandomChallenges = ->
  if (page = $('#random')).length > 0
    initDngRandomChallenge1(page)
    initDngRandomChallenge2(page)
    initDngRandomChallenge3(page)
    initDngRandomChallenge4(page)


initDngRandomChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge1')


initDngRandomChallenge2 = (page) ->
  challenge = page.find('#challenge2')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)
  
  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge2')


initDngRandomChallenge3 = (page) ->
  challenge = page.find('#challenge3')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge3')


initDngRandomChallenge4 = (page) ->
  challenge = page.find('#challenge4')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  challenge.find('.run').click ->
    canvas.selfAssess ->
      App.currentProgress.challengeComplete('random', 'challenge4')


$(document).on('initialization:complete', initDngRandomChallenges)

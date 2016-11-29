initFillRectChallenges = ->
  if (page = $('#fill_rect')).length > 0
    initFillRectChallenge1(page)
    # initFillRectChallenge2(page)
    # initFillRectChallenge3(page)


initFillRectChallenge1 = (page) ->
  challenge = page.find('#challenge1')
  canvas = new App.Canvas(challenge.find('canvas'))
  editor = new App.Editor(challenge.find('.editor'), canvas)

  points = [
    new Test.Point(x: 100, y: 100, red: 255, canvas: canvas)
  ]

  challenge.find('.run').click ->
    setTimeout(( ->
      points[0].test()
    ), 200)

$(document).on('turbolinks:load', initFillRectChallenges)




# context.moveTo(52, 223);
# context.lineTo(58, 229);
# context.moveTo(58, 223);
# context.lineTo(52, 229);

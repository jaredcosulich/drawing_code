initNavigation = ->
  $('.nav-sidebar .section a').click ->
    expanded = $('.section .collapse.in')
    toExpand = $("##{$(this).data('section')}")
    return if expanded[0] == toExpand[0]

    expanded.collapse('hide').on 'hidden.bs.collapse', ->
      toExpand.collapse('show')

    return false

$(document).on('turbolinks:load', initNavigation)

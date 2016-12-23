initNavigation = ->
  $('.nav-sidebar .section a.section_link').click ->
    section = $(this).data('section')
    return unless section

    expanded = $('.section .collapse.in')
    toExpand = $("##{section}")
    return if expanded[0] == toExpand[0]

    expanded.collapse('hide').on 'hidden.bs.collapse', ->
      toExpand.collapse('show')

    toExpand.collapse('show') if expanded.length == 0

    return false

$(document).on('turbolinks:load', initNavigation)

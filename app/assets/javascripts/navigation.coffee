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

  if (quickReference = $('.nav-sidebar #quick-reference')).length
    quickReference.css(
      paddingTop: $('.sidebar').height() - quickReference.height() - quickReference.position().top - 30
    )

  sectionTops = []
  sectionTops.push($(section).position().top) for section in $('.page .section')
  sectionTops.reverse()

  if sectionTops.length
    $(window).scroll (e) ->
      top = $(window).scrollTop()
      for sectionTop, index in sectionTops
        if top >= sectionTop
          $('.sidebar').find(".page_section").removeClass('active')
          $('.sidebar').find("#page_section#{sectionTops.length - index}").addClass('active')
          return

$(document).on('turbolinks:load', initNavigation)

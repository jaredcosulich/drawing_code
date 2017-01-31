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

  setSectionTops = ->
    sectionTops = []
    sectionTops.push($(section).position().top) for section in $('.page .section')
    sectionTops.reverse()

  selectSectionTop = ->
    return unless sectionTops.length
    top = $(window).scrollTop()
    for sectionTop, index in sectionTops
      if top >= sectionTop
        active = $('.sidebar').find("#page_section#{sectionTops.length - index}")
        unless active.hasClass('active')
          $('.sidebar').find(".page_section").removeClass('active')
          active.addClass('active')
        return

  $('img').load(setSectionTops)
  $(window).scroll(selectSectionTop)

  setSectionTops()
  selectSectionTop()

$(document).on('turbolinks:load', initNavigation)

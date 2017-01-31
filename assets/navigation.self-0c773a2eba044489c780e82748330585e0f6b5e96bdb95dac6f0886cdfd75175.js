(function() {
  var initNavigation;

  initNavigation = function() {
    var quickReference, sectionTops, selectSectionTop, setSectionTops;
    $('.nav-sidebar .section a.section_link').click(function() {
      var expanded, section, toExpand;
      section = $(this).data('section');
      if (!section) {
        return;
      }
      expanded = $('.section .collapse.in');
      toExpand = $("#" + section);
      if (expanded[0] === toExpand[0]) {
        return;
      }
      expanded.collapse('hide').on('hidden.bs.collapse', function() {
        return toExpand.collapse('show');
      });
      if (expanded.length === 0) {
        toExpand.collapse('show');
      }
      return false;
    });
    if ((quickReference = $('.nav-sidebar #quick-reference')).length) {
      quickReference.css({
        paddingTop: $('.sidebar').height() - quickReference.height() - quickReference.position().top - 30
      });
    }
    sectionTops = [];
    setSectionTops = function() {
      var i, len, ref, section;
      sectionTops = [];
      ref = $('.page .section');
      for (i = 0, len = ref.length; i < len; i++) {
        section = ref[i];
        sectionTops.push($(section).position().top);
      }
      return sectionTops.reverse();
    };
    selectSectionTop = function() {
      var active, i, index, len, sectionTop, top;
      if (!sectionTops.length) {
        return;
      }
      top = $(window).scrollTop();
      for (index = i = 0, len = sectionTops.length; i < len; index = ++i) {
        sectionTop = sectionTops[index];
        if (top >= sectionTop) {
          active = $('.sidebar').find("#page_section" + (sectionTops.length - index));
          if (!active.hasClass('active')) {
            $('.sidebar').find(".page_section").removeClass('active');
            active.addClass('active');
          }
          return;
        }
      }
    };
    $('img').load(setSectionTops);
    $(window).scroll(selectSectionTop);
    setSectionTops();
    return selectSectionTop();
  };

  $(document).on('turbolinks:load', initNavigation);

}).call(this);

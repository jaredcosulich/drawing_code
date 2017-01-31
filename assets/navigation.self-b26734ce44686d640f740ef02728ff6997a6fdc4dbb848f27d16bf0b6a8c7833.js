(function() {
  var initNavigation;

  initNavigation = function() {
    var quickReference, sectionTops, setSectionTops;
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
    setSectionTops();
    $('img').load(setSectionTops);
    if (sectionTops.length) {
      return $(window).scroll(function(e) {
        var i, index, len, sectionTop, top;
        top = $(window).scrollTop();
        for (index = i = 0, len = sectionTops.length; i < len; index = ++i) {
          sectionTop = sectionTops[index];
          if (top >= sectionTop) {
            $('.sidebar').find(".page_section").removeClass('active');
            $('.sidebar').find("#page_section" + (sectionTops.length - index)).addClass('active');
            return;
          }
        }
      });
    }
  };

  $(document).on('turbolinks:load', initNavigation);

}).call(this);

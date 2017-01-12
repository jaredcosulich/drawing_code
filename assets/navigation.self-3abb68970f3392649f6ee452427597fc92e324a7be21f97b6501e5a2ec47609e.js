(function() {
  var initNavigation;

  initNavigation = function() {
    return $('.nav-sidebar .section a.section_link').click(function() {
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
  };

  $(document).on('turbolinks:load', initNavigation);

}).call(this);

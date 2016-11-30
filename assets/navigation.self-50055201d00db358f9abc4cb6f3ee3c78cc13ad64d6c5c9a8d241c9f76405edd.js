(function() {
  var initNavigation;

  initNavigation = function() {
    return $('.nav-sidebar .section>a').click(function() {
      var expanded, toExpand;
      expanded = $('.section .collapse.in');
      toExpand = $("#" + ($(this).data('section')));
      if (expanded[0] === toExpand[0]) {
        return;
      }
      expanded.collapse('hide').on('hidden.bs.collapse', function() {
        return toExpand.collapse('show');
      });
      return false;
    });
  };

  $(document).on('turbolinks:load', initNavigation);

}).call(this);

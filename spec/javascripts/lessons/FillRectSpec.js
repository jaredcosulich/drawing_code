describe("FillRect", function() {
  var page;
  beforeEach(function() {
    page = createPage('fill_rect', 3);
    $(document).trigger('initialization:complete')
  });

  describe("Challenge 1", function() {
    var challenge, editor, run, alert;

    beforeEach(function() {
      jasmine.clock().install();
      challenge = page.find('#challenge1');
      editor = challenge.find('.editor').data('ace');
      canvas = challenge.find('canvas');
      run = challenge.find('.run');
      alert = challenge.find('.alert');
    });

    afterEach(function() {
      jasmine.clock().uninstall();
      page.remove();
    });

    it("succeeds with good solution", function() {
      code = "var canvas = document.getElementById('fill_rect_challenge1'); \
              var context = canvas.getContext('2d'); \
              context.clearRect(0, 0, 600, 360); \
              context.beginPath(); \
              context.fillStyle = 'red'; \
              context.fillRect(50,50,100,100); \
              context.stroke();"

      editor.setValue(code);
      run.click();
      jasmine.clock().tick(200);
      expect(alert.hasClass('alert-success')).toBe(true);
    });

    it("fails with bad solution", function() {
      code = "var canvas = document.getElementById('fill_rect_challenge1'); \
              var context = canvas.getContext('2d'); \
              context.clearRect(0, 0, 600, 360); \
              context.beginPath(); \
              context.fillStyle = 'red'; \
              context.fillRect(150,150,100,100); \
              context.stroke();"

      editor.setValue(code);
      run.click();
      jasmine.clock().tick(200);
      expect(alert.hasClass('alert-danger')).toBe(true);
    });
  });

});

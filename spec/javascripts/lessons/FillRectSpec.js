describe("FillRect", function() {
  var page;
  beforeEach(function() {
    page = createPage('fill_rect', 3);
    $(document).trigger('initialization:complete')
  });

  describe("Challenge 1", function() {
    var challenge, editor, run, alert;

    beforeEach(function() {
      challenge = page.find('#challenge1');
      editor = challenge.find('.editor').data('ace');
      canvas = challenge.find('canvas');
      run = challenge.find('.run');
      alert = challenge.find('.alert');
    });

    it("is successful", function() {
      editor.setValue('hi')
      console.log(alert);

      expect(true).toBe(true);
    });
  });

});

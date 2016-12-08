describe("FillRect", function() {
  var page;
  beforeEach(function() {
    page = new TestPage('fill_rect', 3);
  });

  describe("Challenge 1", function() {
    beforeEach(function() {
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
      page.destroy();
    });

    it("succeeds with good solution", function() {
      code = "var canvas = document.getElementById('fill_rect_challenge1'); \
              var context = canvas.getContext('2d'); \
              context.clearRect(0, 0, 600, 360); \
              context.beginPath(); \
              context.fillStyle = 'red'; \
              context.fillRect(50,50,100,100); \
              context.stroke();"

      page.runChallengeCode(1, code)
      jasmine.clock().tick(200);
      expect(page.challengeResult(1)).toBe(true);
    });

    it("fails with bad solution", function() {
      code = "var canvas = document.getElementById('fill_rect_challenge1'); \
              var context = canvas.getContext('2d'); \
              context.clearRect(0, 0, 600, 360); \
              context.beginPath(); \
              context.fillStyle = 'red'; \
              context.fillRect(150,150,100,100); \
              context.stroke();"

      page.runChallengeCode(1, code)
      jasmine.clock().tick(200);
      expect(page.challengeResult(1)).toBe(false);
    });
  });

});

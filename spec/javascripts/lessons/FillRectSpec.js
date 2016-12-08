describe("FillRect", function() {
  var page;

  beforeEach(function() {
    page = new TestPage('fill_rect', 3);
  });

  afterEach(function() {
    page.destroy();
  });

  describe("Challenge 1", function() {
    var challengeNumber = 1;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('fill_rect_challenge1'); \
        var context = canvas.getContext('2d'); \
        context.clearRect(0, 0, 600, 360); \
        context.beginPath(); \
        context.fillStyle = 'red'; \
        context.fillRect(50,50,100,100); \
        context.stroke(); \
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails with bad solution", function() {
      code = "\
        var canvas = document.getElementById('fill_rect_challenge1'); \
        var context = canvas.getContext('2d'); \
        context.clearRect(0, 0, 600, 360); \
        context.beginPath(); \
        context.fillStyle = 'red'; \
        context.fillRect(150,150,100,100); \
        context.stroke(); \
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  describe("Challenge 2", function() {
    var challengeNumber = 2;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('fill_rect_challenge2');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, 600, 360);\
        \
        context.beginPath();\
        \
        context.fillRect(50,50,100,200);\
        \
        context.stroke();\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails with bad solution", function() {
      code = "\
        var canvas = document.getElementById('fill_rect_challenge2');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, 600, 360);\
        \
        context.beginPath();\
        \
        context.fillRect(50,50,100,100);\
        \
        context.stroke();\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });


});

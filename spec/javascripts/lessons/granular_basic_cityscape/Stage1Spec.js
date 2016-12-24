describe("Granular Basic Cityscape Stage 1", function() {
  var page;

  beforeEach(function() {
    page = new TestPage('granular_basic_cityscape_stage1', 8);
  });

  afterEach(function() {
    page.destroy();
  });

  describe("Challenge 1", function() {
    var challengeNumber = 1;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        \
        context.fillRect(60, 90, 45, 45);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails when not the right size", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        \
        context.fillRect(60, 90, 45, 44);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails when not in the right position", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        \
        context.fillRect(90, 60, 45, 45);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  describe("Challenge 2", function() {
    var challengeNumber = 2;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge2');\
        var context = canvas.getContext('2d');\
\
        var ground = 260;\
\
        context.fillRect(0, ground, canvas.width, 5);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't set the variable properly", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge2');\
        var context = canvas.getContext('2d');\
  \
        var ground = 250;\
  \
        context.fillRect(0, ground, canvas.width, 5);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });


  // describe("Challenge 3", function() {
  //   var challengeNumber = 3;
  //
  //   it("succeeds with good solution", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(true);
  //   });
  //
  //   it("fails if you don't set the color properly", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(false);
  //   });
  // });
  //
  //
  // describe("Challenge 4", function() {
  //   var challengeNumber = 4;
  //
  //   it("succeeds with good solution", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(true);
  //   });
  //
  //   it("fails if you don't set the color properly", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(false);
  //   });
  // });
});

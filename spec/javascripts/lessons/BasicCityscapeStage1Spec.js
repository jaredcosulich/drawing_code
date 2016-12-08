describe("Basic Cityscape Stage 1", function() {
  var page;

  beforeEach(function() {
    page = new TestPage('basic_cityscape_stage1', 4);
  });

  afterEach(function() {
    page.destroy();
  });

  describe("Challenge 1", function() {
    var challengeNumber = 1;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
        \
        var ground = 240;\
        context.fillRect(40, ground - 160, 320, 160);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails with bad solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
        \
        var ground = 240;\
        context.fillRect(40, 160, 320, 160);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  // describe("Challenge 2", function() {
  //   var challengeNumber = 2;
  //
  //   it("succeeds with good solution", function() {
  //     code = "\
  //       var canvas = document.getElementById('fill_rect_challenge2');\
  //       var context = canvas.getContext('2d');\
  //       context.clearRect(0, 0, 600, 360);\
  //       \
  //       context.beginPath();\
  //       \
  //       context.fillRect(50,50,100,200);\
  //       \
  //       context.stroke();\
  //     "
  //
  //     page.runChallengeCode(challengeNumber, code)
  //     jasmine.clock().tick(200);
  //     expect(page.challengeResult(challengeNumber)).toBe(true);
  //   });
  //
  //   it("fails with bad solution", function() {
  //     code = "\
  //       var canvas = document.getElementById('fill_rect_challenge2');\
  //       var context = canvas.getContext('2d');\
  //       context.clearRect(0, 0, 600, 360);\
  //       \
  //       context.beginPath();\
  //       \
  //       context.fillRect(50,50,100,100);\
  //       \
  //       context.stroke();\
  //     "
  //
  //     page.runChallengeCode(challengeNumber, code)
  //     jasmine.clock().tick(200);
  //     expect(page.challengeResult(challengeNumber)).toBe(false);
  //   });
  // });


});

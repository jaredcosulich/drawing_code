describe("Basic Cityscape Stage 3", function() {
  var page;

  beforeEach(function() {
    page = new TestPage('basic_cityscape_stage2', 4);
  });

  afterEach(function() {
    page.destroy();
  });

  // describe("Challenge 1", function() {
  //   var challengeNumber = 1;
  //
  //   it("succeeds with good solution", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(true);
  //   });
  //
  //   it("fails if you don't translate again for the window", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(false);
  //   });
  //
  //   it("fails if you don't set the window color", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(false);
  //   });
  //
  //   it("fails if you restore too early", function() {
  //     code = "\
  //     "
  //
  //     expect(page.challengeResult(challengeNumber, code)).toBe(false);
  //   });
  // });

});

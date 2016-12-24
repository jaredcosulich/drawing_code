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


  describe("Challenge 3", function() {
    var challengeNumber = 3;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge3');\
        var context = canvas.getContext('2d');\
\
        context.fillRect(40, 240-160, 320, 160);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you use the heigth for the y coordinate", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge3');\
        var context = canvas.getContext('2d');\
  \
        context.fillRect(40, 160, 320, 160);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

      it("fails if you don't use the ground for the y coordinate", function() {
        code = "\
          var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge3');\
          var context = canvas.getContext('2d');\
    \
          context.fillRect(40, 240, 320, 160);\
        "

        expect(page.challengeResult(challengeNumber, code)).toBe(false);
      });
  });


  describe("Challenge 4", function() {
    var challengeNumber = 4;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge4');\
        var context = canvas.getContext('2d');\
\
        context.fillStyle = '#999999';\
        context.fillRect(60, 280-210, 90, 210);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't set the color", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge4');\
        var context = canvas.getContext('2d');\
  \
        context.fillRect(60, 280-210, 90, 210);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails if you don't set the color properly", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge4');\
        var context = canvas.getContext('2d');\
  \
        context.fillStyle = '#666666';\
        context.fillRect(60, 280-210, 90, 210);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });


  describe("Challenge 5", function() {
    var challengeNumber = 5;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge5');\
        var context = canvas.getContext('2d');\
\
        var ground = 240;\
        var width = 200;\
        var height = 80;\
        var x = 60;\
        var y = ground - height;\
\
        context.fillStyle = '#666666';\
        context.fillRect(x, y, width, height);\
    "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't set the variables properly", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge5');\
        var context = canvas.getContext('2d');\
  \
        var ground = 200;\
        var width = 200;\
        var height = 80;\
        var x = 60;\
        var y = ground - height;\
  \
        context.fillStyle = '#666666';\
        context.fillRect(x, y, width, height);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails if you don't set the color", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge5');\
        var context = canvas.getContext('2d');\
  \
        var ground = 240;\
        var width = 200;\
        var height = 80;\
        var x = 60;\
        var y = ground - height;\
  \
        context.fillRect(x, y, width, height);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });


  describe("Challenge 6", function() {
    var challengeNumber = 6;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge6');\
        var context = canvas.getContext('2d');\
\
        var ground = 280;\
        var units = 8;\
        var floors = 10;\
\
        var w = (units * 16) + (4 * 2);\
        var h = (floors * 16) + (4 * 2);\
\
        var x = 120;\
        var y = ground - h;\
\
        context.fillStyle = '#999999';\
\
        context.fillRect(x, y, w, h);\
        drawOffices(x, y, w, h);\
\
        function drawOffices(x, y, w, h) {\
          var u = Math.floor((w - 4) / 16);\
          var f = Math.floor((h - 4) / 16);\
\
          context.save();\
          context.translate(x + 4, y + 4);\
          context.strokeWidth = 1;\
          context.strokeStyle = '#000000';\
\
          for (var i = 0; i < f; i++) {\
            for (var j = 0; j < u; j++) context.strokeRect(16 * j, 16 * i, 16, 16);\
          }\
\
          context.restore();\
        }\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't add the wall padding", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge6');\
        var context = canvas.getContext('2d');\
  \
        var ground = 280;\
        var units = 8;\
        var floors = 10;\
  \
        var w = (units * 16);\
        var h = (floors * 16);\
  \
        var x = 120;\
        var y = ground - h;\
  \
        context.fillStyle = '#999999';\
  \
        context.fillRect(x, y, w, h);\
        drawOffices(x, y, w, h);\
\
        function drawOffices(x, y, w, h) {\
          var u = Math.floor((w - 4) / 16);\
          var f = Math.floor((h - 4) / 16);\
\
          context.save();\
          context.translate(x + 4, y + 4);\
          context.strokeWidth = 1;\
          context.strokeStyle = '#000000';\
\
          for (var i = 0; i < f; i++) {\
            for (var j = 0; j < u; j++) context.strokeRect(16 * j, 16 * i, 16, 16);\
          }\
\
          context.restore();\
        }\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails if you don't set the color", function() {
      code = "\
        var canvas = document.getElementById('granular_basic_cityscape_stage1_challenge6');\
        var context = canvas.getContext('2d');\
  \
        var ground = 280;\
        var units = 8;\
        var floors = 10;\
  \
        var w = (units * 16) + (4 * 2);;\
        var h = (floors * 16) + (4 * 2);;\
  \
        var x = 120;\
        var y = ground - h;\
  \
        context.fillRect(x, y, w, h);\
        drawOffices(x, y, w, h);\
\
        function drawOffices(x, y, w, h) {\
          var u = Math.floor((w - 4) / 16);\
          var f = Math.floor((h - 4) / 16);\
\
          context.save();\
          context.translate(x + 4, y + 4);\
          context.strokeWidth = 1;\
          context.strokeStyle = '#000000';\
\
          for (var i = 0; i < f; i++) {\
            for (var j = 0; j < u; j++) context.strokeRect(16 * j, 16 * i, 16, 16);\
          }\
\
          context.restore();\
        }\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });
  //
  //
  // describe("Challenge 7", function() {
  //   var challengeNumber = 7;
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
  // describe("Challenge 8", function() {
  //   var challengeNumber = 8;
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

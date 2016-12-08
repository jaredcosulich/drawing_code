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

  describe("Challenge 2", function() {
    var challengeNumber = 2;

    it("succeeds with good solution", function() {
      code = "\
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
\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge2');\
        var context = canvas.getContext('2d');\
        var units = 8;\
        var floors = 10;\
\
        context.clearRect(0, 0, canvas.width, canvas.height);\
\
        var h = (floors * 16) + (4*2);\
        var w = (units*16) + (4*2);\
        var x = 120;\
        var y = (280-h);\
        context.fillStyle = '#999999';\
        context.fillRect(x, y, w, h);\
\
        drawOffices(x, y, w, h);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't set the color properly", function() {
      code = "\
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
  \
        var canvas = document.getElementById('basic_cityscape_stage1_challenge2');\
        var context = canvas.getContext('2d');\
        var units = 8;\
        var floors = 10;\
  \
        context.clearRect(0, 0, canvas.width, canvas.height);\
  \
        var h = (floors * 16) + (4*2);\
        var w = (units*16) + (4*2);\
        var x = 120;\
        var y = (280-h);\
        context.fillRect(x, y, w, h);\
  \
        drawOffices(x, y, w, h);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });


    it("fails if you don't add on the padding", function() {
      code = "\
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
  \
        var canvas = document.getElementById('basic_cityscape_stage1_challenge2');\
        var context = canvas.getContext('2d');\
        var units = 8;\
        var floors = 10;\
  \
        context.clearRect(0, 0, canvas.width, canvas.height);\
  \
        var h = (floors * 16);\
        var w = (units*16);\
        var x = 120;\
        var y = (280-h);\
        context.fillStyle = '#999999';\
        context.fillRect(x, y, w, h);\
  \
        drawOffices(x, y, w, h);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });


  });
});

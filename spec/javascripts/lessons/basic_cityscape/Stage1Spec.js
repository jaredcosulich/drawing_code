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
        \
        var ground = 240;\
        context.fillRect(40, ground - 160, 320, 160);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails when not covering the black x's", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        \
        var ground = 240;\
        context.fillRect(40, 160, 320, 160);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails when covering the red x's", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge1');\
        var context = canvas.getContext('2d');\
        \
        var ground = 240;\
        context.fillRect(40, 160, 320, 200);\
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



  describe("Challenge 3", function() {
    var challengeNumber = 3;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge3');\
        var context = canvas.getContext('2d');\
        \
        function drawBuilding(leftX, groundY, units, floors) {\
          var unitDimension = 16;\
          var floorDimension = 16;\
          var width = (units * unitDimension) + (4*2);\
          var height = (floors * floorDimension) + (4*2);\
          \
          context.fillStyle = '#999999';\
          context.fillRect(leftX, groundY - height, width, height);\
        }\
\
        drawBuilding(50,300,8,12);\
        drawBuilding(200,300,6,18);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't set the color properly", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge3');\
        var context = canvas.getContext('2d');\
\
        function drawBuilding(leftX, groundY, units, floors) {\
          var unitDimension = 16;\
          var floorDimension = 16;\
          var width = (units * unitDimension) + (4*2);\
          var height = (floors * floorDimension) + (4*2);\
          \
          context.fillRect(leftX, groundY - height, width, height);\
        }\
\
        drawBuilding(50,300,8,12);\
        drawBuilding(200,300,6,18);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });


    it("fails if you don't add on the padding", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge3');\
        var context = canvas.getContext('2d');\
\
        function drawBuilding(leftX, groundY, units, floors) {\
          var unitDimension = 16;\
          var floorDimension = 16;\
          var width = (units * unitDimension);\
          var height = (floors * floorDimension);\
          \
          context.fillStyle = '#999999';\
          context.fillRect(leftX, groundY - height, width, height);\
        }\
\
        drawBuilding(50,300,8,12);\
        drawBuilding(200,300,6,18);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  describe("Challenge 4", function() {
    var challengeNumber = 4;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge4');\
        var context = canvas.getContext('2d');\
\
        function drawBuilding(leftX, groundY, units, floors) {\
          context.save();\
          var unitDimension = 16;\
          var floorDimension = 16;\
          var width = (units * unitDimension) + (4*2);\
          var height = (floors * floorDimension) + (4*2);\
\
          context.translate(leftX, groundY - height);\
          context.fillStyle = '#999999';\
          context.fillRect(0, 0, width, height);\
          context.restore();\
        }\
\
        drawBuilding(40,300,12,6);\
        drawBuilding(280,300,10,15);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you forget to restore", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage1_challenge4');\
        var context = canvas.getContext('2d');\
  \
        function drawBuilding(leftX, groundY, units, floors) {\
          context.save();\
          var unitDimension = 16;\
          var floorDimension = 16;\
          var width = (units * unitDimension) + (4*2);\
          var height = (floors * floorDimension) + (4*2);\
  \
          context.translate(leftX, groundY - height);\
          context.fillStyle = '#999999';\
          context.fillRect(0, 0, width, height);\
        }\
  \
        drawBuilding(40,300,12,6);\
        drawBuilding(280,300,10,15);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });
});

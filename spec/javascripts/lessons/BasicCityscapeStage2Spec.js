describe("Basic Cityscape Stage 2", function() {
  var page;

  beforeEach(function() {
    page = new TestPage('basic_cityscape_stage2', 4);
  });

  afterEach(function() {
    page.destroy();
  });

  describe("Challenge 1", function() {
    var challengeNumber = 1;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge1');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
          \
          context.translate(4,4);\
          context.fillStyle = '#666666';\
          context.fillRect(0,0,8,10);\
          context.restore();\
        }\
\
        drawBuilding(100,300,6,12);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't translate again for the window", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge1');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
          \
          context.fillStyle = '#666666';\
          context.fillRect(0,0,8,10);\
          context.restore();\
        }\
  \
        drawBuilding(100,300,6,12);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails if you don't set the window color", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge1');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
          \
          context.translate(4,4);\
          context.fillRect(0,0,8,10);\
          context.restore();\
        }\
  \
        drawBuilding(100,300,6,12);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });

    it("fails if you restore too early", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge1');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
          \
          context.save();\
          context.translate(4,4);\
          context.fillStyle = '#666666';\
          context.fillRect(0,0,8,10);\
          context.restore();\
        }\
  \
        drawBuilding(100,300,6,12);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  describe("Challenge 2", function() {
    var challengeNumber = 2;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge2');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
          \
          context.translate(4,4);\
          context.fillStyle = '#666666';\
          \
          for (var i=0; i<units; ++i) {\
            context.fillRect(0,0,8,10);\
            context.translate(16,0);\
          }\
          context.restore();\
        }\
\
        drawBuilding(50,300,12,8);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you translate the windows too soon", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge2');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
          \
          context.translate(4,4);\
          context.fillStyle = '#666666';\
          \
          for (var i=0; i<units; ++i) {\
            context.translate(16,0);\
            context.fillRect(0,0,8,10);\
          }\
          context.restore();\
        }\
  \
        drawBuilding(50,300,12,8);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  describe("Challenge 3", function() {
    var challengeNumber = 3;

    it("succeeds with good solution", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge3');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
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
\
          context.translate(4,4);\
          context.fillStyle = '#666666';\
\
          for (var i=0; i<floors; ++i) {\
            context.save();\
            for (var j=0; j<units; ++j) {\
              context.fillRect(0,0,8,10);\
              context.translate(16,0);\
            }\
            context.restore();\
            context.translate(0,16)\
          }\
          context.restore();\
        }\
\
        drawBuilding(80,300,7,10);\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails if you don't save() and restore() between floor translation", function() {
      code = "\
        var canvas = document.getElementById('basic_cityscape_stage2_challenge3');\
        var context = canvas.getContext('2d');\
        context.clearRect(0, 0, canvas.width, canvas.height);\
\
        function drawBuilding(leftX, groundY, units, floors) {\
          context.save();\
          var unitDimension = 16;\
          var floorDimension = 16;\
          var width = (units * unitDimension) + (4*2);\
          var height = (floors * floorDimension) + (4*2);\
          \
          context.translate(leftX, groundY - height)\
          context.fillStyle = '#999999';\
          context.fillRect(0, 0, width, height);\
          \
          context.translate(4,4);\
          context.fillStyle = '#666666';\
          \
          for (var i=0; i<floors; ++i) {\
            for (var j=0; j<units; ++j) {\
              context.fillRect(0,0,8,10);\
              context.translate(16,0);\
            }\
            context.translate(0,16)\
          }\
          context.restore();\
        }\
\
        drawBuilding(80,300,7,10);      \
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

  describe("Challenge 4", function() {
    var challengeNumber = 4;

    it("succeeds with good solution", function() {
      code = "\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(true);
    });

    it("fails", function() {
      code = "\
      "

      expect(page.challengeResult(challengeNumber, code)).toBe(false);
    });
  });

});

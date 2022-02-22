const Scene = require("Scene");
const Materials = require("Materials");
export const Diagnostics = require("Diagnostics");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");

(async function () {
  //!LOG
  const [logText] = await Promise.all([Scene.root.findFirst("logText")]);
  let log = {
    data: `test`,
    show() {
      logText.text = this.data.toString();
    },
  };

  //! TESTBUTTON
  const [testButtonCanvas] = await Promise.all([
    Scene.root.findFirst("testButtonCanvas0"),
  ]);
  const [
    testButton0,
    _testButton0,
    testButton1,
    _testButton1,
    testButton2,
    _testButton2,
  ] = await Promise.all([
    Scene.root.findFirst("testButton0"),
    Materials.findFirst("_testButton0"),
    Scene.root.findFirst("testButton1"),
    Materials.findFirst("_testButton1"),
    Scene.root.findFirst("testButton2"),
    Materials.findFirst("_testButton2"),
  ]); // 3 obj and mat

  let testBUtton = {
    size: 800,

    connect() {
      TouchGestures.onTap(testButton0).subscribe((gesture) => {
        this.actionButton0();
      });
      TouchGestures.onTap(testButton1).subscribe((gesture) => {
        this.actionButton1();
      });
      TouchGestures.onTap(testButton2).subscribe((gesture) => {
        this.actionButton2();
      });
    },

    resize() {
      testButton0.transform.scaleX = testButton0.transform.scaleY = this.size;
      testButton1.transform.scaleX = testButton1.transform.scaleY = this.size;
      testButton2.transform.scaleX = testButton2.transform.scaleY = this.size;
    },

    actionButton0() {
      Diagnostics.log("testButton0");
    },
    actionButton1() {
      Diagnostics.log("testButton1");
    },
    actionButton2() {
      Diagnostics.log("testButton2");
    },
  };

  log.show();
  testBUtton.connect();
  testBUtton.resize();

  Diagnostics.log("fin");
})();

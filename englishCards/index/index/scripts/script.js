const Scene = require("Scene");
const Materials = require("Materials");
export const Diagnostics = require("Diagnostics");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");

import * as Osc from "./OnScene"; //класс объектов на сцена
// import * as Ma from './MyArray'; // работа с массивом
// import * as MText from './MyText'; // работа с текстом
// import * as MP from './MyPoint';
// import * as MyGameService from './MyGameService';

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
  //! time
  const timeFrom = await Patches.outputs.getScalar("timeFromPath"); // время с запуска игры
  const timeNow = timeFrom.pinLastValue();
  //!

  //////////////////////////////////! top cards
  const [
    topCardTexture_0,
    topCardTexture_1,
    topCardTexture_2,
    topCardTexture_3,
    topCardTexture_4,
    topCardTexture_5,
    topCardTexture_6,
    topCardTexture_7,
    topCardTexture_8,
    topCardTexture_9,
  ] = await Promise.all([
    Textures.findFirst("topCardTexture_0"),
    Textures.findFirst("topCardTexture_1"),
    Textures.findFirst("topCardTexture_2"),
    Textures.findFirst("topCardTexture_3"),
    Textures.findFirst("topCardTexture_4"),
    Textures.findFirst("topCardTexture_5"),
    Textures.findFirst("topCardTexture_6"),
    Textures.findFirst("topCardTexture_7"),
    Textures.findFirst("topCardTexture_8"),
    Textures.findFirst("topCardTexture_9"),
  ]);

  let texArray = [
    topCardTexture_0,
    topCardTexture_1,
    topCardTexture_2,
    topCardTexture_3,
    topCardTexture_4,
    topCardTexture_5,
    topCardTexture_6,
    topCardTexture_7,
    topCardTexture_8,
    topCardTexture_9,
  ]; // 10 textures

  const [
    topCard0,
    _topCard0,
    topCard1,
    _topCard1,
    topCard2,
    _topCard2,
    topCard3,
    _topCard3,
    topCard4,
    _topCard4,
  ] = await Promise.all([
    Scene.root.findFirst("topCard0"),
    Materials.findFirst("_topCard0"),
    Scene.root.findFirst("topCard1"),
    Materials.findFirst("_topCard1"),
    Scene.root.findFirst("topCard2"),
    Materials.findFirst("_topCard2"),
    Scene.root.findFirst("topCard3"),
    Materials.findFirst("_topCard3"),
    Scene.root.findFirst("topCard4"),
    Materials.findFirst("_topCard4"),
  ]); // 5 obj and mat

  // let texArray = [];

  //////////////////////////! main cards
  const [
    mainCardTexture_0,
    mainCardTexture_1,
    mainCardTexture_2,
    mainCardTexture_3,
    mainCardTexture_4,
    mainCardTexture_5,
    mainCardTexture_6,
    mainCardTexture_7,
    mainCardTexture_8,
    mainCardTexture_9,
  ] = await Promise.all([
    Textures.findFirst("mainCardTexture_0"),
    Textures.findFirst("mainCardTexture_1"),
    Textures.findFirst("mainCardTexture_2"),
    Textures.findFirst("mainCardTexture_3"),
    Textures.findFirst("mainCardTexture_4"),
    Textures.findFirst("mainCardTexture_5"),
    Textures.findFirst("mainCardTexture_6"),
    Textures.findFirst("mainCardTexture_7"),
    Textures.findFirst("mainCardTexture_8"),
    Textures.findFirst("mainCardTexture_9"),
  ]);

  let texArrayMainCard = [
    mainCardTexture_0,
    mainCardTexture_1,
    mainCardTexture_2,
    mainCardTexture_3,
    mainCardTexture_4,
    mainCardTexture_5,
    mainCardTexture_6,
    mainCardTexture_7,
    mainCardTexture_8,
    mainCardTexture_9,
  ]; // 10 textures

  // mainCard0

  const [mainCard0, _mainCard0] = await Promise.all([
    Scene.root.findFirst("mainCard0"),
    Materials.findFirst("_mainCard0"),
  ]); // 1 obj and mat

  //////////////////////////!!!
  let TopCards = {
    card_0: new Osc.OnScene(topCard0, _topCard0, texArray),
    card_1: new Osc.OnScene(topCard1, _topCard1, texArray),
    card_2: new Osc.OnScene(topCard2, _topCard2, texArray),
    card_3: new Osc.OnScene(topCard3, _topCard3, texArray),
    card_4: new Osc.OnScene(topCard4, _topCard4, texArray),
  };
  let MainCards = {
    card: new Osc.OnScene(mainCard0, _mainCard0, texArrayMainCard),
  };

  MainCards.card.replaceMaterial(0);
  TopCards.card_0.replaceMaterial(0);

  log.show();
  testBUtton.connect();
  testBUtton.resize();

  Diagnostics.log(timeNow);
  Diagnostics.log("fin");
})();

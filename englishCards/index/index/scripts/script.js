const Scene = require("Scene");
const Materials = require("Materials");
export const Diagnostics = require("Diagnostics");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");
const Animation = require("Animation");

import * as Osc from "./OnScene"; //класс объектов на сцена
import * as Ma from "./MyArray"; // работа с массивом
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

    async actionButton0() {
      Diagnostics.log("testButton");
      cardTest.oborot(2200, testCommand);
      Diagnostics.log(cardTest.isFace);
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
  const [cardTexture_shirt] = await Promise.all([
    Textures.findFirst("cardTexture_shirt"),
  ]);

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
    cardTexture_shirt,
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
    cardTexture_shirt,
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

    set position1(x) {
      let indexX = x;
      Diagnostics.log(indexX);
      let indexZ = -0.005;
      this.card_2.positionXYZ([indexX * 2, 0, indexZ * 2]);
      this.card_1.positionXYZ([indexX * 1, 0, indexZ * 1]);
      this.card_0.positionXYZ([0, 0, 0]);
      this.card_3.positionXYZ([indexX * -1, 0, indexZ * 1]);
      this.card_4.positionXYZ([indexX * -2, 0, indexZ * 2]);
    },
  };

  let IndexCard = {};

  let MainCards = {
    card: new Osc.OnScene(mainCard0, _mainCard0, texArrayMainCard),
  };

  let Game = {
    point: 0,
    health: 4,
    mainArray: new Ma.MyArray(10),

    showTopCard_X() {},

    upPoint() {
      this.point += 1;
    },

    resetPoint() {
      this.point = 0;
    },

    heathDown() {
      this.health -= 1;
    },
    healthReset() {
      this.health = 4;
    },
  };

  //////!
  MainCards.card.replaceMaterial(0);
  MainCards.card.showShirt();

  TopCards.card_0.replaceMaterial(0);
  TopCards.card_1.showShirt();
  TopCards.card_2.showShirt();
  TopCards.card_3.showShirt();
  TopCards.card_4.showShirt();
  TopCards.position1 = 0.025;

  log.show();
  testBUtton.connect();
  testBUtton.resize();

  Diagnostics.log(timeNow);
  Diagnostics.log("fin");
  Diagnostics.log(Game.mainArray.arr);
  ////////////////////////////////////////////////////////////////
  Game.mainArray.shuffle();
  Diagnostics.log(Game.mainArray.arr);

  class cardX {
    constructor(obj, materialObj, texture = []) {
      this.obj = obj;
      this.materialObj = materialObj;
      this.texture = texture;
      this.pX = this.obj.transform.x.pinLastValue();
      this.pY = this.obj.transform.y.pinLastValue();
      this.lengthArrayTexture = this.texture.length;
    }

    get isFace() {
      if (this.obj.transform.rotationY.pinLastValue() === 3.141592653589793) {
        return false;
      }
      return true;
    }

    hide() {
      this.obj.hidden = true;
      this.isHidden = true;
    }

    show() {
      this.obj.hidden = false;
      this.isHidden = false;
    }

    positionX(xn) {
      this.obj.transform.x = xn;
    }

    positionY(yn) {
      this.obj.transform.y = yn;
    }

    positionXYZ([xn, yn, zn]) {
      this.obj.transform.x = xn;
      this.obj.transform.y = yn;
      this.obj.transform.z = zn;
    }

    set face(number) {
      this.materialObj.diffuse = this.texture[number];
    }

    oborot(time = 1000, fun) {
      let startPOsition;
      let finishPosition;
      if (this.obj.transform.rotationY.pinLastValue() === 3.141592653589793) {
        startPOsition = 1;
        finishPosition = 0;
      } else {
        startPOsition = 0;
        finishPosition = 1;
      }
      const timeDriverParameters = {
        durationMilliseconds: time,
        loopCount: 1, //Infinity,
        mirror: false,
      };
      const timeDriver = Animation.timeDriver(timeDriverParameters);
      const quadraticSampler = Animation.samplers.easeOutCubic(
        Math.PI * startPOsition,
        Math.PI * finishPosition
      );
      const translationAnimationScale = Animation.animate(
        timeDriver,
        quadraticSampler
      );
      this.obj.transform.rotationY = translationAnimationScale;
      timeDriver.start();
      timeDriver.onCompleted();
      let tapSubscription = timeDriver.onCompleted().subscribe((event) => {
        Diagnostics.log(">>>>");
        tapSubscription.unsubscribe();
        fun();
      });
    }
  }

  let i = 0;
  function testCommand() {
    cardTest.face = i;
    cardTest.oborot(1200, testCommand);
    cardTest.isFace ? (i = i + 1) : i;
    Diagnostics.log(i + " TestCommand!!! " + cardTest.isFace);
  }

  const [_indexFace0] = await Promise.all([Materials.findFirst("_indexFace0")]); // 1 obj and mat
  let cardTest = new cardX(mainCard0, _indexFace0, texArrayMainCard);
  // cardTest.positionX(0.06);
  cardTest.face = 0;
  // cardTest.oborot(2);
})();

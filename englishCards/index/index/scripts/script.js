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
import * as MText from "./MyText"; // работа с текстом
// import * as MP from './MyPoint';
// import * as MyGameService from './MyGameService';
import * as CX from "./CardX";

(async function () {
  //!LOG
  const [logText] = await Promise.all([Scene.root.findFirst("logText")]);
  let Log = {
    data: `777`,
    text2DCl: new MText.MyText(logText), // инициализация класса
    show(info = this.data) {
      this.text2DCl.test(`${info}`);
    },
  };

  // /// вывод тестовой информации
  // const [text2D] = await Promise.all([Scene.root.findFirst("2dText0")]); //2д текст на сцене
  // let text2DCl = new MText.MyText(text2D); // инициализация класса
  // function vuvodInformacii(info = "no info") {
  //   text2DCl.test(`${info}`);
  // }

  //! TESTBuTTON
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

  let testButton = {
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

    async actionButton0() {
      Diagnostics.log("testButton");
      // Diagnostics.log(cardTest.isFace);
      firstPosition();
    },
    actionButton1() {
      Diagnostics.log("testButton1");
      Game.test2();
    },
    actionButton2() {
      Diagnostics.log("testButton2");
      Game.button.tap();
      Game.test();
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

  const [mainCard0] = await Promise.all([Scene.root.findFirst("mainCard0")]); // 1 obj and mat
  const [_indexFace0] = await Promise.all([Materials.findFirst("_indexFace0")]); // 1 obj and mat
  const [_indexBack0] = await Promise.all([Materials.findFirst("_indexBack0")]); // 1 obj and mat
  const [mainCard1] = await Promise.all([Scene.root.findFirst("mainCard1")]); // 1 obj and mat
  const [_indexFace1] = await Promise.all([Materials.findFirst("_indexFace1")]); // 1 obj and mat
  const [_indexBack1] = await Promise.all([Materials.findFirst("_indexBack1")]); // 1 obj and mat
  // Diagnostics.log(_indexBack0);
  let cardTest = new CX.CardX(
    mainCard0,
    _indexFace0,
    _indexBack0,
    texArrayMainCard
  );
  let cardTest1 = new CX.CardX(mainCard1, _indexFace1, _indexBack1, texArray);

  //////////////////////////!!!
  let TopCards = {
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
      this.card_3.positionXYZ([indexX * -1, 0, indexZ * 1]);
      this.card_4.positionXYZ([indexX * -2, 0, indexZ * 2]);
    },
  };

  let Game = {
    point: 0,
    health: 4,
    mainArray: new Ma.MyArray(10),
    secondArray: new Ma.MyArray(10),

    button: {
      value: ["start", "stop", "reset"],
      currentValue: "start",

      tap() {
        this.currentValue =
          this.value[this.value.indexOf(this.currentValue) + 1];
        this.currentValue === undefined
          ? (this.currentValue = this.value[0])
          : "";
      },
    },

    test() {
      this.prepareArr();
      cardTest.face = Game.mainArray.arr[0];
      cardTest1.face = Game.mainArray.arr[0];
    },

    test2() {
      this.prepareSecondArr();
    },

    prepareArr() {
      this.mainArray.mArray();
      this.mainArray.shuffle();
      // return this.mainArray.arr;
    },

    prepareSecondArr() {
      this.secondArray.mArray();
      this.secondArray.shuffle();
      this.secondArray.shuffleInclude(this.mainArray.arr[0]);
      // return this.mainArray.arr;
    },

    preparation() {},

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
  function firstPosition() {
    let animaInTime = {
      bn: "",
      timeNow: timeFrom.pinLastValue(),
      period: [
        { delay: 0.5, run: true },
        { delay: 3, run: true },
        // { delay: 1, run: true },
      ],

      main: () => {
        animaInTime.bn = timeFrom.monitor().subscribe(function (event) {
          //////////////////////////////////////!
          if (animaInTime.isPeriod(0)) {
            cardTest.opacityTest([0, 1], 1000);
            cardTest1.opacityTest([0, 1], 1000);
          }
          if (animaInTime.isPeriod(1)) {
            cardTest.oborot();
            cardTest1.oborot();
          }
        });
      },

      isPeriod: (position) => {
        if (
          timeFrom.pinLastValue() >
            animaInTime.timeNow + animaInTime.period[position].delay &&
          animaInTime.period[position].run
        ) {
          animaInTime.period[position].run = false; //
          if (animaInTime.period.length - 1 === position) {
            Diagnostics.log(position);
            animaInTime.bn.unsubscribe();
          }
          return true;
        }
      },
    };
    animaInTime.main();
  }

  const ng4 = Time.setInterval(() => {
    let data = `Game current button: ${Game.button.currentValue}
    mainArray ${Game.mainArray.arr}
    __sec.arr ${Game.secondArray.arr}
    `;
    Log.show(data);
  }, 250);

  ////////////////////////////!
  testButton.connect();
  TopCards.card_1.showShirt();
  TopCards.card_2.showShirt();
  TopCards.card_3.showShirt();
  TopCards.card_4.showShirt();
  TopCards.position1 = 0.025;

  Diagnostics.log(timeNow);

  cardTest.face = 0;
  cardTest1.face = 0;
  cardTest.oborot(5);
  cardTest1.oborot(5);
})();

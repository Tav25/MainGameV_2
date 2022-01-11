const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const Materials = require("Materials");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");




import * as Osc from './OnScene'; //класс объектов на сцена
import * as Ma from './MyArray'; // работа с массивом
import * as MText from './MyText'; // работа с текстом
import * as MP from './MyPoint';

import * as MyGameService from './MyGameService';


(async function () {  // Enables async/await in JS [part 1]




  const timeFrom = await Patches.outputs.getScalar("timeFromPath"); // время с запуска игры
  const timeNow = timeFrom.pinLastValue();


  /// вывод тестовой информации
  const [text2D] = await Promise.all([Scene.root.findFirst('2dText0')]) //2д текст на сцене
  let text2DCl = new MText.MyText(text2D) // инициализация класса
  let dejstv = "zero"

  function vuvodInformacii(info = 'no info') { text2DCl.test(`${info}`) }



  const [
    nullPoints,
    point0, point1, point2, point3,
    matPoint0, matPoint1, matPoint2, matPoint3,

    numbersPoint_0, numbersPoint_1, numbersPoint_2, numbersPoint_3, numbersPoint_4,
    numbersPoint_5, numbersPoint_6, numbersPoint_7, numbersPoint_8, numbersPoint_9,
  ] = await Promise.all([
    Scene.root.findFirst('nullPoints'),
    Scene.root.findFirst('point0'), Scene.root.findFirst('point1'), Scene.root.findFirst('point2'), Scene.root.findFirst('point3'),
    Materials.findFirst('matPoint0'), Materials.findFirst('matPoint1'), Materials.findFirst('matPoint2'), Materials.findFirst('matPoint3'),

    Textures.findFirst('numbersPoint_0'), Textures.findFirst('numbersPoint_1'), Textures.findFirst('numbersPoint_2'), Textures.findFirst('numbersPoint_3'), Textures.findFirst('numbersPoint_4'),
    Textures.findFirst('numbersPoint_5'), Textures.findFirst('numbersPoint_6'), Textures.findFirst('numbersPoint_7'), Textures.findFirst('numbersPoint_8'), Textures.findFirst('numbersPoint_9'),

  ])

  let numZero = new MP.MyPoint(
    [point0, point1, point2, point3],
    [matPoint0, matPoint1, matPoint2, matPoint3],
    [numbersPoint_0, numbersPoint_1, numbersPoint_2, numbersPoint_3, numbersPoint_4,
      numbersPoint_5, numbersPoint_6, numbersPoint_7, numbersPoint_8, numbersPoint_9]
  )

  const [
    nullHelth,
    helth0, helth1, helth2, helth3,
    matHelth0, matHelth1, matHelth2, matHelth3,

    numbersHelth_0, numbersHelth_1, numbersHelth_2, numbersHelth_3, numbersHelth_4,
    numbersHelth_5, numbersHelth_6, numbersHelth_7, numbersHelth_8, numbersHelth_9,
  ] = await Promise.all([
    Scene.root.findFirst('nullHelth'),
    Scene.root.findFirst('helth0'), Scene.root.findFirst('helth1'), Scene.root.findFirst('helth2'), Scene.root.findFirst('helth3'),
    Materials.findFirst('matHelth0'), Materials.findFirst('matHelth1'), Materials.findFirst('matHelth2'), Materials.findFirst('matHelth3'),

    Textures.findFirst('numbersHelth_0'), Textures.findFirst('numbersHelth_1'), Textures.findFirst('numbersHelth_2'), Textures.findFirst('numbersHelth_3'), Textures.findFirst('numbersHelth_4'),
    Textures.findFirst('numbersHelth_5'), Textures.findFirst('numbersHelth_6'), Textures.findFirst('numbersHelth_7'), Textures.findFirst('numbersHelth_8'), Textures.findFirst('numbersHelth_9'),

  ])

  let numZero2 = new MP.MyPoint(
    [helth0, helth1, helth2, helth3],
    [matHelth0, matHelth1, matHelth2, matHelth3],
    [numbersHelth_0, numbersHelth_1, numbersHelth_2, numbersHelth_3, numbersHelth_4,
      numbersHelth_5, numbersHelth_6, numbersHelth_7, numbersHelth_8, numbersHelth_9]
  )


  const [testButton, testYes, testNo] = await Promise.all([Scene.root.findFirst('testButton'), Scene.root.findFirst('testYes'), Scene.root.findFirst('testNo')]) //тестовый кнопки

  const [start_tap,] = await Promise.all([Scene.root.findFirst('start_tap'),])
  let startButton = new Osc.OnScene(start_tap)


  let GameService = MyGameService.GameService;

  //////////////////////////////////////////////////////todo:
  const [
    vopros_0, vopros_1, vopros_2, vopros_3, vopros_4, vopros_5, vopros_6, vopros_7, vopros_8, vopros_9,
    vopros_10, vopros_11, vopros_12, vopros_13, vopros_14, vopros_15, vopros_16, vopros_17, vopros_18, vopros_19,
    vopros_20, vopros_21, vopros_22, vopros_23, vopros_24, vopros_25, vopros_26, vopros_27, vopros_28, vopros_29,
    vopros_30, vopros_31,
  ] = await Promise.all([
    Textures.findFirst('_vopros-0'), Textures.findFirst('_vopros-1'), Textures.findFirst('_vopros-2'), Textures.findFirst('_vopros-3'), Textures.findFirst('_vopros-4'), Textures.findFirst('_vopros-5'), Textures.findFirst('_vopros-6'), Textures.findFirst('_vopros-7'), Textures.findFirst('_vopros-8'), Textures.findFirst('_vopros-9'),
    Textures.findFirst('_vopros-10'), Textures.findFirst('_vopros-11'), Textures.findFirst('_vopros-12'), Textures.findFirst('_vopros-13'), Textures.findFirst('_vopros-14'), Textures.findFirst('_vopros-15'), Textures.findFirst('_vopros-16'), Textures.findFirst('_vopros-17'), Textures.findFirst('_vopros-18'), Textures.findFirst('_vopros-19'),
    Textures.findFirst('_vopros-20'), Textures.findFirst('_vopros-21'), Textures.findFirst('_vopros-22'), Textures.findFirst('_vopros-23'), Textures.findFirst('_vopros-24'), Textures.findFirst('_vopros-25'), Textures.findFirst('_vopros-26'), Textures.findFirst('_vopros-27'), Textures.findFirst('_vopros-28'), Textures.findFirst('_vopros-29'),
    Textures.findFirst('_vopros-30'), Textures.findFirst('_vopros-31'),
  ])

  let texArrayVopros = [
    vopros_0, vopros_1, vopros_2, vopros_3, vopros_4, vopros_5, vopros_6, vopros_7, vopros_8, vopros_9,
    vopros_10, vopros_11, vopros_12, vopros_13, vopros_14, vopros_15, vopros_16, vopros_17, vopros_18, vopros_19,
    vopros_20, vopros_21, vopros_22, vopros_23, vopros_24, vopros_25, vopros_26, vopros_27, vopros_28, vopros_29,
    vopros_30, vopros_31,
  ] // 32 textures

  const [
    otvet_0, otvet_1, otvet_2, otvet_3, otvet_4, otvet_5, otvet_6, otvet_7, otvet_8, otvet_9,
    otvet_10, otvet_11, otvet_12, otvet_13, otvet_14, otvet_15, otvet_16, otvet_17, otvet_18, otvet_19,
    otvet_20, otvet_21, otvet_22, otvet_23, otvet_24, otvet_25, otvet_26, otvet_27, otvet_28, otvet_29,
    otvet_30, otvet_31,
  ] = await Promise.all([
    Textures.findFirst('_otvet-0'), Textures.findFirst('_otvet-1'), Textures.findFirst('_otvet-2'), Textures.findFirst('_otvet-3'), Textures.findFirst('_otvet-4'), Textures.findFirst('_otvet-5'), Textures.findFirst('_otvet-6'), Textures.findFirst('_otvet-7'), Textures.findFirst('_otvet-8'), Textures.findFirst('_otvet-9'),
    Textures.findFirst('_otvet-10'), Textures.findFirst('_otvet-11'), Textures.findFirst('_otvet-12'), Textures.findFirst('_otvet-13'), Textures.findFirst('_otvet-14'), Textures.findFirst('_otvet-15'), Textures.findFirst('_otvet-16'), Textures.findFirst('_otvet-17'), Textures.findFirst('_otvet-18'), Textures.findFirst('_otvet-19'),
    Textures.findFirst('_otvet-20'), Textures.findFirst('_otvet-21'), Textures.findFirst('_otvet-22'), Textures.findFirst('_otvet-23'), Textures.findFirst('_otvet-24'), Textures.findFirst('_otvet-25'), Textures.findFirst('_otvet-26'), Textures.findFirst('_otvet-27'), Textures.findFirst('_otvet-28'), Textures.findFirst('_otvet-29'),
    Textures.findFirst('_otvet-30'), Textures.findFirst('_otvet-31'),
  ])

  let texArrayOtvet = [
    otvet_0, otvet_1, otvet_2, otvet_3, otvet_4, otvet_5, otvet_6, otvet_7, otvet_8, otvet_9,
    otvet_10, otvet_11, otvet_12, otvet_13, otvet_14, otvet_15, otvet_16, otvet_17, otvet_18, otvet_19,
    otvet_20, otvet_21, otvet_22, otvet_23, otvet_24, otvet_25, otvet_26, otvet_27, otvet_28, otvet_29,
    otvet_30, otvet_31,
  ] // 32 textures

  const [
    _textureSecond_0, _textureSecond_1, _textureSecond_2, _textureSecond_3,
  ] = await Promise.all([
    Textures.findFirst('_textureSecond_0'), Textures.findFirst('_textureSecond_1'), Textures.findFirst('_textureSecond_2'), Textures.findFirst('_textureSecond_3'),
  ])

  let texArray = [
    _textureSecond_0, _textureSecond_1, _textureSecond_2, _textureSecond_3,
  ] // 4 textures
  // podlogka vopros otvet_left otvet_right galka

  const [
    podlogka, _podlogka,
    vopros, _vopros,
    otvet_left, _otvet_left,
    otvet_right, _otvet_right,
    galka, _galka,
  ] = await Promise.all([
    Scene.root.findFirst('podlogka'), Materials.findFirst('_podlogka'),
    Scene.root.findFirst('vopros'), Materials.findFirst('_vopros'),
    Scene.root.findFirst('otvet_left'), Materials.findFirst('_otvet_left'),
    Scene.root.findFirst('otvet_right'), Materials.findFirst('_otvet_right'),
    Scene.root.findFirst('galka'), Materials.findFirst('_galka'),
  ]) // 5 obj and mat

  let podlogkaObj = new Osc.OnScene(podlogka, _podlogka, texArray)
  let voprosObj = new Osc.OnScene(vopros, _vopros, texArrayVopros)
  let otvet_leftObj = new Osc.OnScene(otvet_left, _otvet_left, texArrayOtvet)
  let otvet_rightObj = new Osc.OnScene(otvet_right, _otvet_right, texArrayOtvet)
  let galkaObj = new Osc.OnScene(galka, _galka, texArray)

  voprosObj.replaseMaterialObj(25)
  //////////////////////////////////////////////////////////
  GameService.pointMax = 20
  GameService.healthMax = 5

  Diagnostics.log(GameService.isGame)
  Diagnostics.log(GameService.point)

  //////////////////////////////////////////////////////todo

  /////////////////////////////////////////////////////////

  TouchGestures.onTap(startButton.obj).subscribe((gesture) => {
    GameAction.mainButtonAction()
  });

  TouchGestures.onTap(testButton).subscribe((gesture) => {
    GameAction.mainButtonAction()
  });

  TouchGestures.onTap(testYes).subscribe((gesture) => {
    GameAction.coreAnswer(GameCore.resultCheck(1))
  });

  TouchGestures.onTap(testNo).subscribe((gesture) => {
    GameAction.coreAnswer(GameCore.resultCheck(0))
  });


  //////////////////////////////////////////////////////////
  let GameAction = {
    checkEndGame() {
      updatePointsHelth(numZero2, GameService, numZero);
      if (GameService.isGame === false) {
        this.endGameFunction()
      } else {
        GameCore.mainCycle()
      }
    },

    mainButtonAction() {
      if (GameService.mainButtonPosition === 0) { //start
        GameCore.mainCycle()
      }
      if (GameService.mainButtonPosition === 1) { //stop
        GameService.endGame('abort')
        this.checkEndGame()
      }
      if (GameService.mainButtonPosition === 2) { //reset
        this.globalReset()
      }
      GameService.tapMainButton()
    },

    globalReset() {
      GameService.gameReset()
      GameCore.preparation()
      updatePointsHelth(numZero2, GameService, numZero);
      //animReset
    },

    endGameFunction() {
      GameCore.endGame()
    },

    coreAnswer(x) {
      GameService.stepUp()
      if (x === 'verno') {
        this.gameCycleTrue()
      }
      if (x === 'neVerno') {
        this.gameCycleFalse()
      }
      if (x === 'next') {
        this.gameCycleNext()
        //ather action
      }
    },

    gameCycleTrue() {
      GameService.pointUp()
      this.checkEndGame()

    },

    gameCycleFalse() {
      GameService.healthDown()
      this.checkEndGame()
    },

    gameCycleNext() {
      this.checkEndGame()
    },
  }

  ////////////////////////////////////////////////////////////////
  const { mainArray } = podgotovkaGameCore();
  ////////////////////////////////////////////////////////////////

  let GameCore = {
    answer: ['verno', 'neVerno', 'next'],
    isReadyToAnswer: false,
    resultCore: undefined,

    get monitor() {
      let texOut =
        `ReadyToAnswer: ${this.isReadyToAnswer}
resultCore: ${this.resultCore}`
      return texOut
    },


    preparation() {// подготовка к игре
      this.isReadyToAnswer = false
      preparationFunction();
    },

    mainCycle() { // главный цикл
      this.isReadyToAnswer = true
      mainCycleFunction(this.resultCore);
    },

    endGame() { // главный циклё
      this.isReadyToAnswer = false
      endGameFunction();

    },

    resultCheck(y = NaN) { // проверка при ответе
      let x = answerVerification(y);

      let result
      if (x === 0 && this.isReadyToAnswer) {
        result = 'neVerno'
      }
      if (x === 1 && this.isReadyToAnswer) {
        result = 'verno'
      }
      if (x === 2 && this.isReadyToAnswer) {
        result = 'next'
      }

      if (this.isReadyToAnswer) {
        this.resultCore = result
        return result
      }
    }
  }

  //! добавить анимацию если шаг игры равен 0, те самая первая анимация цикла
  let AnimationInGame = {


    test() {
      Diagnostics.log('testAnim')
    },

    preparationAnim() {
      Diagnostics.log('prepAnimation')
      voprosObj.replaseMaterialObj(mainArray.arr[0])
    },

    mainCycleAnim() {
      Diagnostics.log('mainCycleAnim')
    },
    resultAnim(result) {
      Diagnostics.log('resultAnim ' + result)
    },
    endGameAnim(result) {
      Diagnostics.log('endGameAnim ' + result)
    },

  }

  //////////////////////////////////////////////////////////CODE
  GameAction.globalReset()
  //////////////////////////////////////////////////////////
  function updatePointsHelth(numZero2, GameService, numZero) {
    numZero2.numberPoint(GameService.health);
    numZero.numberPoint(GameService.point);
  }

  function stopIntervalTimer(rc) {// остановка таймера
    Time.clearInterval(rc);
  }

  let counter = 0
  const ng4 = Time.setInterval(() => {
    counter++
    vuvodInformacii(GameService.monitor + GameCore.monitor + monitorSpec())
  }, 250)///////////////////////////////////////////////////////////////////


  function monitorSpec() {
    return `-----
    ${mainArray.arr}
    `
  }

  function podgotovkaGameCore() {
    const numberOfQuestions = 32;
    const mainArray = new Ma.MyArray(numberOfQuestions);
    return { mainArray };
  }

  function preparationFunction() {
    mainArray.shuffle();
    AnimationInGame.preparationAnim()

  }

  function mainCycleFunction(res) {

  }

  function answerVerification(x) {

  }

  function endGameFunction() {
    AnimationInGame.endGameAnim(GameService.howEnd);
  }


  //////////////////////////////////////////////////////////

})();




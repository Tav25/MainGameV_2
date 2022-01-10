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


  //cardAnim


  //
  //////////////////////////////////////////////////////////
  let GameService = MyGameService.GameService;
  GameService.pointMax = 20
  GameService.healthMax = 5
  // Diagnostics.log(GameService)

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
  // podgotomka
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
    return `
    -----
    `
  }

  function podgotovkaGameCore() {

  }

  function preparationFunction() {

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




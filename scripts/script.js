const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const Materials = require("Materials");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");




import * as Osc from './OnScene'; //класс объектов на сцена
// import * as Ma from './MyArray'; // работа с массивом
import * as MText from './MyText'; // работа с текстом
import * as MP from './MyPoint';



(async function () {  // Enables async/await in JS [part 1]




  const timeFrom = await Patches.outputs.getScalar("timeFromPath"); // время с запуска игры


  /// вывод тестовой информации
  const [text2D] = await Promise.all([Scene.root.findFirst('2dText0')]) //2д текст на сцене
  let text2DCl = new MText.MyText(text2D) // инициализация класса
  let dejstv = "zero"

  function vuvodInformacii(info = 'no info') {
    text2DCl.test(`${info}`)
  }



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



  let GameService = {
    point: 0,
    pointMin: 0,
    pointMax: 5,

    health: 3,
    healthMin: 0,
    healthMax: 3,

    step: 0,
    stepMax: 0,
    stepMin: 0,

    isGame: true,
    isReadyToAnswer: false,// ne ispolzuetsa UDALIT
    howEnd: null,

    gameCycleResult: false,

    mainButtonPosition: 0,
    mainButtonOptions: ['start', 'stop', 'reset',],
    mainButtonFunction: [0, 1, 2],




    get monitor() {
      let texOut =
        `p: ${this.pointGet} h: ${this.healthGet} s: ${this.step}
      isisGame: ${this.isGame}  ${this.howEnd}
      mainBOp: ${this.mainButtonOptions[this.mainButtonPosition]} mainPos: ${this.mainButtonPosition}
      `
      return texOut
    },

    endGame(func = null) {
      this.howEnd = func
      this.isGame = false
      if (func === 'win') { this.mainButtonPosition = 2 }
      if (func === 'lose') { this.mainButtonPosition = 2 }
      if (func === 'abort') { this.mainButtonPosition = 1 }
      Diagnostics.log("END_GAME")
    },

    tapMainButton() {
      this.mainButtonPosition++
      if (this.mainButtonPosition > this.mainButtonOptions.length - 1) {
        this.mainButtonPosition = 0
      }
    },

    //RESET
    gameReset() {
      this.pointZero(),
        this.healthZero(),
        this.stepZero(),
        this.isGame = true,
        this.isReadyToAnswer = false
      this.howEnd = null
    },

    //POINT
    get pointGet() {
      return this.point
    },

    pointZero() {
      this.pointSet = this.pointMin
    },

    pointUp() {
      this.pointSet = this.pointGet + 1
    },

    set pointSet(value) {
      this.point = value
      if (this.point === this.pointMax) {
        this.endGame('win')
        //
      }
      numZero.numberPoint(this.point)
    },
    //HEALTH
    get healthGet() {
      return this.health
    },

    healthZero() {
      this.healthSet = this.healthMax
    },

    healthDown() {
      this.healthSet = this.healthGet - 1
    },

    set healthSet(value) {
      this.health = value
      if (this.health === this.healthMin) {
        this.endGame('lose')
        //
      }
      numZero2.numberPoint(this.health)
    },
    //STEP
    stepZero() {
      this.step = this.stepMin
    },

    stepUp() {
      this.stepSet = this.stepGet + 1
    },

    set stepSet(value) {
      this.step = value
    },
    //
  }
  // Diagnostics.log(GameService.point)
  // GameService.pointSet = 15
  // GameService.pointUp()
  // GameService.healthDown()
  // GameService.gameReset()
  // GameService.tapMainButton()
  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////

  TouchGestures.onTap(startButton.obj).subscribe((gesture) => {
    GameAction.mainButtonAction()
  });

  TouchGestures.onTap(testButton).subscribe((gesture) => {
    GameAction.mainButtonAction()
  });

  TouchGestures.onTap(testYes).subscribe((gesture) => {
    GameAction.coreAnswer(GameCore.resultCheck(0))
  });

  TouchGestures.onTap(testNo).subscribe((gesture) => {
    GameAction.coreAnswer(GameCore.resultCheck(1))
  });


  //////////////////////////////////////////////////////////
  let GameAction = {
    checkEndGame() {
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
      //animReset
    },

    endGameFunction() {
      Diagnostics.log('TEST_END_GAME')
      GameCore.isReadyToAnswer = false
    },

    coreAnswer(x) {
      if (x === 'verno') {
        this.gameCycleTrue()
      }
      if (x === 'neVerno') {
        this.gameCycleFalse()
      }
      if (x === 'next') {
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
  }

  ////////////////////////////////////////////////////////////////
  let GameCore = {
    answer: ['verno', 'neVerno', 'next'],
    isReadyToAnswer: false,

    get monitor() {
      let texOut =
        `ReadyToAnswer: ${this.isReadyToAnswer}`
      return texOut
    },

    preparation() {// подготовка к игре
      this.isReadyToAnswer = false
    },

    mainCycle() { // главный цикл
      this.isReadyToAnswer = true
    },

    resultCheck(x) { // проверка при ответе
      if (x === 0 && this.isReadyToAnswer) {
        return 'verno'
      }
      if (x === 1 && this.isReadyToAnswer) {
        return 'neVerno'
      }
      if (x === 2 && this.isReadyToAnswer) {
        return 'next'
      }
    }
  }

  let AnimationInGame = {}

  //////////////////////////////////////////////////////////CODE
  GameAction.globalReset()



  //////////////////////////////////////////////////////////
  let counter = 0
  const ng4 = Time.setInterval(() => {
    counter++
    vuvodInformacii(GameService.monitor + GameCore.monitor)
  }, 250)
  //////////////////////////////////////////////////////////

  function stopIntervalTimer(rc) {// остановка таймера
    Time.clearInterval(rc);
  }



})();


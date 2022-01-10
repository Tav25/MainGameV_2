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
  const [
    mainCard, matMainCard,

    topCard0, mattopCard0,
    topCard1, mattopCard1,
    topCard2, mattopCard2,
    topCard3, mattopCard3,
    topCard4, mattopCard4,

    texture0, texture1, texture2, texture3, texture4,
    texture5, texture6, texture7, texture8, texture9,
    texture10, texture11, texture12, texture13, texture14,
    texture15, texture16, texture17, texture18, texture19,
    // texture20, texture21, texture22, texture23, texture24,
    // texture25, texture26, texture27, texture28, texture29,

    textureSecond0, textureSecond1, textureSecond2, textureSecond3, textureSecond4,
    textureSecond5, textureSecond6, textureSecond7, textureSecond8, textureSecond9,
    textureSecond10, textureSecond11, textureSecond12, textureSecond13, textureSecond14,
    textureSecond15, textureSecond16, textureSecond17, textureSecond18, textureSecond19,
    // textureSecond20, textureSecond21, textureSecond22, textureSecond23, textureSecond24,
    // textureSecond25, textureSecond26, textureSecond27, textureSecond28, textureSecond29,
    rubashka

  ] = await Promise.all([
    Scene.root.findFirst('mainCard'), Materials.findFirst('matMainCard'),

    Scene.root.findFirst('topCard0'), Materials.findFirst('mattopCard0'),
    Scene.root.findFirst('topCard1'), Materials.findFirst('mattopCard1'),
    Scene.root.findFirst('topCard2'), Materials.findFirst('mattopCard2'),
    Scene.root.findFirst('topCard3'), Materials.findFirst('mattopCard3'),
    Scene.root.findFirst('topCard4'), Materials.findFirst('mattopCard4'),

    Textures.findFirst('card – 0'), Textures.findFirst('card – 1'), Textures.findFirst('card – 2'), Textures.findFirst('card – 3'), Textures.findFirst('card – 4'),
    Textures.findFirst('card – 5'), Textures.findFirst('card – 6'), Textures.findFirst('card – 7'), Textures.findFirst('card – 8'), Textures.findFirst('card – 9'),
    Textures.findFirst('card – 10'), Textures.findFirst('card – 11'), Textures.findFirst('card – 12'), Textures.findFirst('card – 13'), Textures.findFirst('card – 14'),
    Textures.findFirst('card – 15'), Textures.findFirst('card – 16'), Textures.findFirst('card – 17'), Textures.findFirst('card – 18'), Textures.findFirst('card – 19'),
    // Textures.findFirst('card – 20'), Textures.findFirst('card – 21'), Textures.findFirst('card – 22'), Textures.findFirst('card – 23'), Textures.findFirst('card – 24'),
    // Textures.findFirst('card – 25'), Textures.findFirst('card – 26'), Textures.findFirst('card – 27'), Textures.findFirst('card – 28'), Textures.findFirst('card – 29'),

    Textures.findFirst('cardSecond – 0'), Textures.findFirst('cardSecond – 1'), Textures.findFirst('cardSecond – 2'), Textures.findFirst('cardSecond – 3'), Textures.findFirst('cardSecond – 4'),
    Textures.findFirst('cardSecond – 5'), Textures.findFirst('cardSecond – 6'), Textures.findFirst('cardSecond – 7'), Textures.findFirst('cardSecond – 8'), Textures.findFirst('cardSecond – 9'),
    Textures.findFirst('cardSecond – 10'), Textures.findFirst('cardSecond – 11'), Textures.findFirst('cardSecond – 12'), Textures.findFirst('cardSecond – 13'), Textures.findFirst('cardSecond – 14'),
    Textures.findFirst('cardSecond – 15'), Textures.findFirst('cardSecond – 16'), Textures.findFirst('cardSecond – 17'), Textures.findFirst('cardSecond – 18'), Textures.findFirst('cardSecond – 19'),
    // Textures.findFirst('cardSecond – 20'), Textures.findFirst('cardSecond – 21'), Textures.findFirst('cardSecond – 22'), Textures.findFirst('cardSecond – 23'), Textures.findFirst('cardSecond – 24'),
    // Textures.findFirst('cardSecond – 25'), Textures.findFirst('cardSecond – 26'), Textures.findFirst('cardSecond – 27'), Textures.findFirst('cardSecond – 28'), Textures.findFirst('cardSecond – 29'),
    Textures.findFirst('rubashka')
  ])


  let textureArray = [texture0, texture1, texture2, texture3, texture4,
    texture5, texture6, texture7, texture8, texture9,
    texture10, texture11, texture12, texture13, texture14,
    texture15, texture16, texture17, texture18, texture19,
    // texture20, texture21, texture22, texture23, texture24,
    // texture25, texture26, texture27, texture28, texture29,
    rubashka]

  let textureArrayScecond = [textureSecond0, textureSecond1, textureSecond2, textureSecond3, textureSecond4,
    textureSecond5, textureSecond6, textureSecond7, textureSecond8, textureSecond9,
    textureSecond10, textureSecond11, textureSecond12, textureSecond13, textureSecond14,
    textureSecond15, textureSecond16, textureSecond17, textureSecond18, textureSecond19,
    // textureSecond20, textureSecond21, textureSecond22, textureSecond23, textureSecond24,
    // textureSecond25, textureSecond26, textureSecond27, textureSecond28, textureSecond29,
    rubashka]


  let mainCardCl = new Osc.OnScene(mainCard, matMainCard, textureArray)

  let topCardNumber0 = new Osc.OnScene(topCard0, mattopCard0, textureArrayScecond)
  let topCardNumber1 = new Osc.OnScene(topCard1, mattopCard1, textureArrayScecond)
  let topCardNumber2 = new Osc.OnScene(topCard2, mattopCard2, textureArrayScecond)
  let topCardNumber3 = new Osc.OnScene(topCard3, mattopCard3, textureArrayScecond)
  let topCardNumber4 = new Osc.OnScene(topCard4, mattopCard4, textureArrayScecond)

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
  const { mainArray, secondArray } = podgotovkaGameCore();

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

    rub: 20,

    test() {
      Diagnostics.log('testAnim')
    },

    preparationAnim() {
      Diagnostics.log('prepAnimation')

      topCardNumber0.replaseMaterialObj(this.rub)
      topCardNumber1.replaseMaterialObj(this.rub)
      topCardNumber2.replaseMaterialObj(this.rub)
      topCardNumber3.replaseMaterialObj(this.rub)
      topCardNumber4.replaseMaterialObj(this.rub)
      mainCardCl.replaseMaterialObj(this.rub)

      topCardNumber0.opacity([0, 1], 900)
      topCardNumber1.opacity([0, 1], 900)
      topCardNumber2.opacity([0, 1], 900)
      topCardNumber3.opacity([0, 1], 900)
      topCardNumber4.opacity([0, 1], 900)
      mainCardCl.opacity([0, 1], 900)

    },

    mainCycleAnim() {
      topCardNumber2.replaseMaterialObj(secondArray.arr[0])
      mainCardCl.replaseMaterialObj(mainArray.arrMod[0])
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
    vuvodInformacii(GameService.monitor + GameCore.monitor + process())
  }, 250)///////////////////////////////////////////////////////////////////


  function process() {
    return `
    -----
    ${secondArray.arr} 
    ${mainArray.arrMod} >> lenght ${mainArray.arrMod.length}
    | ${secondArray.arr[0]} | ${mainArray.arrMod[0]} | ${mainArray.arrMod[0] === secondArray.arr[0]}
    
    `
  }

  function podgotovkaGameCore() {
    const numberOfQuestions = 20;
    const numberCardOnBoard = 5;
    const mainArray = new Ma.MyArray(numberOfQuestions);
    const secondArray = new Ma.MyArray(numberCardOnBoard);
    return { mainArray, secondArray };
  }

  function preparationFunction() {
    AnimationInGame.preparationAnim();
    mainArray.shuffle();
    mainArray.mArray2(8);
  }

  function mainCycleFunction(res) {
    if (res === undefined) {
      Diagnostics.log('FirstAnimation0')
    }
    if (res === 'verno' || res === 'neVerno') {
      mainArray.arrMod.shift()
      secondArrayProcess()
    }
    if (secondArray.arr.length === 5 || GameService.step === 0) {
      Diagnostics.log('FirstAnimation1')
      secondArrayProcess();
    }
    AnimationInGame.mainCycleAnim();
  }

  function answerVerification(x) {
    let resultAnswerVerification
    if (mainArray.arrMod[0] === secondArray.arr[0] & x === 1) { resultAnswerVerification = 1; }
    if (mainArray.arrMod[0] !== secondArray.arr[0] & x === 1) { resultAnswerVerification = 0; }
    if (mainArray.arrMod[0] === secondArray.arr[0] & x === 0) { resultAnswerVerification = 0; }
    if (mainArray.arrMod[0] !== secondArray.arr[0] & x === 0) { resultAnswerVerification = 2; }
    if (x === 2) (resultAnswerVerification = 2)
    secondArray.delFirst()
    return resultAnswerVerification

  }

  function endGameFunction() {
    AnimationInGame.endGameAnim(GameService.howEnd);
  }

  function secondArrayProcess() {//подготовка доп массива
    secondArray.mArray()
    secondArray.shuffle()
    secondArray.repl(mainArray.arrMod, 0)
  }
  //////////////////////////////////////////////////////////

})();




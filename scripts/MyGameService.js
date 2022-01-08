export { GameService };

let GameService = {
  point: 0,
  pointMin: 0,
  pointMax: 20,

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
    mainBOp: ${this.mainButtonOptions[this.mainButtonPosition]}
    `
    return texOut
  },

  endGame(func = null) {
    this.howEnd = func
    this.isGame = false
    if (func === 'win') { this.mainButtonPosition = 2 }
    if (func === 'lose') { this.mainButtonPosition = 2 }
    if (func === 'abort') { this.mainButtonPosition = 1 }
    // Diagnostics.log("END_GAME")
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
    // numZero.numberPoint(this.point)
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
    // numZero2.numberPoint(this.health)
  },
  //STEP
  stepZero() {
    this.step = this.stepMin
  },

  stepUp() {
    this.stepSet = this.step + 1
  },

  set stepSet(value) {
    this.step = value
  },
  //
}
export const Diagnostics = require("Diagnostics");

import * as Ma from "./MyArray";

export { Model };

let Model = {
  controllerAction: {
    actionA() {
      Diagnostics.log("actionA");
    },
    actionB() {},
    actionC() {},
  },
  // arr: 10,
  point: {
    current: 0,
    max: 10,
    min: 0,
  },

  health: {
    current: 0,
    max: 10,
    min: 0,
  },

  mainArray: {
    obj: new Ma.MyArray(10),

    get arr() {
      this.shuffle();
      return this.obj.arr;
    },

    shuffle() {
      this.obj.shuffle();
    },
  },
  secondArray: {
    arr: [0, 1, 2, 3, 4],
  },

  mainCard: {
    face: true,
    number: 0,
  },

  topCard: {
    face: true,
    number: 0,
  },
};

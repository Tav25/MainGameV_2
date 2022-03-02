const Scene = require("Scene");
const Materials = require("Materials");
export const Diagnostics = require("Diagnostics");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");
const Animation = require("Animation");

import * as View from "./View";
import * as Model from "./Model";
import * as Presenter from "./Presenter";

(async function () {
  let A = new View.View();
  let B = new View.View();
  let C = new View.View();
  Diagnostics.log(A.arr);
  Diagnostics.log(B.arr);
  Diagnostics.log(C.arr);
})();

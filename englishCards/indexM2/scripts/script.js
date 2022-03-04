const Scene = require("Scene");
const Materials = require("Materials");
export const Diagnostics = require("Diagnostics");
const Textures = require("Textures");
const TouchGestures = require("TouchGestures");
const Time = require("Time");
const Patches = require("Patches");
const Animation = require("Animation");

import * as View from "./View";
import * as MD from "./Model";
import * as Controller from "./Controller";

(async function () {
  let Vw = new View.View();
  // let Md = new Model.Model();
  let Pr = new Controller.Controller();

  MD.Model.point.current = 10;
  Diagnostics.log(Pr.arr);
  Pr.connect();
  Vw.showLog();
  Vw.test2(5);
})();

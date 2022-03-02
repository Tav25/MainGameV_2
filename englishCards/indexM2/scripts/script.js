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
  let Vw = new View.View();
  let Md = new Model.Model();
  let Pr = new Presenter.Presenter();

  Vw.test(Md);
  Vw.test2(0);
})();

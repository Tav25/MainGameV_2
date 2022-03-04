const Scene = require("Scene");
const TouchGestures = require("TouchGestures");
export const Diagnostics = require("Diagnostics");

export { Controller };
import * as MD from "./Model";

class Controller {
  constructor() {
    this.arr = 15;
    this.buttonConnect();
  }

  async buttonConnect() {
    const [testButton0, testButton1, testButton2] = await Promise.all([
      Scene.root.findFirst("testButton0"),
      Scene.root.findFirst("testButton1"),
      Scene.root.findFirst("testButton2"),
    ]); // 3 obj and mat
    TouchGestures.onTap(testButton0).subscribe((gesture) => {
      Diagnostics.log("A");
    });
    TouchGestures.onTap(testButton1).subscribe((gesture) => {
      Diagnostics.log("B");
    });
    TouchGestures.onTap(testButton2).subscribe((gesture) => {
      Diagnostics.log("C");
    });
  }

  connect() {}
}

const NativeUI = require('NativeUI');


export { zero, MyText };
let zero = "Connect...MText"

class MyText {
  constructor(text2D) {
    this.text2D = text2D
    // text2D.text = textForDat;
  }

test(tx){
  this.text2D.text = tx.toString();
}

}
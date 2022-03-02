export { View };

const Scene = require("Scene");
export const Diagnostics = require("Diagnostics");

// let x = "15";

class View {
  constructor() {
    this.arr = 10;
  }

  test(x) {
    let result = `p: ${x.point.current} h: ${x.health.current}
    SA: ${x.secondArray}
    MA: ${x.mainArray}
    MC: ${x.mainCard.number} ${x.mainCard.face}
    TC: ${x.topCard.number} ${x.topCard.face}
    `;
    logTextView(result);
  }

  test2(x) {
    mainCard(x);
  }
}

async function logTextView(x) {
  const [logText] = await Promise.all([Scene.root.findFirst("logText")]);
  logText.text = x;
}

async function mainCard() {
  const [mainCard0] = await Promise.all([Scene.root.findFirst("mainCard0")]);
  const [_indexFace0] = await Promise.all([Materials.findFirst("_indexFace0")]);
  const [_indexBack0] = await Promise.all([Materials.findFirst("_indexBack0")]);

  const [cardTexture_shirt] = await Promise.all([
    Textures.findFirst("cardTexture_shirt"),
  ]);

  const [
    topCardTexture_0,
    topCardTexture_1,
    topCardTexture_2,
    topCardTexture_3,
    topCardTexture_4,
    topCardTexture_5,
    topCardTexture_6,
    topCardTexture_7,
    topCardTexture_8,
    topCardTexture_9,
  ] = await Promise.all([
    Textures.findFirst("topCardTexture_0"),
    Textures.findFirst("topCardTexture_1"),
    Textures.findFirst("topCardTexture_2"),
    Textures.findFirst("topCardTexture_3"),
    Textures.findFirst("topCardTexture_4"),
    Textures.findFirst("topCardTexture_5"),
    Textures.findFirst("topCardTexture_6"),
    Textures.findFirst("topCardTexture_7"),
    Textures.findFirst("topCardTexture_8"),
    Textures.findFirst("topCardTexture_9"),
  ]);

  let texArray = [
    topCardTexture_0,
    topCardTexture_1,
    topCardTexture_2,
    topCardTexture_3,
    topCardTexture_4,
    topCardTexture_5,
    topCardTexture_6,
    topCardTexture_7,
    topCardTexture_8,
    topCardTexture_9,
    cardTexture_shirt,
  ]; // 11 textures
}

// (async function (x) {
// })();

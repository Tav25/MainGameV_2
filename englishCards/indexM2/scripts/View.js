export { View };

const Scene = require("Scene");
const Materials = require("Materials");
export const Diagnostics = require("Diagnostics");
const Textures = require("Textures");

import * as CX from "./CardX";
import * as MD from "./Model";

class View {
  constructor() {
    this.arr = 10;
  }

  showLog(x = 'no data') {
    let result = `p: ${MD.Model.point.current} h: ${MD.Model.health.current}`;
    // let result = x;
    logTextView(result);
  }

  test2(x) {
    mainCard(x);
    topCard(x);
  }
}

async function logTextView(x) {
  const [logText] = await Promise.all([Scene.root.findFirst("logText")]);
  logText.text = x;
}

async function mainCard(x) {
  const [mainCard0] = await Promise.all([Scene.root.findFirst("mainCard0")]);
  const [_indexFace0] = await Promise.all([Materials.findFirst("_indexFace0")]);
  const [_indexBack0] = await Promise.all([Materials.findFirst("_indexBack0")]);

  const [cardTexture_shirt] = await Promise.all([
    Textures.findFirst("cardTexture_shirt"),
  ]);

  const [
    mainCardTexture_0,
    mainCardTexture_1,
    mainCardTexture_2,
    mainCardTexture_3,
    mainCardTexture_4,
    mainCardTexture_5,
    mainCardTexture_6,
    mainCardTexture_7,
    mainCardTexture_8,
    mainCardTexture_9,
  ] = await Promise.all([
    Textures.findFirst("mainCardTexture_0"),
    Textures.findFirst("mainCardTexture_1"),
    Textures.findFirst("mainCardTexture_2"),
    Textures.findFirst("mainCardTexture_3"),
    Textures.findFirst("mainCardTexture_4"),
    Textures.findFirst("mainCardTexture_5"),
    Textures.findFirst("mainCardTexture_6"),
    Textures.findFirst("mainCardTexture_7"),
    Textures.findFirst("mainCardTexture_8"),
    Textures.findFirst("mainCardTexture_9"),
  ]);

  let texArray = [
    mainCardTexture_0,
    mainCardTexture_1,
    mainCardTexture_2,
    mainCardTexture_3,
    mainCardTexture_4,
    mainCardTexture_5,
    mainCardTexture_6,
    mainCardTexture_7,
    mainCardTexture_8,
    mainCardTexture_9,
  ]; // 10 textures

  let card_0 = await new CX.CardX(
    mainCard0,
    _indexFace0,
    _indexBack0,
    texArray
  );
  Diagnostics.log(card_0.lengthArrayTexture);
  // card_0.positionY(-0.2);
  card_0.face = x;
}

async function topCard(x) {
  const [mainCard1] = await Promise.all([Scene.root.findFirst("mainCard1")]);
  const [_indexFace1] = await Promise.all([Materials.findFirst("_indexFace1")]);
  const [_indexBack1] = await Promise.all([Materials.findFirst("_indexBack1")]);

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
  ]; // 10 texturesА

  let card_1 = await new CX.CardX(
    mainCard1,
    _indexFace1,
    _indexBack1,
    texArray
  );
  Diagnostics.log(card_1.lengthArrayTexture);
  card_1.face = x;
}

async function topCardsOther() {
  const [topCard_0, topCard_1, topCard_2, topCard_3, _topCard] =
    await Promise.all([
      Scene.root.findFirst("topCard_0"),
      Scene.root.findFirst("topCard_1"),
      Scene.root.findFirst("topCard_2"),
      Scene.root.findFirst("topCard_3"),
      Materials.findFirst("_topCard"),
    ]); // 4 obj and mat
}

// (async function (x) {
// })();

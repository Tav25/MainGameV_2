const Scene = require("Scene");
const Diagnostics = require("Diagnostics");
const Materials = require("Materials");
const Textures = require("Textures");
const Animation = require("Animation");
// const TouchGestures = require("TouchGestures");
// const Random = require("Random");
// const Patches = require("Patches");
// const Time = require("Time");
// const Reactive = require("Reactive");
// const Instruction = require("Instruction");


// const [box] = [Scene.root.findFirst('box'),]




export { zero, OnScene };

let zero = "Connect..."

class OnScene {
  constructor(obj, materialObj, texture = []) {
    this.obj = obj;
    this.materialObj = materialObj;
    this.texture = texture
    this.pX = this.obj.transform.x.pinLastValue()
    this.pY = this.obj.transform.y.pinLastValue()
    this.lengthArrayTexture = this.texture.length

  }

  hide() {
    this.obj.hidden = true
    this.isHidden = true;
  }

  show() {
    this.obj.hidden = false
    this.isHidden = false
  }

  positionX(xn) {
    this.obj.transform.x = xn
  }

  positionY(yn) {
    this.obj.transform.y = yn
  }


  positionXYZ([xn, yn, zn]) {
    this.obj.transform.x = xn
    this.obj.transform.y = yn
    this.obj.transform.z = zn
  }


  textureReplace(number) {
    this.materialObj.diffuse = this.texture[number]
  }
  
  showShirt() {
    this.materialObj.diffuse = this.texture[this.lengthArrayTexture-1]
  }

  vrashenieZ(startPOsition, finishPosition, time, loop = 1, mir = false) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: loop, //Infinity,
      mirror: mir
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const gr360 = 6.283185253783088;
    const quadraticSampler = Animation.samplers.easeOutCubic(
      startPOsition,
      gr360 * finishPosition
    );
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.obj.transform.rotationZ = translationAnimationScale;
    timeDriver.start();
  }

  vrashenieY(startPOsition, finishPosition, time, loop = 1, mir = false) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: loop, //Infinity,
      mirror: mir
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const gr360 = 6.283185253783088;
    const quadraticSampler = Animation.samplers.easeOutCubic(
      startPOsition,
      gr360 * finishPosition
    );
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.obj.transform.rotationY = translationAnimationScale;
    timeDriver.start();
  }

  vrashenieX(startPOsition, finishPosition, time, loop = 1, mir = false) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: loop, //Infinity,
      mirror: mir
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const gr360 = 6.283185253783088;
    const quadraticSampler = Animation.samplers.easeOutCubic(
      startPOsition,
      gr360 * finishPosition
    );
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.obj.transform.rotationX = translationAnimationScale;
    timeDriver.start();
  }


  upDown() {
    const timeDriverParameters = {
      durationMilliseconds: 250,
      loopCount: 2, //Infinity,
      mirror: true
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const gr360 = 6.283185253783088;
    const quadraticSampler = Animation.samplers.easeOutCubic(
      1,
      1.2
    );
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.obj.transform.scaleY = translationAnimationScale;
    this.obj.transform.scaleX = translationAnimationScale;
    timeDriver.start();
  }

  size(sz, time = 250) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: 1, //Infinity,
      mirror: false
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSamplerY = Animation.samplers.easeOutCubic(this.obj.transform.scaleY.pinLastValue(), this.obj.transform.scaleY.pinLastValue() * sz);
    const translationAnimationScaleY = Animation.animate(timeDriver, quadraticSamplerY);
    this.obj.transform.scaleY = translationAnimationScaleY;

    const quadraticSamplerX = Animation.samplers.easeOutCubic(this.obj.transform.scaleX.pinLastValue(), this.obj.transform.scaleX.pinLastValue() * sz);
    const translationAnimationScaleX = Animation.animate(timeDriver, quadraticSamplerX);
    this.obj.transform.scaleX = translationAnimationScaleX;
    // this.obj.transform.scaleX = translationAnimationScale;
    timeDriver.start();
  }

  sizeReset() {
    this.obj.transform.scaleX = 0.8;
    this.obj.transform.scaleY = 1.2;
  }

  newPositionXY([oldX, oldY], [newX, newY], time, count = 1) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: count, //Infinity,
      mirror: false
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSamplerX = Animation.samplers.easeOutCubic(oldX, newX);
    const translationAnimationScaleX = Animation.animate(timeDriver, quadraticSamplerX);
    const quadraticSamplerY = Animation.samplers.easeOutCubic(oldY, newY);
    const translationAnimationScaleY = Animation.animate(timeDriver, quadraticSamplerY);
    this.obj.transform.x = translationAnimationScaleX;
    this.obj.transform.y = translationAnimationScaleY;
    timeDriver.start();
  }

  newPositionXYZ([oldX, oldY, oldZ], [newX, newY, newZ], time, count = 1) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: count, //Infinity,
      mirror: false
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSamplerX = Animation.samplers.easeOutBounce(oldX, newX);
    const translationAnimationScaleX = Animation.animate(timeDriver, quadraticSamplerX);
    const quadraticSamplerY = Animation.samplers.easeOutBounce(oldY, newY);
    const translationAnimationScaleY = Animation.animate(timeDriver, quadraticSamplerY);
    const quadraticSamplerZ = Animation.samplers.easeOutBounce(oldZ, newZ);
    const translationAnimationScaleZ = Animation.animate(timeDriver, quadraticSamplerZ);
    this.obj.transform.x = translationAnimationScaleX;
    this.obj.transform.y = translationAnimationScaleY;
    this.obj.transform.z = translationAnimationScaleZ;
    timeDriver.start();
  }

  newPositionXYZver2([oldX, oldY, oldZ], [newX, newY, newZ], time, count = 1) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: count, //Infinity,
      mirror: false
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSamplerX = Animation.samplers.easeInQuart(oldX, newX);
    const translationAnimationScaleX = Animation.animate(timeDriver, quadraticSamplerX);
    const quadraticSamplerY = Animation.samplers.easeInQuart(oldY, newY);
    const translationAnimationScaleY = Animation.animate(timeDriver, quadraticSamplerY);
    const quadraticSamplerZ = Animation.samplers.easeInQuart(oldZ, newZ);
    const translationAnimationScaleZ = Animation.animate(timeDriver, quadraticSamplerZ);
    this.obj.transform.x = translationAnimationScaleX;
    this.obj.transform.y = translationAnimationScaleY;
    this.obj.transform.z = translationAnimationScaleZ;
    timeDriver.start();
  }


  opacity([start, finish], time = 500) {// proz
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: 1, //Infinity,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSampler = Animation.samplers.easeInSine(start, finish);
    const translationAnimationScale = Animation.animate(timeDriver, quadraticSampler);
    this.materialObj.opacity = translationAnimationScale;
    timeDriver.start();
  }


}
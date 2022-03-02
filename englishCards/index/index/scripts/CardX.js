const Animation = require("Animation");
export const Diagnostics = require("Diagnostics");

export { CardX };

class CardX {
  constructor(obj, materialFace, materialBack, texture = []) {
    this.obj = obj;
    this.materialFace = materialFace;
    this.materialBack = materialBack;
    this.texture = texture;
    this.lengthArrayTexture = this.texture.length;
  }

  get pX() {
    return this.obj.transform.x.pinLastValue();
  }
  get pY() {
    return this.obj.transform.y.pinLastValue();
  }
  get pZ() {
    return this.obj.transform.z.pinLastValue();
  }

  get isFace() {
    if (this.obj.transform.rotationY.pinLastValue() === 3.141592653589793) {
      return false;
    }
    return true;
  }

  hide() {
    this.obj.hidden = true;
    this.isHidden = true;
  }

  show() {
    this.obj.hidden = false;
    this.isHidden = false;
  }

  positionX(xn) {
    this.obj.transform.x = xn;
  }

  positionY(yn) {
    this.obj.transform.y = yn;
  }

  positionXYZ([xn, yn, zn]) {
    this.obj.transform.x = xn;
    this.obj.transform.y = yn;
    this.obj.transform.z = zn;
  }

  set face(number) {
    this.materialFace.diffuse = this.texture[number];
  }

  oborot(time = 1000) {
    let startPOsition;
    let finishPosition;
    if (this.obj.transform.rotationY.pinLastValue() === 3.141592653589793) {
      startPOsition = 1;
      finishPosition = 0;
    } else {
      startPOsition = 0;
      finishPosition = 1;
    }
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: 1, //Infinity,
      mirror: false,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSampler = Animation.samplers.easeOutCubic(
      Math.PI * startPOsition,
      Math.PI * finishPosition
    );
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.obj.transform.rotationY = translationAnimationScale;
    timeDriver.start();
  }

  oborotZ(startPOsition = 0, finishPosition = 0.5, time = 1000) {
    // let startPOsition = 0;
    // let finishPosition = 2;
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: 1, //Infinity,
      mirror: false,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSampler = Animation.samplers.easeOutCubic(
      Math.PI * startPOsition,
      Math.PI * finishPosition
    );
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.obj.transform.rotationZ = translationAnimationScale;
    timeDriver.start();
  }

  newPositionXYZ([oldX, oldY, oldZ], [newX, newY, newZ], time, count = 1) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: count, //Infinity,
      mirror: false,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSamplerX = Animation.samplers.easeInOutCubic(oldX, newX);
    const translationAnimationScaleX = Animation.animate(
      timeDriver,
      quadraticSamplerX
    );
    const quadraticSamplerY = Animation.samplers.easeInOutCubic(oldY, newY);
    const translationAnimationScaleY = Animation.animate(
      timeDriver,
      quadraticSamplerY
    );
    const quadraticSamplerZ = Animation.samplers.easeInOutCubic(oldZ, newZ);
    const translationAnimationScaleZ = Animation.animate(
      timeDriver,
      quadraticSamplerZ
    );
    this.obj.transform.x = translationAnimationScaleX;
    this.obj.transform.y = translationAnimationScaleY;
    this.obj.transform.z = translationAnimationScaleZ;
    timeDriver.start();
  }

  opacityAnim([start = 0, finish = 1], time = 500, fun) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: 1, //Infinity,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSampler = Animation.samplers.easeInSine(start, finish);
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.materialFace.opacity = translationAnimationScale;
    this.materialBack.opacity = translationAnimationScale;
    timeDriver.start();
    let tapSubscription = timeDriver.onCompleted().subscribe((event) => {
      Diagnostics.log(">>>>");
      tapSubscription.unsubscribe();
      fun();
      return "fdg";
    });
  }

  async opacity([start = 0, finish = 1], time = 500) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: 1, //Infinity,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSampler = Animation.samplers.easeInSine(start, finish);
    const translationAnimationScale = Animation.animate(
      timeDriver,
      quadraticSampler
    );
    this.materialFace.opacity = translationAnimationScale;
    this.materialBack.opacity = translationAnimationScale;
    timeDriver.start();
    let tapSubscription = await timeDriver.onCompleted().subscribe((event) => {
      Diagnostics.log(">>>>");
      tapSubscription.unsubscribe();
      // fun();
    });
    return timeDriver;
  }
}

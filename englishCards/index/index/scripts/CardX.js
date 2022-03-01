const Animation = require("Animation");
export const Diagnostics = require("Diagnostics");

export { CardX };

class CardX {
  constructor(obj, materialFace, materialBack, texture = []) {
    this.obj = obj;
    this.materialFace = materialFace;
    this.materialBack = materialBack;
    this.texture = texture;
    this.pX = this.obj.transform.x.pinLastValue();
    this.pY = this.obj.transform.y.pinLastValue();
    this.lengthArrayTexture = this.texture.length;
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
    //
    // const timeDriverParametersSize = {
    //   durationMilliseconds: time / 2,
    //   loopCount: 2, //Infinity,
    //   mirror: true,
    // };
    // const timeDriverSize = Animation.timeDriver(timeDriverParametersSize);
    // const sizeSampler = Animation.samplers.easeOutCubic(1, 1.1);
    // const sizeScale = Animation.animate(timeDriverSize, sizeSampler);
    // this.obj.transform.scaleY = sizeScale;
    // this.obj.transform.scaleX = sizeScale;
    // //
    timeDriver.start();
    // timeDriverSize.start();
    // let tapSubscription = timeDriver.onCompleted().subscribe((event) => {
    //   Diagnostics.log(">>>>");
    //   tapSubscription.unsubscribe();
    //   // fun();
    //   return event;
    // });
  }

  newPositionXYZ([oldX, oldY, oldZ], [newX, newY, newZ], time, count = 1) {
    const timeDriverParameters = {
      durationMilliseconds: time,
      loopCount: count, //Infinity,
      mirror: false,
    };
    const timeDriver = Animation.timeDriver(timeDriverParameters);
    const quadraticSamplerX = Animation.samplers.easeOutBounce(oldX, newX);
    const translationAnimationScaleX = Animation.animate(
      timeDriver,
      quadraticSamplerX
    );
    const quadraticSamplerY = Animation.samplers.easeOutBounce(oldY, newY);
    const translationAnimationScaleY = Animation.animate(
      timeDriver,
      quadraticSamplerY
    );
    const quadraticSamplerZ = Animation.samplers.easeOutBounce(oldZ, newZ);
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

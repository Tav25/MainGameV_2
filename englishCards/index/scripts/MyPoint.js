const Diagnostics = require("Diagnostics");
const Random = require("Random");


export { zero, randomInt, MyPoint };

let zero = "Connect...MP"

function randomInt(max) {// рандомайзер
  return Math.floor(Random.random() * Math.floor(max));
}

class MyPoint {
  constructor([point0, point1, point2, point3],
    [matPoint0, matPoint1, matPoint2, matPoint3],
    [numbersPoint_0, numbersPoint_1, numbersPoint_2, numbersPoint_3, numbersPoint_4,
      numbersPoint_5, numbersPoint_6, numbersPoint_7, numbersPoint_8, numbersPoint_9]) {

    this.point = [point0, point1, point2, point3];
    this.mat = [matPoint0, matPoint1, matPoint2, matPoint3];
    this.texture = [numbersPoint_0, numbersPoint_1, numbersPoint_2, numbersPoint_3, numbersPoint_4,
      numbersPoint_5, numbersPoint_6, numbersPoint_7, numbersPoint_8, numbersPoint_9];

  }

  hide(x) {
    this.point[x].hidden = true
  }

  hideAll() {
    this.point[0].hidden = true
    this.point[1].hidden = true
    this.point[2].hidden = true
    this.point[3].hidden = true
  }

  show(x) {
    this.point[x].hidden = false
  }

  showAll() {
    this.point[0].hidden = false
    this.point[1].hidden = false
    this.point[2].hidden = false
    this.point[3].hidden = false
  }

  replaseMaterialObj(pointNum, texture) {
    this.mat[pointNum].diffuse = this.texture[texture]
  }

  numberPoint(point) { //вывод очков
    // point = pointP
    let pointP = '0000' + point.toString()
    this.mat[0].diffuse = this.texture[pointP.substr(-1, 1) * 1];
    this.mat[1].diffuse = this.texture[pointP.substr(-2, 1) * 1];
    this.mat[2].diffuse = this.texture[pointP.substr(-3, 1) * 1];
    this.mat[3].diffuse = this.texture[pointP.substr(-4, 1) * 1];

    // this.showAll()

    // if (pointP.substr(-2, 1) === '0') { this.hide(1) }
    // if (pointP.substr(-3, 1) === '0') { this.hide(2) }
    // if (pointP.substr(-4, 1) === '0') { this.hide(3) }





  }
}


  // const [
  //   nullPoints,
  //   point0, point1, point2, point3,
  //   matPoint0, matPoint1, matPoint2, matPoint3,

  //   numbersPoint_0, numbersPoint_1, numbersPoint_2, numbersPoint_3, numbersPoint_4,
  //   numbersPoint_5, numbersPoint_6, numbersPoint_7, numbersPoint_8, numbersPoint_9,
  // ] = await Promise.all([
  //   Scene.root.findFirst('nullPoints'),
  //   Scene.root.findFirst('point0'), Scene.root.findFirst('point1'), Scene.root.findFirst('point2'), Scene.root.findFirst('point3'),
  //   Materials.findFirst('matPoint0'), Materials.findFirst('matPoint1'), Materials.findFirst('matPoint2'), Materials.findFirst('matPoint3'),

  //   Textures.findFirst('numbersPoint_0'), Textures.findFirst('numbersPoint_1'), Textures.findFirst('numbersPoint_2'), Textures.findFirst('numbersPoint_3'), Textures.findFirst('numbersPoint_4'),
  //   Textures.findFirst('numbersPoint_5'), Textures.findFirst('numbersPoint_6'), Textures.findFirst('numbersPoint_7'), Textures.findFirst('numbersPoint_8'), Textures.findFirst('numbersPoint_9'),

  // ])

  // let numZero = new MP.MyPoint(
  //   [point0, point1, point2, point3],
  //   [matPoint0, matPoint1, matPoint2, matPoint3],
  //   [numbersPoint_0, numbersPoint_1, numbersPoint_2, numbersPoint_3, numbersPoint_4,
  //     numbersPoint_5, numbersPoint_6, numbersPoint_7, numbersPoint_8, numbersPoint_9]
  // )

  // numZero.numberPoint(444)

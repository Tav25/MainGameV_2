export { Model };

class Model {
  constructor() {
    this.arr = 10;
    this.point = {
      current: 0,
      max: 10,
      min: 0,
    };

    this.health = {
      current: 0,
      max: 10,
      min: 0,
    };

    this.mainArray = {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    this.secondArray = {
      arr: [0, 1, 2, 3, 4],
    };

    this.mainCard = {
      face: true,
      number: 0,
    };

    this.topCard = {
      face: true,
      number: 0,
    };
  }
}

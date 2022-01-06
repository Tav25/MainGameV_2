const Diagnostics = require("Diagnostics");
const Random = require("Random");


export { zero, randomInt, MyArray };

let zero = "Connect...MA"

function randomInt(max) {// рандомайзер
    return Math.floor(Random.random() * Math.floor(max));
}

class MyArray {
    constructor(number) {
        this.arr = [];
        this.number = number;
        this.arrMod = [];
        this.mArray()
    }


    mArray() {

        this.arr = Array.apply(null, { length: this.number }).map(Number.call, Number)


    }
    mArray3() {

        this.arr = Array.apply(null, { length: this.number }).map(Number.call, Number)

    }

    mArray2(x) {
        this.arrMod = this.arr.concat(this.arr);

        this.arrMod.length = this.arr.length + x

    }

    shuffle(pologenieVmassive = 0) { // мешает массив
        var currentIndex = this.arr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = this.arr[currentIndex];
            this.arr[currentIndex] = this.arr[randomIndex];
            this.arr[randomIndex] = temporaryValue;
        }


    }

    repl(vneshnijArray, pologenieVmassive) { // мешает массив
        var doubles = this.arr.map(function (num) {
 
            return vneshnijArray[num + pologenieVmassive*1];
        });
        this.arr = doubles
    }


}
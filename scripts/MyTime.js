const Diagnostics = require("Diagnostics");
const Time = require("Time");



export { zero,sit };
let zero = "Connect...MT"

const ng3 = Time.setInterval(() => {
  stopIntervalTimer(ng3)
}, 2000)


function stopIntervalTimer(rc) {// остановка таймера
  Time.clearInterval(rc);
}


function sit(x,time){


  const ng3 = Time.setInterval(() => {
    
    let y = x
    stopIntervalTimer(ng3)
  }, time)


}

function sit2(){


  let bn = timeFrom.monitor().subscribe(function (event) { //отслеживание изменения положения головы в лево
    if (timeFrom.pinLastValue() > 3) {
      

      bn.unsubscribe()
    
    }
  });


}
// 클로저를 이용한 방법
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}
const increase = makeCounter();
increase(); // 1
increase(); // 2
increase(); // 3

// 클래스를 이용한 방법
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase(); // 1

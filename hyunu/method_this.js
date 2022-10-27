// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// alert(user.ref.name); // 결과가 어떻게 될까요?

//에러가 발생하는 이유는  this값을 설정할 때 객체 정의 X
//this 값은 호출 시점에 결정 되어짐
//근데 호출되어질때 함수로써 호출 되여저서 비어있는 this값을 반환

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

console.log(user.ref().name); // John

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("첫 번째 값:", 0);
    this.b = +prompt("두 번째 값:", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep(); // 1

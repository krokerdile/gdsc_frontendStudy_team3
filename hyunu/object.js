/*
빈 객체 user를 만듭니다.
user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
name의 값을 Pete로 수정해보세요.
user에서 프로퍼티 name을 삭제하세요.
*/

const user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";
delete user.name;

/*
객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 
반환해주는 함수 isEmpty(obj)를 만들어 보세요.
아래와 같이 동작해야 합니다.
*/
function isEmpty(schedule) {
  if (schedule.length > 0) {
    return false;
  } else {
    return true;
  }
}
/*
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
여기서 나오는 답은 반복문 실행을 통해서 값이 나오게 되면
프로퍼티가 하나라도 있는 것이므로 이런식으로 작성하여 주는 것
*/

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let i in salaries) {
  sum += salaries[i];
}
console.log(sum);

// 프로퍼티 값 두배로 부풀리기
function multiplyNumeric(menu) {
  for (let i in menu) {
    if (typeof menu[i] === "number") {
      menu[i] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// 함수 호출 후
console.log(menu);

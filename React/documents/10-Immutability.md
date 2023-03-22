# 10-불변성  
[10.1 불변성이란?](#101-불변성이란)  
[-- 10.1.1 불변성 예시1)](#1011-불변성-예시1)  
[-- 10.1.2 불변성 예시2) 전개 연산자의 객체나 배열 내부의 값 얕은 복사](#1012-불변성-예시2-전개-연산자의-객체나-배열-내부의-값-얕은-복사)  
[-- 10.1.3 불변성 예시3) 객체 안에 있는 객체의 불변성](#1013-불변성-예시3-객체-안에-있는-객체의-불변성)  
[10.2 자바스크립트 배열 내장함수와 불변성](#102-자바스크립트-배열-내장함수와-불변성)  
[-- 10.2.1 자바스크립트 배열의 map() 함수](#1021-자바스크립트-배열의-map-함수)  
[-- 10.2.2 컴포넌트 반복에 map을 사용하는 이유](#1022-컴포넌트-반복에-map을-사용하는-이유)  

# 10.1 불변성이란?

기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 ‘불변성을 지킨다’고 함  

리액트에서 배열이나 객체를 업데이트 해야 할 때에는 직접 수정 하면 안되고  
불변성을 지켜주면서 업데이트를 해주어야 함  

불변성을 유지해주어야 나중에 리액트 컴포넌트의 성능을 최적화 할 수 있기 때문이다  
만약 상태를 계속해서 바꿔버리고, 유지시키지 못한다면 VirtualDom을 사용하는 이유도 없고, 리액트의 큰 장점중 하나인 원본과 비교해 변화된 부분만 계산해서 빠르게 랜더링해준다는 점을 취하지 못하게 됨  

불변성이 지켜지지 않으면 객체 내부의 값이 새로워져도 바뀐 것을 감지하지 못함  
⇒ `React.memo` 에서 서로 비교하여 최적화하는 것이 불가능  

## 10.1.1 불변성 예시1)

```jsx
const array = [1, 2, 3, 4, 5];

const nextArrayBad = array; // 배열을 복사하는 것이 아니라 똑같은 배열을 가리킴
nextArrayBad[0] = 100;
console.log(array);                   // [ 100, 2, 3, 4, 5 ]
console.log(nextArrayBad);            // [ 100, 2, 3, 4, 5 ]
console.log(array === nextArrayBad);  // 완전히 같은 배열이기 때문에 true

const nextArrayGood = [...array]; // 배열 내부의 값을 모두 복사
nextArrayGood[0] = 200;
console.log(array);                   // [ 100, 2, 3, 4, 5 ]
console.log(nextArrayGood);           // [ 200, 2, 3, 4, 5 ]
console.log(array === nextArrayGood); // 다른 배열이기 때문에 false

const object = {
  foo: 'bar',
  value: 1
};

const nextObjectBad = object; // 객체가 복사되지 않고, 똑같은 객체를 가리킴
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object);                    // { foo: 'bar', value: 2 }
console.log(nextObjectBad);             // { foo: 'bar', value: 2 }
console.log(object === nextObjectBad);  // 완전히 같은 배열이기 때문에 true

const nextObjectGood = {
  ...object,      // 기존에 있던 내용을 모두 복사해서 넣음
  value: object.value + 1
};
console.log(object);                    // { foo: 'bar', value: 2 }
console.log(nextObjectGood);            // { foo: 'bar', value: 3 }
console.log(object === nextObjectGood); // 완전히 같은 배열이기 때문에 true
```

## 10.1.2 불변성 예시2) 전개 연산자의 객체나 배열 내부의 값 얕은 복사

전개 연산자(`…`)를 사용하여 객체나 배열 내부의 값을 복사할 때는 얕은 복사(shallow copy)를 하게 됨  
즉, 내부의 값이 완전히 새로 복사되는 것이 아니라 가장 바깥쪽에 있는 값만 복사됨  
⇒ 내부의 값이 객체 혹은 배열이라면 내부의 값 또한 따로 복사해 주어야 함  

```jsx
const todos = [{ id: 1, checked: true }, { id: 2, checked: true }];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0]);                  // { id: 1, checked: false }
console.log(nextTodos[0]);              // { id: 1, checked: false }
console.log(todos[0] === nextTodos[0]); // 여기까지는 똑같은 객체를 가리키고 있기 때문에 true

nextTodos[0] = {
  ...nextTodos[0],      
  checked: true
};
console.log(todos[0]);                  // { id: 1, checked: false }
console.log(nextTodos[0]);              // { id: 1, checked: true }
console.log(todos[0] === nextTodos[0]); // 새로운 객체를 할당해 줘서 false
```

## 10.1.3 불변성 예시3) 객체 안에 있는 객체의 불변성

객체 안에 있는 객체의 불변성을 지키면서 새 값을 할당하려면

```jsx
let user1 = {
  name: "Oh",
  address: {
    city: "Seoul"
  }
};

const user2 = {...user1};
console.log(user1); // { name: 'Oh', address: { city: 'Seoul' } }
console.log(user2); // { name: 'Oh', address: { city: 'Seoul' } }
// 얕은 복사 완료! user1와 user2는 참조값이 다르다. 
console.log(user1 === user2); // false

user2.address.city = "Busan";
console.log(user1); // { name: 'Oh', address: { city: 'Busan' } }
console.log(user2); // { name: 'Oh', address: { city: 'Busan' } }
// 다만 객체 내부의 객체인 address는 참조값이 공유된다. 
console.log(user1.address.city === user2.address.city); // true
console.log(user1 === user2); // false

const user3 = {
  ...user1,
  address: {
    ...user1.address,
    city: "Incheon"
  }
};

console.log(user1); // { name: 'Oh', address: { city: 'Busan' } }
console.log(user3); // { name: 'Oh', address: { city: 'Incheon' } }
console.log(user1.address.city === user3.address.city); // false
console.log(user1 === user3); // false
```

# 10.2 자바스크립트 배열 내장함수와 불변성

자바스크립트의 배열 내장함수에는 `push, splice, pop, concat, slice, map, filter` 등이 있다.  
이중에는 `push`, `splice`, `pop`은 **원본 배열의 변경**하고,  
`concat`, `slice`, `map`, `filter`는 **원본 배열을 복사해서 새로운 배열을 만들어냄**  

## 10.2.1 자바스크립트 배열의 map() 함수

자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있다  
map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성함  

`arr.map(callbackFunction(currenValue, index, array), thisArg)`

> `callbackFunction`: 새로운 배열의 요소를 생성하는 함수로 파라미터는 아래 세 가지다
> 
- currentValue: 현재 처리하고 있는 요소
- index: 현재 처리하고 있는 요소의 index 값
- array: 현재 처리하고 있는 원본 배열

> `thisArg`(선택 항목, 생략 가능): callback 함수 내부에서 사용할 this 레퍼런스
> 

```jsx
let arr1 = [1,2,3]

let arr2 = arr1.map((number) => {

  return number * number

})
console.log(arr2) // [1,4,9]
```

배열 내장 함수 map을 사용하여 특정 id를 가지고 있는 객체의 값을 다룸  
불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 map 을 사용  
map 함수는 배열을 전체적으로 새로운 형태로 변환하여 새로운 배열을 생성해야 할 때 사용함  

## 10.2.2 컴포넌트 반복에 map을 사용하는 이유

비슷한 반복을 하는 것으로는 `forEach`도 있지만 `map`을 사용하는 이유는  
`map()`이 새로운 배열을 반환한다는 것  

### forEach

배열의 요소를 반복합니다.(공통점)  

각 요소에 대해 콜백을 실행하며 값을 반환하지 않습니다.(차이점)  

```jsx
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
	return num*=2;
})
console.log(doubled)// doubled = undefined
```

### map

배열의 요소를 반복합니다.(공통점)  

각 요소에서 함수를 호출하여 결과로 새 배열을 작성하여 각 요소를 새 요소에 매핑합니다.(차이점)  

```jsx
const b = [1, 2, 3];
const doubledmap = b.map((num, index) => {
	return num*=2;
})
console.log(doubledmap)// doubledmap = [2,4,6];
```

`forEach`와 `map()`의 가장 큰 차이점은 `map()`이 새로운 배열을 반환한다는 것  

반복의 결과를 조작한 새로운 배열이 필요하다면 `map()`,  
단순히 배열을 반복할 필요가 있다면, `forEach`가 좋은 선택이다
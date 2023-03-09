# 10-이터레이션, 제너레이터
[1. 이터레이션 프로토콜](#1-이터레이션-프로토콜)  
[-- 1.1 이터레이션 프로토콜이란?](#11-이터레이션-프로토콜이란)  
[-- 1.2 이터레이터 만들기 예제](#12-이터레이터-만들기-예제)  
[2. 제너레이터](#2-제너레이터)  
[-- 2.1 제너레이터(generator)란?](#21-제너레이터generator란)  
[3. 전개연산자(spread operator)](#3-전개연산자spread-operator)  
[-- 3.1 전개연산자(…) 란?](#31-전개연산자-란)  
[-- 3.2 전개연산자로 할당하면 2차원 형태가 되지 않는다](#32-전개연산자로-할당하면-2차원-형태가-되지-않는다)  
[-- 3.3 전개 연산자를 이용한 복사에는 1차원에서만 유효하다](#33-전개-연산자를-이용한-복사에는-1차원에서만-유효하다)  
[-- 3.4 기존 배열을 보존해야 할 때 유용하다](#34-기존-배열을-보존해야-할-때-유용하다)  
[-- 3.5 배열의 나머지 요소를 할당할 수 있다](#35-배열의-나머지-요소를-할당할-수-있다)  
[-- 3.6 전개연산자는 무조건 깊은 복사가 되는가?](#36-전개연산자는-무조건-깊은-복사가-되는가)  


# 1. 이터레이션 프로토콜

## 1.1 이터레이션 프로토콜이란?

> 이터레이션: 반복.순회  
프로토콜: 규격, 약속, 인터페이스  
이터레이션 프로토콜을 따른다 ⇒ 순회가 가능하다
> 
- JS에서 이터레이션 프로토콜을 따르는 객체는  
`for…of`, `spread` 연산자를 사용할 수 있다  
⇒ 두 개는 순회가 가능한 연산자
- 이터레이션 프로토콜을 따르는 자료구조
⇒ `Array`(배열), `String`(문자), `Map`, `Set`  
⇒ `for…of`, `spread` 연산자를 사용할 수 있다

JS에서 이터레이션 프로토콜을 따르기 위해서는  

1. Iterable 프로토콜  
⇒ [Symbol.iterator] 를 호출하면  
2. Iterator 프로토콜을 따르는 객체를 리턴해야 한다  
⇒ next() 라는 함수가 있어서 다음값을 계속 리턴하도록 만들면 된다  

`[Symbol.iterator](): Iterator{ next(): {value, done} };`  

```jsx
Iterable 프로토콜

{
		[Symbol.iterator](): Iterator 프로토콜
													{
															next(): 다음값
													}
}
```

next() 를 살펴보면  

```jsx
const array = [1, 2, 3, 4];

const iterator = array.values();
console.log(iterator);          // Object [Array Iterator] {}
console.log(iterator.next());   // { value: 1, done: false }
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // undefined
console.log(iterator.next().done);  // true
```

> value: 실제 값  
done: 반복이 끝났는지 여부(제일 마지막 아이템인지 여부)
> 

반환된 iterator 를 통해 계속 next를 호출하면 다음 값이 반환 됨  

```jsx
const array = [1, 2, 3, 4];

for (const item of array) {
    console.log(item);
}

// iterator 사용해 보기
const iterator2 = array.values();
while (true) {
  const item = iterator2.next();
  if (item.done) break;
  console.log(item.value);
}
```

출력 결과

```jsx
1
2
3
4

1
2
3
4
```

## 1.2 이터레이터 만들기 예제

### 1.2.1 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기

```jsx
// [Symbol.iterator](): IterableIterator<T>;
const multiple = {
    [Symbol.iterator]: () => {
      const max = 10;
      let num = 0;
      return {
        next() {
          return { value: num++ * 2, done: num > max };
        },
      };
    },
  };
  
  console.clear();
  for (const num of multiple) {
    console.log(num);
  }
```

### 1.2.2 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기 함수형

```jsx
function makeIterable(initialValue, maxValue, callback) {
    return {
      [Symbol.iterator]: () => {
        const max = maxValue;
        let num = initialValue;
        return {
          next() {
            return { value: callback(num++), done: num > max };
          },
        };
      },
    };
  }
  
  const multiple = makeIterable(0, 20, (num) => num * 2);
  console.clear();
  for (const num of multiple) {
    console.log(num);
  }
  
  const single = makeIterable(0, 20, (num) => num);
  for (const num of single) {
    console.log(num);
  }
```

# 2. 제너레이터

## 2.1 제너레이터(generator)란?

- generator: 생성기
- Iteration Protocol을 준수함
- 항상 functon 키워드 이후에 `*` 를 붙여줘야 한다
- 기다렸다가 사용자가 next 를 호출할 때까지 다음 코드가 실행되어서 순회한다  
⇒ 사용자에게 제어권을 양도함

```jsx
console.group("generator example");

	function* multipleGenerator() {
	  try {
	    for (let i = 0; i < 10; i++) {
	      console.log(i);
	      yield i ** 2;
	    }
	  } catch (error) {
	    console.log(error);
	  }
	}
	const multiple2 = multipleGenerator();
	let next = multiple2.next();
	console.log(next.value, next.done);
	
	// multiple2.return();
	multiple2.throw("Error!");
	
	next = multiple2.next();
	console.log(next.value, next.done);

console.groupEnd();
```

출력 결과

```jsx
generator example
  0
  0 false
  Error!
  undefined true
```

# 3. 전개연산자(****spread operator****)

## 3.1 **전개연산자(…) 란?**

객체나 배열의 값을 하나 하나 넘기는 용도로 사용 가능하다

해당 객체나 배열의 요소들만 가져오고 싶은 경우

ES5 에서는 여러 배열의 내용을 합쳐 새로운 배열을 만들기 위해 **`concat`**
메서드를 사용한다.

### **ES5 에서의 배열 내용 조합**

```jsx
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arrWrap = arr1.concat(arr2, arr3);

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### **ES6 에서의 배열 내용 조합(전개연산자 사용)**

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrWrap = [...arr1, ...arr2, ...arr3];

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrWrap2 = [1, 2, 3, ...arr2, 7, 8, 9];

console.log(arrWrap2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

## 3.2 **전개연산자로 할당하면 2차원 형태가 되지 않는다**

### **배열의 경우**

concat 메소드로 새로운 배열을 만들어내는 것이 아닌, 기존 배열 요소에 값을 추가한다면 push 메소드를 사용할 것이다.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(arr2);

console.log(arr1); // [1, 2, 3, [4, 5]]
```

arr1 배열에 arr2 배열을 할당했지만 arr2 배열 전체가 들어가 2차원 배열이 되었다. 이 경우 기존 자바스크립트에서는 배열 객체의 프로토타입 매서드인 push.apply를 사용해야 한다.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
```

전개 연산자를 이용한 방법

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(...arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
```

### **객체의 경우**

전개 연산자를 사용하면 객체 자체가 할당되는 것이 아닌, 각각의 값이 할당 된다.

```jsx
const obj = {
    "Name":"AJu",
    "Git":"zoz0312"
}
const test_obj = {
    "test1":1,
    "test2":2
}

//ES6
const a_merge = { obj, test_obj }
const b_merge = { ...obj, ...test_obj }

console.log(a_merge);
/*
{
    obj: {
        "Name":"AJu",
        "Git":"zoz0312"
    },
    test_obj: {
        "test1":1,
        "test2":2
    }
}
*/

console.log(b_merge);
/*
{
    "Name":"AJu",
    "Git":"zoz0312",
    "test1":1,
    "test2":2
}
*/
```

---

## 3.3 전개 연산자를 이용한 복사에는 1차원에서만 유효하다

전개 연산자로 할당하면 2차원 배열이 되지 않는다고 했다. 하지만 2차원 이상의 배열을 할당할 땐 1차원 요소만 같은 1차원 레벨로 할당이 되고 2차원 이상의 배열은 그대로 들어간다.

```jsx
const arr1 = [4, 5, [6, 7]];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2); // [1, 2, 3, 4, 5, [6, 7]]
```

## 3.4 기존 배열을 보존해야 할 때 유용하다

### **ES5 배열 요소를 역순으로 변경**

전개 연산자는 원본 배열을 그대로 유지하면서 새로운 배열을 만든다. 예를 들어 reverse 메소드는 배열의 각 요소를 역순으로 바꾸는 메소드인데, 기존 배열도 바꿔버리는 단점이 있다.

```jsx
const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();

console.log(arr1); // [3, 2, 1]
console.log(arr2); // [3, 2, 1]
```

원본 배열을 수정할 의도가 있었으면 문제가 되지 않지만, 원본 배열은 그대로 두고 배열 요소의 순서를 뒤집은 새로운 배열이 필요하다면 상황이 복잡해진다. 이 상황에서 전개 연산자를 사용하면 편리해진다.

### **ES6 배열 요소를 역순으로 변경**

```jsx
const arr1 = [1, 2, 3];
const arr2 = [...arr1].reverse();

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [3, 2, 1]
```

원본 배열은 그대로 유지하면서 새로운 배열을 만들었다.

## 3.5 배열의 나머지 요소를 할당할 수 있다

비구조화 할당과 전개 연산자를 사용하여 배열의 나머지 요소를 할당 받을 수 있다.

```jsx
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

변수 first과 second의 각각의 인덱스 값에 맞는 값이 차례로 들어가고(1, 2), rest에는 할당 받지 못한 나머지 값들이 대입된다.

[[출처] ****ES6 문법으로 다시 시작하는 자바스크립트|작성자 @Hudi****](https://hudi.blog/restart-js-with-es6/)

[[출처] [JavaScript] 전개 연산자 ( Spread Operator )|작성자 AJu](https://blog.naver.com/PostView.naver?blogId=zoz0312&logNo=221622159150&redirect=Dlog&widgetTypeCall=true&directAccess=false)

[[출처] ****전개 연산자(Spread Operator)|작성자 recordboy****](https://velog.io/@recordboy/%EC%A0%84%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90Spread-Operator)

## 3.6 전개연산자는 무조건 깊은 복사가 되는가?

전개 연산자의 경우 기본적으로 깊은 복사가 되지만  

객체 안에 또 다른 객체가 존재한다면 해당 객체에 대해서는 얕은 복사가 된다  

감싸고 있는 객체를 변경하면 업데이트 해버림(덮어 씌움)  

```jsx
// Object
const ellie = { name: "Ellie", age: 20, home: { address: "home" } };
const updated = {
  ...ellie,
  job: "s/w engineer",
};
ellie.home.address = "newhome";

console.log(ellie);
console.log(updated);
```

출력 결과

```jsx
{ name: 'Ellie', 
	age: 20, 
	home: { address: 'newhome' } 
}
{
  name: 'Ellie',
  age: 20,
  home: { address: 'newhome' },
  job: 's/w engineer'
}
```


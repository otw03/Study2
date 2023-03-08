# 08-배열
[js의 배열이란?](#js의-배열이란)  
[1. 배열의 이해](#1-배열의-이해)  
[-- 1.1 배열의 필요성](#11-배열의-필요성)  
[-- 1.2 배열 생성하기](#12-배열-생성하기)  
[-- 1.3 배열의 크기](#13-배열의-크기)  
[-- 1.4 배열의 원소에 접근하기](#14-배열의-원소에-접근하기)  
[-- 1.5 반복문을 통한 활용](#15-반복문을-통한-활용)  
[2. 2차 배열](#2-2차-배열)  
[-- 2.1 2차 배열 생성하기](#21-2차-배열-생성하기)  
[-- 2.2 2차 배열의 원소에 접근하기](#22-2차-배열의-원소에-접근하기)  
[-- 2.3 2차 배열의 행, 열 크기 구하기](#23-2차-배열의-행-열-크기-구하기)  
[-- 2.4 가변배열](#24-가변배열)  
[-- 2.5 2차 배열과 반복문](#25-2차-배열과-반복문)  

배열은 하나의 변수 안에 여러 개의 데이터를 **그룹화**해서 저장하는 Javascript의 가장 기본적인 **자료구조**

### JS의 배열이란?

- 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함
- 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
- 오브젝트와 유사하다
- 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다
- 이것을 보완하기 위해서 타입이 정해져 있는 타입 배열이 있다 ([Typed Collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#indexed_collections))

```jsx
array = Array.from({
    0: '안',
    1: '녕'
    length: 2,
});
console.log(array);
```

출력 결과

```jsx
[ '안', '녕' ]
```

# 1. 배열의 이해

## 1.1 배열의 필요성

학급의 성적표를 보고 각 학생별로 총점과 평균을 구해야 한다고 가정할 때,  

| 이름 | 국어  | 영어  | 수학 |
| --- | --- | --- | --- |
| 철수  | 92  | 81  | 77 |
| 영희  | 72  | 95  | 98 |
| 민혁  | 80  | 86  | 84 |

 성적표가 아래와 같다면 3명씩 3과목이므로 총 9개의 변수가 필요할 것이다.  

```jsx
var kor1 = 92;
var kor2 = 71;
var kor3 = 80;
// ... 생략 ...
var math2 = 84;
var math3 = 98;
```

만약 30명의 학생에 대한 20과목에 대한 점수라고 가정한다면 생성해야 하는 변수가 더 증가하므로 프로그램은 좀 더 복잡해질 것이다.  

배열은 이러한 경우를 해소하기 위한 자바스크립트 자료구조의 하나로, 변수에 여러 개의 데이터를 그룹화해서 저장해 놓은 상태를 말한다.  

---

## 1.2 배열 생성하기

### **배열의 선언**

Javascript는 변수의 특성이 값이 할당 될 때 결정되기 때문에 선언은 일반 변수와 동일하다.  

즉, 할당하기 전까지는 숫자, 문자열, 배열 등의 구분이 없다.  

배열을 저장할 빈 변수 선언  

```jsx
let myArr1;
```

### 배열의 할당

대괄호(`[]`)안에 포함할 값들을 데이터 타입의 구분 없이 콤마(`,`)로 구분하여 나열한다.  

선언과 할당이 나누어져 있는 경우 `const` 로 선언할 수 없다.  

배열의 할당  

```jsx
myArr1 = [1, 3.14, true, "hello"];
console.log(myArr1);
```

출력 결과  

```
[ 1, 3.14, true, 'hello' ]
```

### 선언과 할당의 통합

- 예시1)

```jsx
let myArr2 = [1, 3.14, true, "hello"];
console.log(myArr2);
```

출력 결과  

```
[ 1, 3.14, true, 'hello' ]
```

- 예시2)

```jsx
const len = myArr2.length;
console.log("배열의 원소 수=%d", len);
```

출력 결과  

```
배열의 원소 수=4
```

### 5라는 값을 원소로 갖는 한 칸으로 구성된 배열 만들기

```jsx
let myArr3 = [5];
console.log(myArr3);
```

출력 결과

```
[ 5 ]
```

### Array 클래스를 사용한 할당

`new Array(...)` 형식으로 생성한다.  

```jsx
let newArr1 = new Array("hello", "world", 1, 2, 3, true, false);
```

> 클래스는 아직 소개되지 않은 개념이므로 여기서는 명령어의 일종으로 받아들이시기 바랍니다.
> 

**Array 클래스 사용시 주의할 점**  

- `new Array()`로 배열을 생성할 때 `()`안에 숫자 값 하나만 명시되는 경우, 숫자 값 만큼의 빈 칸을 갖는 배열이 생성된다.  
배열의 각 칸은 모두 정의되지 않은 값(**undefined**)로 할당된다.
- `~~let newArr2 = new Array(10, 20, 30, …);` 의 경우 **앞의 숫자값 크기10만 적용**된다.~~

### 값이 존재하지 않는 5개의 빈 칸을 갖는 배열 만들기

```jsx
let myArr4 = new Array(5);
console.log(myArr4);
```

출력 결과  

```
[ <5 empty items> ]
```

---

## 1.3 배열의 크기

`배열이름.length`는 배열의 칸 수를 반환한다.  

**배열의 인덱스**는 **항상 0부터 크기-1까지 1씩 증가하면서 존재**한다.  

---

## 1.4 배열의 원소에 접근하기

### **인덱스 번호를 활용한 접근**

배열의 각 원소는 0부터 시작하는 일련번호를 부여 받는데, 이를 배열의 **인덱스** 라고 한다.  

배열의 원소에 접근할 때는 인덱스 번호를 활용하여 접근해야 한다.  

```jsx
let myArr = [1, 2, 3.14, true, false, "hello", "world"];
console.log(myArr[0]);
console.log(myArr[2]);
console.log(myArr[4]);
console.log(myArr[6]);
```

존재하지 않는 원소의 값을 출력하고자 할 경우, 정의되어 있지 않으므로 **undefined**가 된다.  

### 인덱스 번호를 활용한 개별 원소 접근

```jsx
let myArr1 = [1, 3.14, true, "hello"];
console.log("[0]=%d, [1]=%d, [2]=%s, [3]=%s", myArr1[0] , myArr1[1] , myArr1[2] , myArr1[3]);
```

출력 결과  

```
[0]=1, [1]=3.14, [2]=true, [3]=hello
```

### **구조분해**

- 배열의 각 원소를 새로운 변수 a, b, c에 나누어서 저장하기

```jsx
let myArr2 = [100,200,300];
const [a,b,c] = myArr2;
console.log("a=%d, b=%d, c=%d", a, b, c);
```

출력 결과

```
a=100, b=200, c=300
```

- 원소 수보다 선언된 변수가 적을 경우 정의된 변수까지만 저장되고 할당될 변수가 정의되지 않은 원소(여기서는 300)는 버려진다.

```jsx
let myArr3 = [100,200,300];
const [d, e] = myArr3;
console.log("d=%d, e=%d", d, e);
```

출력 결과  

```
d=100, e=200
```

- 원소 수보다 선언된 변수가 많을 경우 분리될 원소가 없는 변수(여기서는 i)는 undefined가 된다.

```jsx
let myArr4 = [100,200,300];
const [f, g, h, i] = myArr4;
```

출력결과

```
f=100, g=200, h=300, i=NaN
```

- **구조분해를 수행하고 나머지 원소를 별도의 배열에 저장**해야 할 경우 **`...`을 사용**한다.  
아래의 코드에서 a에 100이 저장되고 b에는 200이 저장된 후, rest는 [300,400,500]형태의 배열이 된다.

```jsx
let myArr5 = [100,200,300,400,500];
const [a, b, ...rest] = myArr2;
```

- **구조분해를 수행한 나머지를 별도로 분리**

```jsx
let [b1, b2, ...rest_b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1); // 1
console.log(b2); // 2
console.log(rest_b); // [3, 4, 5, 6, 7, 8, 9]
```

출력 결과  

```
1
2
[3, 4, 5, 6, 7, 8, 9]
```

### 존재하지 않는 원소에 대한 접근

- 100이라는 하나의 원소를 갖는 한 칸으로 구성된 배열

```jsx
let myArr = [100];
console.log(myArr);
```

출력 결과  

```
[ 100 ]
```

- 0번째 원소를 변수에 할당하고 출력 -> OK

```jsx
let item1 = myArr[0];
console.log(item1);
```

출력 결과

```
100
```

- 1번째 원소를 변수에 할당하고 출력 -> Fail  
myArr은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재함.

```jsx
let item2 = myArr[1];
console.log(item2);

if (item2 !== undefined) {
    console.log("1번째 원소 존재함");
} else {
    console.log("1번째 원소 존재하지 않음");
}
```

출력 결과  

```
undefined
1번째 원소 존재하지 않음
```

- 비구조 문법으로 값 복사하기

```jsx
let [x, y] = myArr;
console.log(x); // --> 100
console.log(y); // --> undefined
```

출력 결과  

```
100
undefined
```

- **존재하지 않는 원소의 값을 출력할 경우 undefined가 출력**된다.

```jsx
const myArr5 = [1,2,3];
console.log(myArr5[4]); // undeifned
```

- **존재하지 않는 원소를 활용하여 연산을 처리할 경우 undefined를 활용한 연산**이 되므로 그 **결과는 NaN**이 된다.

```jsx
const myArr5 = [1,2,3];
let a = myArr5[4] + 1; // NaN
```

- 아래 코드에서 **인덱스가 4인 원소가 생성**되고 **할당되지 않은 인덱스 3인 위치는 undefined**가 됨

```jsx
const myArr5 = [1,2,3];
myArr5[4] = 5;
```

---

## 1.5) 반복문을 통한 활용

### 1.5.1 기본 반복문의 활용

배열은 인덱스가 0부터 1씩 배열의 길이보다 작은 동안 순차적으로 증가한다는 특성이 있다.  

반복문의 초기식을 0으로, 조건식을 길이보다 작은 동안, 증감식을 1씩 증가로 설정한 반복문과 함께 사용하는 것이 일반적이다.  

이와 관련하여 다양한 예제 패턴들이 존재한다.  

### 기본 반복문

```jsx
// 5칸으로 구성된 빈 배열 생성
const myArr = new Array(5);
console.log(myArr);

// 배열의 길이
const len = myArr.length;

// 0부터 배열의 길이(5)보다 작은 동안 반복
// 0~4
for (let i=0; i<len; i++) {
    myArr[i] = i * 10;
}

console.log(myArr);
```

출력 결과  

```
[ <5 empty items> ]
[ 0, 10, 20, 30, 40 ]
```

### 1.5.2 `for~of`문

배열의 모든 원소를 순차적으로 탐색하여 선언된 변수에 자동 할당하는 반복문  

아래 문법에서 선언된 v에 myArr6의 모든 원소가 순차적으로 할당된다.  

이 반복문은 더 빠른 탐색 속도와 간결한 문법 표현을 제공하지만 현재 처리중인 원소에 대한 인덱스를 알 수는 없다.  

```jsx
const myArr6 = [1,2,3];
for (const v of myArr6) {
 ...
}
```

### For Of 반복문

```jsx
console.group("1차배열의 탐색");

const data = [ 4, 5, 2, 1, 3];
for(const item of data) {
    console.log(item);
}

console.groupEnd();
```

출력 결과  

```
1차배열의 탐색
  4
  5
  2
  1
  3
```

### 04-원소의_총합,평균.js

```jsx
const data = [ 10, 20, 30, 40, 50 ];

// 총 합을 구할 때는 항상 누적 합산을 수행할 변수를 0으로 초기화 해 놓고
// 반복을 수행해야 한다.
let sum = 0;

// 배열의 모든 원소에 대한 반복문 구성
for(let i=0; i<data.length; i++) {
    // i번째 원소를 sum에 누적 합산
    sum += data[i];
}

// For Of 반복문으로 바꿨을 때
/* 
for(let x of data) {
    sum += x; 
}
 */

console.log("data의 총합: %d", sum);

// 평균은 총 합을 원소의 길이로 나눈 값
const avg = sum / data.length;
console.log("data의 편균: %d", avg);
```

출력 결과  

```
data의 총합: 150
data의 편균: 30
```

### 05-최대값.js

```jsx
// 원소값을 무작위로 갖는 배열
const data = [ 5, 2, 7, 9, 2 ];

// 비교를 위해 배열의 첫 번째 원소를 복사
let max = data[0];

// 1번째 이후 원소부터 마지막 원소까지 반복
for(let i=1; i<data.length; i++) {
    console.log("max=%d, data[%d]=%d", max, i, data[i]);

    // max가 data의 i번째보다 작다면 i번째 원소를 max에 복사
    // 비교식의 부등호 방향만 반대로 지정하면 최소값을 구할 수 있다.
    if(max < data[i]) {
        console.log(">> max에 " + data[i] + "를 복사");
        max = data[i];
    }
}

console.log("---------");
console.log("최대값 = " + max);
```

출력 결과  

```
max=5, data[1]=2
max=5, data[2]=7
>> max에 7를 복사
max=7, data[3]=9
>> max에 9를 복사
max=9, data[4]=2
---------
최대값 = 9
```

### 06-역순배치.js

- [반복 횟수를 구하기 위한 연산]  
1. 원소가 5개일 경우 반복 횟수 : 2회  
    - 가운데를 버리고 4/2를 연산한다.  
    - 5/2를 연산한다. 연산 결과를  parseInt() 명령을 통해 나머지를 버릴 수 있다.  
2. 원소가 6개일 경우 반복 횟수 : 3회  
    - 6/2를 연산한다.  

=> 즉 배열의 길이/2 만큼 반복 처리

- [반대쪽 위치의 원소 구하기]  
=> 배열의 길이 - i - 1

```jsx
/**
[반복 횟수를 구하기 위한 연산]
1. 원소가 5개일 경우 반복 횟수 : 2회
    - 가운데를 버리고 4/2를 연산한다.
    - 5/2를 연산한다. 연산 결과를  parseInt() 명령을 통해 나머지를 버릴 수 있다.
2. 원소가 6개일 경우 반복 횟수 : 3회
    - 6/2를 연산한다.

=> 즉 배열의 길이/2 만큼 반복 처리

[반대쪽 위치의 원소 구하기]
=> 배열의 길이-i-1
*/

const data = [ 1, 5, 2, 4, 3 ];
console.log(data);

// 반복 횟수 -> 2나누고 소수점 
const p = data.length % 2 == 0 ? data.length / 2 : (data.length-1) / 2;
// const p = parseInt(data.length/2);

for(let i=0; i<p; i++) {
    // 반대쪽 원소의 위치
    const k = data.length - i - 1;

    // i번째 원소와 k번째 원소의 교환
    const tmp = data[i];
    data[i] = data[k];
    data[k] = tmp;
}

console.log(data);
```

출력 결과  

```
[ 1, 5, 2, 4, 3 ]
[ 3, 4, 2, 5, 1 ]
```

### 07-정렬.js

```jsx
/** 
 * 배열 순서대로 정렬하기
 */
const data = [ 3, 5, 1, 4, 2 ];
console.log(data);

// i는 배열의 원소중 마지막을 제외한 항목을 스캔한다.
for(let i=0; i<data.length-1; i++) {
    // j는 배열의 원소중 i번째 다음 원소부터 마지막 원소까지 스캔
    for(let j=i+1; j<data.length; j++) {

        // 부등호 방향 ">" : 오름차순(순차정렬)
        // 부등호 방향 "<" : 내림차순(역순정렬)
        if(data[i] > data[j]) {         // data[0] > data[2] => 3 > 1
            const tmp = data[i];        // tmp = 3
            data[i] = data[j];          // data[0] = 1
            data[j] = tmp;              // data[2] = 3
        }
        // [ 3, 5, 1, 4, 2 ]
        // [ 1, 5, 3, 4, 2 ]
        // [ 1, 5, 3, 4, 2 ]
        // [ 1, 5, 3, 4, 2 ]
        // [ 1, 3, 5, 4, 2 ]
        // [ 1, 3, 5, 4, 2 ]
        // [ 1, 2, 5, 4, 3 ]
        // [ 1, 2, 4, 5, 3 ]
        // [ 1, 2, 3, 5, 4 ]
        // [ 1, 2, 3, 4, 5 ]
    }
}

console.log(data);
```

출력 결과  

```
[ 3, 5, 1, 4, 2 ]
[ 1, 2, 3, 4, 5 ]
```

---

# 2. 2차 배열

1차 배열의 각 원소가 다른 배열로 구성된 형태.  

**열**의 개념만 존재하는 1차 배열에 **행**의 개념을 추가한 형태가 2차 배열 이다.  

## 2.1 2차 배열 생성하기

`[]`를 사용하여 1차원을 표현하고 그 안에 다시 `[]`를 콤마로 구분하여 2차원을 구성한다.  

```jsx
const myArr10 = [ [ ... ], [...] ]
```

### 다른 배열을 원소로 갖는 배열

```jsx
const a = [1, 2];
const b = [4, 5, 6, 7];
const myArr1 = [a, b];
console.log(myArr1);
```

출력 결과  

```
[ [ 1, 2 ], [ 4, 5, 6, 7 ] ]
```

## 2.2 2차 배열의 원소에 접근하기

2행 3열인 경우 행의 인덱스는 0부터 1까지, 열의 인덱스는 0부터 2까지 존재한다.  

배열에 저장된 원소에 접근하기 위해서는 변수이름 뒤에 행, 열의 순서로 인덱스를 명시한다.  

### 축약표현

2행 3열 배열 만들기  

```jsx
var myArr2 = [ [1, 2, 3], [4, 5, 6] ];
console.log(myArr2);
```

출력 결과  

```
[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
```

### 2차 배열의 원소 접근

행->열 순으로 인덱스를 열거한다.  

```jsx
console.log(myArr2[0][0]);  // --> 1
console.log(myArr2[0][1]);  // --> 2
console.log(myArr2[0][2]);  // --> 3
console.log(myArr2[1][0]);  // --> 4
console.log(myArr2[1][1]);  // --> 5
console.log(myArr2[1][2]);  // --> 6
```

### Array 클래스를 통한 2차 배열

```jsx
const c = new Array(10, 20, 30);
const d = new Array(50, 60, 70);
const myArr3 = new Array(c, d);
console.log(myArr3);

const myArr4 = new Array( new Array(10, 20, 30), new Array(50, 60, 70) );
console.log(myArr4);
```

출력 결과  

```
[ [ 10, 20, 30 ], [ 50, 60, 70 ] ]
[ [ 10, 20, 30 ], [ 50, 60, 70 ] ]
```

## 2.3 2차 배열의 행, 열 크기 구하기

### 행의 크기

2차 배열에 대한 길이를 직접 구하면 행의 크기를 알 수 있다.  

```jsx
const myArr = [ 
    [1, 2, 3], 
    [4, 5, 6] 
];

// 배열 자체의 길이는 행을 의미한다.
console.log(myArr.length);       // --> 2
```

### 열의 크기

2차 배열의 모든 행에 대한 열 크기가 항상 동일하다는 보장이 없기 때문에 열의 크기는 각 행마다 개별적으로 구해야 한다.  

```jsx
const myArr = [ 
    [1, 2, 3], 
    [4, 5, 6] 
];

// 배열의 각 행단위로 열을 조회할 수 있다.
console.log(myArr[0].length);       // --> 3
console.log(myArr[1].length);       // --> 3
```

## 2.4 가변배열

2차 배열의 정확한 개념은 1차 배열의 각 원소가 다른 배열로 구성된 형태이다.  

원소로서 포함되는 각 배열의 크기가 동일하지 않은 경우를 가변 배열이라고 한다.  

항상 배열의 모든 행이 동일한 열로 구성되는 것은 아니다. (모든 줄의 칸 수가 같다는 보장은 없다는 의미)  

> 가변배열이 자주 등장하는 것은 아니다. 95% 이상의 경우가 모든 행마다 열 크기가 동일한 경우이다.
> 

```jsx
const a = [1, 3, 5, 7, 9];
const b = [2, 4, 6];

const data = [a, b];
console.log(data);

for(let i=0; i<data.length; i++) {
    console.log(data[i]);

    for(let j=0; j<data[i].length; j++) {
        console.log(data[i][j]);
    }
}
```

출력 결과

```
[ [ 1, 3, 5, 7, 9 ], [ 2, 4, 6 ] ]
[ 1, 3, 5, 7, 9 ]
1
3
5
7
9
[ 2, 4, 6 ]
2
4
6
```

## 2.5 2차 배열과 반복문

### 배열의 모든 원소 스캔하기

2차 배열의 모든 원소를 반복문으로 스캔하기 위해서는 **중첩 반복문**을 사용해야 한다.  

이 때 부모 반복문은 **행**에 대해 관여하고, 자식 반복문은 **열**에 대해 관여한다.  

```jsx
// 2차 배열을 반복문으로 탐색할 때는 2중 반복문이 사용된다.
// 바깥의 반복문이 행을 담당
for(let i=0; i<myArr.length; i++) {
    console.group(i + "번째 행 ----------");
    console.log(myArr[i]);

    // 안쪽의 반복문은 i번째 행에 대한 열을 담당
    for(let j=0; j<myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
    console.groupEnd();
}
```

출력 결과  

```
0번째 행 ----------
  [ 1, 2, 3 ]
  1
  2
  3
1번째 행 ----------
  [ 4, 5, 6 ]
  4
  5
  6
```

### for-of문을 활용한 탐색

```jsx
console.group("2차배열의 탐색");

const myArr1 = [ 
    [1, 2, 3], 
    [4, 5, 6] 
];

for(const item of myArr1) {
    console.log(item);

    for(const sub of item) {
        console.log(sub);
    }
}

console.groupEnd();
```

출력 결과  

```
2차배열의 탐색
  [ 1, 2, 3 ]
  1
  2
  3
  [ 4, 5, 6 ]
  4
  5
  6
```

---

### 11-성적구하기.js

학생별 총점과 평균 구하기  

```jsx
/** 
학생별 총점과 평균 구하기

| 이름 | 국어 | 영어 | 수학 |
| 철수 |  92  |  81  |  76  |
| 영희 |  72  |  95  |  84  |
| 민혁 |  80  |  86  |  98  |
*/

// 학생 성적표 배열
const grade = [
    [ "철수", 92, 81, 76],
    [ "영희", 72, 95, 84],
    [ "민혁", 80, 86, 98]
];

// 이 위치에서 변수를 초기화 하면 모든 학생의 총점.
let sum = 0;

// 2차 배열 탐색
for(let i=0; i<grade.length; i++) {

    // 학생 한명을 의미하는 부모 반복문 안에서 변수를 초기화 하면 학생 개인별 총점
    let personal_sum = 0;

    // i번째 행에서 0번째 열은 학생 이름이므로 합산에서 제외한다.
    for(let j=1; j<grade[i].length; j++) {
        // console.log(grade[i][j]);
        sum += grade[i][j];
        // console.log(sum);
        personal_sum += grade[i][j];
        // console.log(personal_sum);
    }

    // 이름은 과목수에서 제외해야 하므로 "길이-1"
    const personal_avg = personal_sum / (grade[i].length-1);
    console.log("%s의 총점은 %d이고 평균은 %d입니다.", grade[i][0], personal_sum, personal_avg);
}

console.log("모든 학생의 총점은 %d입니다.", sum);
```

출력 결과  

```
철수의 총점은 249이고 평균은 83입니다.
영희의 총점은 251이고 평균은 83.66666666666667입니다.
민혁의 총점은 264이고 평균은 88입니다.
모든 학생의 총점은 764입니다.
```

---

### 12-순차적으로_증가하는_원소.js

이번달 달력 구하기  

```jsx
/** 
 * 6행 7열로 구성된 2차 배열을 준비하고,
 * 배열의 모든 칸에 1부터 순차적으로 증가하는 값을 할당하시오.
 * 단, i가 0일 때 j가 3보다 작다면 0을 대입하고 인덱스가 3인 위치부터 1씩 증가하는 값을 할당해야 합니다.
 * 또한 counter가 30보다 크다면 그 자리에는 0을 대신 할당해야 합니다.
 */

// 6행 7열의 빈 배열 만들기
var data = new Array(6);

for(let i=0; i<data.length; i++) {
    data[i] = new Array(7);
}

console.log(data);

// 1씩 증가할 값
let counter = 1;

for(let i=0; i<data.length; i++) {
    for(let j=0; j<data[i].length; j++) {
        if(i == 0 && j < 3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}

console.log(data);

/** 출력하기 */
// "\t" -> 탭키
// "\n" -> 줄바꿈
for(let i=0; i<data.length; i++) {
    let str = "";
    for(let j=0; j<data[i].length; j++) {
        if(data[i][j] == 0) {
            str += "\t";
        } else {
            str += data[i][j] + "\t";
        }
    }

    console.log(str);
}
```

출력 결과  

```
[
  [ <7 empty items> ],
  [ <7 empty items> ],
  [ <7 empty items> ],
  [ <7 empty items> ],
  [ <7 empty items> ],
  [ <7 empty items> ]
]
[
  [
    0, 0, 0, 1,
    2, 3, 4
  ],
  [
    5,  6,  7, 8,
    9, 10, 11
  ],
  [
    12, 13, 14, 15,
    16, 17, 18
  ],
  [
    19, 20, 21, 22,
    23, 24, 25
  ],
  [
    26, 27, 28, 29,
    30,  0,  0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0
  ]
]
			      1	  2	  3  	4	
5	  6	  7	  8	  9	  10	11	
12	13	14	15	16	17	18	
19	20	21	22	23	24	25	
26	27	28	29	30        
                          
```


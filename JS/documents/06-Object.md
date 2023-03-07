# 06-객체(Object)
[1. 객체(Object)란?](#1-객체란)  
[2. JSON 표기법으로 객체 정의하기](#2-json-표기법으로-객체-정의하기)  
[-- 2.1 변수들의 그룹으로서의 JSON](#21-변수들의-그룹으로서의-json)  
[-- 2.2 배열을 포함하는 JSON](#22-배열을-포함하는-json)  
[-- -- 2.2.1 다양한 데이터 타입을 포함하는 복합 자료 구조](#221-다양한-데이터-타입을-포함하는-복합-자료-구조)  
[-- -- 2.2.2 계층 구조](#222-계층-구조)  
[-- -- 2.2.3 목록 구조](#223-목록-구조)  
[3. JSON 구조의 확장](#3-json-구조의-확장)  
[-- 3.1 존재하지 않는 key를 사용하는 경우](#31-존재하지-않는-key를-사용하는-경우)  
[-- 3.2 존재하지 않는 key에 대한 대입](#32-존재하지-않는-key에-대한-대입)  
[-- 3.3 빈 객체 확장](#33-빈-객체-확장하기)  
[4. 참조복사](#4-참조복사)  
[-- 4.1 값복사 (=깊은복사)](#41-값복사-깊은복사)  
[-- 4.2 참조복사 (=얕은복사)](#42-참조복사-얕은복사)  
[-- 4.3 배열끼리의 값복사 방법 (=깊은복사)](#43-배열끼리의-값복사-방법-깊은복사)  
[-- 4.4 JSON의 깊은 복사](#44-json의-깊은-복사)  
[5. 구조분해 (비구조화 할당)](#5-구조분해-비구조화-할당)  
[-- 5.1 JSON](#51-json에-대한-구조분해-비구조-할당)  
[-- 5.2 배열](#52-배열에-대한-비구조-문법)  
[-- 5.3 구조분해의 활용](#53-구조분해의-활용)  
[6. 옵셔널체이닝](#6-옵셔널체이닝)  
[7. 생성자 함수](#7-생성자-함수)  

# 1. 객체(Object)란?

실제로 존재하는 것  

서로 연관 있는 속성(데이터)과 행동(함수)을 묶어 주기 위해 사용  

> 속성: 데이터(프로퍼티)  
행동: 함수(메소드)
> 

밀접하게 관련되어 있는 상태(변수, 데이터)와 행동(함수)을 객체로 묶어야 한다  

# 2. JSON 표기법으로 객체 정의하기

JSON은 `JavaScript Object Notation (자바스크립트 객체 표기법)`의 줄임말로서 Javascript에서 다양한 형태의 자료구조를 구성하기 위한 표기법이다.  

key와 value의 쌍으로 구성되는 data ⇒ 일반적인 프로그래밍 언어에서의 Map  

## 2.1 변수들의 그룹으로서의 JSON

하나의 변수에 하위 정보들이 포함되어 있는 변수들의 그룹으로 이해할 수 있다.  

```jsx
const 객체이름 = { 이름1: 값1, 이름2: 값2, ..., 이름n: 값n };
```

- key 이름을 지정하고 `콜론(:)`으로 구분지은 후 값을 명시한다.
- 두 개 이상의 데이터는 `콤마(,)`로 구분한다.
- 원칙적으로 key 이름은 따옴표로 감싸는 것이 맞지만 key 이름에 `띄어쓰기`나 `대시(-)`가 없는 경우는 **따옴표 처리를 생략해도 무관**하다.

### 변수들의 그룹으로서의 JSON 정의

key: value, key: value, ... 의 형식으로 나열  

숫자, boolean, null, undefined는 따옴표 적용 안 함  

```jsx
const student = {
    studno: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-1231-2342"
};
console.log(student);
```

출력 결과  

```
{ studno: 10101, grade: 1, name: '학생1', phoneno: '010-1231-2342' }
```

### 1) 각 데이터 출력하기

- 데이터에 접근하는 기본적인 방법은 객체이름.하위정보이름  
--> 90% 이상의 경우에서 이 방식이 사용됨.

```jsx
console.group("출력 type1");
console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);
console.groupEnd();
```

출력 결과  

```
출력 type1
  학번: 10101
  학년: 1
  이름: 학생1
  연락처: 010-1231-2342
```

- json의 key이름을 배열의 인덱스처럼 활용

```jsx
console.group("출력 type2");
console.log("학번: " + student['studno']);
console.log("학년: " + student['grade']);
console.log("이름: " + student['name']);
console.log("연락처: " + student['phoneno']);
console.groupEnd();
```

출력 결과  

```
출력 type2
  학번: 10101
  학년: 1
  이름: 학생1
  연락처: 010-1231-2342
```

### 2) 접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 할 경우 type2가 활용된다.

```jsx
const keyName = "phoneno";
console.log(student[keyName]);
```

출력 결과  

```
010-1231-2342
```

### 3) JSON 데이터 탐색하기 (1)

**`for of ⇒ 배열용`**  

**`for in ⇒ Json 용`**  

- json의 key를 배열로 반환하는 명령

```jsx
const keys = Object.getOwnPropertyNames(student);
console.log(keys);
```

출력 결과  

```
[ 'studno', 'grade', 'name', 'phoneno' ]
```

- 추출한 key이름은 배열이므로 반복문 처리가 가능하다.

```jsx
for(const k of keys) {
    console.group(k);
    // 추출된 key이름값(k)을 활용하여 실 데이터에 동적 접근 가능하다.
    console.log(student[k]);
    console.groupEnd();
}
```

출력 결과  

```
studno
  10101
grade
  1
name
  학생1
phoneno
  010-1231-2342
```

### 3) JSON 데이터 탐색하기 (2)

- JSON객체의 key를 선언된 변수(k)에 순차적으로 할당하며 모든 key를 탐색한다.

```jsx
for(const k in student) {
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
}
```

출력 결과  

```
studno
  10101
grade
  1
name
  학생1
phoneno
  010-1231-2342
```

## 2.2 배열을 포함하는 JSON

JSON의 값에는 지금까지 다룬 모든 형태의 데이터 타입이 지정될 수 있다.  

```jsx
const 객체이름 = { 이름1: 숫자, 이름2: 문자열, ..., 이름n: [값1, 값2, 값3 ... 값n] };
console.log(객체이름.이름n[0]);
```

## 2.2.1 다양한 데이터 타입을 포함하는 복합 자료 구조

```jsx
const company = {
    name : "(주)굿모닝컴페니",
    since : 2013,
    department : ["기획팀", "디자인팀", "개발팀"]
};
```

### JSON 데이터에 접근하는 방법(점으로 연결 혹은 배열처럼 접근)  
점을 통한 접근을 권장.

```jsx
console.log(company.name);              // 점으로 연결
console.log(company['since']);          // 배열처럼 연결
console.log(company.department[0]);     // 점으로 연결
console.log(company.department[1]);     // 점으로 연결
console.log(company['department'][2]);  // 배열처럼 연결
```

출력 결과  

```
(주)굿모닝컴페니
2013
기획팀
디자인팀
개발팀
```

## 2.2.2 계층 구조

JSON 표기법의 장점은 복잡한 정보 구조를 계층화 하여 표현할 수 있다는 것이다.  

```jsx
const json1 = { ... };
const json2 = { ... };
const json3 = {
	 data1: json1,
	 data2: json2
};
```

### 1) 다른 JSON 객체를 value로 포함하는 경우

```jsx
// 단일 형태의 JSON
var centerPoint = {
    x: 5,                   // x좌표
    y: 10                   // y좌표
};

// 다른 JSON을 포함하는 JSON
var circle1 = { 
    center: centerPoint,    // 중심의 좌효
    radius: 5.10            // 반지름
};

console.group("circle1");
console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: %d", circle1.radius);
console.groupEnd();
```

출력 결과  

```
circle1
  원의 중점: (5, 10)
  원의 반지름: 5.1
```

---

단일 형태의 JSON 구조를 별도로 참조하는 것이 아니라 직접 정의하는 패턴  

```jsx
const myjson = {
	 data1: {
	 ...
	 },
	 data2: {
	 ...
		 }
};
```

### 2) 계층적으로 정의된 경우

```jsx
var circle2 = {
    center: {
        x: 5,               // x좌표
        y: 10               // y좌표
    }, 
    radius: 5.10            // 반지름
};

console.group("circle2");
console.log("원의 중점: (%d, %d)", circle2.center.x, circle2.center.y);
console.log("원의 반지름: %d", circle2.radius);
console.groupEnd();
```

출력 결과  

```
circle2
  원의 중점: (5, 10)
  원의 반지름: 5.1
```

---

## 2.2.3 목록 구조

JSON의 value가 배열로 정의되어 있으면서, 각 배열의 원소가 또 다른 JSON 형식인 경우.  

단, 이 경우 배열의 원소로 포함되는 JSON 끼리는 동일한 구조를 갖는다.  

```jsx
const 객체이름 = {
	 key : [ {
	 key: value, key: value...
	 }, {
	 key: value, key: value...
	 }, {
	 key: value, key: value...
	 }, {
	 key: value, key: value...
	 } ]
}
```

### 목록의 아이템으로 사용될 JSON 객체 정의하기

```jsx
const student1 = {
    studno: 10101,
    grade: 1,
    name: "학생1"
};

const student2 = {
    studno: 20202,
    grade: 2,
    name: "학생2"
};
```

### 목록 구조를 갖는 JSON 객체

```jsx
const classRoom = {
    student: [student1, student2]
};

console.log(classRoom);
```

출력 결과  

```
{
  student: [
    { studno: 10101, grade: 1, name: '학생1' },
    { studno: 20202, grade: 2, name: '학생2' }
  ]
}
```

### 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다.

```jsx
for(let i=0; i<classRoom.student.length; i++) {
    console.group(i + "번째 학생");
    console.log(" >> 학번: " + classRoom.student[i].studno);
    console.log(" >> 학년: " + classRoom.student[i].grade);
    console.log(" >> 이름: " + classRoom.student[i].name);
    console.groupEnd();
}
```

출력 결과  

```
0번째 학생
   >> 학번: 10101
   >> 학년: 1
   >> 이름: 학생1
1번째 학생
   >> 학번: 20202
   >> 학년: 2
   >> 이름: 학생2
```

### for~of문

for~of을 사용할 경우 몇 번째 항목인지를 알기 위해서는 반복문 시작전에  

별도의 초기식과 반복문 안에 별도의 증감식을 추가해야 한다.  

```jsx
let i =0;   // 초기식
for(const s of classRoom.student) {
    // s 는 위의 classRoom.student[i] 와 같다
    console.group(i + "번째 학생");
    console.log(" >> 학번: " + s.studno);
    console.log(" >> 학년: " + s.grade);
    console.log(" >> 이름: " + s.name);
    console.groupEnd();
    i++;
}
```

출력 결과  

```
0번째 학생
   >> 학번: 10101
   >> 학년: 1
   >> 이름: 학생1
1번째 학생
   >> 학번: 20202
   >> 학년: 2
   >> 이름: 학생2
```

### 배열의 원소로서 JSON 구조를 직접 명시하기

```jsx
const classRoom = {
    student: [{
        studno: 10101,
        grade: 1,
        name: "학생1"
    }, {
        studno: 20202,
        grade: 2,
        name: "학생2"
    }]
};

for(let i=0; i<classRoom.student.length; i++) {
    console.group(i + "번째 학생");
    console.log(" >> 학번: " + classRoom.student[i].studno);
    console.log(" >> 학년: " + classRoom.student[i].grade);
    console.log(" >> 이름: " + classRoom.student[i].name);
    console.groupEnd();
}

console.log("-----------------------------");

let i =0;   // 초기식
for(const s of classRoom.student) {
    // s 는 위의 classRoom.student[i] 와 같다
    console.group(i + "번째 학생");
    console.log(" >> 학번: " + s.studno);   
    console.log(" >> 학년: " + s.grade);
    console.log(" >> 이름: " + s.name);
    console.groupEnd();
    i++;
}
```

출력 결과  

```
0번째 학생
   >> 학번: 10101
   >> 학년: 1
   >> 이름: 학생1
1번째 학생
   >> 학번: 20202
   >> 학년: 2
   >> 이름: 학생2
-----------------------------
0번째 학생
   >> 학번: 10101
   >> 학년: 1
   >> 이름: 학생1
1번째 학생
   >> 학번: 20202
   >> 학년: 2
   >> 이름: 학생2
```

### 가장 일반적인 형태의 목록 구조

목록을 구성하는 배열 외에 목록을 설명하기 위한 부가 정보도 함께 포함  

```jsx
const bbs = {
    title: "공지사항",
    count: 4,
    item: [
        {id: 1, subject: "첫 번째 게시물 제목"},
        {id: 2, subject: "두 번째 게시물 제목"},
        {id: 3, subject: "세 번째 게시물 제목"},
        {id: 4, subject: "네 번째 게시물 제목"}
    ]
}

console.log("게시판이름: " + bbs.title);
console.log("전체 게시물 수: " + bbs.count);

// 일반 for문
console.group("일반 for문");
for(let i=0; i<bbs.item.length; i++) {
    console.log("[" + bbs.item[i].id + "] " + bbs.item[i].subject);
}
console.groupEnd();

// for~of문
console.group("for~of문");
for(let k of bbs.item) {
    console.log("[" + k.id + "] " + k.subject);
}
console.groupEnd();
```

출력 결과  

```
게시판이름: 공지사항
전체 게시물 수: 4
일반 for문
  [1] 첫 번째 게시물 제목
  [2] 두 번째 게시물 제목
  [3] 세 번째 게시물 제목
  [4] 네 번째 게시물 제목
for~of문
  [1] 첫 번째 게시물 제목
  [2] 두 번째 게시물 제목
  [3] 세 번째 게시물 제목
  [4] 네 번째 게시물 제목
```

---

# 3. JSON 구조의 확장

## 3.1 존재하지 않는 key를 사용하는 경우

존재하지 않는 key에 대해 출력하거나 다른 변수에 대입할 경우 `undefined`로 처리된다.  

```jsx
const foo ={
    name: "자바스크립트",
    age: 19
};

// 존재하지 않는 값에 대한 출력 --> undefined
console.log(foo.email);
```

출력 결과  

```
undefined
```

### 존재하지 않는 값을 활용한 연산 (age를 aga로 오타가 났다고 가정)

--> `undefined + 1` --> 숫자가 아닌 결과값이 되므로 Not A Number를 의미하는 `NaN`이 출력 됨  

```jsx
const nextAge = foo.aga + 1;
console.log(nextAge);     // NaN
```

출력 결과  

```
NaN
```

## 3.2 존재하지 않는 key에 대한 대입

그 즉시 객체가 확장된다.  

```jsx
foo.email = "hello@world.com";
console.log(foo);
```

출력 결과  

```
{ name: '자바스크립트', age: 19, email: 'hello@world.com' }
```

## 3.3 빈 객체 확장하기

```jsx
const myJson = {};  // 빈 객체
console.log(myJson);

for(let i=0; i<10; i++) {
    const key = "value" + i;
		// console.log(key);           // value0~value9
    myJson[key] = i * 100;
		// console.log(myJson[key]);   // 0~900
}
console.log(myJson);
```

출력 결과  

```
{}
{
  value0: 0,
  value1: 100,
  value2: 200,
  value3: 300,
  value4: 400,
  value5: 500,
  value6: 600,
  value7: 700,
  value8: 800,
  value9: 900
}
```

---

# 4. 참조복사

## 4.1 값복사 (=깊은복사)

### --> 일반 변수끼리의 복사

```jsx
let a = 100;
let b = a;
console.log("a=" + a + ", b=" + b);
```

출력 결과  

```
a=100, b=100
```

### 일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다.

```jsx
a++;
console.log("a=" + a + ", b=" + b);
```

출력 결과  

```
a=101, b=100
```

## 4.2 참조복사 (=얕은복사)

- 배열, JSON, 객체 끼리의 복사는 참조처리된다.
- 원본을 수정하면 복사본도 함께 수정된다. (반대의 경우도 마찬가지)

```jsx
const user = {
    name: "Lee"
};

const member = user;
console.log(user);
console.log(member);

member.name = "Kim"
console.log(user);
console.log(member);

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);
```

출력 결과  

```
{ name: 'Lee' }
{ name: 'Lee' }
{ name: 'Kim' }
{ name: 'Kim' }
[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 11, 12, 13 ]
[ 11, 12, 13 ]
```

## 4.3 배열끼리의 값복사 방법 (=깊은복사)

- 원본과 동일한 길이를 갖는 배열을 생성
- 배열을 온전히 값복사하기 위해서는 원소끼리 개별복사 해야 함
- 배열객체가 갖는 메서드를 활용한 깊은 복사 방법  
--> const 새로운 변수 = 원본배열.slice();

```jsx
const a1 = [1, 2, 3];

// 원본과 동일한 길이를 갖는 배열을 생성
const a2 = new Array(a1.length);

// 배열을 온전히 값복사하기 위해서는 원소끼리 개별복사 해야 함
for(let i=0; i<a1.length; i++) {
    a2[i] = a1[i];
}

// 배열객체가 갖는 메서드를 활용한 깊은 복사 방법
// --> const 새로운 변수 = 원본배열.slice();
const a3 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

console.log(a1);
console.log(a2);
console.log(a3);
```

출력 결과  

```
[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 101, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 2, 3 ]
```

### 2차 배열의 참조복사 설명 사진

```jsx
let k = [ [1, 2], [3, 4] ];
k[0][1] = 100;
// k = [ [1, 100], [3, 4] ]
```

![2차 배열의 참조복사 설명 사진](../images/07-JSON/2차 배열의 참조복사 설명 사진.PNG)

![2차 배열의 참조복사 설명 사진.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/18de8715-a332-4f58-907a-ceb2ed8cba9d/2%EC%B0%A8_%EB%B0%B0%EC%97%B4%EC%9D%98_%EC%B0%B8%EC%A1%B0%EB%B3%B5%EC%82%AC_%EC%84%A4%EB%AA%85_%EC%82%AC%EC%A7%84.png)

## 4.4 JSON의 깊은 복사

- 깊은 복사를 수행할 빈 JSON객체를 생성
- 반복으로 개별 복사 ⇒ copy.city와 copy.gu와 동일한 처리

```jsx
const addr = {
    city: '서울',
    gu: '서초'
};

// 깊은 복사를 수행할 빈 JSON객체를 생성
const copy = {};

for(let key in addr) {
    // copy.city와 copy.gu와 동일한 처리
    copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = '강남'

console.log(addr);
console.log(copy);
```

출력 결과  

```
{ city: '서울', gu: '서초' }
{ city: '서울', gu: '서초' }
{ city: '서울', gu: '강남' }
{ city: '서울', gu: '서초' }
```

### JS가 제공하는 기능 활용하기

- addr을 copy2에 깊은 복사 수행하는 JS내장기능
- 복사될 copy2가 비어있는 json일 경우 복사.
- copy2가 비어있지 않으면 누적

```jsx
const copy2 = {};

Object.assign(copy2, addr);
console.log(copy2);       // 위에서 addr.gu = '강남' 로 addr가 변경되어 있다.
```

출력 결과  

```
{ city: '서울', gu: '강남' }
```

> **두 가지 방법으로는 계층구조(배열이 들어있는 경우 배열은 참조복사 됨)에 대한 커버가 불가능하다.**
> 

---

# 5. 구조분해

## 5.1 JSON에 대한 구조분해 (=비구조 할당)

### JSON(혹은 객체)에서 필요한 값만 추출하여 새로운 상수로 만들어 줌  
→ **object에는 {}안에 명시된 항목과 동일한 key를 갖는 데이터가 존재해야 함.**

```jsx
const object = { a: 1, b: 2, c: 3};

const {a, b, c} = object;

console.log(a);
console.log(b);
console.log(c);
```

출력 결과  

```
1
2
3
```

## 5.2 배열에 대한 비구조 문법

### 순서대로 원소를 분리함.  
변수 이름은 개발자가 정할 수 있음.

```jsx
const arr = [100, 200];

const [x, y] = arr;
console.log(x); // 100
console.log(y); // 200
```

출력 결과  

```
100
200
```

## 5.3 구조분해의 활용

## 1) 구조 분해를 활용하여 필요한 데이터만 추출하기

```jsx
const data = { name: "hello", age: 20, height: 172, weight: 85};
const {name} = data;
console.log(name);
```

출력 결과  

```
hello
```

### data안에 있는 height와 weight를 분해하면서 이름을 h와 w로 변경

```jsx
const {height: h, weight: w} = data;
console.log(h);
console.log(w);
console.log(data);
```

출력 결과  

```
172
85
{ name: 'hello', age: 20, height: 172, weight: 85 }
```

## 2) 구조분해를 수행한 나머지를 별도로 분리하기  
--> `rest_b`라는 것은 단순한 변수 이름이므로 어떤 단어를 사용해도 무관

```jsx
const dummy = { a1: 100, a2: 200, a3: 300, a4: 400};
const {a1, a2, ...rest_b} = dummy;
console.log(a1);
console.log(a2);
console.log(rest_b);
console.log(rest_b.a3);
```

출력 결과  

```
100
200
{ a3: 300, a4: 400 }
300
```

## 3) 구조분해를 활용하여 기존 데이터와 추가적인 값을 병합한 새로운 객체 생성  
--> `...`뒤에 오는 변수명은 반드시 원본 객체 이름이어야 한다.

```jsx
const origin = {name: "javascript", age: 25};
const newdata1 = {...origin, gender: 'M'};
console.log(newdata1);
```

출력 결과  

```
{ name: 'javascript', age: 25, gender: 'M' }
```

## 4) 구조분해를 통한 새로운 데이터 생성시 원본과 동일한 이름의 속성이 있다면 원본 데이터를 수정한다.

```jsx
const newdata2 = {...origin, age: 30, gender: 'F'};
console.log(newdata2);
```

출력 결과  

```
{ name: 'javascript', age: 30, gender: 'F' }
```

---

# 6. 옵셔널체이닝

- JS에 추가된지 얼마 되지 않은 문법이므로 IE는 지원하지 않음

### ES5에서 존재하지 않는 key 혹은 멤버변수에 접근하는 경우

예시1) 

```jsx
const user = {};

// user안에 address가 정의되지 않았으므로 undefined
console.log(user.address);
```

출력 결과  

```
undefined
```

예시2) 

```jsx
// address자체가 정의되지 않은 상태에서 하위 기능에 접근하므로 에러
console.log(user.address.city);
```

출력 결과  

```
TypeError: Cannot read properties of undefined (reading 'city') // 에러
```

## ES5의 해결책 --> 단계별로 객체가 존재하는지 검사

### 논리 연산에서 true가 되는 것

- 0이 아닌 모든 수
- 한 글자라도 포함된 문자열
- 하나라도 원소가 포함된 배열

### 객체또한 하나라도 프로퍼티를 가지고 있으면 true

```jsx
console.log(user && user.address && user.address.city);
```

출력 결과  

```
undefined
```

## ES6의 새로운 방법

- "객체이름?"는 해당 객체가 undefined나 null이면 평가를 중지하고 undefined를 반환한다.
- 옵셔널 체이닝은 존재하지 않아도 괜찮은 대상에게만 사용하고
- 반드시 존재해야하는 개체에게는 if문으로 존재 여부를 검사하는 유효성 검사를 수행하는 것이 좋다.

```jsx
console.log(user?.address?.city);

console.log("프로그램 종료~!!");
```

출력 결과  

```
undefined
프로그램 종료~!!
```

# 7. 생성자 함수

유사한 객체를 여러 개 만들어야 할 때 사용  

복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우  

### 생성자 함수 사용법

1. 함수 이름의 첫 글자는 대문자로 시작합니다.  
2. 반드시 `'new'` 연산자를 붙여 실행합니다.  

```jsx
// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능 this가 암시적으로 반환됨
}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
console.log(orange.name);
console.log(orange.emoji);
apple.display();
orange.display();
```

출력 결과

```
Fruit { name: 'apple', emoji: '사과', display: [Function (anonymous)] }
Fruit { name: 'orange', emoji: '오렌지', display: [Function (anonymous)] }
apple
사과
orange
오렌지
apple: 사과
orange: 오렌지
```
# 02-변수
[1. 메모리](#1-메모리)  
[-- 1.1 메모리](#11-메모리)  
[-- 1.2 메모리 영역](#12-메모리-영역)  
[2. 변수와 상수](#2-변수와-상수)  
[-- 2.1 전역 변수](#21-전역-변수)  
[-- 2.2 지역변수](#22-지역변수)  
[-- 2.3 상수](#23-상수)  
[-- -- let과 const의 차이](#let과-const의-차이)  
[-- 2.4 변수의 자료형 (데이터 타입)](#24-변수의-자료형-데이터-타입)  
[-- 2.5 형식문자(Format Character)](#25-형식문자format-character)  
[-- 2.6 변수 출력하기](#26-변수-출력하기)  

# 1. 메모리
컴퓨터에서 정보를 처리하기 위해 일시적으로 정보를 보관하는 기억장치   
## 1.1 메모리

메모리 → 저장장치  

1) 휘발성 메모리 : 전원이 off 되면 저장된 데이터가 모두 날라감, 속도 매우 빠름 → RAM  

2) 영구적 메모리 : 직접 삭제하지 않는 이상 영구적으로 저장함. 속도 느림 → HDD, USB …  

---

- 프로그램 실행

HDD안에 저장되어 있는 실행파일을 더블클릭 → RAM에 복사된다 → CPU가 RAM에 저장된 프로그램을 가동한다.  

- 영화, 사진, 문서 등의 파일을 열 경우

HDD안에 저장되어 파일이 RAM에 복사된 후 읽혀진다.  

---

- (전)도체 : 전기가 통하는 물질
- 부도체 : 전기가 통하지 않는 물질
- 반도체 : 열이나 전기를 가했을 때 전기가 흐르거나 흐르지 않도록 특성을 바꿀 수 있는 물질

컴퓨터에서는 메모리 한 칸에 전기가 흐르거나 흐르지 않게 한다.  

**`n bit`** ⇒ `2**n(**2의 n제곱**)` 표현 가능  

(컴퓨터)메모리 한 칸 = 1bit(비트)  ⇒ 0, 1  

2bit ⇒ 00, 01, 10, 11  

3bit ⇒ 000, 001, 010, 100, … , 111  

- 이러한 정보를 표현하기 위한 것을 ANSI로 정함

7bit → ANSI  

- ANSI는 영어권만. 다른 국가 표준으로 만들기 위해 +1bit한 **확장 ANSI**

+1bit → **`8bit`** → **`확장 ANSI`**

**`1byte`** ⇒ 8bit ⇒ **`2진수 8개`** ⇒ **256가지**(**2**8**)의 정보 표현 가능  

자바(JAVA)의 경우 → 0~255 → -128~127  

- 컴퓨터 용량 단위

```markdown
8bit → 1byte

1024byte → kbyte
1024kb → 1mb
1024gb → 1tb
1024gb → 1tb
1024tb → 1pb
1024pb → 1eb
1024eb → 1zb
1024zb → 1yb
```

---

10100010 10100010 10100010 10100010 ….  

10100010 ⇒ byte 단위  

2진수들을 몇 칸씩 쪼개서 읽을지 정한 것 = DATA TYPE = 변수  

**`4칸(4바이트)`** = **`정수`**  

8칸 = 실수  

[데이터 타입 링크](https://opentutorials.org/course/1223/5375) 생활코딩

---

## 1.2 메모리 영역

코드영역, 데이터영역, 힙영역, 스택영역 으로 이루어져 있다  

- 코드영역 : 실행할 프로그램 코드
- 데이터영역 : 프로그램의 시작과 함께 할당되며 프로그램이 종료되면 소멸.  
전역변수, 정적변수(static)
- 스택영역 : 컴파일 타임에 크기 결정. 지역변수가 저장되고 함수가 종료되면 할당되었던 영역이 사라진다.
- 힙영역 : 사용자에 의해 메모리 공간이 동적으로 할당되고 해제. 런타임에 크기 결정. 복잡한 데이터, 객체

# 2. 변수와 상수

## 변수란?

**데이터를 저장할 수 있는 메모리 상의 공간**.  

변수 값은 프로그램 전체에서 변경되거나 업데이트될 수 있습니다. 변수는 Javascript에서 `let`, `const`  또는 `var` 키워드를 사용하여 선언됩니다.  

# 2.1 전역 변수

프로그램의 어느 곳에서나 식별할 수 있는 변수를 의미

## 2.1.1 변수의 선언과 할당

### 변수의 선언

- 컴퓨터 메모리(RAM)상에 데이터를 기록하기 위해 공간을 예약하고 그 공간을 식별할 수 있는 이름을 지정하는 처리로 이해할 수 있다.
  > 선언 : 변수의 이름을 정의,자료형의 크기만큼 메모리 공간 확보
- 변수 이름 앞에 `var` 키워드를 명시하고 변수 이름을 지정
- 하나의 구문은 세미콜론으로 끝나야 함.

```jsx
var 변수 이름;
```

### 값의 할당

- 선언된 변수에 대입연산자 `=` 를 사용하여 값을 대입하는 처리를 **할당**이라고 한다.
  > 할당 : 메모리 공간에 값을 부여하는 것
- 항상 **오른쪽에서 왼쪽으로 대입**

```jsx
변수이름 = 값;
```

js는 처음 변수 할당없이 선언만 하면 1byte공간만 할당된다.  

**js는 변수의 종류가 변수에 할당할 때 결정** 된다.  

랜덤한 공간에 값이 할당된다.(Random Access Memory)  

그렇기 때문에 **`js는 값을 참조`**(C언어의 포인터)한다.  

## 2.1.2) 선언과 할당의 통합

- 변수를 선언하면서 대입 연산자를 활용하여 값의 할당까지 한 라인에서 처리한다.

```jsx
var 변수 이름 = 값;
```

## 2.1.3 변수값 변경하기

- 한 번 값이 할당된 변수는 다른 값으로도 새롭게 할당 가능

```jsx
var num = 100;
num = 200;
```

## 2.1.4) 변수이름 규칙

1. 영어, 숫자, 언더바(_), $ 기호만 사용할 수 있다.  
2. 첫 글자는 숫자로 시작할 수 없다.  
    
    > 일반적으로 영어 소문자로 시작한다.
    > 
3. 두 개 이상의 단어를 결합하여 이름을 지정하는 경우  
    
    1.  **스네이크 표기법**: 띄어쓰기가 필요한 위치에서 언더바(_)를 사용
    
    - 변수를 정의할 때는 잘 사용되지 않는다.
        
        > home + work ==> home_work
        > 
    
    2.  카멜 표기법: 띄어쓰기가 필요한 위치의 첫 글자를 대문자로 변경.  
    
    - **변수** 정의할 때를 포함하여 거의 대부분의 경우 일반적으로 사용한다.
        
        > home + work ==> homeWork
        > 

## 2.1.5) 변수의 재선언

- `var` 키워드를 사용하여 선언된 변수는 **중복 선언**이 가능
- 이후 뒤에서 공부할 **변수의 스코프(유효성 범위)** 도 무시된다.
- **이러한 특성은 JS를 제외한 모든 프로그래밍 언어들의 규칙에는 위배되는 사항이므로 가급적 사용하지 않는 것이 좋다.**

> var 키워드를 사용을 자제하는 것이 좋다.
> 
- 01-전역변수.js 실습

```jsx
"use strict";

/* 1) 변수의 선언과 할당 */
// 변수 선언
var myNumber1;
// 할당
myNumber1 = 100;
console.log(myNumber1);

/* 2) 변수의 선언과 할당 통합 */
var myNumber2 = 123;
console.log(myNumber2);

/* 3) 변수값 변경하기 */
// 한번 만들어진 변수는 다른 값으로 교체 가능
myNumber2 = 456;
console.log(myNumber2);

/* 4) 변수의 재선언 */
// 원칙적으로 한번 선언한 변수는 재선언이 불가능함
// JS의 전역변수는 재선언이 가능.
// 이는 일반적인 프로그래밍 언어의 규칙에 위배되므로 전역변수를 위한 'var' 키워드의 사용은 권장되지 않는다
var myNumber3 = 300;
console.log(myNumber3);

// 동일한 변수 재선언
var myNumber3 = 789;
console.log(myNumber3);
```

---

# 2.2 지역변수

- ES6 버전에서 새로 추가된 변수 생성 방법.
- 대부분의 프로그래밍 언어에서 말하는 일반적인 변수의 생성 규칙을 따른다.

> 적극 사용을 권장함.
> 

## 2.2.1) 변수 선언, 할당

### 선언

- `let` 키워드를 사용하여 선언한다.

```jsx
let 변수이름;
```

### 할당

- `var` 키워드를 사용한 전역 변수의 경우와 동일하다.

```jsx
변수이름 = 값;
```

## 2.2.2) 선언과 할당의 통합

- `var` 키워드의 경우와 동일한 규칙으로 선언과 할당을 한 행에 축약할 수 있다.

```jsx
let 변수이름 = 값;
```

## 2.2.3) 중복 선언 금지

- `let` 키워드를 사용하여 선언된 변수는 중복 선언 불가능.
- `let` 키워드를 통해 생성된 변수는 일반적인 프로그래밍 언어의 규칙을 모두 따른다.

- 02-지역변수.js 실습

```jsx
"use strict";

/* 1) 선언, 할당 */
// 선언
let myNumber1;
// 할당
myNumber1 = 100;
console.log(myNumber1);

/* 2) 선언, 할당 통합 */
let myNumber2 = 200;
console.log(myNumber2);

/* 3) 중복 선언 금지 */
let myNumber3 =1;
console.log(myNumber3);

// 앞에서 이미 선언된 변수이므로 에러 발생함.
let myNumber3 = 2;
console.log(myNumber3);
```

---

# 2.3 상수

- 최초로 값을 할당한 이후 값을 재할당할 수 없는 형태. (=읽기전용)
  > object 객체가 할당된 경우 재할당은 불가능하지만 변경은 가능하다.
- `const` 키워드를 사용
- **선언과 동시에 값이 할당**되어야 함.
- 상수의 이름은 대문자만으로 구성된 스네이크 표기법을 사용하여 생성하는 것이 일반적.

- 03-상수.js 실습

```jsx
"use strict";

/* 상수 */
const MY_VALUE1 = 123;
console.log(MY_VALUE1);

MY_VALUE1 = 234; // const로 선언된 변수이므로 값을 변경할 수 없다.(에러)
```
## let과 const의 차이

|  | 재할당 | 변경 |
| --- | --- | --- |
| let | 가능 | 가능 |
| const | 불가능 | 가능 |

---

# 2.4 변수의 자료형 (데이터 타입)

## 2.4.1) 변수에 저장할 수 있는 값의 종류

자바스크립트의 데이터 타입은 변수에 값을 할당(대입)할 때 결정된다.

| 타입  | 설명 |
| --- | --- |
| number  | 정수와 실수를 포함하는 모든 숫자 형태
 |
| string  | 문자열. 쌍따옴표나 홑따옴표의 쌍으로 감싼 모든 형식의 데이터
 |
| boolean |  논리형. true(참) 혹은 false(거짓)
 |
| object  | 객체. 함수(Function), 배열 (Array), 날짜 (Date), 정규식 (RegExp) 등을 포함한다
 |
| null  | object 형의 한 종류. 나중에 할당하기 위해 임의로 비워 놓은 상태를 의미하는 특수한 값.
 |
| undefined |  정의되지 않음. 선언만 하고 값이 할당되지 않은 상태 |

## 2.4.2) 변수의 자료형 확인하기

- `typeof` 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환한다.

```jsx
let a = 100;
console.log(typeof a);
```

- 04-데이터타입.js 실습

```jsx
"use strict";

/* 1) 지금 바로 익혀야 하는 데이터 타입 */
// Number
let sampleValue1 = 123;
console.log(typeof sampleValue1);

// Boolean, 논리값 (true(참), false((거짓)만 표현 가능)
let sampleValue2 = true;
console.log(typeof sampleValue2);

// 쌍, 홑 따옴표로 감싼 경우 문자열(문장, 글자의 집합)로 인식
let sampleValue3 = "hello world";
console.log(typeof sampleValue3);

/* 2) 시간을 두고 천천히 익혀야 하는 데이터 타입 */
// 객체 (Object)
let sampleValue4 = new Date();
console.log(typeof sampleValue4);

// null -> 비어있는 (=아무런 기능이 없는 상태) 
let sampleValue5 = null;
console.log(typeof sampleValue5);

// 선언만 하고 값이 정의되지 않은 상태 (undefined)
let sampleValue6;
console.log(typeof sampleValue6);
```

# 2.5 형식문자(Format Character)

**데이터를 입/출력 할 때, 컴퓨터가 그 Type을 인식할 수 있도록, 데이터의 해석을 지시해주는 문자**  

형식 문자가 사용되는 이유는, 같은 데이터라도 해석하는 방향에 따라 다른 문자가 될 수 있기 때문이다. 예로, 'a'라는 알파벳 소문자 데이터는 글자로 인식하는 경우(%c) a를 출력하지만, 정수로 인식하는 경우(%d) 97을 출력할 수 있다.

| 형식문자  | 설명 |
| --- | --- |
| %d | 모든 종류의 숫자 |
| %s | 글자, 문장 |
| %o  | 객체. Javascript의 모든 데이터는 객체로서 존재하기 때문에 사실상 모든 종류의 값에 적용 가능 |
| %j  | JSON객체. JSON역시 객체의 한 종류이므로 사실상 모든 종류의 값에 적용 가능 |

```jsx
console.log("%s %d", "Hello", 123);
```

**%d 는 숫자가 아닌 값은 NaN으로 바꿔서 출력해줌 boolean 값은 0또는1**  

- 05-형식문자.js 실습

```jsx
// 기본 데이터 타입
const num = 123.45;
const str = "hello";
const bool = true;
// 추후 살펴보게 될 데이터 타입
const obj = new Date();                 // 객체
const arr = [1, 2, 3];                  // 배열 (객체의 일종)
const json = {"a" : 123, "b" : 234};    // JSON (객체의 일종)

/* 1) (중요) 숫자 표현을 위한 문자 : %d */
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num);     // 정상
console.log("숫자값 출력하기=%d", str);     // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", bool);    // 1 (0은 거짓, 0이외의 모든 수는 참. 일반적으로 1을 참으로 처리)
console.log("숫자값 출력하기=%d", obj);     // 객체에 대한 Hash값 출력
console.log("숫자값 출력하기=%d", arr);     // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", json);    // 숫자가 아니므로 NaN
console.groupEnd();

/* 2) (중요) 문자열 표현을 위한 문자 : %s */
console.group("문자열 출력하기")
console.log("문자열 출력하기=%s", num);     // 정상
console.log("문자열 출력하기=%s", str);     // 정상
console.log("문자열 출력하기=%s", bool);    // 정상 
console.log("문자열 출력하기=%s", obj);     // 정상
console.log("문자열 출력하기=%s", arr);     // 정상
console.log("문자열 출력하기=%s", json);    // 정상
console.groupEnd();

/* 3) (중요) 객체 표현을 위한 문자 : %o */
console.group("객체 출력하기")
console.log("객체 출력하기=%o", num);     // 정상
console.log("객체 출력하기=%o", str);     // 정상 (따옴표가 적용됨)
console.log("객체 출력하기=%o", bool);    // 정상 
console.log("객체 출력하기=%o", obj);     // 정상
console.log("객체 출력하기=%o", arr);     // 정상
console.log("객체 출력하기=%o", json);    // 정상
console.groupEnd();

/* 4) (중요) JSON 표현을 위한 문자 : %j */
console.group("JSON 출력하기")
console.log("JSON 출력하기=%j", num);     // 정상
console.log("JSON 출력하기=%j", str);     // 정상 (따옴표가 적용됨)
console.log("JSON 출력하기=%j", bool);    // 정상 
console.log("JSON 출력하기=%j", obj);     // 정상
console.log("JSON 출력하기=%j", arr);     // 정상
console.log("JSON 출력하기=%j", json);    // 정상
console.groupEnd();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
console.log("%s님의 나이는 %d세 입니다.", student, age);
console.groupEnd();
```

# 2.6 변수 출력하기

자바스크립트 문자열을 역따옴표로 감싸고 그 안에서 변수나 표현식을 `${}`로 감싸서 표현한다.  

아래의 코드는 `Hello Javascript`가 출력된다.

- 06-변수출력.js 실습

```jsx
const a = "Hello";
console.log(`${a} Javascript`);
```

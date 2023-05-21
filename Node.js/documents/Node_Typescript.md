# 타입스크립트 기본  
[1 타입스크립트란?](#1-타입스크립트란)  
[2 타입스크립트 기본 문법](#2-타입스크립트-기본-문법)  
[-- 2.1 ts 작성](#21-ts-작성)  
[-- 2.2 에러가 있어도 코드 변환은 됨](#22-에러가-있어도-코드-변환은-됨)  
[-- 2.3 명시적인 타입 붙이기(타이핑하기)](#23-명시적인-타입-붙이기타이핑하기)  
[-- -- 자주 사용하는 타입 표](#타입으로-사용-가능한-값)  
[-- 2.4 자주 사용하는 타입](#24-자주-사용하는-타입)  

# 1 타입스크립트란?

### 자바스크립트에 명시적으로 타입이 추가된 언어

- 자바스크립트에도 타입은 있으나 명시적으로 지정하지 않았을 뿐

### Tsc라는 컴파일러를 통해 타입스크립트에서 자바스크립트로 변환

- 노드는 JS만 실행 가능하므로 TS 코드는 JS로 변환해서 실행해야 함
typescript 패키지를 설치하면 컴파일러가 같이 설치됨
- tsc 명령어로 작동
- tsconfig.json에 적힌 설정대로 실행됨.
- tsc 명령어로 작동
- tsconfig.json에 적힌 설정대로 실행됨.
- 새 프로젝트 생성

```bash
npm init -y
npm i typescript
npx tsc --init
```

### `stconfig.json` 설정

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2016", 

    /* Modules */
    "module": "commonjs",

    /* Interop Constraints */
    "esModuleInterop": true,

    "forceConsistentCasingInFileNames": true, 

    /* Type Checking */
    "strict": true,

    /* Completeness */
    "skipLibCheck": true 
  }
}
```

- `target`: 결과물의 문법을 어떤 버전의 자바스크립트 코드로 만들어낼지 정함.  
es2016은 2016년 자바스크립트 버전
- `module`: 결과물의 모듈 시스템을 어떤 종류로 할지 정함.  
노드라면 commonjs 를 하면되고, 최신 브라우저에서는 es2022하면 됨.
- `esModuleInterop`: CommonJS 모듈도 ECMAScript 모듈처럼 인식하게 해줌.  
true로 하면 됨.
- `forceConsistentCasingInFileNames`: true이면 모듈을 import할 때 파일명의 대소문자가 정확히 일치해야 함.  
리눅스나 맥에서는 파일명 대소문자를 구분하므로 켜두는 것이 좋음.
- `strict`: 엄격한 타입 검사를 할지 정함.  
true로 하지 않으면 타입스크립트를 사용하는 의미가 퇴색됨.
- `skipLibCheck`: true이면 모든 라리브러리의 타입을 검사하는 대신 내가 직접적으로 사용하는 라이브러리의 타입만 검사해 시간을 아낄 수 있음.

# 2 타입스크립트 기본 문법

## 2.1 ts 작성

- `npx tsc` 후 `index.js`가 생성되어야 함
- ts 파일은 tsc 명령어을 통해 js로 변환해야 함

```bash
npx tsc
```

## 2.2 에러가 있어도 코드 변환은 됨

### tsc는 타입 검사 기능과 코드 변환 기능이 별도. 하나가 실패해도 하나는 진행

- 타입 검사만 진행하려면 `tsc --noEmit`

```bash
tsc --noEmit
```

## 2.3 명시적인 타입 붙이기(타이핑하기)

### 변수, 함수의 매개변수, 반환값에 타입을 붙인다고 생각하기

- 콜론 뒷 부분이 타입 자리

```jsx
// js 예시
let a = true;
const b = { hello: 'world' };

function add(x, y) { return x + y };
const minus = (x, y) => x - y;
```

```tsx
// ts 예시
let a: boolean = true;
const b = { hello: string} = { hello: 'world' };

function add(x: number, y: number): number { return x + y };
const minus = (x: number, y: number): number => x - y;
```

### 타입으로 사용 가능한 값
**자주 쓰이는 타입**

| 분류 | 설명 | 예시 |
| --- | --- | --- |
| 기본형 | `string`, `number`, `boolean`, `symbol`, `object`, `undefined`, `null`, `bigint` | const a: string = ‘hello’; <br> const b: object = { hello: ‘ts’ }; |  
| 배열 | 타입 뒤에 `[]`를붙임. 길이가 고정된 배열이면 `[]` 안에 타입을 적음 | const a: string[] = [‘hello’, ‘ts’, ‘js’]; <br> const b: [number, string] = [123, ‘node’]; |
| 상수 | 1, ‘hello’, true 등의 고정값 | const a: 1 = 1; |
| 변수 | typeof 변수로 해당 변수의 타입 사용 가능 | let a = ‘hello’; <br> const b: typeof a = ‘ts’; |
| 클래스 | 클래스 이름을 그대로 인스턴스의 타입으로 사용 가능 | class A {} <br> const a = new A(); |
| type 선언 | 다른 타입들을 조합해서 새로운 타입 생성 가능, 유니언(\|), 인터섹션(&) 사용 가능 | const a: { hello: string } = { hello: ‘ts’ }; <br> type B = { wow: number }; <br> const b: B = { wow: 123 }; <br> type C = string | number; <br> let c: C = 123; |
| 인터페이스 | interface 선언 | interface A { hello: string, wow: number } <br> const a: A = { hello: ‘ts’, wow: 123 } |

## 2.4 자주 사용하는 타입

```tsx
let a: string | number = 'hello'; // 유니언 타이핑
a = 123;

let arr: string[] = []; // 배열 타이핑
arr.push('hello');

interface Inter {
  hello: string;
  world?: number; // `?`는 있어도 그만 없어도 그만인 속성
} // 객체를 인터페이스로 타이핑할 수 있음
const b: Inter = { hello: 'interface' };

type Type = {
  hello: string;
  func?: (param?: boolean) => void; 
  // 함수는 이런 식으로 타이핑함, 매개변수 타이핑, 반환값은 => 뒤에 타입을 적음
  // void는 return하는 값이 없을 때 사용
}
const c: Type = { hello: 'type' };

interface Merge {
  x: number,
}
interface Merge {
  y: number,
}
// 타입스크립트에서는 같은 인터페이스를 여러번 선언하면 하나로 합쳐짐 (위에 interface Merge 두 번 선언)
const m: Merge = { x: 1, y: 2 };

export { a }; // 타입스크립트는 ECMAScript 모듈을 사용
```


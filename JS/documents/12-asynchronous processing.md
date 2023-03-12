# 12-비동기
[1. JS의 비동기](#1-js의-비동기)  
[-- 1.1 JS엔진](#11-js엔진)  
[-- 1.2 JS의 비동기 실행  ](#12-js의-비동기-실행)  
[-- 1.2.1 비동기 실행 순서](#121-비동기-실행-순서)  
[2. 콜백헬](#2-콜백헬)  
[-- 2.1 콜백헬이란?](#21-콜백헬이란)  
[-- 2.2 콜백 체인의 문제점](#22-콜백-체인의-문제점)  
[3. 프로미스promise](#3-프로미스promise)  
[4. async-await](#4-async-await)  

# 1. JS의 비동기

## 1.1 JS엔진

- 소스코드에서 동적으로 객체를 생성하는 경우
- Memory Heap 에 생성된다
- 그리고 실행 순서에따라 콜스택(Call Stack)에 함수가 쌓인다
- 콜스택을 이용해서 어디에서 실행됐는지, 어디로 돌아가야 하는지 확인하고 보관한다

> 콜스택(Call Stack): 함수 실행 순서를 기억함
> 
- 하나의 싱글 컨텍스트 스택을 가진다 ⇒ 한번에 하나의 일만 처리 ⇒ 싱글 쓰레드(Single Thread)  ⇒ JS는 기본적으로 동기적으로 실행

## 1.2 JS의 비동기 실행

- JS 런타임환경(호스트 환경)에서 제공해주는 브라우저 WebAPIs, NodeAPI 등을 통해 비동기 적인 일을 할 수 있다
- 함수 호출
- Callback이 태스크 큐Task Queue 로 전달된다
- JS의 Event Loop가 콜스택Call Stack과 태스크 큐Task Queue 를 감시하면서 콜스택이 비어있다면 콜백함수를 콜스택으로 가져와서 실행한다

### 1.2.1 비동기 실행 순서

1. JS엔진의 콜스택은 한번에 하나의 일만 수행 가능(실행 순서를 기억)  
2. 비동기적으로 진행하려면 JS런타임환경에서 제공해주는 API들을 통해 가능하다  
3. API를 호출할 때 콜백함수를 전달하면 내부적으로 비동기적인 일이 다 끝난 후에 등록해 놓은 콜백함수들이 순차적으로 태스크 큐에 쌓인다  
4. 이벤트 루프가 콜스택이 빌 때 순서에 맞게 태스크 큐에 있는 콜백함수를 가져온다  

# 2. 콜백헬

## 2.1 콜백헬이란?

비동기A의 결과에따라 그 다음 후속B를 실행하게 하려면 그 안에 써야한다.  
콜백함수 안에 콜백함수를 넣어야 함.  
→ 콜백헬(콜백 체인)  

```jsx
/** 
 * 시나리오.
 * 
 * 1초 후 "당신의 추첨 결과는...?" 이라는 메시지 표시
 * 1~9에 대한 랜덤값이 짝수이면 당첨, 홀수이면 꽝.
 * 그 결과를 3초 후에 표시
 * 
 * 타이머에 대한 작업 종료 후 이어서 새로운 타이머를 만들어 진행
 */
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

setTimeout(() => {
    console.log("당신의 추첨 결과는...?");

    const lucky = random(1, 9);
    setTimeout(() => {
        console.log(lucky % 2 == 0 ? `${lucky}: 당첨입니다~!!` : `${lucky}: 꽝!!!`);
    }, 3000);
}, 1000);

console.log("추첨중~~~");
```

- 출력 결과

```
추첨중~~~
당신의 추첨 결과는...?
9: 꽝!!!
```

## 2.2 콜백 체인의 문제점

- 가독성이 안좋다
- 디버깅 할 때, 굉장히 어려움
- 유지보수 안좋음

# 3. 프로미스promise

- 프로미스는 JS에서 제공하는 비동기 코드를 간편하게 처리할 수 있도록 도와주는 object 이다.
- 프로미스는 어떤 기능을 실행하고 나서 정상적으로 동작하면, 성공의 메세지와 함께 처리된 결과값을 전달해줌, 그러나 기능을 수행하다 예상치 못한 문제가 발생하면 error를 전달해 준다.
- catch 로 error를 헨들링 할 수 있다.  
error가 발행해도 catch를 이용하면 전체적인 Promise 체인에 문제가 발생하지 않도록 빵꾸처리를 할 수 있다.

콜백헬을 막기 위해서 생김  

결국 콜백이 존재는 함.  

### 비동기 처리로 실행되는 함수에 대한 결과 처리를 별도의 로직으로 실행할 수 있는 기법

```jsx
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// Promise를 가동하기 위해서는 Promise객체를 리턴하는 함수가 필요함.
function getLuckyResult() {
    // Promise객체는 resolve 함수와, reject 함수를 파라미터로 받는 콜백이 필요함.
    return new Promise(function (resolve, reject) {
        // 이 안에서 비동기 작업을 시작함.
        setTimeout(() => {
            console.log("당신의 추첨 결과는...?");
            const lucky = random(1, 9);

            if(lucky % 2 == 0) {
                // 작업의 결과가 성공으로 판별된 경우 resolve()를 호출함
                // 파라미터는 단 하나만 가능.
                // 여러 개의 정보를 보내야 하는 경우 JSON 구조가 적절
                resolve({msg: "당첨입니다~!!", a: 1, b: 2, c: 3});
            } else {
                // 작업의 결과가 실패로 판별된 경우 reject()을 호출함
                reject({msg: "꽝~!!", d: -1, e: -2});
            }
        }, 1000);
    });
}
```

### Promise객체를 리턴받기 위한 함수를 호출

getLuckyResult()함수 내부에서 Promise객체가 생성되면서,  
Promise 클래스에 전달한 생성자 파라미터(콜백함수)가 실행될 것이다.  
→ resolve 혹은 reject 가 호출된 상태라는 의미  

```jsx
const mypromise = getLuckyResult();
```

### Promise객체가 생성되는 과정에서 생성자로 전달된 콜백함수의 실행 결과를 감지하는 부분

resolve 혹은 reject 중에서 실행된 함수가 무엇인지 감지  
비동기 작업의 결과를 알아냄  
타이머 종료에 이은 후속처리가 가능하다는 의미  

```jsx
/* 
구조분해 문법
구조분해를 파라미터로 받음
구조분해+화살표함수가 합쳐진 문법
메서드가 연달아 나오는 것을 메서드체인이라고 한다.
mypromise.then().catch().finally();
*/
mypromise.then(({msg, a, b, c}) =>{
    // [작업성공] -> resolve() 실행됨
    console.log("%s, a=%d, b=%d, c=%d", msg, a, b, c);
}).catch(({msg, d, e}) => {
    // [작업실패] -> reject() 실행됨
    console.log("%s, d=%d, e=%d", msg, d, e);
}).finally(() => {
    // 성공 실패 여부에 상관없이 무조건 실행되는 마무리 처리
    // 생략 가능
    console.log("fin :)");
});
```

- 출력 결과1

```
당신의 추첨 결과는...?
꽝~!!, d=-1, e=-2
fin :)
```

- 출력 결과2

```
당신의 추첨 결과는...?
당첨입니다~!!, a=1, b=2, c=3
fin :)
```

# 4. async-await

- 프로미스 체이닝을 계속 하다보면 코드의 가독성이 떨어짐
- async 와 await는 Promise를 간결/간편하고 동기적으로 실행되는것 처럼 보이게 만들어주는 API
- async 와 await는 새로운 것이 추가 된게 아니라, 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함
- await는 async 함수 내부에만 사용 가능

```jsx
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

function getLuckyResult() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("당신의 추첨 결과는...?");
            const lucky = random(1, 9);

            if(lucky % 2 == 0) {
                resolve({msg: "당첨입니다~!!", a: 1, b: 2, c: 3});
            } else {
                reject({msg: "꽝~!!", d: -1, e: -2});
            }
        }, 1000);
    });
}

// Promise를 리턴하는 함수를 호출하기 위해 새로운 async 함수를 정의
// 주로 즉시 실행 함수 형태로 정의됨.
// -> 익명함수 전체를 괄호()로 묶어버리고 그 뒤에 호출을 위한 ()를 연달아 넣는 형식
//(async function() {
(async () => {
    let result = null;

    // Promise를 리턴받는 과정을 await 키워드를 적용하여 처리, 예외처리도 적용
    try {
        // getLuckyResult()에서 resolve()가 호출되면서 전달한 파라미터는 그냥 리턴
        result = await getLuckyResult();
        console.log("%s, a=%d, b=%d, c=%d", result.msg, result.a, result.b, result.c);
    } catch (e) {
        // getLuckyResult()에서 reject()가 호출되면서 전달한 파라미터는 예외객체(e)로 전달
        console.log("%s, d=%d, e=%d", e.msg, e.d, e.e);
    } finally {
        // 성공 실패 여부에 상관없이 무조건 실행되는 마무리 처리
        // 생략 가능
        console.log("fin :)");
    }
})();
```

- 출력 결과1

```
당신의 추첨 결과는...?
꽝~!!, d=-1, e=-2
fin :)
```

- 출력 결과2

```
당신의 추첨 결과는...?
당첨입니다~!!, a=1, b=2, c=3
fin :)
```


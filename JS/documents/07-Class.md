# 07-클래스
[1. 클래스(Class)란?](#1-클래스란)  
[-- 1.1 클래스의 가장 기본적인 코드 형식](#11-클래스의-가장-기본적인-코드-형식)  
[-- 1.2 클래스를 통한 객체 생성하기](#12-클래스를-통한-객체-생성하기)  
[-- 1.3 클래스의 작성 패턴](#13-클래스의-작성-패턴)  
[-- -- 1.3.1 변수만 정의한 클래스](#131-변수만-정의한-클래스)  
[-- -- 1.3.2 JSON 형식의 객체와 차이](#132-json-형식의-객체와-차이)  
[-- -- 1.3.3 메서드만 정의한 클래스](#133-메서드만-정의한-클래스)  
[-- -- 1.3.4 메서드와 멤버변수를 함께 갖는 클래스](#134-메서드와-멤버변수를-함께-갖는-클래스)  
[-- 1.4 클래스의 생성자 함수](#14-클래스의-생성자-함수)  
[2. 은닉성](#2-은닉성)  
[-- 2.1 private](#21-private)  
[-- 2.2 getter, setter](#22-getter-setter)  
[3. 클래스 상속](#3-클래스-상속)  
[-- 3.1 기능의 확장으로서의 상속](#31-기능의-확장으로서의-상속)  
[-- 3.2 여러 클래스간의 공통 기능을 모아 놓는 의미로서의 상속](#32-여러-클래스간의-공통-기능을-모아-놓는-의미로서의-상속)  
[-- 3.3 메서드 오버라이드(Override)](#33-메서드-오버라이드override)  
[-- 3.4 super 키워드](#34-super-키워드)  
[4. 정적 멤버변수 static, 정적 메서드](#4-정적-멤버변수-static-정적-메서드)  
[5. SingleTon 패턴](#5-singleton-패턴)  
[-- 5.1 싱글톤 패턴의 사용하는 이유](#51-싱글톤-패턴의-사용하는-이유)  
[-- 5.2 싱글톤 패턴 단점](#52-싱글톤-패턴-단점)  

# 1. 클래스란?

- 객체를 생성할 수 있는 템플릿
- 객체지향 프로그래밍(Object-Oriented Programming) 을 하기 위해 사용  
- Prototype이 발전된 형태로 ES6 버전에서 추가된 객체 설계 문법  

> 객체지향 프로그래밍: 서로 밀접하게 연관되어 있는 것들을 객체로 구성해 나가면서 객체끼리 호환 가능하도록 함
> 
- 인스턴스(Instance): 클래스를 통해서 만들어진 객체
- JS는 프로토타입을 기반으로 비슷한 구조의 객체를 생성했지만  
ES6 의 클래스를 통해 쉽게 객체를 생성할 수있다.

> JS에서 내부적으로는 여전히 프로토타입을 사용하지만 개발자들은 지원해주는 클래스처럼 보여지는 문법(syntactic sugar)을 사용할 수 있다.
> 

### 객체란?

실제로 존재하는 것  

서로 연관 있는 속성(데이터)과 행동(함수)을 묶어 주기 위해 사용  

> 속성: 데이터(프로퍼티)  
행동: 함수(메소드)
> 

밀접하게 관련되어 있는 상태(변수, 데이터)와 행동(함수)을 객체로 묶어야 한다  

## 1.1 클래스의 가장 기본적인 코드 형식

클래스 이름은 명사들의 조합으로 이루어지며 첫 글자는 대문자로 지정하는 것이 관례  

```jsx
class 클래스이름 {
	 // 멤버변수 선언
	 // 생성자 --> 멤버변수 초기화
	 // getter, setter
	 // 메서드
}
```

## 1.2 클래스를 통한 객체 생성하기

`new` 예약어를 사용  

```jsx
var|let|const 변수이름 = new 클래스이름();
```

일반적으로 JS에서의 객체 선언은 **const** 키워드를 사용함.  

위와 같이 정의하면 변수는 클래스 안에 정의된 모든 기능을 부여받은 특수한 형태의 변수가 되는데  
이를 객체라고 하고, 객체는 자신에게 부여된 기능을 점(.)을 통해 접근할 수 있다.  

```jsx
객체.멤버변수 = 값;
객체.메서드();
```

## 1.3 클래스의 작성 패턴

1. 변수만 정의  
2. 메서드만 정의  
3. 변수와 메서드를 함께 정의  

**객체**라는 개념은 배열이 같은 종류의 변수들만 그룹화 하는 한계를 벗어나 **서로 다른 종류의 변수를 그룹화** 하는데서 출발한다.  
(이 상태를 C언어의 구조체라고 한다.)  

그룹화 해 놓은 변수들간의 관계를 구현하기 위해 메서드를 함께 포함하는 형태로 발전됨.  

### 1.3.1 변수만 정의한 클래스

```jsx
class 클래스이름 {
	 변수1 = 값;
	 변수2 = 값;
	 ...
	 변수n = 값;
}
```

변수에 값을 초기화 하지 않더라도 멤버변수는 생성된다.  

이 경우 객체를 생성하면 멤버변수는 모두 undefined 상태로 존재하기 때문에 객체를 통해 값의 초기화를 별도로 수행해야 한다.  

- 01-변수만_정의한_클래스.js

```jsx
/** 멤버변수만 정의한 클래스 */
class MemberClass {
    // 멤버변수 정의
    userName = null;    // 값을 안 넣어줘도 된다 userName; => undefined
    email = null;       // 값을 안 넣어줘도 된다 email; => undefined
}

//  클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

// 객체의 특성 -> 같은 구조를 갖지만 저장되는 내용은 개별적이다.
m1.userName = "민혁";
m1.email = "mh@gmail.com";

m2.userName = "철수";
m2.email = "cs@gmail.com";

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);
```

- 출력 결과

```
MemberClass { userName: null, email: null }
null
null
MemberClass { userName: null, email: null }
null
null
MemberClass { userName: '민혁', email: 'mh@gmail.com' }
민혁
mh@gmail.com
MemberClass { userName: '철수', email: 'cs@gmail.com' }
철수
cs@gmail.com
```

### 1.3.2 JSON 형식의 객체와 차이

class나 prototype을 통해 new로 생성된 객체는 구조는 동일하지만 각각 독립적인 값을 갖는다.  

JSON으로 생성되는 객체는 싱글톤으로서 존재하므로 단순 복사만으로는 동일한 형식을 갖는 두 개의 데이터를 생성할 수 없다.  
서로 독립적인 데이터를 보유하려면 동일한 JSON 코드를 한 번 더 작성해야 하거나 깊은 복사를 수행하기 위한 재귀호출 코드를 직접 작성해야 한다.  

- 02-JSON과_차이점.js

```jsx
const m3 = {
    userName: "철민",
    email: "chulmin@naver.com"
};

// m3와 같은 구조를 갖는 m4를 정의
const m4 = m3;

console.log(m3);
console.log(m4);

// 값의 변경
m3.userName = "민수";
m3.email = "ms@naver.com";

// 객체간의 복사는 서로 영향을 준다.
// 객체끼리의 대입은 복사가 아닌 참조이므로 원본의 데이터를 변경하면 복사본도 함께 변경된다. (반대도 통일)
console.log(m3);
console.log(m4);
```

- 출력 결과

```
{ userName: '철민', email: 'chulmin@naver.com' }
{ userName: '철민', email: 'chulmin@naver.com' }
{ userName: '민수', email: 'ms@naver.com' }
{ userName: '민수', email: 'ms@naver.com' }
```

### 1.3.3 메서드만 정의한 클래스

용도나 목적이 같은 메서드들을 별도의 클래스로 묶어둔다.  

```jsx
class 클래스이름 {
		 함수이름1(...) { ... }
		 함수이름2(...) { ... }
		 ...
		 함수이름n(...) { ... }
}
```

- 03-메서드만_정의한_클래스.js

```jsx
class Calc {
    plus(x, y) {
        return x + y;
    }

    minus(x, y) {
        return x - y;
    }
}

const c = new Calc();
console.log(c.plus(1,2));
console.log(c.minus(10,5));
```

- 출력 결과

```
3
5
```

### 1.3.4 메서드와 멤버변수를 함께 갖는 클래스

**멤버변수의 스코프는 클래스 내의 모든 메서드에서 식별 가능**하다. 결국 **멤버변수는 모든 메서드가 공유하는 전역 변수의 개념**이 된다.  

같은 클래스에 속한 멤버변수나 함수끼리는 예약어 **this**를 통해서만 접근 가능하다.  

```jsx
class 클래스이름 {
	 변수1 = 값;
	 변수2 = 값;
	 ...
	 변수n = 값;
	 함수이름1(...) { ... }
	 함수이름2(...) { ... }
	 ...
	 함수이름n(...) { ... }
}
```

- 04-멤버변수와_메서드를_갖는_클래스.js

```jsx
class HelloWorld {
    message = null;

    sayHello() {
        console.log(this.message);
    }

    setEng() {
        this.message = "Hello Javascript";
    }

    setKor() {
        this.message = "안녕하세요. 자바스크립트.";
    }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();
```

- 출력 결과

```
Hello Javascript
안녕하세요. 자바스크립트.
```

## 1.4 클래스의 생성자 함수

new 예약어를 사용하여 인스턴스가 생성될 때 자동으로 실행되는 특수한 함수.  

주로 멤버변수의 값을 초기화 하기 위해 사용한다.  

함수 이름이 `constructor()`로 예약되어 있다.  

필요에 따라 파라미터를 정의할 수 있으며 파라미터는 주로 멤버변수와 1:1로 대응된다.  

클래스 레벨에서 멤버변수를 초기화 할 경우 객체를 생성하면서 멤버변수의 값을 변경할 수 없지만 **생성자를 사용하면 객체 생성 단계에서 멤버변수의 값을 다양하게 변경할 수 있다**.  

```jsx
class 클래스이름 {
	 변수1;
	 변수2;
	 ...
	 변수n;
	 constructor(파라미터1, 파라미터2, ..., 파라미터n) {
			 this.변수1 = 파라미터1;
			 this.변수2 = 파라미터2;
			 ...
			 this.변수n = 파라미터n;
		}
}
```

- 05-생성자.js

```jsx
class MyUnit {
    name;   // 이름
    speed;  // 스피드
    dps;    // 공격력(Damage Per Second)

    // 생성자
    constructor(name, speed, dps) {
        this.name = name;
        this.speed = speed;
        this.dps = dps;
        console.log(`>>> 생성자를 통한 ${this.name} 객체 초기화 완료 (speed=${this.speed}, dps=${this.dps})`);
    }

    move(where) {
        console.log(`${this.name}(이)가 ${where}(으)로 ${this.speed}의 속력으로 이동합니다.`);
    }

    attack(target) {
        console.log(`${this.name}(이)가 ${target}(으)로 ${this.dps}의 데미지를 입힙니다.`);
    }
}

// 단일 객체 사용
const marin = new MyUnit("Night", 5, 10);
marin.move("던전");
marin.attack("골렘");

// 객체 배열 사용
const team = [
    new MyUnit("기사", 5, 10), 
    new MyUnit("힐러", 15, 1), 
    new MyUnit("성직자", 7, 20)
];

for(const t of team) {
    t.move("던전");
    t.attack("보스몹");
}
```

- 출력 결과

```
>>> 생성자를 통한 Night 객체 초기화 완료 (speed=5, dps=10)
Night(이)가 던전(으)로 5의 속력으로 이동합니다.
Night(이)가 골렘(으)로 10의 데미지를 입힙니다.
>>> 생성자를 통한 기사 객체 초기화 완료 (speed=5, dps=10)
>>> 생성자를 통한 힐러 객체 초기화 완료 (speed=15, dps=1)
>>> 생성자를 통한 성직자 객체 초기화 완료 (speed=7, dps=20)
기사(이)가 던전(으)로 5의 속력으로 이동합니다.
기사(이)가 보스몹(으)로 10의 데미지를 입힙니다.
힐러(이)가 던전(으)로 15의 속력으로 이동합니다.
힐러(이)가 보스몹(으)로 1의 데미지를 입힙니다.
성직자(이)가 던전(으)로 7의 속력으로 이동합니다.
성직자(이)가 보스몹(으)로 20의 데미지를 입힙니다.
```

# 2. 은닉성

## 2.1 private

- 멤버변수나 메서드가 객체를 통해 접근할 수 없도록 클래스 내부에 숨기는 기법.
- private 프로퍼티(혹은 멤버변수), private 메서드 라고 한다.
- 멤버변수나 메서드 이름 앞에 `#`을 붙여 적용한다.
- 클래스를 작성하는 개발자A와 이를 활용하는 개발자B 두 명이 프로젝트를 진행한다고 할 때 개발자A가 개발자B의 실수를 방지하기 위해 클래스 내부에서만 사용할 목적으로 만든 자원을 private으로 설정할 수 있다.

### Java에서의 변수, 함수, 클래스에 대한 접근 제한 문법

private 나만  
public 공용  
protected 상속  

## 2.2 getter, setter

- 객체를 통한 멤버변수로의 직접 접근이 소스코드 보안에 좋지 않기 때문에 멤버변수를 은닉하게 되는데 이 경우 프로그램은 객체가 갖고 있는 값에 접근할 수 있는 방법이 차단된다.
- 멤버변수에 접근을 못하더라도 함수를 통해 간접적으로 할당, 반환을 수행할 수 있는데 이러한 역할을 위해 작성되는 함수를 getter, setter라고 한다.
- getter, setter는 일반 메서드와 구분되어야 하며  
getter, setter를 정의하기 위한 일반 메서드와는 구별되는 별도의 구문형식이 존재한다.
- getter, setter를 사용하면 프로퍼티에 값을 할당하기 전, 값의 적절성을 판단하는 처리과정을 추가할 수 있다.

생성자: 객체를 생성할 때 프로퍼티의 값을 초기화 하는 용도  
getter: 객체가 저장하고 있는 프로피터의 값을 조회하는 용도(가져오는 용도)  
setter: 객체가 저장하고 있는 프로퍼티의 값을 수정하는 용도(세팅함)  

```jsx
class 클래스이름 {
	 #멤버변수1;
	 #멤버변수2;
	 ...
	 #멤버변수n;
	 set 멤버변수1(value) { this.#멤버변수1 = value; }
	 get 멤버변수1() { return this.#멤버변수1; }

	 set 멤버변수2(value) { this.#멤버변수2 = value; }
	 get 멤버변수2() { return this.#멤버변수2; }

	 set 멤버변수n(value) { this.#멤버변수n = value; }
	 get 멤버변수n() { return this.#멤버변수n; }
}
```

- 06-getter,setter.js

```jsx
class UserClass {
    // 은닉된 멤버변수
    #userName;
    #email;

    constructor(userName, email) {
        this.#userName = userName;
        this.#email = email;
    }

    /** 멤버변수 #userName에 값을 할당하기 위한 setter 함수 */
    set userName(value) {
        if(!value) {
            console.log("userName을 입력하세요.");
            return;
        }

        this.#userName = value;
    }

    /** 멤버변수 #userName 값을 반환하기 위한 getter 함수 */
    get userName() {
        return this.#userName;
    }

    /** 멤버변수 #email에 값을 할당하기 위한 setter 함수 */
    set email(value) {
        if(!value) {
            console.log("email을 입력하세요.");
            return;
        }

        this.#email = value;
    }

    /** 멤버변수 #userName 값을 반환하기 위한 getter 함수 */
    get email() {
        return this.#email;
    }

    /** 일반적인 기능을 수행하기 위한 메서드 */
    login() {
        if(!this.userName || !this.email) {
            console.log("userName이나 email을 확인하세요.");
            return;
        }

        console.log("로그인 되었습니다. >> userName=" + this.userName + ", email=" + this.email);
    }
}

const user = new UserClass("lee", "lee@naver.com");
user.login();

// 은닉된 멤버변수에 접근하는 코드이므로 에러
// > SyntaxError: Private field '#userName' must be declared in an enclosing class
// console.log(user.#userName);

// setter를 통한 값의 할당
user.userName = "";
user.email = "";

user.userName = "helloworld";
user.email = "hello@world.com";
user.login();
```

- 출력 결과

```
로그인 되었습니다. >> userName=lee, email=lee@naver.com
userName을 입력하세요.
email을 입력하세요.
로그인 되었습니다. >> userName=helloworld, email=hello@world.com
```

# 3. 클래스 상속

기능의 확장 `class 클래스이름 extends 부모클래스` 로 사용 가능  

부모의 기능을 상속받고, 추가로 자신이 구현하는 기능도 사용할 수 있다.  

## 3.1 기능의 확장으로서의 상속

- 07-상속_기능확장.js

```jsx
/** 기본 기능을 갖는 클래스 */
class sayHello {
    eng() {
        console.log("Hello Javascript");
    }
}

/** 기본 기능을 확장하는 클래스 */
// 부모의 기능을 상속받고, 추가로 자신이 구현하는 기능도 사용할 수 있다.
class sayHelloWorld extends sayHello {
    kor() {
        console.log("안녕하세요 자바스크립트");
    }
}

const say = new sayHelloWorld();
say.eng();
say.kor();
```

- 출력 결과

```
Hello Javascript
안녕하세요 자바스크립트
```

## 3.2 여러 클래스간의 공통 기능을 모아 놓는 의미로서의 상속

여러 개의 클래스가 포함하는 기능 중 일부가 동일한 경우 각 클래스로부터 공통되는 부분을 독립적인 클래스로 추출하고 그 클래스를 상속하여 공유하는 처리 기법.  

- 공통기능을 정의하는 부모 클래스

```jsx
attack(target) {
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.#dps);
    }
```

- 부모를 상속받는 자식 클래스(들) 정의

```jsx
class Zealot extends Protoss {
    sword(target) {
        this.attack(target);;
        console.log(" >>>>>>>> 검으로 찌르기");
    }
}
```

- 자식 클래스에 대한 객체 생성

```jsx
let z1 = new Zealot("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");
```

부모가 생성자 파라미터를 통해 초기화를 수행하고 있다면 그 생성자는 자식 클래스에게도 상속된다.  

그러므로 자식 클래스를 통한 객체 생성시에도 부모가 요구하는 생성자 파라미터를 전달해야 한다.  

- 08-상속_공통기능추출.js

```jsx
/** 종족의 공통 특성을 갖는 클래스 */
class Protoss {
    #name;
    #hp;
    #dps;
    
    /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의 */
    constructor(name, hp, dps) {
        this.#name = name;      // 이름
        this.#hp = hp;          // 체력(health point)
        this.#dps = dps;        // 초당공격력(damage per second)
        console.log("[%s] 체력: %d, 공격력: %d", this.name, this.hp, this.dps);
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }
    
    get hp() {
        return this.#hp;
    }
    set hp(value) {
        this.#hp = value;
    }
    
    get dps() {
        return this.#dps;
    }
    set dps(value) {
        this.#dps = value;
    }

    /** 객체가 수행해야 하는 동작들을 함수 형태로 정의 */
    move(position) {
        console.log(this.name + "(이)가 " + position + "까지 이동합니다.");
    }

    attack(target) {
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.#dps);
    }
}

class Zealot extends Protoss {
    sword(target) {
        this.attack(target);;
        console.log(" >>>>>>>> 검으로 찌르기");
    }
}

class Dragoon extends Protoss {
    fire(target) {
        this.attack(target);;
        console.log(" >>>>>>>> 원거리 공격");
    }
}

let z1 = new Zealot("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");

let z2 = new Zealot("질럿2", 300, 25);
z2.move("멀티");
z2.sword("멀티");

let d1 = new Dragoon("드라군1", 250, 40);
d1.move("본진");
d1.fire("본진");

let d2 = new Dragoon("드라군2", 200, 35);
d2.move("멀티");
d2.fire("멀티");
```

- 출력 결과

```
[질럿1] 체력: 300, 공격력: 20
질럿1(이)가 본진까지 이동합니다.
질럿1(이)가 본진(을)를 공격합니다. 데미지: 20
 >>>>>>>> 검으로 찌르기
[질럿2] 체력: 300, 공격력: 25
질럿2(이)가 멀티까지 이동합니다.
질럿2(이)가 멀티(을)를 공격합니다. 데미지: 25
 >>>>>>>> 검으로 찌르기
[드라군1] 체력: 250, 공격력: 40
드라군1(이)가 본진까지 이동합니다.
드라군1(이)가 본진(을)를 공격합니다. 데미지: 40
 >>>>>>>> 원거리 공격
[드라군2] 체력: 200, 공격력: 35
드라군2(이)가 멀티까지 이동합니다.
드라군2(이)가 멀티(을)를 공격합니다. 데미지: 35
 >>>>>>>> 원거리 공격
```

## 3.3 메서드 오버라이드(Override)

- 클래스 간에 부모-자식 관계가 형성되었을 때  
자식 클래스에서 부모 클래스가 갖는 메서드와 동일한 이름의 메서드를 정의하는 기법.
- 자식이 정의한 메서드로 덮는다.
- 부모의 기능을 수정하는 개념.  
(확장 : 자식이 메서드를 추가하는 것)

## 3.4 super 키워드

### **Override 이전의 원본 기능 호출하기**

- 부모의 메서드를 오버라이드(Override) 하고 있는 자식 클래스 안에서  
**부모의 원래 기능을 호출하고자 하는 경우에 사용**

### **부모 클래스의 생성자**

- super 키워드를 메서드처럼 사용할 경우 부모 클래스의 생성자를 의미한다.
- 자신의 생성자를 통해 전달받은 파라미터와 추가적으로 가공된 파라미터를 부모의 생성자로 전달하여 **객체를 생성하는 방법에 변화를 주고자 할 경우 사용**한다

- 09-오버라이드,super.js

```jsx
/** 종족의 공통 특성을 갖는 클래스 */
class Terran {
    #name;
    #hp;
    #dps;
    
    /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의 */
    constructor(name, hp, dps) {
        this.#name = name;      // 이름
        this.#hp = hp;          // 체력(health point)
        this.#dps = dps;        // 초당공격력(damage per second)
        console.log("[%s] 체력: %d, 공격력: %d", this.name, this.hp, this.dps);
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }
    
    get hp() {
        return this.#hp;
    }
    set hp(value) {
        this.#hp = value;
    }
    
    get dps() {
        return this.#dps;
    }
    set dps(value) {
        this.#dps = value;
    }

    /** 객체가 수행해야 하는 동작들을 함수 형태로 정의 */
    move(position) {
        console.log(this.name + "(이)가 " + position + "까지 이동합니다.");
    }

    attack(target) {
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.#dps);
    }
}

class Marin extends Terran {
    // attack 메서드 override
    attack(target) {
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.dps);
    }
}

class Tank extends Terran {
    // attack 메서드 override
    attack(target) {
        super.attack(target);
        console.log(" >>>>>>>> 탱크 포격");
    }
}

class Firebat extends Terran {
    // 생성자 override
    constructor(name) {
        super(name, 500, 50);
        /* 
        생성자 재정의
        상속시 부모 생성자는 무조건 호출되어야 함.
        단, 자식 class가 override를 통해 부모 생성자 호출 과정을 중간에서 대행하면서 파라미터는 간소화 시킬 수 있다.
        super(name, 500, 50)가  생성자가 된다.
        */
    }
}

const m = new Marin("해병1", 120, 30);
// 자식 클래스에 의해 재정의된 기능 호출 --> 부모의 메서드는 가려진다.
m.attack("질럿");

const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebat("화염방사병");
f.attack("적");
```

- 출력 결과

```
[해병1] 체력: 120, 공격력: 30
해병1(이)가 질럿(을)를 공격합니다. 데미지: 30
[탱크1] 체력: 120, 공격력: 30
탱크1(이)가 드라군(을)를 공격합니다. 데미지: 30
 >>>>>>>> 탱크 포격
[화염방사병] 체력: 500, 공격력: 50
화염방사병(이)가 적(을)를 공격합니다. 데미지: 50
```

# 4. 정적 멤버변수 static, 정적 메서드

클래스에 속한 변수나 함수에 **static** 키워드를 접목하면 객체 생성에 상관 없이 클래스 이름을 통해 항상 접근할 수 있는 정적 기능을 정의할 수 있다.  

이렇게 정의된 정적 기능은 각 객체간의 공유 자원이 된다  

### static

- 정적변수
- 프로그램의 시작과 함께 할당된다.
- 정적으로 할당.
- 프로그램이 종료될 때까지 변수의 수명이 유지된다.

지역변수 : 코드가 실행될 때 메모리가 할당된다.  호출된 함수가 종료되면 소멸됨.  

객체 생성에 상관 없이 클래스 이름을 통해 항상 접근
할 수 있는 정적 기능을 정의

- 10-정적멤버변수.js

```jsx
class Customer {
    #name;
    
    // 모든 객체가 공유하는 정적 멤버변수를 정의
    static count = 0;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    // 정적 멤버변수에 대한 관리를 위해서 함수 정의
    in() {
        Customer.count++;
    }

    out() {
        Customer.count--;
    }

    showState() {
        console.log(`손님의 이름: ${this.name}, 전체 손님 수: ${Customer.count}`);
    }
}

console.group("손님1");
const c1 = new Customer("손님1");
c1.in();
c1.showState();
console.groupEnd();

console.group("손님2");
const c2 = new Customer("손님2");
c2.in();
c1.showState();
c2.showState();
console.groupEnd();

console.group("손님3");
const c3 = new Customer("손님3");
c3.in();

c1.showState();
c2.showState();
c3.showState();
console.groupEnd();

console.group("손님2,3 out");
c3.out();
c2.out();
c1.showState();
c2.showState();
c3.showState();
console.groupEnd();
```

- 출력 결과

```
손님1
  손님의 이름: 손님1, 전체 손님 수: 1
손님2
  손님의 이름: 손님1, 전체 손님 수: 2
  손님의 이름: 손님2, 전체 손님 수: 2
손님3
  손님의 이름: 손님1, 전체 손님 수: 3
  손님의 이름: 손님2, 전체 손님 수: 3
  손님의 이름: 손님3, 전체 손님 수: 3
손님2,3 out
  손님의 이름: 손님1, 전체 손님 수: 1
  손님의 이름: 손님2, 전체 손님 수: 1
  손님의 이름: 손님3, 전체 손님 수: 1
```

# 5. SingleTon 패턴

- 객체의 인스턴스가 오직 1개만 생성되는 클래스 작성 패턴
- 소프트웨어 디자인 패턴에서 싱글턴 패턴(Singleton pattern)을 따르는 클래스는,  
생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고  
최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.
    - 이와 같은 디자인 유형을 싱글턴 패턴이라고 한다.
- 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다.

> 인스턴스가 한 개만 존재하는 것을 보장하고 싶은 경우 싱글톤 패턴을 사용
> 

### 5.1 싱글톤 패턴의 사용하는 이유

**메모리 측면**  

- 최초 한번의 new 연산자를 통해서 고정된 메모리 영역을 사용하기 때문에 추후 해당 객체에 접근할 때 메모리 낭비를 방지할 수 있다.
- 이미 생성된 인스턴스를 활용하니 속도 측면에서도 이점이 있다.

**데이터 공유가 쉬움**  

- 싱글톤 인스턴스가 전역으로 사용되는 인스턴스이기 때문에 다른 클래스의 인스턴스들이 접근하여 사용할 수 있다.

### 5.2 싱글톤 패턴 단점

- **의존성이 심하다**.
- 의존관계상 클라이언트가 구현체에 의존하면서 [DIP](https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EA%B4%80%EA%B3%84_%EC%97%AD%EC%A0%84_%EC%9B%90%EC%B9%99)를 위반하게 된다**.**
- DIP를 위반하면 자연스럽게 [OCP](https://ko.wikipedia.org/wiki/%EA%B0%9C%EB%B0%A9-%ED%8F%90%EC%87%84_%EC%9B%90%EC%B9%99)를 위반할 가능성도 높아진다.  ****
- 상태를 가진 객체를 Singleton 으로 만들면 안된다

### 싱글톤 클래스 작성 예시

```jsx
class Foo {

	 static current = null;

	 static getInstance() {
			 if (Foo.current === null) {
					 Foo.current = new Foo();
			 }
			 return Foo.current;
	 }

	 // ... 이 클래스의 일반 생성자와 메서드들을 정의
}
```

- 11-싱글톤패턴.js

```jsx
class Calc {
    static #current = null;

    static getInstance() {
        if(Calc.#current == null) {
            Calc.#current = new Calc();
        }

        return Calc.#current;
    }

    plus(x, y) {
        return x + y;
    }

    minus(x, y) {
        return x - y;
    }

    times(x, y) {
        return x * y;
    }

    div(x, y) {
        return x / y;
    }
}

let c1 = Calc.getInstance();
console.log(c1.plus(10, 20));

let c2 = Calc.getInstance();
console.log(c2.minus(10, 20));

console.log(Calc.getInstance().times(10, 20));
console.log(Calc.getInstance().div(10, 20));
```

- 출력 결과

```
30
-10
200
0.5
```
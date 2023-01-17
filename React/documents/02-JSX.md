# 2. JSX
[2.1 JSX란?](#21-jsx란)  
[2.2 JSX의 장점](#22-jsx의-장점)  
[2.3 JSX 문법](#23-jsx-문법)  
[--2.3.1 요소 감싸기](#231-요소-감싸기)  
[--2.3.2 자바스크립트 표현](#232-자바스크립트-표현)  
[--2.3.3 jsx 조건분기](#233-jsx-조건분기)  
[--2.3.4 반복문 이용](#234-반복문-이용)  
[--2.3.5 style 과 classname](#235-style-과-classname)  
[--2.3.6 꼭 닫혀야 하는 태그](#236-꼭-닫혀야-하는-태그)  
[--2.3.7 주석](#237-주석)  

# 2.1 JSX란?

JS 확장 문법 (리액트로 프로젝트를 개발할 때 사용되므로 공식적인 JS문법은 아니다)  

JSX형식으로 작성한 코드는 브라우저가 실행되기 전에 코드가 번들링되는 과정에서 바벨이라는 도구를 사용하여 일반 자바스크립트 형태의 코드로 변환됨.

> 번들링(Bundling)이란 기본적으로 여러 개로 흩어져 있는 파일들을 압축, 난독화 등을 하여 하나의 파일로 모아주는 역할  
트렌스파일(Transpile)이란 언어 대 언어로 최신 문법을 레거시 문법으로 다시 써주어 구형 디바이스나 브라우저에서도 작동을 할 수 있게끔 해주는 역할
> 

# 2.2 JSX의 장점

### 1. 보기 쉽고 익숙함

일반 JS를 사용한 코드와 JSX로 작성한 코드를 비교했을 때,  

JS를 사용한 코드는 요소들을 일일이 만들어야 해서 불편하고,  

JSX로 작성한 코드가 HTML 코드를 작성하는 것과 비슷하기 때문에 가독성이 높고 작성하기 쉽다.  

### 2. 활용도가 높다

JSX는 여러 HTML 태그를 사용할 수 있고, 컴포넌트를 태그처럼 사용가능하다.  

# 2.3 JSX 문법

## 2.3.1 요소 감싸기

컴포넌트에 여러 요소가 있으면 받으시 부모 요소 하나로 감싸야 한다.  

```jsx
function App() {
	return (
		<div>
			<h1>Hi</h1>
			<h2>React</h2>
		</div>
	);
}
```

Why?  

Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙 때문이다.  

## 2.3.2 자바스크립트 표현

JSX 안에서는 JS 표현식을 쓸 수 있다. JS 표현식을 작성하려면 JSX 내부에서 코드를 `{ }` 로 감싼다.  

```jsx
const Expr = () => {
    /** 사용자 정의 변수 */
    const name = '리액트';
    const age = 19;
    const color = '#f00';
    const message = '리액트는 가장 주목받는 프론트앤드 프레임 워크 입니다.';

    /** 개발자가 직접 정의한 함수 */
    const myEllipses = (message, len) => {
        let str = message;
        if (str.length > len) {
            str = str.substring(0, len) + '...';
        }
        return str;
    };
    return (
        <div>
            <h2>
                Expr <small>(jsx 기본 표현식)</small>
            </h2>

            {/* 기본 변수 출력하기 - 간단한 사칙연산 가능 */}
            <h3>
                {name}님은 {age +1}세 입니다.
            </h3>
            <p>
                <font color='#00f'>{name}</font>님은&nbsp;
                {/* HTML 속성에 변수를 출력할 경우 따옴표를 사용할 수 없다. */}
                <font color={color}>리액트 개발자</font>입니다.
            </p>

            {/* 사용자 정의 함수 호출하기 */}
            <blockquote>{myEllipses(message, 15)}</blockquote>
        </div>
    );
};

export default Expr;
```

## 2.3.3 JSX 조건분기

JSX 내부의 JS 표현식에서 if 문을 사용할 수 없다.  

하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나,  

`{ }` 안에 조건부 연산자(삼항 연산자)를 사용하면 된다.  

### JSX 조건분기 (1) - 함수를 통한 리턴값 분기

```jsx
const If1 = () => {
    /** 조건에 따라 다른 jsx를 반환하는 함수 정의 */
    const btnLogin = (isLogin) => {
        if(isLogin === true) {
            return (<button type='button'>Logout</button>);
        } else {
            return (<button type='button'>Login</button>);
        }
    };

    // 조건에 따라 다른 결과를 표시하는 첫 번째 방법은 호출하는 함수안에서 판별.
    return (
        <div>
            <h2>If1</h2>
            {btnLogin(true)}
        </div>
    );
};

export default If1;
```

### jsx 조건분기 (2) - 조건식과 `&&` 연산자 사용

{조건 && (조건이 참인 경우 출력할 내용)}

```jsx
/**
 * jsx 조건분기 (2) - 조건식과 `&&` 연산자 사용
 * 
 * {조건 && (조건이 참인 경우 출력할 내용)}
 * 
 * 조건이 거짓인 경우 표시되는 내용 없음
 */
const If2 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If2</h2>
            {isLogin === true && <p>로그인 되셨습니다.</p>}
        </div>
    );
};

export default If2;
```

### jsx 조건분기 (3) - 조건식과 `||` 연산자 사용

{조건 || (조건이 거짓인 경우 출력할 내용)}  

- 출력할 내용이 없는 경우
undefined, null, false, ''(빈문자열) 중 하나를 return 할 경우 정상적인 화면 렌더링이 이루어지지 않음. ( 0 은 예외적으로 화면에 나타남 )  
**특히 `undefined` 변수를 바로 리턴하는 경우 에러 발생함**
- 어떤 값이 `undefined` 일 수도 있다면, OR(`||`) 연산자를 사용하면 해당 값이  `undefined` 일 때 사용할 값을 지정해서 오류 방지 가능  ****

```jsx
/**
 * jsx 조건분기 (3) - 조건식과 `||` 연산자 사용
 * 
 * {조건 || (조건이 거짓인 경우 출력할 내용)}
 * 
 * 조건이 참인 경우 표시되는 내용 없음
 */
const If3 = () => {
    /** 출력할 내용이 없는 경우 */
    // -> undefined, null, false, ''(빈문자열) 중 하나를 return 할 경우 정상적인 화면 렌더링이 이루어지지 않음.
    // -> 특히 undefined 변수를 바로 리턴하는 경우 에러 발생함
    const articleList = undefined;

    return (
        <div>
            <h2>If3</h2>
            {articleList || <p>조회된 게시글이 없습니다.</p>}
        </div>
    );
};

export default If3;
```

### jsx 조건분기 (4) - 삼항 연산자를 사용한 조건 분기

{조건 ? (조건이 참인 경우 출력할 내용) : (그렇지 않은 경우 출력할 내용)}

```jsx
/**
 * jsx 조건분기 (4) - 삼항 연산자를 사용한 조건 분기
 * {조건 ? (조건이 참인 경우 출력할 내용) : (그렇지 않은 경우 출력할 내용)}
 * 조건이 거짓인 경우를 사용하지 않고자 한다면 null 사용
 * ex) { point === 80 ? ( ... ) : (null) }
 */
const If4 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If4</h2>

            {
                isLogin === true ? 
                <button type="button">로그아웃</button> : 
                <button type="button">로그인</button>
            }
        </div>
    );
};

export default If4;
```

## 2.3.4 반복문 이용

### jsx 반복 처리 (1) - 함수를 통한 반복문 활용

```jsx
/**
 * jsx 반복 처리 (1) - 함수를 통한 반복문 활용
 */
const Loop1 = () => {
    /** 목록정의 태그를 구성하기 위한 사용자 정의 함수 */
    const createListItem = (count) => {
        // <li>...</li> 단위를 저장할 배열
        let li = [];

        // 주어진 count 수 만큼 반복
        for(let i = 0; i < count; i++) {
            // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key속성을 포함해야 함 (React권고사항)
            li.push(<li key={i}>Item {i}</li>);
        }
        return li;
    };
    return (
        <div>
            <h2>Loop1</h2>
            <ul>{createListItem(5)}</ul>
            <ul>
                {[<li key={0}>Item {1}</li>, 
                <li key={0}>Item {2}</li>, 
                <li key={0}>Item {3}</li>]}
            </ul>
        </div>
    );
}

export default Loop1;
```

### jsx 반복 처리 (2) - map() 함수를 사용한 배열 원소 탐색

```jsx
const Loop2 = () => {
    // 화면에 표시할 데이터
    const myArray = ['hello', 'world'];

    // 화면에 표시할 반복 컴포넌트
    const myArrayItem = myArray.map((item, index) => {
        return (
            // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key속성을 포함해야 함 (React권고사항)
            <li key={index}>{item}</li>
        );
    });
    // 위 반복문 축약식
    // const myArrayItem = myArray.map((item, index) => <li key={index}>{item}</li>);

    // 실제로는 함수로 따로 안 만들고 태그에 바로 넣는다
    // console.log(myArrayItem);

    return (
        <div>
            <h2>Loop1</h2>
            <ul>{myArrayItem}</ul>
        </div>
    );
};

export default Loop2;
```

### jsx 반복 처리 (3) - return문 안에서 map() 함수 사용하기

```jsx
/**
 * jsx 반복 처리 (3) - return문 안에서 map() 함수 사용하기
 */
const Loop3 = () => {
    const seasons = ['봄', '여름', '가을', '겨울'];

    return (
        <div>
            <h2>Loop3</h2>
            <table border='1'>
                <tbody>
                    <tr>
                        {seasons.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Loop3;
```

## 2.3.5 ****style 과 className****

리액트에서 DOM 요소에 스타일을 적용할 때는 문자열로 넣는 것이 아니라 객체 형태로 넣어줘야 한다.  

인라인 스타일은 객체 형태로 작성을 해야 하며, `background-color` 처럼 `-` 로 구분되어 있는 이름들은 `backgroundColor` 처럼 카멜 표기법(camelCase) 으로 작성해야 한다.  

### style

```jsx
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}

export default App;
```

### class

```jsx
.gray-box {
  background: gray;
  width: 64px;
  height: 64px;
}
```

app.js

```jsx
function App() {

	return (
    <>
      <Hello />
      <div className="gray-box"></div>
    </>
  );
}

export default App;
```

## 2.3.6 꼭 닫혀야 하는 태그

JSX에서 태그는 반드시 닫혀있어야 한다.  

JSX에서 태그를 닫지 않으면 오류가 발생한다.  

태그 사이에 별도의 내용이 들어가지 않는 경우,  Self Closing 태그 라는 것을 사용한다. 이것을 통해 태그를 선언하면서 동시에 닫을 수 있다.  

```jsx
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <input />
      <br />
    </div>
  );
}

export default App;
```

## 2.3.7 주석

JSX 내부에서 주석을 작성할 때에는 `{/* … */}` 형식으로 작성한다.  

여러 줄로 작성 가능.  

시작 태그를 여러 줄로 작성할 때는 그 내부에서 `//`  과 같은 형태의 주석은 작성 가능.  

```jsx
function App() {

  return (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello
        // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
      />
      <div>주석 테스트용</div>
    </>
  );
}

export default App;
```

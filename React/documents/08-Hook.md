# 8. Hook  
[8.1 useState](#81-usestate)  
[8.2 useEffect](#82-useeffect)  
[-- 8.2.1 마운트될 때만 실행하고 싶을 때](#821-마운트될-때만-실행하고-싶을-때)  
[-- 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때](#822-특정-값이-업데이트될-때만-실행하고-싶을-때)  
[-- 8.2.3 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하기](#823-언마운트되기-전이나-업데이트되기-직전에-어떤-작업-수행하기)  
[8.3 Reducer](#83-reducer)  
[-- 8.3.1 리듀서(useReducer) 사용법](#831-리듀서usereducer-사용법)  
[-- 8.3.2 카운터 구현하기 예시](#832-카운터-구현하기-예시)  
[-- 8.3.3 리듀서로 인풋 상태 관리하기](#833-리듀서로-인풋-상태-관리하기)  
[8.4 성능 최적화(memo, useMemo, useCallback)](#84-성능-최적화memo-usememo-usecallback)  
[-- 8.4.1 React.memo(), memo()](#841-reactmemo-memo)  
[-- 8.4.2 useMemo()](#842-usememo)  
[-- 8.4.3 useCallback()](#843-usecallback)  
[-- 8.4.4 memo, useMemo, useCallback 비교표](#844-memo-usememo-usecallback-비교표)  

class 없이 상태값(state) 관리와 React 기능을 사용할 수 있게 해주는 기능  

# 8.1 useState

- 함수형 컴포넌트에서 state값 생성
- 하나의 useState 함수는 하나의 상태값만 관리할 수 있다.
- 컴포넌트에서 관리해야 할 상태가 여러 개면 useState를 여러번 사용

> 상태변수: 현재 state 변수  
변수에대한setter함수: 상태변수를 갱신할 수 있는 함수  
useState: 리액트 Hook  
useState(변수의기본값)의 넘겨주는 값 : 초기값
> 

useState() 함수를 import하고 사용하는 경우.  

```jsx
import React, {useState} from 'react';
	...
const [상태변수, 변수에대한setter함수] = useState(변수의기본값);
```

useState() 함수를 import하지 않고 직접 사용하는 경우.  

```jsx
const [상태변수, 변수에대한setter함수] = React.useState(변수의기본값);
```

# 8.2 useEffect

useEffect 는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있다  

## 8.2.1 마운트될 때만 실행하고 싶을 때

`useEffect` 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (`deps`)을 넣음. 만약에 `deps` 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 `useEffect` 에 등록한 함수가 호출됨.  

```jsx
useEffect(() => {
  console.log('컴포넌트가 화면에 나타남');
}, []);
```

## 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

두번째 파라미터 배열 (`deps`) 안에 검사하고 싶은 값을 넣어 줌  
배열 (`deps`) 안에는 useState를 통해 관리하고 있는 상태를 넣어도 되고, props로 전달받은 값을 넣어도 됨  

```jsx
useEffect(() => {
  console.log(name);
}, [name]);
```

## 8.2.3 언마운트되기 전이나 업데이트되기 직전에 어떤 작업 수행하기

`useEffect` 에서는 함수를 반환 할 수 있는데 이를 `cleanup` 함수라고 부름. `cleanup` 함수는 `useEffect` 에 대한 뒷정리를 해줌, `deps` 가 비어있는 경우에는 컴포넌트가 사라질 때 `cleanup` 함수가 호출됨.  

오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어있는 배열을 넣으면 됨  

```jsx
useEffect(() => {
  console.log('컴포넌트가 화면에 나타남');
  return () => {
    console.log('컴포넌트가 화면에서 사라짐');
  };
}, []);
```

# 8.3 Reducer

리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수  

리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 함  

## 8.3.1 리듀서(useReducer) 사용법

`const [state, dispatch] = useReducer(reducer, initialArg, init);`  

상태값(`state`)와 상태값 갱신함수(`dispatch`)를 정의한다.  
→ `reducer`: `dispatch()`가 호출됨에 따라 간접적으로 호출될 함수  
→ `initialArg`: `state`에 저장될 초기값  

→ `init`: 초기 함수 (초기 state를 조금 지연해서 생성하기 위해 사용)  
`dispatch()`함수에게 action값을 전달하면  
React 내부적으로 `reducer`함수가 호출되며,  
상태값으로 지정된 `state`와 action값이 파라미터로 전달된다.  

## 8.3.2 카운터 구현하기 예시

```jsx
import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
// action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
			// 아무것도 해당되지 않을 때 에러 객체 반환
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>);
}

export default Counter;
```

## 8.3.3 리듀서로 인풋 상태 관리하기

인풋이 여러 개일 때 `useState` 를 사용하면 `useState` 를 여러 번 사용해야 했는데,  

`useReducer` 를 사용하면 input 태그의  `e.target` 값 자체를 액션 값으로 사용함  

이런 식으로 인풋을 관리하면 아무리 인풋의 개수가 많아져도 코드를 간결하게 유지 가능  

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```
# 8.4 성능 최적화(memo, useMemo, useCallback)

## 8.4.1 React.memo(), memo()

렌더링 결과를 저장하여 불필요한 리렌더링을 건너뛰게 해줌  

컴포넌트의 `props`가 바뀌지 않는다면, 리렌더링을 방지해서 성능 최적화를 해준다.  

memo함수를 사용하면 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링하도록 설정 가능  

이전 `props`와 다음 `props`의 동등 비교를 위해 비교 함수를 수행후 true 라면 저장된 상태를 이용한다.  

`import React, { memo } from 'react';`  하고 `memo()` 또는  

`import React from 'react';` 하고  `React.memo()`  사용  

```jsx
import React from 'react';

const News = () => {
	 //... 생략 ...
};

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default React.memo(News);
```

또는 

```jsx
import React from 'react';

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
const News = React.memo(() => {
	 //... 생략 ...
});

export default News;
```

### 사용할 때

함수형 컴퍼넌트가 같은 `props`로 자주 렌더링 될거라 예상될 때  

일반적으로 부모 컴퍼넌트에 의해 하위 컴퍼넌트가 같은 props로 리렌더링 될 때

### 사용하지 말아야 할 때

렌더링될 때 `props`가 다른 경우가 대부분인 컴포넌트  

`props`가 자주 변하는 컴퍼넌트를 `React.memo()`로 래핑할지라도, React는 두 가지 작업을 리렌더링 할 때마다 수행할 것이다.  

1. 이전 `props`와 다음 `props`의 동등 비교를 위해 비교 함수를 수행한다.  
2. 비교 함수는 거의 항상 `false`를 반환할 것이기 때문에, React는 이전 렌더링 내용과 다음 렌더링 내용을 비교할 것이다.  

비교 함수의 결과는 대부분 `false`를 반환하기에 `props` 비교는 불필요하게 된다.  

## 8.4.2 useMemo()

`props`로 전달받은 함수를 실행해서, 그 결과값을 보존 (deps=의존인자가 하나라도 변하면 함수를 다시 실행해서 그 결과값을 보존)  

특정한 값 변경시 `[]` 부분에 값 넣기  

`import React, { useMemo } from "react";` 하고 `useMemo()` 사용  

```jsx
import React, { useMemo } from "react";

const 함수이름 = useMemo(() => {
	 //... 이벤트 처리 구현
}, []);
```

## 8.4.3 useCallback()

함수는 컴포넌트가 리렌더링 될 때마다 새로 만들어진다.  

`useCallback` 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.  

`useCallback` 은 함수를 두번째 인자의 값이 변경될 때까지 저장하고 재사용한다.  
⇒ 해당 컴포넌트가 랜더링되더라도 그 함수가 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환  

`import React, { useCallback } from 'react';`  하고 `useCallback()` 사용  

```jsx
import React, { useCallback } from 'react';

const 함수이름 = useCallback(e => {
	 //... 이벤트 처리 구현
}, []);
```

두번째 인자 값이 변경될 때 생성한다.  
⇒ 만약 콜백함수가 함수 밖의 변수, 함수에 의존한다면 해당 값을 두번째 항목인 배열에 명시해야 한다.    

## 8.4.4 memo, useMemo, useCallback 비교표

|  | React.memo | useMemo | useCallback |
| --- | --- | --- | --- |
| 종류 | HOC | hook | hook |
| 클래스 또는 함수형 컴포넌트에서 사용 가능 여부 | 둘 다 사용 가능 | 함수 컴포넌트 만 | 함수 컴포넌트 만 |
| 사용 목적 | 단순 UI 컴포넌트 리렌더링 방지 | 함수의 연산량이 많아서 그 결과값의 재사용 (결과값 보존) | 함수의 재생성 막음 |
- props 값이 전달될 때 매번 새로운 객체가 만들어 지더라도 안에 들어있는 값이 비교했을 때 동일한 값이라면 리렌더링을 실행하지 않고 싶다.  
⇒ memo
- 컴포넌트 안에서 무거운 작업을 할 때 매번 하는 것이 아니라 처음만 계산해야 된다면  
⇒ useEffect 사용  
⇒ useMemo 사용 (특정한 값 변경시 `[]` 부분에 값 넣기)
- 전달받는 함수를 매번 재실행 하기 싫다면 함수를 useCallback 으로 감싸주면 된다.
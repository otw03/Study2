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

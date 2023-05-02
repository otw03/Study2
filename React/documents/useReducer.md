# -Reducer

`const [state, dispatch] = useReducer(reducer, initialArg, init);`  

상태값(`state`)와 상태값 갱신함수(`dispatch`)를 정의한다.  
→ `reducer`: `dispatch()`가 호출됨에 따라 간접적으로 호출될 함수  
→ `initialArg`: `state`에 저장될 초기값  

→ `init`: 초기 함수 (초기 state를 조금 지연해서 생성하기 위해 사용)  
`dispatch()`함수에게 action값을 전달하면
 React 내부적으로 `reducer`함수가 호출되며, 
상태값으로 지정된 `state`와 action값이 파라미터로 전달된다.

### 예시

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
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
```
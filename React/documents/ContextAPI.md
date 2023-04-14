# -Context API
[.1 Context API란?](#1-context-api란)  
[-- .1.1 Provider, Consumer 사용법](#11-provider-consumer-사용법)  
[-- .1.2 useContext](#12-usecontext)  
[.2 Context API의 장단점](#2-context-api의-장단점)  
[-- .2.1 장점](#21-장점)  
[-- .2.2 단점](#22-단점)  
[.3 Context API를 사용할 때 성능 이슈가 발생하는 경우와 해결법](#3-context-api를-사용할-때-성능-이슈가-발생하는-경우와-해결하는-방법)  
[-- .3.1 Context API를 사용할 때 성능 이슈가 발생하는 경우](#31-context-api를-사용할-때-성능-이슈가-발생하는-경우)  
[-- .3.2 Context API를 사용할 때 성능 이슈를 해결하는 방법](#32-context-api를-사용할-때-성능-이슈를-해결하는-방법)  

# 1 Context API란?

`Context API`는 React에서 컴포넌트 간 데이터를 전달하는 데 사용되는 기능

기존에는 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 `props`로 원하는 상태와 함수를 전달했지만,  
`Context API`를 사용하면 `Context`를 만들어 단 한번에 원하는 값을 받아와서 사용할 수 있다   

컴포넌트 간에 데이터를 전달하는 가장 일반적인 방법은 `props`를 사용하는 것이다. 그러나 컴포넌트의 중첩이 깊어지거나 많은 컴포넌트에서 데이터를 전달해야 할 경우, `props`를 사용하는 것은 매우 불편할 수 있다  

`Context API`는 이러한 상황에서 컴포넌트 간 데이터 전달을 간단하게 해준다. `Context API`를 사용하면, 데이터를 공유하는 모든 컴포넌트에 대한 중앙 데이터 저장소를 만들 수 있다. 이 저장소는 `Provider`로 감싸진 모든 컴포넌트에서 데이터를 읽거나 변경할 수 있다  

`Context API`는 `createContext` 메서드를 사용하여 생성된 객체를 사용하여 작성할 수  있다  
`createContext` 메서드는 `Context 객체`를 반환하며, 이 객체는 `Provider`와 `Consumer`를 제공한다  
`Provider`는 데이터를 제공 또는 `Context`에 저장된 값을 변경하고, `Consumer`는 제공된 데이터를 사용한다  

`provider` 내부에서 상태 변경이 거의 일어나지 않는다면, 해당 상태를 `provider` 하위의 다른 컴포넌트에 전달하는 용도로 쓰는데 적합하다  

## 1.1 Provider, Consumer 사용법

```jsx
import React, { createContext } from 'react';

const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="Hello, Context!">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  return (
    <MyContext.Consumer>
      {value => <div>{value}</div>}
    </MyContext.Consumer>
  );
}

export default App;
```

`MyContext.Provider`는 어플리케이션에서 사용할 값인 `Hello, Context!`를 설정하고, `Child`
 컴포넌트에 전달함    
`MyContext.Consumer`는 `value` 값을 사용하기 위해 선언된 컴포넌트이다  

`MyContext.Consumer`는 `value` 값을 함수의 인자로 받아서 JSX를 반환한다.  
`Child` 컴포넌트에서 `MyContext.Consumer`를 사용하여 `MyContext.Provider`에서 설정한 값을 사용한다  

## 1.2 useContext

`useContext` ****hook을 사용하면 `Provider`로부터 전달받은 값을 함수 컴포넌트에서 쉽게 사용할 수 있다  

```jsx
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="Hello, Context!">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}

export default App;
```

`Child` ****컴포넌트에서 `MyContext.Consumer`를 사용하는 대신 `useContext` hook을 사용하여 `MyContext.Provider`에서 전달받은 값을 가져와서 사용했다. `useContext` hook은 `MyContext.Consumer`의 단축 함수로 볼 수 있다  

# 2 Context API의 장단점

## 2.1 장점

- 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하지 않아도 되므로, 컴포넌트 간의 의존성을 줄일 수 있다
- 전역적으로 데이터를 관리하므로 중복되는 코드를 줄일 수 있다
- Provider와 Consumer를 사용하여 데이터를 전달하므로, props를 사용하는 것보다 코드가 간결해진다

## 2.2 단점

- Context API를 사용하면 상태 관리 라이브러리보다 코드가 복잡해질 수 있습니다.
- Provider와 Consumer를 사용하여 데이터를 전달하기 때문에, 컴포넌트 간의 관계가 복잡해질 수 있습니다.
- `Context API` 에서 상태값을 변경하면, `provider` 로 감싼 모든 자식 컴포넌트들이 리렌더링한다. 그래서 `Context API` 를 상태관리 도구로 사용하면 각 자식 컴포넌트들이 리렌더링하지 않도록 방어할 필요가 있다
⇒ context api 는 상태 관리에는 어울리지 않는다  
⇒ 정적인 값에 가까운 값을 props drilling 대신할 때 적절하다  

# .3 Context API를 사용할 때 성능 이슈가 발생하는 경우와 해결하는 방법

## .3.1 Context API를 사용할 때 성능 이슈가 발생하는 경우
 Context API를 사용할 때 성능 이슈가 발생할 수 있다. Context API는 상태가 변경될 때마다 해당 컴포넌트와 그 하위 컴포넌트들이 모두 리렌더링되기 때문이다


## .3.2 Context API를 사용할 때 성능 이슈를 해결하는 방법
 또한, React에서는 `React.memo`와 `useMemo` 등의 최적화 기능을 제공하고 있다. 이러한 최적화 기능을 적극적으로 활용하여 불필요한 리렌더링을 방지할 수 있다.

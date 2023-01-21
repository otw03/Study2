# 4. 이벤트
[4.1 리액트의 이벤트 시스템](#41-리액트의-이벤트-시스템)  
[--4.1.1 이벤트 사용시 주의 사항](#411-이벤트-사용시-주의-사항)  
[4.2 이벤트 핸들링 예제](#42-이벤트-핸들링-예제)  
[--4.2.1 input 상태 관리](#421-input-상태-관리)  
[--4.2.2 여러 개의 input 상태 관리](#422-여러-개의-input-상태-관리)  


사용자가 DOM 요소들과 상호작용 하는 것.  

# 4.1 리액트의 이벤트 시스템

## 4.1.1 이벤트 사용시 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성  
2. `“ ”` 가 아니라 함수 형태의 값을 전달한다.  
- 리액트의 이벤트

```jsx
const onClickEvnet = () => { 실행코드 };

<div>
	<button onClick={onClickEvnet}>Event</button>
</div>
```

- HTML의 이벤트

```jsx
<button onclick="handleEvent()">Event</button>
```

# 4.2 이벤트 핸들링 예제

## 4.2.1 input 상태 관리

컴포넌트에서 변경되는 값은 state 로 관리 된다.  

이벤트 등록 함수에서는 이벤트 객체 e 를 파라미터로 받아올 수 있다.  

e.target 은 이벤트가 발생한 DOM 을 가리킴  

e.target.value 를 통해서 이벤트의 value 값을 알 수 있다. (해당 예제에서는 input의 value 값)
(input 의 상태를 관리할 때는 value 값도 설정해주어야 한다.)    

### App.js

```
import React from 'react';
import EventPractice from './EventPractice ';

function App() {
  return (
    <EventPractice />
  );
}

export default App;
```

### EventPractice.js

```
import React, { useState } from 'react';

function EventPractice() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
```

## 4.2.2 여러 개의 input 상태 관리

### EventPractice.js

```jsx
import React, { useState } from 'react';

export default function EventPractice() {
  const [inputs, setInputs] = useState({
    nickname1: '',
    nickname2: ''
  });

  const { nickname1, nickname2 } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      nickname1: '',
      nickname2: '',
    })
  };

  return (
    <div>
      <input name="nickname1" placeholder="이름" onChange={onChange} value={nickname1} />
      <input name="nickname2" placeholder="닉네임" onChange={onChange} value={nickname2}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {nickname1} ({nickname2})
      </div>
    </div>
  );
}
```

객체 안에서 key 를 `[ ]` 로 감싸면 그 안에 넣은 값이 가리키는 실제값이 key 값으로 사용됨.  

`[name]: value` 부분으로 인해

```jsx
{
	'nickname1': 'value'
}
```

형태가 되는 것이다.  

### 불변성

불변성이란 메모리 영역의 값을 변경할 수 없는 것이다.  

객체를 변화 시키고 싶을 때는 기존 객체는 변경하지 않고, 새로운 객체를 만들어서 변경해야 한다.  

spread 문법(전개연산자) 를 통해 기존 객체를 복사할 수 있다.  

이것을 불변성을 지켜야 하기 때문이다.  

### 불변성을 지켜야 하는 이유

리액트는 상태값을 업데이트 할 때 얕은 비교를 수행한다.   
이전 참조값과 현재 참조값만을 비교하여 상태 변화를 감지한다.   
이런 이유로 배열이나 객체를 업데이트 할때 `setState([...state, newState])`, `setState({...state, [key]: value})` 이런식으로 새로운 참조값을 가진 배열이나 객체를 생성하는 것이다.   
불변성을 지킴으로써 리액트는 상태변화를 감지할 수 있다.  

### 불변성을 지켜서 얻는 것

1. 효율적인 상태업데이트 (얕은 비교 수행)  

얕은 비교란 객체의 프로퍼티를 하나하나 다 비교하지 않고, 객체의 참조 주소값만 변경되었는지 확인한다. 얕은 비교는 계산 리소스를 줄여주기 때문에 리액트는 효율적으로 상태를 업데이트 할 수 있다.  

1. 사이드 이펙트 방지 및 프로그래밍 구조의 단순성  

참조타입인 객체나 배열의 경우 값을 변경할 때 원본데이터가 변경될 여지가 있다. (불변성이 지켜지지 않을 수 있다). 이렇게 원본 데이터가 변경될 경우, 이 원본데이터를 참조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있습니다. 프로그래밍의 복잡도도 올라갑니다. 따라서 불변성을 지켜주면 사이드 이펙트를 방지하고 프로그래밍의 구조를 단순하게 유지할 수 있다.  

> 사이드 이펙트: 의도하지 않은 결과를 의미한다.

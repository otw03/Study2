# 6. 컴포넌트 반복
[6.1 자바스크립트 배열의 map() 함수](#61-자바스크립트-배열의-map-함수)  
[-- 6.1.1 map 함수 문법](#611-map-함수-문법)  
[6.2 데이터 배열을 컴포넌트 배열로 변환](#62-데이터-배열을-컴포넌트-배열로-변환)  
[-- 6.2.1  기존 컴포넌트 수정](#621--기존-컴포넌트-수정)  
[6.3 key](#63-key)  
[-- 6.3.1 key 설정](#631-key-설정)  
[-- 6.3.2 key가 필요한 이유](#632-key가-필요한-이유)  
[6.4 응용](#64-응용)  
[-- 6.4.1 초기 설정](#641-초기-설정)  
[-- 6.4.2 데이터 추가 기능 구현](#642-데이터-추가-기능-구현)  
[-- 6.4.3 데이터 제거 기능 구현](#643-데이터-제거-기능-구현)  

아래와 같이 코드를 작성할 수도 있지만  
코드가 복잡해지면 코드양도 많아지고, 관리하기가 힘들다  

```jsx
const IterationSample = () => {

  return (
      <ul>
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul>
    );
};

export default IterationSample;
```

# 6.1 자바스크립트 배열의 map() 함수

자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있다  
map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성함  

## 6.1.1 map 함수 문법

```jsx
arr.map(callback, [thisArg])
```

> callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 아래 세 가지다  
- currentValue: 현재 처리하고 있는 요소  
- index: 현재 처리하고 있는 요소의 index 값  
- array: 현재 처리하고 있는 원본 배열  
thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스
> 

# 6.2 데이터 배열을 컴포넌트 배열로 변환

## 6.2.1  기존 컴포넌트 수정

```jsx
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};
```

문자열로 구성된 배열을 선언 후, 그 배열 값을 사용하여 JSX 코드로 된 배열을 새로 생성 후 nameList에 담아서 사용함  

위와 같이 하면 브라우저 콘솔창에 `key` prop 이 없다는 경고 메세지가 나온다  

`Each child in a list should have a unique "key" prop.`  

# 6.3 key

리액트에서 key 는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용함  

유동적인 데이터를 다룰 때는 원소를 새로 생성, 제거, 수정할 수 있음  

key 가 없으면 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지하지만 key 가 있다면 이것을 사용해 변화를 더욱 빠르게 알아낼 수 있음  

## 6.3.1 key 설정

리액트에서 배열을 렌더링 할 때는 `key` 라는 props 를 설정해야 함  
`key` 값은 데이터가 가진 고유값으로 설정함  
`id` 값이 있을 경우 id 값을 key 로 사용할 수 있음  

게시판 게시물의 경우 게시물 번호를 key 값으로 설정하면 됨  

고유 번호가 없는 경우 `map()` 함수에 전달되는 콜백함수의 `index` 값을 사용할 수 있음  

```jsx
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};
```

**고유한 값이 없을 때만** index 값을 key 로 사용하는 것이지  
`**index` 를 `key` 로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못함**  

## 6.3.2 key가 필요한 이유

`map()` 에 `key` 값이 없다면 중간의 값이 바뀌었을 때 그 하위 값들이 전부 변함  
key값을 사용한다면 key를 이용해 중간의 값을 추가하게 됨  

> 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제하기 때문이다
> 

### 예시

아래와 같은 배열이 있고 이것을 렌더링 한다고 가정하면  

```jsx
const array = ['a', 'b', 'c', 'd'];

array.map(item => <div>{item}</div>);
```

배열의 b 와 c 사이에 z 를 삽입하게 된다면, 리렌더링을 하게 될 때  
`<div>b</div>` 와 `<div>c</div>` 사이에 새 `div` 태그를 삽입을 하게 되는 것이 아니라,   
기존의 c 가 z 로 바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입됨  

# 6.4 응용

## 6.4.1 초기 설정

객체 형태로 이루어진 문자열과 고유 id 값이 있는 배열  

map 함수의 key 값을 `name.id` 로 지정  

```jsx
import React, {useState, useRef} from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람'}, 
    { id: 2, text: '얼음'}, 
    { id: 3, text: '눈'}, 
    { id: 4, text: '바람'}, 
  ]);

  const [ inputText, setInputText] = useState('');
  const nextId = useRef(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...
  };

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

## 6.4.2 데이터 추가 기능 구현

버튼을 클릭했을 때 호출될 onClick 함수 구현  
onClick 함수에서 불변성 유지를 위해 `spread`연산자를 사용해 새로운 항목을 추가한 배열을 만듦  
useRef로 만든 변수 nextId 로 id 값 관리   
버튼을 눌렀을 때 기존 input 의 내용 비우기  

```jsx
import React, {useState, useRef} from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람'}, 
    { id: 2, text: '얼음'}, 
    { id: 3, text: '눈'}, 
    { id: 4, text: '바람'}, 
  ]);

  const [ inputText, setInputText] = useState('');
  const nextId = useRef(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => {
    setInputText(e.target.value)    
    
  };

  const onClick = () => {
    const nextNames = [...names, {id: nextId.current, text: inputText}]; // 전개 연산자를 이용해 배열을 복사
    console.log(nextNames);
    nextId.current += 1;
    setNames(nextNames);
    setInputText('');
  };

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

## 6.4.3 데이터 제거 기능 구현

불변성을 유지하면서 배열의 특정 항목을 지우기 위해 filter 함수를 이용  

filter 함수는 인자에 분류하고 싶은 조건을 반환하는 함수를 넣어주면 된다  

```jsx
import React, { useState, useRef } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const nextId = useRef(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  // 버튼 클릭했을 때 항목이 추가되는 함수
  const onClick = () => {
    const nextNames = [...names, { id: nextId.current, text: inputText }]; // 전개 연산자를 이용해 배열을 복사
    console.log(nextNames);
    nextId.current += 1;
    setNames(nextNames);
    setInputText("");
  };

  // 항목을 더블 클릭했을 때 지워지는 함수
  const onRemove = id => {
    // name.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = name.id 가 id 인 것을 제거함
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```


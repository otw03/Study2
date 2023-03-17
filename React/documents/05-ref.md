# 5. ref
[5.1 ref](#51-ref)  
[5.2 ref 사용법](#52-ref-사용법)  

# 5.1 ref

JavaScript에서 특정 DOM을 선택할 때는  
`getElementById`, `querySelector` 같은 DOM Selector 함수를 사용해서 DOM 을 선택함  

리액트에서 DOM을 직접 선택해줘야 하는 상황이 있는데 예를 들어  

- 특정 엘리먼트의 크기를 가져오기
- 스크롤바 위치를 가져오거나 설정하기
- 포커스를 설정해주기
- HTML5 Video 관련 라이브러리, D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때

등이 있다  

이때 리액트에서 사용하는 것이 `ref` 이다  

함수형 컴포넌트에서 `ref` 를 사용 할 때에는 `useRef` 라는 Hook 함수를 사용함  

> 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 `React.createRef`라는 함수를 사용

# 5.2 ref 사용법

useRef 는 .current

`useRef()` 를 사용하여 Ref 객체를 만들고, 이 객체를 내가 선택하고 싶은 DOM 에 `ref`
 값으로 설정함  
그렇게 되면 이 Ref 객체의 `.current` 값은 우리가 원하는 DOM 을 가리킴


### 자식 컴포넌트에서 부모 컴포넌트의 DOM Ref 를 받는 방법  
forwardRef  

### useRef 의 다른 사용법

timeout, interval, 화면을 바꾸고 싶지 않은데 값은 자주 바뀌는 것에 사용 가능

- setTimeout, setInterval 을 통해서 만들어진 id
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치


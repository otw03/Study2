# v-on

# v-on이란?

`v-on`은 Vue.js에서 사용되는 디렉티브(directive) 중 하나임. 이 디렉티브를 사용하여 HTML 요소에 이벤트 리스너(event listener)를 추가하고, 해당 이벤트가 발생했을 때 Vue 인스턴스의 메서드를 실행할 수 있다.  

`v-on`은 일반적으로 약어로 `@`를 사용하여 표시됨. 이벤트를 감지하고 처리하기 위해 `v-on` 디렉티브를 사용하는 방법은 다음과 같다.  

```jsx
htmlCopy code
<button v-on:click="handleClick">Click me!</button>
```

위의 예시에서 `v-on:click`은 "클릭" 이벤트를 감지하고, 해당 이벤트가 발생했을 때 `handleClick` 메서드를 실행함. `handleClick`은 Vue 인스턴스에 정의된 메서드로, 클릭 이벤트가 발생할 때마다 실행함.  

`v-on` 디렉티브는 다양한 이벤트에 사용될 수 있다. 일반적으로 사용되는 이벤트는 `click`, `submit`, `input`, `keydown` 등이 있다. 이벤트 이름은 HTML 요소에서 지원하는 이벤트와 일치해야 함.  

이벤트 핸들러를 인라인으로 정의하는 대신, Vue 인스턴스에 메서드를 정의하고 해당 메서드를 참조할 수도 있다. 예를 들어  

```jsx
htmlCopy code
<button v-on:click="myMethod">Click me!</button>
```

```jsx
javascriptCopy code
methods: {
  myMethod: function() {
    // 이벤트 처리 로직
  }
}
```

또한, 이벤트 핸들러 내부에서 Vue 인스턴스의 데이터를 사용할 수 있다. 이를 통해 동적인 동작을 구현할 수 있다. 예를 들어, 클릭 횟수를 추적하고 표시하는 경우  

```jsx
htmlCopy code
<button v-on:click="incrementCounter">Click me!</button>
<p>클릭 횟수: {{ counter }}</p>

```

```jsx
javascriptCopy code
data: {
  counter: 0
},
methods: {
  incrementCounter: function() {
    this.counter++;
  }
}
```

위의 예시에서 `incrementCounter` 메서드는 클릭할 때마다 `counter` 데이터를 증가시킴. 해당 데이터는 템플릿에 반영되어 클릭 횟수를 표시함.

즉, `v-on` 디렉티브를 사용하여 Vue.js에서 HTML 요소에 이벤트 리스너를 추가하고 이벤트가 발생했을 때 메서드를 실행할 수 있다. 다양한 이벤트에 사용되며, Vue 인스턴스의 메서드를 참조하여 이벤트 처리 로직을 구현할 수 있다.
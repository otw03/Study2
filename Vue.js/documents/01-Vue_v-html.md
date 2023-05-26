# Vue.js란?, v-html
[Vue.js란?](#vuejs란)  
[v-html](#v-html)  

# Vue.js란?

사용자 인터페이스를 구축하기 위한 JavaScript 프레임워크  

# v-html

`v-html`은 Vue.js에서 사용되는 디렉티브(directive) 중 하나. 이 디렉티브는 Vue 인스턴스의 데이터를 HTML로 렌더링하는 데 사용됨.  

일반적으로 Vue.js에서는 데이터 바인딩을 통해 데이터를 HTML 요소에 텍스트로 표시함.  
예를 들어, 다음과 같이 데이터를 표시할 수 있다.   

```jsx
htmlCopy code
<div>{{ message }}</div>
```

위 예시에서 `message`는 Vue 인스턴스의 데이터 속성이며, 해당 값이 변경되면 자동으로 업데이트 됨.  

그러나 때로는 데이터를 HTML 마크업으로 렌더링해야 하는 경우가 있다. 이때 `v-html` 디렉티브를 사용할 수 있다. 예를 들어, Vue 인스턴스의 데이터 속성에 포함된 HTML 코드를 표시하려는 경우 다음과 같이 사용할 수 있다.  

```jsx
htmlCopy code
<div v-html="htmlCodeExample"></div>
```

위 예시에서 `htmlCodeExample`는 Vue 인스턴스의 데이터 속성으로, 포함된 HTML 코드를 가지고 있습니다. `v-html` 디렉티브를 사용하면 해당 데이터를 HTML로 렌더링하여 표시함. 주의해야 할 점은, `v-html`은 데이터를 렌더링할 때 XSS(cross-site scripting) 공격에 취약할 수 있으므로, 신뢰할 수 있는 소스에서만 사용해야 함.  

즉, `v-html` 디렉티브를 사용하면 Vue.js에서 데이터를 HTML로 렌더링할 수 있으며, 동적이고 유연한 콘텐츠를 표시할 수 있다.
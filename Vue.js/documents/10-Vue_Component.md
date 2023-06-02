# Vue 컴포넌트  
[1. Vue 컴포넌트](#1-vue-컴포넌트)  
[2. 여러 Vue 앱과 여러 컴포넌트](#2-여러-vue-앱과-여러-컴포넌트)  

# 1. Vue 컴포넌트

- 컴포넌트는 HTML 코드 조각들이나 특정 HTML 블록을 재사용할 때 유용함.
- 컴포넌트는 커스텀 HTML 요소로 정의되며, Vue.js의 공식 기능.
- 컴포넌트를 생성하기 위해 `createApp`을 사용하여 앱을 생성하고, 생성한 앱에서 `component` 메서드를 호출한다.
- `component` 메서드의 첫 번째 인수는 컴포넌트의 식별자(커스텀 HTML 태그)이며, 두 번째 인수는 구성 객체임.
- 컴포넌트는 데이터와 메서드를 포함하며, 컴포넌트 내에서만 사용되는 데이터와 메서드를 정의할 수 있다.
- 컴포넌트의 템플릿은 `template` 옵션을 사용하여 정의하며, Vue 앱과 메인 앱에서 사용되는 템플릿을 분리할 수 있다.
- 컴포넌트를 사용하기 위해 컴포넌트의 식별자를 HTML 태그처럼 사용할 수 있다.
- 컴포넌트를 여러 개 추가하여 독립적으로 작동하는 컴포넌트 그룹을 만들 수 있다.
- 컴포넌트를 사용하면 코드를 캡슐화하고 분리하여 재사용 가능한 작은 조각으로 만들 수 있다.
- 컴포넌트는 프로젝트 규모가 커질 때 코드 작업을 효율적으로 관리할 수 있게 해주며, 다른 컴포넌트와 통신하여 정보를 공유할 수 있다.

### 컴포넌트 사용 예시

```jsx
const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenzo',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
```

# 2. 여러 Vue 앱과 여러 컴포넌트

- HTML 페이지의 여러 독립적인 부분을 제어하는 경우 여러 Vue 앱으로 작업하는 경우가 많다.  
(예: createApp()를 두 번 이상 호출하여 여러 앱을 만듦)
- 반면에 SPA를 구축하는 경우 일반적으로 하나의 "루트 앱"으로 작업하고(즉, createApp()은 전체 코드베이스에서 한 번만 사용됨) 대신 여러 컴포넌트로 사용자 인터페이스를 구축함.
- 여러 Vue 앱이 있는 경우에도 컴포넌트를 사용할 수 있지만, 하나로 연결된 큰 사용자 인터페이스를 구축하는 경우 일반적으로 여러 Vue 앱을 사용하지 않는다.  
- 왜냐하면 Vue 앱은 서로 독립적이므로 서로 통신할 수 없기 때문이다. 통신할 수 있게 하는 비공식적인 방법이 존재할 수 있지만, 앱 간에 데이터를 공유하고 앱 B에서 문제가 발생하는 경우 앱 A에서 업데이트하는 마땅한 공식적인 방법이 없다.  
- 반면에 컴포넌트는 컴포넌트 간에 데이터를 교환할 수 있는 특정 통신 메커니즘을 제공한다.  
따라서 여러 컴포넌트를 포함하는 하나의 루트 앱으로 작업하는 경우 하나로 연결된 UI를 구축할 수 있다.  
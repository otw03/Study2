# 11-Immer 사용해 불변성 관리하기  
[11.1 불변성 업데이트 예시](#111-불변성-업데이트-예시)  
[11.2 immer 라이브러리 사용법](#112-immer-라이브러리-사용법)  
[-- 11.2.1 immer 사용](#1121-immer-사용)  
[-- 11.2.2 immer 활용](#1122-immer-활용)  
[-- 11.2.3 Immer 와 함수형 업데이트](#1123-immer-와-함수형-업데이트)  
[11.3 사용할 때 주의할 점](#113-사용할-때-주의할-점)  

# 11.1 불변성 업데이트 예시

리액트에서 배열이나 객체를 업데이트 해야 할 때에는 직접 수정 하면 안되고  
불변성을 지켜주면서 업데이트를 해주어야 함  

### 불변성 예시1(잘못된 방법)

```jsx
const object = {
  a: 1,
  b: 2
};

object.b = 3;
```

### 불변성 예시2(옳은 방법-전개 연산)

```jsx
const object = {
  a: 1,
  b: 2
};

const nextObject = {
  ...object,
  b: 3
};
```

### 배열, 객체 업데이트하기 예시

배열도 마찬가지로, `push`, `splice` 등의 함수를 사용하거나 n 번째 항목을 직접 수정하면 안되고 아래와 같이 `concat`, `filter`, `map` 등의 함수를 사용해야 함  

```jsx
const todos = [
  {
    id: 1,
    text: '할 일 #1',
    done: true
  },
  {
    id: 2
    text: '할 일 #2',
    done: false
  }
];

const inserted = todos.concat({
  id: 3,
  text: '할 일 #3',
  done: false
});

const filtered = todos.filter(todo => todo.id !== 2);

const toggled = todos.map(
  todo => todo.id === 2
    ? {
      ...todo,
      done: !todo.done,
    }
    : todo
);
```

대부분의 경우 `... 연산자`(전개 연산자) 또는 배열 내장함수를 사용하는건 그렇게 어렵지는 않지만 데이터의 구조가 조금 까다로워지면 불변성을 지켜가면서 새로운 데이터를 생성해내는 코드가 조금 복잡해짐  

아래와 같은 객체를    

```jsx
const state = {
  posts: [
    {
      id: 1,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 1,
          text: '와 정말 잘 읽었습니다.'
        }
      ]
    },
  ],
  selectedId: 1
};
```

`posts` 배열 안의 id 가 1 인 `post` 객체를 찾아서, `comments` 에 새로운 댓글 객체를 추가해줘야 한다고 가정할 때의 업데이트 결과  
⇒ 코드 구조가 복잡해져서 한 눈에 들어오지 않음  

```jsx
const nextState = {
  ...state,
  posts: state.posts.map(post =>
    post.id === 1
      ? {
          ...post,
          comments: post.comments.concat({
            id: 3,
            text: '새로운 댓글'
          })
        }
      : post
  )
};
```

이것을 immer 라이브러리를 사용하면 아래와 같이 구현 가능  

```jsx
const nextState = produce(state, draft => {
  const post = draft.posts.find(post => post.id === 1);
  post.comments.push({
    id: 3,
    text: '와 정말 쉽다!'
  });
});
```

# 11.2 immer 라이브러리 사용법

`immer` 를 사용하는 이유는  
불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것에 있다  

## 11.2.1 immer 사용

### 설치

```jsx
$ yarn add immer
```

### 사용법

코드 상단에 `immer` 를 불러옴  
보통 `produce` 라는 이름으로 불러옴  

```jsx
import produce from 'immer';
```

`produce` 함수를 사용 할 때에는  
첫번째 파라미터에는 수정하고 싶은 상태,  
두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어줌  

두번째 파라미터에 넣는 함수에서는 불변성에 대해서 신경쓰지 않고 그냥 업데이트 해주면 다 알아서 해줌  

```jsx
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft => {
  draft.number += 1;
});

console.log(nextState);
// { number: 2, dontChangeMe: 2 }
```

## 11.2.2 immer 활용

`Immer` 를 사용해서 간단해지는 업데이트가 있고, 오히려 코드가 길어지는 업데이트들이 있음  

배열이 객체의 깊은 곳에 위치하지 않는 경우  
새 항목을 추가하거나 제거 할 때는  
`Immer` 를 사용하는 것 보다 `concat` 과 `filter` 를 사용하는 것이 더 코드가 깔끔할 수 있음  

`Immer` 를 사용한다고 해서 모든 업데이트 로직에서 사용할 필요는 없음  

## 11.2.3 Immer 와 함수형 업데이트

`immer`에서 제공하는 `produce` 함수를 호출할 때,  
첫번째 파라미터에 넣은 상태를 불변성을 유지하면서 새로운 상태를 만들어주지만,  
만약에 첫번째 파라미터를 생략하고 바로 업데이트 함수를 넣어주게 된다면,  
**반환 값은** 새로운 상태가 아닌 **`상태를 업데이트 해주는 함수`**가 됨  

### useState 를 사용해 업데이트 예시

```jsx
const [todo, setTodo] = useState({
  text: 'Hello',
  done: false
});

const onClick = useCallback(() => {
  setTodo(todo => ({
    ...todo,
    done: !todo.done
  }));
}, []);
```

### Immer 를 사용해 업데이트 예시

`produce` 가 반환하는 것이 업데이트 함수가 되기 때문에 `useState` 의 업데이트 함수를 사용 할 때 다음과 같이 구현 할 수 있게 됨  

```jsx
const [todo, setTodo] = useState({
  text: 'Hello',
  done: false
});

const onClick = useCallback(() => {
  setTodo(
    produce(draft => {
      draft.done = !draft.done;
    })
  );
}, []);
```

# 11.3 사용할 때 주의할 점

성능적으로는 `Immer` 를 사용하지 않은 코드가 조금 더 빠르다는 점 때문에  
무조건 사용하기 보다는, 가능하면 데이터의 구조가 복잡해지게 되는 것을 방지하고  
어쩔 수 없을 때 `Immer` 를 사용하는것이 좋음  

`Immer` 를 사용한다고 해도, 필요한 곳에만 쓰고, 간단히 처리 될 수 있는 곳에서는 그냥 일반 JavaScript 로 구현하는 것을 추천함
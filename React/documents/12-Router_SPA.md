# 12-리액트 라우터로 SPA 개발  
[12.1 라우팅](#121-라우팅)  
[-- 12.1.1 라우팅, 라우터(Router)](#1211-라우팅-라우터router)  
[12.2 SPA(Single Page Application)](#122-spasingle-page-application)  
[-- 12.2.1 SPA란?](#1221-spa란)  
[-- 12.2.2 SPA의 장단점](#1222-spa의-장단점)  
[12.3 URL 파라미터와 쿼리스트링](#123-url-파라미터와-쿼리스트링)  
[-- 12.3.1 URL파라미터와 쿼리스트링](#1231-url파라미터와-쿼리스트링)  
[-- 12.3.2 React에서 URL파라미터와 쿼리스트링 사용법](#1232-react에서-url파라미터와-쿼리스트링-사용법)  
[-- -- useParams](#useparams)  
[-- -- useLocation](#uselocation)  
[-- -- useSearchParams](#usesearchparams)  

# 12.1 라우팅

## 12.1.1 라우팅, 라우터(Router)

- 웹에서의 라우팅은 URL의 경로(path)를 기반으로 해당 경로에 대응하는 컨텐츠를 표시하는 것
- 라우터(Router): 분배하는 기능을 수행하는 소프트웨어나 하드웨어
- React의 Router는 URL에 의해 컴포넌트를 분배하는 기능을 한다.
- HTML5에서 Javascript에 추가된 기능중 history객체를 통해 URL을 변조하는 기능이 있다.  
리액트의 Router는 이 기능을 활용하여 현재 페이지의 URL을 다양하게 변조하여 거기에 각각의 컴포넌트를 분배한다.

# 12.2 SPA(Single Page Application)

## 12.2.1 SPA란?

- 하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식
- js 파일로 웹 페이지 화면을 변경하는 형태로 구현된다
- 전통적인 멀티 페이지 애플리케이션(Multi-Page Application, MPA)에서는 사용자가 다른 페이지로 이동할 때마다 브라우저가 새로운 페이지를 로드함  
⇒ 페이지를 이동할 때마다 서버로부터 HTML, CSS, JavaScript 를 받아옴
- 반면에 단일 페이지 애플리케이션(Single Page Application, SPA)에서는 초기 로딩 후에는 새로운 페이지를 로드하지 않으며, 필요한 데이터만 서버로부터 받아오고 라우팅을 사용하여 동적으로 컨텐츠를 변경함

## 12.2.2 SPA의 장단점

### SPA개발의 장점

- 페이지 이동 없이 JS에 의해 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 실행 속도가 빠르다  
⇒ 사용자 경험 향상

### SPA개발의 단점

- JS코드가 비대해 질 수 있다. [코드 스플리팅](https://bamtory29.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%BD%94%EB%93%9C-%EC%8A%A4%ED%94%8C%EB%A6%AC%ED%8C%85) 기법으로 해결가능(코드 분할 작성)

> 코드 스플리팅: 지금 당장 필요한 코드가 아니라면 따로 분리 시켜서, 나중에 필요할 때 불러와서 사용  
⇒ 이를 통하여, 페이지의 로딩 속도를 개선
> 
- 하나의 HTML이므로 SEO(검색엔진 최적화)에 취약하다 (서버사이드 렌더링으로 해결 가능)

> 서버 사이드 렌더링: 서버에서 페이지를 그려 클라이언트(브라우저)로 보낸 후 화면에 표시하는 기법
>

# 12.3 URL 파라미터와 쿼리스트링

## 12.3.1 URL파라미터와 쿼리스트링

- URL 파라미터는 주소의 경로에 유동적인 값을 넣는 형태이며,
- 쿼리스트링은 주소의 뒷부분에 **`?`** 문자 이후 **`key=value`**를 정의하며 **`&`**로 구분하는 형태

```jsx
https://www.example.com/users/1234
```

위 URL은 "**https://www.example.com"이라는** 도메인의 "/users/1234"라는 경로를 나타냄  
여기서 "1234"는 URL 파라미터로, 이 URL이 가리키는 페이지에서 사용되는 변수의 값이다  
즉, 이 URL이 가리키는 페이지에서는 "1234"라는 값을 가진 사용자 정보를 보여줌  

```jsx
https://www.example.com/search?q=apple&lang=en
```

위 URL은 "**https://www.example.com"이라는** 도메인의 "/search"라는 경로를 나타내며,  "q=apple"과 "lang=en"이라는 두 개의 쿼리스트링이 포함됨    
이 URL이 가리키는 페이지에서는 “q”는 "apple", “lang”은 "en"(영어)로 설정되어 검색어를 검색함    

- 일반적으로는 파라미터는 특정 id 나 이름을 가지고 조회를 할 때 사용하고,
- 쿼리의 경우엔 어떤 키워드를 검색하거나, 요청을 할 때 필요한 옵션을 전달 할 때 사용함

## 12.3.2 React에서 URL파라미터와 쿼리스트링 사용법

### useParams

url파라미터를 통해서 여러개의 페이지를 생성하고 싶을때, `useParams()`를 사용  

```jsx
<Route path="/users/:id" element={<Detail names={names}/>}/>
```

위 코드의 경우 `:id`라는것이 `url 파라미터`이다.  

- 예시

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  // id 변수를 사용하여 렌더링할 내용을 작성합니다.
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
}
```

### ****useLocation****

React Router에서 쿼리스트링은 `location` 객체를 이용하여 가져옴  

`useLocation()`은 앞서 나왔던 `useParams()`와 동일하게 현재 페이지의 쿼리스트링이 반환됨  

작성할때는 `useParams()`와 동일하게 작성하면 사용가능  

```jsx
const location = useLocation();
```

반환값이 location이기때문에 다양한 값을 사용 가능  

- .pathname : 현재 주소의 경로(쿼리스트링 제외 ?앞의값)
- search : 맨앞에 ? 문자를 포함한 쿼리스트링 값
- state : 페이지로 이동할때 임의로 넣을수 있는 상태값
- key : location의 고유값, 초기에는 default이며 페이지가 변경될 때 마다 고유의값이 생성됨

### useSearchParams

`[location.search](http://location.search)` 를 받아올 경우  
`?`와 `&`를 분리한후 `key`와 `value`를 파싱해줘야하는 번거로움이 존재  

이것을 해결하기 위해 `useSearchParams` 사용  

`URLSearchParams`를 이용하여 쿼리스트링 값을 가져옴  
이후, `get` 메서드를 이용하여 각각의 쿼리스트링 값을 가져올 수 있음  

```jsx
import { useLocation } from 'react-router-dom';

function SearchResults() {
	// 위와 아래 두 방법 다 가능
  //const {search} = location;
  //const searchParams = new URLSearchParams(search);
  const searchParams = new URLSearchParams(useLocation().search);
  const q = searchParams.get('q');
  const lang = searchParams.get('lang');
  // q와 lang 변수를 사용하여 검색 결과를 렌더링합니다.
  return (
    <div>
      <h1>Search results for "{q}" in {lang}</h1>
    </div>
  );
}
```
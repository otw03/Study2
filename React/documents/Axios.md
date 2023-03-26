# API 연동하기
[.1 Axios](#1-axios)  
[-- .1.1 axios 란?](#11-axios-란)  
[-- .1.2 axios 메서드 종류와 역할](#12-axios-메서드-종류와-역할)  

# .1 Axios

API 를 호출하기 위해서 axios 라는 라이브러리를 설치  

```bash
npm install axios
또는
yarn add axios
```

## .1.1 axios 란?

웹 브라우저와 Node.js에서 사용되는 **HTTP 통신** 라이브러리. Promise 객체를 기반으로 만들어짐.  
비동기 요청 가능  

서버로 데이터를 보내거나 서버로부터 데이터를 받아오는 API 요청을 수행하는 데 사용  

> **API(Application Programming Interface)**
> 
> 
> 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스  
> 여기서 인터페이스는 프로그램과 프로그램을 연결해 주는 다리 역할을 하는 것을 의미한다  
> 

## .1.2 axios 메서드 종류와 역할

- `axios.get(url[, config])`: GET 요청을 보냅니다.  
URL 주소와 선택적으로 구성 옵션을 인수로 받습니다.  
GET 요청은 데이터를 가져오는 데 사용되며, URL 쿼리 매개변수를 이용해 데이터를 검색합니다.
- `axios.post(url[, data[, config]])`: POST 요청을 보냅니다.  
URL 주소와 전송할 데이터, 선택적으로 구성 옵션을 인수로 받습니다.  
POST 요청은 서버에 데이터를 제출하는 데 사용됩니다. 데이터는 요청의 본문에 포함됩니다.
- `axios.put(url[, data[, config]])`: PUT 요청을 보냅니다.  
URL 주소와 업데이트할 데이터, 선택적으로 구성 옵션을 인수로 받습니다.  
PUT 요청은 지정된 URL에 대한 모든 데이터를 교체하는 데 사용됩니다.
- `axios.patch(url[, data[, config]])`: PATCH 요청을 보냅니다.  
URL 주소와 부분적으로 업데이트할 데이터, 선택적으로 구성 옵션을 인수로 받습니다.  
PATCH 요청은 지정된 URL에서 일부 데이터를 업데이트하거나 수정하는 데 사용됩니다.
- `axios.delete(url[, config])`: DELETE 요청을 보냅니다.  
URL 주소와 선택적으로 구성 옵션을 인수로 받습니다.  
DELETE 요청은 지정된 URL에서 리소스를 삭제하는 데 사용됩니다.
- `axios.head(url[, config])`: HEAD 요청을 보냅니다.  
URL 주소와 선택적으로 구성 옵션을 인수로 받습니다.  
HEAD 요청은 GET 요청과 유사하지만, 서버에서는 응답 본문을 반환하지 않고, 헤더 정보만을 반환합니다.
- `axios.options(url[, config])`: OPTIONS 요청을 보냅니다.
  URL 주소와 선택적으로 구성 옵션을 인수로 받습니다.
  OPTIONS 요청은 서버가 지원하는 HTTP 메서드 및 리소스에 대한 정보를 요청하는 데 사용됩니다. 이 메서드는 CORS(Cross-Origin Resource Sharing)에서 중요한 역할을 합니다.

> `url`: 요청을 보낼 URL 주소입니다.
> 
> 
> `data` (선택사항): 요청 바디에 담을 데이터입니다. 객체로 전달됩니다.  
> 
> `config` (선택사항): 요청에 대한 구성 옵션입니다. 객체로 전달할 수 있으며, 아래와 같은 옵션을 가질 수 있습니다.  
> 
> - `params`: 요청에 대한 URL 쿼리 매개변수를 설정합니다. 객체 형태로 전달됩니다.
> - `headers`: 요청에 대한 헤더를 설정합니다. 객체 형태로 전달됩니다.
> - `timeout`: 요청 시간 제한을 설정합니다.
> - `responseType`: 응답의 데이터 타입을 설정합니다. 예를 들어, `arraybuffer`, `blob`, `document`, `json`, `text` 등이 있습니다.  

`then()`과 `catch()` 메서드는 Axios의 모든 요청 메서드에서 반환되는 Promise 객체를 핸들링합니다.  

`then()` 메서드는 성공적인 요청 후 호출되며, 요청으로부터 받은 데이터를 인자로 받습니다.  

```jsx
javascriptCopy code
axios.get('/user/12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

`catch()` 메서드는 요청 중 발생한 에러를 핸들링합니다.

```jsx
javascriptCopy code
axios.get('/user/12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

또한 `then()`과 `catch()` 메서드를 체이닝하여 여러 개의 Promise를 관리할 수 있습니다.

```jsx
javascriptCopy code
axios.get('/user/12345')
  .then(function (response) {
    console.log(response);
    return axios.post('/user/12345', { name: 'John' });
  })
  .then(function (response) {
    console.log(response);
    return axios.get('/user/12345');
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

위 예제에서, `GET` 요청이 성공하면 `POST` 요청을 보내고, 그 다음 `GET` 요청을 보내고 있습니다. 만약 에러가 발생하면, `catch()` 메서드가 호출됩니다.

---

- 이 외에도 `axios.request(config)` 메서드를 사용하여 모든 유형의 HTTP 요청을 보낼 수 있습니다.  
이 방법은 `config` 객체에 요청 메서드를 설정하는 것입니다.

```jsx
javascriptCopy code
axios.request({
  url: '/user',
  method: 'post',
  data: {
    firstName: 'John',
    lastName: 'Doe'
  }
});

```

이러한 메서드는 Promise 객체를 반환합니다.  
`then()` 메서드는 성공적인 요청 후 호출되며,  
`catch()` 메서드는 요청 중 발생한 에러를 핸들링합니다.
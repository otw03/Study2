# express  
[6.1 Express](#61-express)  
[-- 6.1.1 Express 란?](#611-express-란)  
[6.2 app.js 작성](#62-appjs-작성)  
[6.3 자주 사용하는 미들웨어](#63-자주-사용하는-미들웨어)  
[-- 6.3.1 미들웨어](#631-미들웨어)  
[-- 6.3.2 에러 처리 미들웨어](#632-에러-처리-미들웨어)  
[6.4 req, res 객체 살펴보기](#64-req-res-객체-살펴보기)  
[-- 6.4.1 req](#641-req)  
[-- 6.4.2 res](#642-res)  


# 6.1 Express

## 6.1.1 Express 란?

node.js 서버 구현 프레임워크  

### express 설치

```bash
npm install express
```

또는

```bash
yarn add express
```

# 6.2 app.js 작성

### 서버 구동의 핵심이 되는 파일

- app.set(‘port’, 포트)로 서버가 실행될 포트 지정
- app.get(‘주소’, 라우터)로 GET 요청이 올 때 어떤 동작을 할지 지정
- app.listen(‘포트’, 콜백)으로 몇 번 포트에서 서버를 실행할지 지정

### express 모듈 참조 + 객체 생성 + 포트번호

여기서 생성한 app 객체의 use() 함수를 사용해서
각종 외부 기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.

```jsx
const express = require('express'); // Express 모듈 불러오기
const app = express();
const port = 포트번호;
```

### get요청시 응답내용 작성

```jsx
// http://localhost:port/경로
app.get("/", (req, res) => {
	// 브라우저에 보낼 응답 내용
	let html = '<h1>Express로 구현한 Node.js 백엔드 페이지</h1>';

	// 응답 보내기
	res.status(200).send(html);
});
```

### 서버 실행

```jsx
app.listen(port, () => {
	console.log("start express server");
	console.log(`server address => http://localhost:${port}`);
}
```

터미널에 다음 명령어로 서버 실행

```bash
node 파일경로
```

# 6.3 자주 사용하는 미들웨어

## 6.3.1 미들웨어

### 익스프레스는 미들웨어로 구성됨

- 요청과 응답의 중간에 위치하여 미들웨어
- app.use(미들웨어)로 장착
- 위에서 아래로 순서대로 실행됨.
- 미들웨어는 req, res, next가 매개변수인 함수
- req: 요청, res: 응답 조작 가능
- next()로 다음 미들웨어로 넘어감.

### 미들웨어가 실행되는 경우

| app.use(미들웨어) | 모든 요청에서 미들웨어 실행 |
| --- | --- |
| app.use(’/abc’, 미들웨어) | abc로 시작하는 요청에서 미들웨어 실행 |
| app.post(’/abc’, 미들웨어) | abc로 시작하는 POST 요청에서 미들웨어 실행 |

## 6.3.2 에러 처리 미들웨어

### 에러가 발생하면 에러 처리 미들웨어로

- err, req, res, next까지 매개변수가 4개
- 첫 번째 err에는 에러가 관한 정보가 담김
- res.status 메서드로 HTTP 상태 코드를 지정 가능(기본값 200)
- 에러 처리 미들웨어를 안 연결해도 익스프레스가 에러를 알아서 처리해주긴 함.
- 특별한 경우가 아니면 가장 아래에 위치하도록 함.

# 6.4 req, res 객체 살펴보기

## 6.4.1 req

- req.app: req 객체를 통해 app 객체에 접근할 수 있습니다. req.app.get('port')와 같은 식으로 사용할 수 있습니다.
- req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체입니다.
- req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체입니다.
- req.ip: 요청의 ip 주소가 담겨 있습니다.
- req.params: 라우트 매개변수에 대한 정보가 담긴 객체입니다.
- req.query: 쿼리스트링에 대한 정보가 담긴 객체입니다.
- req.signedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있습니다.
- req.get(헤더 이름): 헤더의 값을 가져오고 싶을 때 사용하는 메서드입니다

## 6.4.2 res

- res.app: req.app처럼 res 객체를 통해 app 객체에 접근할 수 있습니다.
- res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드입니다.
- res.clearCookie(키, 값, 옵션): 쿠키를 제거하는 메서드입니다.
- res.end(): 데이터 없이 응답을 보냅니다.
- res.json(JSON): JSON 형식의 응답을 보냅니다.
- res.redirect(주소): 리다이렉트할 주소와 함께 응답을 보냅니다.
- res.render(뷰, 데이터): 다음 절에서 다룰 템플릿 엔진을 렌더링해서 응답할 때 사용하는 메서드입니다.
- res.send(데이터): 데이터와 함께 응답을 보냅니다. 데이터는 문자열일 수도 있고H TML일 수도 있으며, 버퍼일 수도 있고 객체나 배열일 수도 있습니다.
- res.sendFile(경로): 경로에 위치한 파일을 응답합니다.
- res.setHeader(헤더, 값): 응답의 헤더를 설정합니다.
- res.status(코드): 응답 시의 HTTP 상태 코드를 지정합니다.
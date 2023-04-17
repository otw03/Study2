# Node.js  
[1.1 Node.js 란?](#11-nodejs-란)  
[1.2 Node.js 특성](#12-nodejs-특성)  
[-- 1.2.1 논블로킹(Non-blocking) I/O](#121-논블로킹non-blocking-io)  
[1.3 Express](#13-express)  
[-- 1.3.1 Express 란?](#131-express-란)  

# 1.1 Node.js 란?

구글 크롬의 js해석 엔진(V8)으로 이루어져 있다.  

js를 브라우저 외 다른 환경에서도 실행할 수 있게 해줌

js 실행창, 실행환경 

# 1.2 Node.js 특성

- Event-driven(이벤트 기반), Non-blocking I/O 특성을 가지는 실행 환경
- SNS, 채팅 서비스처럼 요청이 한번에 매우 많이 일어나는 서비스에 적합하다.
- JS로 웹서버 개발 가능
- 코드가 짧고 쉬워서 빠른 개발 가능 ⇒ 개발 생산성 향상

## 1.2.1 논블로킹(Non-blocking) I/O  

논 블로킹 : 오래 걸리는 함수를 백그라운드로 보내서 다음 코드가 먼저 실행되게 하고, 나중에 오래 걸리는 함수를 실행  
- 논 블로킹 방식 하에서 일부 코드는 백그라운드에서 병렬로 실행  
- 일부 코드: I/O 작업(파일 시스템 접근, 네트워크 요청), 압축, 암호화 등  
- 나머지 코드는 블로킹 방식으로 실행됨  
- I/O 작업이 많을 때 노드 활용성이 극대화  


영화 예매 서버의 처리 단계
1. 고객 요청
2. 요청 승낙후 처리
3. 티켓 고객에게 보내줌
- **일반 프로그래밍 언어로 서버 개발시**  
요청을 하나씩 받는다.  
요청이 많거나 오래 걸리는 요청이 있으면 그것을 처리하기 위해 다른 사용자의 요청을 못 받는다. (멈추거나 대기시간 발생)
- **node.js로 서버 개발시**  
요청을 한번에 받는다.  
처리속도가 빠른 것 순서로 요청을 처리한다.  그렇기 때문에 요청 받는 것을 멈추지 않는다.  (멈추거나 대기시간X)
- 일반 서버가 이것을 못하느냐?  
서버 스케일링 혹은 멀티 쓰레딩을 통해 해결  
⇒ 요청을 처리하는 서버를 늘린다

# 1.3 Express

## 1.3.1 Express 란?

node.js 서버 구현 프레임워크  

### express 설치

```bash
npm install express
```

또는

```bash
yarn add express
```

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
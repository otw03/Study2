# 웹 API 서버 만들기

# API란?

프로그램과 프로그램을 이어주는 매개체  

# 웹 API 란?

다른 웹 서비스의 기능사용, 자원을 가져오는 창구  

API를 만들었다 or 열었다: 다른 프로그램에서 현재 기능을 사용할 수 있게 허용했다  

다른 사용자에게 제공하고 싶은 부분만 API를 열고, 제공하고 싶지 않은 부분은 API를 만들지 않음  

# 웹 API 서버

서버에 API를 올려서 URL을 통해 접근할 수 있게 만든 것

# 크롤링

외부에 보이는 웹 사이트의 정보를 일정 주기로 수집해 자체적으로 가공하는 기술  

웹 사이트가 자제적으로 제공하는 API가 없거나 API 이용에 제한이 있을 때 사용하는 방법  

# CORS(Cross-Origin Resource Sharing)

### CORS(Cross-Origin Resource Sharing)란,

웹 브라우저에서 보안상의 이유로, 도메인이 다른 서버 간에 자원을 주고받는 것을 제한하는 보안 정책

### CORS 문제

현재 요청을 보내는 클라이언트와 요청을 받는 서버의 도메인이 다른 경우

### 해결법

서버에서 Access-Control-Allow-Origin 헤더를 설정(HTTP 헤더를 사용하여 다른 도메인에서의 리소스 요청을 허용)  

`Access-Control-Allow-Origin: [http://example.com](http://example.com/)`
# 시맨틱 태그

시맨틱 요소는 브라우저와 개발자 모두에게 의미를 명확하게 설명합니다.  

웹 접근성을 지키기 위해 더욱 시맨틱 태그의 사용이 중요하다.  

**의미 없는** 요소 의 예 : `<div>`및 `<span>`- 내용에 대해 아무 것도 알려주지 않습니다.  

**의미** 요소 의 예 : `<form>`, `<table>`및 `<article>`- 내용을 명확하게 정의합니다.  

### 시맨틱 태그의 장점

- 검색 엔진은 의미론적 마크업 을 페이지의 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 간주합니다 ([SEO](https://developer.mozilla.org/ko/docs/Glossary/SEO) 참조).
- 시각 장애가 있는 사용자가 화면 판독기로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있습니다.
- 의미없고 클래스 이름이 붙여져있거나 그렇지 않은 끊임없는 `div` 들을 탐색하는 것보다, 의미있는 코드 블록을 찾는 것이 훨씬 쉽습니다.
- 개발자에게 태그 안에 채워질 데이터 유형을 제안합니다
- 의미있는 이름짓기(Semantic naming)는 적절한 사용자 정의 요소 / 구성 요소의 이름짓기(namimg)를 반영합니다.

### 시맨틱 태그의 종류

- `<header>` : 헤더. 문서 또는 섹션의 헤더를 지정
- `<nav>` : 내비게이션
- `<section>` : 콘텐츠 영역(여러 중심 내용을 감싸는 공간)
- `<article>` : 글자가 많이 들어가는 부분
- `<aside>` : 사이드에 위치하는 공간
- `<footer>` : 푸터(제작정보와 저작권 표시)
- `<figcaption>` : 캡션을 정의합니다. `<figure>` 요소 는 `<figcaption>`요소의 첫 번째 또는 마지막 자식으로 배치할 수 있습니다
- `<figure>` : 일러스트레이션, 다이어그램, 사진, 코드 목록 등과 같은 자체 포함된 콘텐츠를 지정
- `<hgroup>` : 제목그룹
- `<address>` : 주소부분(태그는 문서나 글의 저자 또는 회사와 연락할 수 있는 정보를 명시)
- `<details>` : 사용자가 보거나 숨길 수 있는 추가 세부 정보를 정의
- `<main>` : 문서의 주요 내용을 지정
- `<mark>` : 표시/강조표시된 텍스트를 정의
- `<summary>` : `<details>` 요소에 대해 표시되는 제목을 정의
- `<time>` : 날짜/시간을 정의

> 같은 section 태그를 쓰는 다른 부분이 있으면, id를 이용해서 구분한다.
>
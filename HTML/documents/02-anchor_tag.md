# anchor_tag-앵커태그
[1. anchor_img](#1-anchor_img)  
[-- 1.1 텍스트를 이용한 링크(앵커태그)](#11-텍스트를-이용한-링크앵커태그)  
[-- 1.2 이미지를 이용한 링크](#12-이미지를-이용한-링크)  
[-- 1.3 이미지 태그](#13-이미지-태그)  
[-- 1.4 앵커태그를 이용한 앱 바로 연결 (하이픈은 없어도 무방)](#14-앵커태그를-이용한-앱-바로-연결-하이픈은-없어도-무방)  
[-- 1.5 이미지의 종류](#15-이미지의-종류)  
[-- 1.6 요약](#16-요약)  
[2. section_link](#2-section_link)  
[-- 2.1 앵커태그를 이용한 페이지 내부 영역 이동](#21-앵커태그를-이용한-페이지-내부-영역-이동)  
[3. anchor_test](#3-anchor_test)  
[-- 3.1 앵커태그를 이용한 다른 페이지 이동](#31-앵커태그를-이용한-다른-페이지-이동)  


# 1. anchor_img

## 1.1 텍스트를 이용한 링크(앵커태그)

- `<a>` : 하이퍼링크를 정의합니다.
- `href` : 속성은 링크가 이동하는 페이지의 URL을 지정합니다.
- `target="_blank"` : 새 창에서 링크 열기

```html
<a href="http://naver.com" target="_blank">네이버</a>
```

## 1.2 이미지를 이용한 링크

- `<img>` : HTML 페이지에 이미지를 삽입하는 데 사용됩니다 .
- `src` : 표시할 이미지의 경로를 지정합니다 .

```html
<a href="http://naver.com">
    <img src="../../../WEB_UI/images/day1_images/naver_logo.png" alt="네이버 로고 이미지" width="100">
</a>
```

## 1.3 이미지 태그

- `alt` : `<img>` 태그가 어떤 이유로 이미지를 표시할 수 없는 경우 이미지에 대한 대체 텍스트를 지정합니다. 연결 속도가 느리거나 속성 오류가 `src`있거나 사용자가 스크린 리더를 사용하기 때문일 수 있습니다.
- `title` : 제목. 요소에 대한 몇 가지 추가 정보를 정의. 제목 속성 값은 요소 위로 마우스를 가져가면 툴팁으로 표시됩니다. 도움말을 띄우고 싶을 때 사용.

```html
<img src="펭귄.jpg" alt="이미지가 나타나지 않을 때 대체 텍스트" title="이미지 제목">
```

## 1.4 앵커태그를 이용한 앱 바로 연결 (하이픈은 없어도 무방)

```html
<a href="tel:010-1234-5678">전화걸기</a>
<a href="sms:010-1234-5678">메세지 보내기</a>
<a href="mailto:hello@gmail.com">이메일 보내기</a>
```

## 1.5 이미지의 종류

- GIF : 256색 지원 : 웹
- JPG : 높은 압축률 : 비교적 낮은 해상도 : 웹+인쇄
- PNG : 비교적 높은 해상도 : 웹

---

## 1.6 요약

1. 이미지에 대체 텍스트 삽입(필수)  
alt(alternate=대체)속성 : 이미지가 나타나지 않을 경우 대신 그 설명해주는 문구.  
장식용 이미지에는 alt=”” 를 사용(속성 입력하되 값은 비워둠)  
W3C 웹표준 권고사항으로 모든 img 태그에 alt 속성은 필수로 입력하게끔 나와있습니다.(웹접근성)
2. width, height 속성 : 이미지의 너비, 높이 조절  
현재는 CSS로 조절하기 때문에 이미지 태그에 직접 입력하지 않습니다(지양)  
강제로 이미지의 사이즈를 늘리거나 줄일 수 있습니다.  
width, height 속성값에 px 외에 다른 단위 사용X
3.  title 속성 : 마우스를 이미지에 1~2초 정도 올리고 있으면 tooltip(풍선도움말)으로 나타납니다.(이미지의 제목 속성)
4. 링크 새창(새탭)에서 열기 : 앵커태그의 타겟 속성을 사용, 링크 클릭 시 새 탭(창)으로 열리게끔 설정  
ex) target="_blank"
5. 앵커태그를 이용해 어플리케이션을 활용할 수도 있습니다.(반응형웹에 유용)  
ex) `<a href="tel:010-1234-5678">전화걸기</a>`    바로 전화 걸기  
ex) `<a href="sms:010-1234-5678">메세지 보내기</a>`   문자 보내기  
ex) `<a href="mailto:hello@gamil.com">이메일 보내기</a>`  이메일 보내기

# 2. section_link

## 2.1 앵커태그를 이용한 페이지 내부 영역 이동

- `id=""` 로 위치 지정 가능
- id 선택자 : #
- `<a href="#">` 는 최상단으로 이동

```html
<p><a href="#seoul">서울</a></p>

<p id="seoul">서울은 비가 옵니다.<a href="#">▲TOP</a></p>
```

---

# 3. anchor_test

## 3.1 앵커태그를 이용한 다른 페이지 이동

- 상대경로를 통한 다른 페이지 이동

```html
// 메인 페이지
<body>
    <a href="./hyperlink/page1.html">1페이지</a> | <a href="./hyperlink/sub2/page2.html">2페이지</a> | <a href="./hyperlink/sub3/sub3_1/page3.html">3페이지</a>
    <img src="../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>

// 1페이지
<body>
    <a href="../ui_04_anchor_test.html">메인페이지</a> | <a href="./sub2/page2.html">2페이지</a> | <a href="./sub3/sub3_1/page3.html">3페이지</a>
    <img src="../../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>

// 2페이지
<body>
    <a href="../../ui_04_anchor_test.html">메인페이지</a> | <a href="../page1.html">1페이지</a> | <a href="../sub3/sub3_1/page3.html">3페이지</a>
    <img src="../../../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>

// 3페이지
<body>
    <a href="../../../ui_04_anchor_test.html">메인페이지</a> | <a href="../../page1.html">1페이지</a> | <a href="../../sub2/page2.html">2페이지</a>
    <img src="../../../../../../WEB_UI/images/day1_images/penguin.jpg" alt="펭귄이미지">
</body>
```


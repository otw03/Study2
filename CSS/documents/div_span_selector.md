# 공간분할태그(div, span) / CSS 선택자
[1. 공간분할태그(div, span)](#1-공간분할태그div-span)  
[2. CSS 선택자](#2-css-선택자)  
[3. 후손(하위)선택자와 자손(자식,직하위)선택](#3-후손하위선택자와-자손자식직하위선택자)  
[4. 구조선택자](#4-구조선택자)  

# 1. 공간분할태그(div, span)
- `div` : division : 나누다, 분할하다 / block 속성 태그
- `span` : span : 폭(너비) / inline 속성 태그

```html
<body>
    <div>첫번째 박스</div>
    
    <span>첫번째 영역</span>
</body>
```
# 2. CSS 선택자
- `전체선택자(*)` : 모든 html 태그를 선택해서 margin(간격), padding(여백), border(테두리) 값을 모두 0으로 만들어 모든 브라우저에서 일정하게 보이도록 리셋하고 시작합니다.  
단, 실무에서는 전체선택자를 잘 사용하지 않는다.(과부하)  
"reset css" 검색 및 사용 [mayerweb.com](http://mayerweb.com)

```css
* {margin: 0; padding: 0; border: 0;}
```

- `태그 선택자` : 태그 선택자에는 아무것도 붙이지 않고 `태그의 이름`만 작성합니다.  
현재 문서 내에 있는 모든 div태그를 선택, 글자색을 빨간색으로 만들었습니다.

```css
div {color: red;}
```

- `반응선택자` : 반응선택자는 `:hover` 형식으로 작성, 그 앞에는 마우스를 올릴 '대상' 선택자를 작성해(띄어쓰기X)  
현재 문서 내에 있는 모든 div태그에 마우스를 올렸을 때 배경색을 노랗게 만들었습니다.

```css
div:hover {background-color: yellow;}
```

- `id 선택자` : `샵(#)`을 붙이고 최대한 알아보기 쉽고 적합한 단어로 지어서 만듭니다. (숫자가 앞에 오면 안됨. 띄어쓰기도 안됨.)  
아이디는 만든 다음에 태그에 지정하거나 지정 후 만든다. 순서는 상관이 없습니다.(연결만 잘 시켜주면 됨)  
**한 페이지 안에 한 개만 작성**해야 합니다.(**중복X**) 하나의 고유한 태그에만 적용  
box3라는 아이디를 가지고 있는 태그를 선택해 배경색을 파란색으로 만들었습니다.

```css
#box3 {background-color: blue;}
```

- `class 선택자` : `점(.)`을 붙이고, 하나의 클래스를 만들어서 여러 군데 태그에 중복으로 사용 가능  
재사용성이 높은 선택자, 웹사이트 제작시 가장 많이 사용되는 선택자  
orange라는 클래스를 가지고 있는 태그들의 글자색을 오렌지색으로 만들었습니다.

```html
.orange {color: orange;}
.font30 {font-size: 30px;}

<body>
		<span class="orange font30">첫번째 영역</span>
</body>
```

- `속성선택자`  
`선택자[속성명]` : 해당 속성을 가지고 있는 태그를 선택  
`선택자[속성명=속성값]` : 해당 속성을 가지고 있고, 속성값이 일치하는 것을 선택  
span태그 중 class라는 속성을 가지고 있는 태그를 모두 선택, 배경색을 초록색으로 만들었습니다. input태그에서 많이 사용합니다.

```css
span[class] {background-color: green;}
```

- `동위선택자`  
`선택자A + 선택자B` : 동위관계에 있는 형제요소들 중, 선택자A의 바로 뒤에 오는 선택자B를 선택(단일)  
h1의 바로 뒤에 있는 span를 선택, font-size를 50px로  만들어라.  
적용이 안 된 이유는 동위선택자보다 class선택자가 우선순위가 더 높기 때문

```css
h1+span {font-size: 50px;}
```

- 동위선택자
`선택자A + 선택자B` : 동위관계에 있는 형제요소들 중, 선택자A의 바로 뒤에 오는 선택자B들을 선택(복수)  
h1 뒤에 오는 span태그들을 선택해 글자색을 파랗게(첫번째~다섯번째 영역)  
첫번째, 세번째 sapn태그는 변경 안된 이유: 클래스 선택자가 동위선택자보다 우선순위가 높기 때문에 우선 적용.

```css
h1~span {color: blue;}
```

- **CSS선택자 우선순위**
    
    범위가 좁을수록 우선순위가 높다.  
    ex: (!important) > 인라인스타일 > id > class > tag > * ...  
    
- 같은 속성이 적용될 경우 `나중에 적힌 속성이 우선 적용`됨

```css
#test {background-color: lime; background-color: aqua;}
```

---

# 3. 후손(하위)선택자와 자손(자식,직하위)선택자

```html
<body>
	<div id="header">
	    <h1>웹퍼블리셔</h1>
	    <div>
	        <h1>6일차</h1>
	    </div>
	</div>
</body>
```

- #header라는 id를 가지고 있는 선택자의 '자식' 중 h1을 선택해서 글자색을 빨갛게 만들어라

```css
#header>h1 {color: red;}
```

- #header라는 id를 가지고 있는 선택자의 '자식' 중 div를 선택하고 그 div의 자식인 h1을 선택해서 배경색을 노랗게 만들어라  
자손선택자는 직하위에 있는 요소를 선택

```css
#header>div>h1 {background-color: yellow;}
```

---

```html
<body>
<div id="section">
      <h2>후손선택자와 자식선택자</h2>
      <div id="article">
          <h2 class="text">후손선택자와 자식선택자의 차이</h2>
          <p class="text">얘는 위 12px의 속성이 적용 될까요?</p>
      </div>
  </div>
</body>
```

- #section이라는 id를 가지고 있는 선택자의 '후손' 중 h2를 선택, 배경색을 하늘색으로 후손선택자는 하위요소를 모두 선택함.

```css
#section h2 {background-color: skyblue;}
```

- `.text`를 `'자식선택자'`를 이용하여 글자 크기를 12px로 변경하기

```css
#article>.text {font-size: 12px;}
```

- 태그선택자와 클래스선택자(or아이디) 붙여서 작성하면 더 정확히 선택 가능

```css
p.text {color: orange;}
```

---

# 4. 구조선택자

```html
<body>
    <!-- ul 또는 ol 태그 직하위에 li를 제외한 다른 태그가 들어오면 안됩니다.(웹표준에 어긋남) 예제를 위해 작성한 것이니 참고. -->
    <ul>
        <li>짜장</li>
        <li>짬뽕</li>
        <li>탕수육</li>
        <li>마파밥</li>
        <h2>북경반점</h2>
        <li>삼선짬뽕</li>
        <li>유산슬</li>
        <li>깐풍기</li>
        <li>쟁반짜장</li>
        <h2>홍콩반점</h2>
    </ul>
    <hr>
    <ol>
        <h1>중식류</h1>
        <li>짜장</li>
        <li>짬뽕</li>
        <li>탕수육</li>
        <h1>식사류</h1>
        <li>마파밥</li>
        <li>삼선짬뽕</li>
        <li>짬뽕밥</li>
        <h1>요리류</h1>
        <li>유산슬</li>
        <li>깐풍기</li>
        <h2>감사합니다.</h2>
    </ol>
</body>
```

### `일반구조선택자` : 자식요소의 '순번' 위주.

선택하고자 하는 태그의 이름을 잘 보고 작성해야 함.  

- `ul>li:first-child {color: red;}` : 첫번째 자식(짜장)
- `ul>h2:last-child {color: green;}` : 마지막번째 자식(홍콩반점)
- `ul>li:nth-child(9) {color: hotpink;}` : ul안에서 순서대로 9번째 자식(쟁반짜장)
- `ul>li:nth-last-child(2) {font-weight: bold;}` : 뒤에서 2번째 자식(쟁반짜장)
- `ul>li:nth-child(2n) {background-color: yellow;}` : 짝수번째 자식들(형태가 다른 요소도 포함해서 숫자를 센다)
- `ul>li:nth-child(2n+1) {background-color: pink;}` : 홀수번째 자식들

### `형태구조선택자` : 자식의 '형태' 위주(형태를 구분해서 그 안에서 순서를 센다.)

- `ol>li:first-of-type {color: red;}` : ol의 자식 중 li 중에 첫번째(짜장)
- `ol>li:last-of-type {color: orange;}` : ol의 자식 중 li 중에 마지막번째(깐풍기)
- `ol>h2:last-of-type {font-size: 14px;}` : ol의 자식중 h2 중에 마지막번째(감사합니다.)  
`ol>h2:first-of-type` 와 같다. ol 중 유일한 h2라서
- `ol>li:nth-of-type(4) {color: blue;}` : ol의 자식 중 li 중에 4번째(마파밥)  
`ol>li:nth-child(6)` 와 같다. ol 중 6번째라서
- `ol>li:nth-last-of-type(2) {color: tomato;}` : ol의 자식 중 li 중에 마지막 2번째(유산슬)  
`ol>li:nth-last-child(3)` 와 같다. ol 중 마지막 3번째라서
- `ol>li:nth-of-type(2n) {background-color: yellow;}` : ol의 li(타입) 중 짝수번째 자식들
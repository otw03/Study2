# CSS와 position
[1. CSS란?](#css란cascading-style-sheet)  
[2. position](#position-속성)  

# CSS란?(Cascading Style Sheet)

HTML이 웹페이지의 '뼈대'라면 CSS는 '살'이라고 할 수 있다. 즉, HTML이 웹페이지의 정보를 표현한다면 CSS는  
**HTML을 보기 좋게 꾸며주는(디자인하는) 역할**을 하는 언어   
HTML은 구조, 정보를 나타내고 **CSS는 그 구조를 보기 좋게 꾸며주며, Javascript는 동작(움직임) 또는 정보의 입출력**,  
**HTML 및 CSS를 제어**하는 등의 역할을 하는 언어  

### CSS사용법

**스타일 적용하는 방법의 종류**

1. **인라인 스타일**  
⇒ `줄마다 적용`  
    - 작성 방법 : 스타일을 적용하고자 하는 태그에 style 속성을 삽입하여 작성.  
    태그에 직접 스타일을 지정합니다.  
    html과 섞여있기 때문에 인라인 스타일을 많이 작성하면 어느 위치에 어떤 스타일이 적용되었는지 찾기 어렵고, 하나하나 수정을 해줘야 하므로 되도록 사용을 자제하는 것이 좋습니다. (스타일 우선 적용 순위는 가장 높음)
2. **내부 스타일 시트**  
⇒ `해당 페이지만 적용`  
    - 작성 방법 : `<head></head>` 안에 `<style></style>` 태그를 사용하여 그 안에 CSS 내용을 작성  
    스타일이 적용되는 범위는 스타일 태그가 입력 되어있는 해당 페이지 내에서만 적용되며, 다른 페이지에 똑같은 내용으로 사용하고 싶다면 사용하고자 하는 페이지에 복사를 해서 사용해야 합니다.
3. **외부 스타일 시트 = css파일**  
⇒ `css 파일 적용된 곳 모두 사용 가능, 재활용성 높음`  
style.css 파일 만들어서 내용 작성 ⇒ style태그 내용을 넣어줌  
    - 작성 방법 : `<head></head>` 안에 `<link>` 태그를 사용하여 스타일시트 파일을 불러와 연결해서 사용합니다. 스타일시트 파일의 확장자는 .css입니다.
        - href 속성 : 스타일시트 파일이 위치한 경로를 절대경로 또는 현재 파일의 위치를 기준으로 한 상대경로로 입력
        - rel 속성(필수) : 현재 페이지와 링크 경로와의 관계(relation)를 설명하는 속성. 검색 엔진이 링크에 대한 많은 정보를 수집할 때에도 사용합니다.
        - type 속성 : 링크된 외부 리소스의 미디어 타입을 명시

---

**link 태그**는 외부요소를 html파일로 불러온다  
head안에 적는다  

css파일을 html파일에서 불러올 때 <link>태그를 이용해서 불러옴. href 속성에 css파일이 위치한 경로를 입력, rel(relation)속성에 stylesheet 필수 입력

```html
<link rel="stylesheet" href="style.css">
```

```css
@charset "utf-8";
```

CSS파일 내에서 한국어 사용시 CSS파일의 문자 인코딩(UTF-8:다국어)설정해주는 게 좋다. 파일의 첫번째 줄에 기입  
작성하지 않을 경우 큰 문제가 나타나진 않으나, 한국어로 입력된 서체를 못불러오거나 할 수 있습니다.  
head태그 내에 meta태그로 입력한 charset과 같은 개념이지만 css 파일 내에서 사용법이 다르니 숙지해야합니다.  

### position_practice 파일 html, css 로 분리

- html

```html
<head>
	<link rel="stylesheet" href="../day2_css/position_style.css">
</head>
```

- css

```css
@charset "UTF-8";

* {margin: 0; padding: 0;}

#box {width: 500px; height: 500px; 
    background-color: aquamarine; 
    border-radius: 30px; 
    position: relative; 
    margin: auto;}
#circle {width: 300px; height: 300px; 
    background-color:bisque; border-radius: 50%; 
    position: absolute; 
    left: 50%; top: 50%; 
    margin-left: -150px; margin-top: -150px;}
#apeach {width: 200px; height: 200px; 
    background-color: cornflowerblue; 
    position: absolute; 
    left: 50px; top: 50px;}
```


# position 속성

### position: absolute;

절대 위치 좌표를 사용해 요소를 배치.  
기준점(top, bottom, left, right)속성을 함께 사용해 위치를 지정해줄 수 있습니다. 요소를 스티커처럼 상위요소를 기준으로 원하는 곳에 붙입니다. 

### position: relative;

상대 위치 좌표를 사용해 요소를 배치합니다. 원래 있던 위치(position: static; 상태로 기본 지정된 위치)에서 원하는 만큼 요소를 이동시킴.

### z-index 속성

요소의 앞뒤 순서(깊이)를 결정(음수, 양수 사용 가능, 범위는 무한대).  
요소의 앞뒤 순서는 특별히 변경해주기 전까지는 요소를 입력한 순서대로 나중에 입력한 것이 위로 올라옵니다.  
범위는 무한대이며 그래서 가장 위에 항상 위치해야 하는 것들 (ex: 내비게이션에 마우스를 올렸을 때 서브메뉴가 나타나는 경우, 레이어 팝업을 띄워야 하는 경우 등등)에는 z-index 값을 999999 이런 식으로 입력하기도 합니다.  
한 페이지 내에 요소가 몇개가 들어갈 지 모르기 때문에 추후 수정이나 추가가 되더라도 항상 위에 있게 하기 위함.  
★z-index 속성은 position값이 지정되어야만 사용 가능(의미가 있다). static 제외.  

---

`position: absolute; 속성` : 상위요소(부모요소) 기준으로 위치 고정(현재는 부모요소가 body이기 때문에 웹페이지가 기준이다.) => 스크롤 내리면 밀려올라감
`position: fixed; 속성` : 웹브라우저(창) 기준으로 위치 고정 => 스크롤 내려도 고정

- ui_09_position

```css
<style>
    .box {width: 100px; height: 100px; position: relative;}
    .red {background-color: red; left: 0; top: 0; z-index: 3;}
    .green {background-color: green; left: 50px; top: 50px; z-index: 2;}
    .blue {background-color: blue; left: 100px; top: 100px; z-index: 1;}
    .fixed {width: 100px; height: 100px; background-color: yellow; position: fixed; right: 50px; bottom: 50px;}
</style>

<body>
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="box blue"></div>
    <div class="fixed"></div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</body>
```

---

# position_dice

자식요소가 부모요소를 기준으로 위치를 잡을 수 있게끔 설정해주려면 부모요소에게 position: relative; 속성을 적용시켜야 한다.(만약 부모한테 relative가 없을 경우 더 상위의 relative가 적용된 부모요소를 기준으로 함.)

### 주사위 만들기

중복되는 내용을 class를 이용해서 간소화 가능

- ui_10_position_dice

```css
<body>
    <style>
        * {margin: 0; padding: 0;}

        .box {width: 300px; height: 300px; position: relative; border-radius: 30px;}
        .dot {width: 80px; height: 80px; position: absolute; border-radius: 50%;}
        .dot01_color {background-color: black;}
        #box02>.dot {background-color: red;}
        #box03>.dot {background-color: antiquewhite;}
        #box04>.dot {background-color: yellow;}
        #box05>.dot {background-color: brown;}
        #box06>.dot {background-color: black;}

        .left15 {left: 15px;}
        .right15 {right: 15px;}
        .top15 {top: 15px;}
        .bottom15 {bottom: 15px;}
        .left110 {left: 110px;}
        .top110 {top: 110px;}
 
        #box01 {background-color: aquamarine;}
        #box02 {background-color: blueviolet;}
        #box03 {background-color: darkblue;}
        #box04 {background-color: black;}
        #box05 {background-color: yellow;}
        #box06 {background-color: red;}
    </style>

		<div id="box01" class="box">
        <div class="dot dot01_color left110 top110"></div>
    </div>

    <div id="box02" class="box">
        <div class="dot left15 top15"></div>
        <div class="dot right15 bottom15"></div>
    </div>

    <div id="box03" class="box">
        <div class="dot left15 top15"></div>
        <div class="dot left110 top110"></div>
        <div class="dot right15 bottom15"></div>
    </div>

    <div id="box04" class="box">
        <div class="dot left15 top15"></div>
        <div class="dot right15 top15"></div>
        <div class="dot left15 bottom15"></div>
        <div class="dot right15 bottom15"></div>
    </div>

    <div id="box05" class="box">
        <div class="dot left15 top15"></div>
        <div class="dot right15 top15"></div>
        <div class="dot left110 top110"></div>
        <div class="dot left15 bottom15"></div>
        <div class="dot right15 bottom15"></div>
    </div>

    <div id="box06" class="box">
        <div class="dot left15 top15"></div>
        <div class="dot right15 top15"></div>
        <div class="dot left15 top110"></div>
        <div class="dot right15 top110"></div>
        <div class="dot left15 bottom15"></div>
        <div class="dot right15 bottom15"></div>
    </div>
</body>
```

---

# position_practice

포지션으로 요소의 자리 잡을 때 단위가 안 맞으면 margin값을 빼주는 것으로 위치 조정할 수 있다.  

position: static을 제외한 다른 속성(relative/absolute/fixed)이 부모에게 지정이 되어있는 경우 자식요소가 `부모를 기준`으로 위치를 잡는다.  

- position_practice

```html
<style>
		* {margin: 0; padding: 0;}

    #box {width: 500px; height: 500px; 
            background-color: aquamarine; 
            border-radius: 30px; 
            position: relative; 
            margin: auto;}
    #circle {width: 300px; height: 300px; 
        background-color:bisque; border-radius: 50%; 
        position: absolute; 
        left: 50%; top: 50%; 
        margin-left: -150px; margin-top: -150px;}
    #apeach {width: 200px; height: 200px; 
        background-color: cornflowerblue; 
        position: absolute; 
        left: 50px; top: 50px;}
</style>

<body>
    <div id="box">
        <div id="circle">
            <div id="apeach">
                <img src="" alt="어피치">
            </div>
        </div>
    </div>
</body>
```

---


# 09-React Component style
[9.1 CSS](#51-css)  
[-- 9.1.1 CssClass](#511-cssclass)  
[-- 9.1.2 CssModule](#512-cssmodule)  
[-- 9.1.3 InlineCss](#513-inlinecss)  
[9.2 SCSS](#52-scss)  
[-- 9.2.1 Scss](#521-scss)  
[-- 9.2.2 ScssModule](#522-scssmodule)  
[9.3 StyledComponent](#53-styledcomponent)  

글꼴의 크기, 모양, 색상, 문단 설정들을 미리 정의해두었다가 참조하여 사용하는 기능  

# 9.1 CSS

웹사이트 화면(문서)의 스타일, 레이아웃 등 표시하는 방법이 정의된 언어(화면에 표시되는 정보를 꾸며줌)  

예전에는 HTML 언어 하나로 문서의 뼈대를 만들고 꾸며야 했는데, HTML문서를 수정할 때 모든 문서를 하나씩 수정해야 했다.  

HTML문서의 내용과 표현을 분리 ⇒ CSS 파일만 수정하면 HTML문서의 스타일에 해당하는 부분을 한번에 수정할 수 있다.  

- 정보(HTML)와 디자인(CSS)를 분리하여 관리할 수 있다.
- 정보를 수정하지 않고 디자인만 변경할 수 있다.  
⇒ 태그마다 style 속성으로 주게 되면 소스코드가 지저분해 지는데, 분리하여 관리하게 되면 유지보수 및 가독성이 좋아진다.

## 9.1.1 CssClass

- mystyle.css

```css
.my-css-box {
    background-image: url(../img/ryan.gif);
    width: 300px;
    height: 300px;
    background-size: cover;
    border: 5pc solid #eee;
}
```

- CssClass.js

외부 css 파일 참조 ⇒ 참조변수 이름을 지정하지 않는다.  

`<div class='my-css-box'></div>`  형식으로 나타남  

```jsx
import React from 'react';
import '../assets/CSS/mystyle.css'
/**
 * 외부 CSS 파일을 참조하는 컴포넌트
 */
const CssClass = () => {
    return (
        <div>
            <h2>CssClass</h2>
            <div className='my-css-box' />
        </div>
    );
}

export default CssClass;
```

## 9.1.2 CssModule

.module.css" 형식으로 작성되는 CSS는  
모든 클래스 이름이 Javascript 변수화 되기 때문에 클래스 이름을 카멜표기법으로 지정해야 한다. (권장)  
또한 id속성에 의한 접근은 사용할 수 없다.  

- mystyle.module.css

```css
.myCssBox {
    background-image: url(../img/ryan.gif);
    width: 300px;
    height: 300px;
    background-size: cover;
    border: 5pc solid #eee;
}

/** js의 import에 명시한 참조변수에 속하지 않는 독립 클래스 */
:global .myBorderBox {
    background-color: #ff05;
    border: 10px solid #f0f;
    width: 300px;
    height: 300px;
}

/**
 * 스네이크 표기법을 사용한 클래스
 * 클래스 이름이 객체 key가 된다.
 * ex) 객체명['my-size']
 */
 .my-size {
    width: 100px;
    height: 100px;
 }

 .my-bg {
    background-color: #ece7f8;
    border: 1px solid #004080;
 }
```

- CssModule.js

CSS 모듈 참조 ⇒ 참조변수 이름을 지정한다.  

다중 클래스 적용 ⇒ 배열로 넣고 `join`로 결합  

클래스의 이름(선택자)이 리액트에 의해서 임의로 변경됨
 ⇒ `<div class='mystyle(객체이름)_myCssBox(클래스이름)__랜덤 키워드'></div>`  형식으로 나타남  
 ⇒ 크롤링(내가 접근하고자 하는 페이지의 css 선택자 기준으로 내용을 긁어옴) 방지 가능  

```jsx
import React from 'react';
import myStyles from '../assets/CSS/mystyle.module.css';

const CssModule = () => {
    return (
        <div>
            <h2>CssModule</h2>

            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={myStyles.myCssBox} />

            <h3>독립 클래스</h3>
            <div className="myBorderBox" />

            <h3>다중 클래스 적용 (1) - 역따옴표 사용</h3>
            <div className={`${myStyles['my-size']} ${myStyles['my-bg']}`} />

            <h3>다중 클래스 적용 (2) - 배열로 구성한 후 join함수로 결합</h3>
            <div className={[myStyles['my-size'], myStyles['my-bg']].join(' ')} />
        </div>
    );
}

export default CssModule;
```

## 9.1.3 InlineCss

Inline Css를 적용한 컴포넌트  
ex) `<div style="..."</div>`  

→ CSS는 JS 속성으로 기술해야 함.  
→ 전체 구조는 JSON객체. (단위가 포함된 수치값의 경우 문자열로 표기, 한쌍의 속성-값 뒤에는 세미콜론이 아닌 콤마가 위치해야 함)  

- InlineCss.js

```jsx
import React from 'react';

// (3-1) /src폴더 하위의 임의이 경로에 존재하는 이미지 파일을 참조
// --> 현재 소스파일을 기준으로 하는 상대경로로 지정
// --> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from '../assets/img/sample.png';

const InlineCss = () => {
    /** (1-1) CSS로 사용될 JSON 객체 정의 */
    // CSS속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함.
    // ex) document.getElementById("hello").style.backgroundColor = "#ff00ff";
    const myStyle = {
        backgroundColor: '#f60',
        fontsize: '20px',
        color: '#ff0',
        fonstWeight: 'bold',
        padding: '10px 25px',
        marginRight: '10px'
    };

    return (
        <div>
            <h2>InlineCss</h2>

            <h3>변수로 정의된 CSS 참조하기</h3>
            {/* (1-2) JSON객체를 style 속성에 적용 */}
            <div style={myStyle}>Hello React Css (1)</div>

            <h3>직접 CSS 코딩하기</h3>
            {/* (2) CSS 직접 코딩 */}
            <div
                style={{
                    backgroundColor: '#ff0',
                    fontsize: '20px',
                    color: '#00f',
                    fonstWeight: 'bold',
                    padding: '10px 25px',
                    marginRight: '10px'
                }}>
                Hello React Css (2)
            </div>

            <h3>이미지 참조하기</h3>
            {/* (3-2) 이미지 사용시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={sample} width='240' height='240' alt='샘플이미지' />

            {/* (3-3) public 폴더에 있는 파일들은 단순 절대경로로 참조 가능함(public 폴더 하위에 임의의 폴더생성 가능) */}
            <img src='/logo192.png' width='240' height='240' alt='react' />
        </div>
    );
}

export default InlineCss;
```

# 9.2 SCSS

- CSS는 작업량이 많아질수록 가독성이 안 좋아짐.
- CSS는 선택자(Selector)을 만들때 매번 불필요한 부모요소 선택자를 적어야 한다.
- SCSS는 코드의 가속성과 재사용성을 높여주며 심플한 표기법으로 CSS 구조를 평준화
- 선택자의 중첩을 통해 반복되는 부모요소 선택자 사용을 줄일 수 있다.  
⇒ 반복되는 부모 요소를 한번만 쓰기 때문에 유지보수에 용이한 부분이 있고 구조를 파악하기가 쉽다.
- 변수(Variable)을 사용해서 CSS 속성값을 통일해서 관리할 수 있다.
- 대신 SCSS는 브라우저가 이해할 수 없기 때문에 브라우저가 이해할 수 있는 CSS로 컴파일하는 과정을 거쳐야 한다.

## 9.2.1 Scss

- style.scss

```scss
@import './colors.scss';
@import './common.scss';
@import './responsive.scss';

.myScss {
    margin: auto;   // myScss라는 클래스에 대한 css속성
    border: 5px dotted #d5d5d5;
    padding: 5px;

    @include tablet {
        padding: 25px;
    }

    @include desktop {
        padding: 50px;
    }

    &:after {       // .my-scss:after
        display: block;
        content: '';
        clear: both;
        float: none;
    }

    .myScssBox {  // .my-scss .my-scss-box
        cursor: pointer;
        float: left;
        // width: 100px;
        // height: 100px;

        // .red 클래스가 .my-scss-box와 함께 사용되었을 때
        // -> .my-scss .my-scss-box.red
        &.red { background-color: $red; @include myMixin(1); }
        &.green { background-color: $green; @include myMixin(2); }
        &.blue { background-color: $blue; @include myMixin(3); }
        &.orange { background-color: $orange; @include myMixin(4); }
        &.yellow { background-color: $yellow; @include myMixin(5); }
        &.pink { background-color: $pink; @include myMixin(6); }
    }
}

@include mobile {
    .myScss {
        width: 100%;
        box-sizing: border-box;
        border-color: #000;
    }
}

@include tablet {
    .myScss {
        width: 90%;
        box-sizing: border-box;
        border-color: #f60;
    }
}

@include desktop {
    .myScss {
        width: 60%;
        box-sizing: border-box;
        border-color: #06f;
    }
}
```

- Scss.js

scss파일 참조하기 ⇒ 참조변수 사용 안함  

패키지 설치 필요: `yarn add node-sass`  

```jsx
import React from 'react';

import '../assets/scss/style.scss';

/**
 * SCSS를 사용하는 컴포넌트
 */
const Scss = () => {
    return (
        <div>
            <h2>Scss</h2>
            <div className='myScss'>
                <div className='myScssBox red' />
                <div className='myScssBox green' />
                <div className='myScssBox blue' />
                <div className='myScssBox orange' />
                <div className='myScssBox yellow' />
                <div className='myScssBox pink' />
            </div>
        </div>
    );
}

export default Scss;
```

## 9.2.2 ScssModule

- style.module.scss

위 `style.scss` 와 내용 같음  

- ScssModule.js

scss 모듈 참조 → 참조변수 이름을 지정한다.  

다중 클래스 적용 ⇒ 배열로 넣고 `join`로 결합

```jsx
import React from 'react';

import myScssMod from '../assets/scss/style.module.scss';

const ScssModule = () => {
    return (
        <div>
            <h2>ScssModule</h2>

            <div className={myScssMod.myScss}>
                <div className={[myScssMod.myScssBox, myScssMod.red].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.green].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.blue].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.orange].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.yellow].join(' ')} />
                <div className={[myScssMod.myScssBox, myScssMod.pink].join(' ')} />
            </div>
        </div>
    );
}

export default ScssModule;
```

# 9.3 StyledComponent

컴포넌트 코드 안에서 SCSS 문법을 적용한 컴포넌트를 직접 정의  

패키지 설치가 필요함.  
: `yarn add styled-components`  

VSCode에서 styled-components 지원을 위한 확장프로그램  
- `vscode-styled-components`  

태그로 구성된 컴포넌트 정의 ⇒ `styled.태그이름``;` (역따옴표 주의)  

- StyledComponent.js

```jsx
import React from 'react';

// 기능 사용을 위한 참조
import styled, { css } from 'styled-components';

/** ul 태그로 구성된 컴포넌트 정의 */
const MyGridContainer = styled.ul`
    /* SCSS 코딩 진행 */
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

/** li태그로 구성된 컴포넌트 정의 */
const MyGridItem = styled.li`
    /* width: 33%; */

    /* 전달받은 변수값에 접근하여 넓이를 동적으로 설정 */
    /* JSX로부터 전달받은 변수들을 props라는 이름의 객체 형태로 주입받는 콜백함수를 정의한다.
       이 콜백함수에서 리턴하는 값이 이 위치에 적용된다. */
    /* width: ${function (props) {
        return props.width;
    }}; */
    width: ${props => props.width};
`;

/** div태그로 구성된 컴포넌트 정의 */
const MyBox = styled.div`
    border: 3px dotted #000;
    background-color: #eee;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    
    /* 색상값이 전달된 경우 해당값 사용, 그렇지 않은 경우 "black"을 기본값으로 사용 */
    /* color: #000; */
    color: ${(props) => props.color || 'black'};

    &:hover {
        transform: scale(1.05, 1.05) rotate(-10deg);
        background-color: ${(props) => props.color || '#eeeeee'};
        color: #fff;
    }

    /** props 값에 대한 조건절 처리 */
    ${(props) => 
        props.number % 2 === 1 && 
        css`
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
        `}
`;

const StyledComponent = () => {
    // 색상이름이나 색상 코드에 대한 배열
    const myColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];

    // 배열전체를 100으로 봤을 때 하나당 몇%인지 계산
    const myWidth = 100 / myColors.length + '%';
    return (
        <div>
            <h2>StyledComponent</h2>

            <h3>단순 태그처럼 사용</h3>
            <MyGridContainer>
                {/* MyGridContainer에게 width라는 이름의 변수값 전달 */}
                <MyGridItem width={'30%'}>
                    <MyBox color='red'>Item1</MyBox>
                </MyGridItem>
                <MyGridItem width={'10%'}>
                    <MyBox color='green'>Item2</MyBox>
                </MyGridItem>
                <MyGridItem width={'20%'}>
                    <MyBox color='blue'>Item3</MyBox>
                </MyGridItem>
                <MyGridItem width={'15%'}>
                    <MyBox color='purple'>Item4</MyBox>
                </MyGridItem>
                <MyGridItem width={'25%'}>
                    <MyBox color='orange'>Item5</MyBox>
                </MyGridItem>
            </MyGridContainer>

            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((item, index) => {
                    return (
                        // styledComponent에게 HTML 속성처럼 전달하는 값들은 변수로서 작용한다.
                        // 속성 이름은 특별히 정해진 것은 없다.
                        <MyGridItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>
                                {item}
                            </MyBox>
                        </MyGridItem>
                    );
                })}
            </MyGridContainer>
        </div>
    );
};

export default StyledComponent;
```


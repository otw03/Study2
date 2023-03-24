# 사이즈 조절 margin, padding  
[1. margin](#1-margin-속성)  
[2. padding](#2-padding-속성)  


# 1. margin 속성

## **margin(마진)**

- margin속성은 요소의 바깥쪽에 들어가는 간격(요소 간 간격)
    - margin-top: 값
    - margin-right: 값
    - margin-left: 값
    - margin-bottom: 값
    - 4 방향에 따로 설정 가능
- 요소 주변의 여백
- margin-top, right, bottom, left 로도 지정 가능

```css
margin: <크기> | <백분률> | auto;
```

### 박스의 양 옆에 자동으로 같은 마진을 설정, 박스를 수평중앙정렬. margin: 0 auto;

```css
#box01 {background-color: rgba(0, 0, 0, .1); margin: auto;}
```

### margin값을 한 개만 넣었을 경우 사방에(상,우,하,좌) 10px 값이 동일 적용

```html
#box02 {background-color: rgba(0, 0, 0, .2); margin: 10px;}
```

### margin값을 두 개 넣었을 경우

마주보는 방향을 묶어서 표현  
첫번째 값은 상,하에 10px  
두번째 값은 좌,우에 20px  

```html
#box03 {background-color: rgba(0, 0, 0, .3); margin: 10px 20px;}
```

### margin값을 세 개 넣었을 경우

첫번째 값은 상단에 10px  
두번째 값은 좌,우에 20px(공통 적용, 마주보는 방향을 묶어서 적용)  
세번째 값은 하단에 30px  

```css
#box04 {background-color: rgba(0, 0, 0, .4); margin: 10px 20px 30px;}
```

### margin값을 네 개 넣을 경우

첫번째 값은 상단(12시)에 10px  
두번째 값은 우측(3시)에 20px  
세번째 값은 하단(6시)에 30px  
네번째 값은 좌측(9시)에 40px  

**12시부터 시작해 시계방향으로 적용 / 상>우>하>좌**  
따로 작성시  
margin-top: 10px;  
margin-right: 20px;  
margin-bottom: 30px;  
margin-left: 40px;  

```css
#box05 {background-color: rgba(0, 0, 0, .5); margin: 10px 20px 30px 40px;}
```

---

박스의 상,하단에 10px(마주보는 방향)
좌,우에 auto를 적용(마주보는 방향) 수평중앙정렬
(수직방향에서 auto 불가)

```css
#box06 {background-color: rgba(0, 0, 0, .6); margin: 10px auto;}
```

---

박스의 상단에 0
좌,우에 auto를 적용(마주보는 방향) 수평중앙정렬
하단에 30px

```css
#box07 {background-color: rgba(0, 0, 0, .7); margin: 0 auto 30px;}
```

### 마진 사용 시 주의사항

1. 마진값은 상,하단에서 겹쳐진다(마진 중첩 현상). 큰 값과 작은 값이 겹쳐지면 큰 값만 들어간다.
2. 마진을 자식요소의 상단에 넣는 경우 부모요소가 함께 밀리는 현상이 있을 수 있다.(브라우저마다 다름) 상단에서 간격을 띄워야 하는 경우, 위쪽 요소에서 아래로 밀어주거나 패딩을 이용하세요.  
- 2번 케이스 문제 발생

```css
#mom {width: 500px; height: 500px; background-color: rgba(0, 0, 0, .2);}
#child {width: 500px; height: 500px; background-color: rgba(255, 0, 0, .5); margin-top: 100px;}
```

- 2번 케이스 문제 해결 방법  
padding 넣어준다, 마진 지움

```css
#box01 {width: 500px; height: 500px; background-color: rgba(0, 0, 0, .2); padding-top: 100px;}
#box02 {width: 500px; height: 500px; background-color: rgba(255, 0, 0, .5); /* margin-top: 100px; */ }
```

# 2. padding 속성

## **padding(패딩)**

- `padding`속성은 테두리 내부의 요소 콘텐츠 주위에 공간을 생성하는 데 사용
    - `padding-top`
    - `padding-right`
    - `padding-bottom`
    - `padding-left`
- 콘텐츠와 테두리 사이의 여백
- padding-top, right, bottom, left 로도 지정 가능
- 패딩은 요소의 **안쪽 여백**을 넣어주는 속성
축약형으로 사용시 마진과 순서가 같음(`단, auto 제외=>auto가 없기 때문`)
- 박스 안에 있는 인라인 요소(글자, 그림 등...)가 가운데 정렬이 되게 하려면 박스에 text-align: center;로 하면 된다.
- 박스 안에 있는 블록 요소(자식 박스)를 가운데 정렬 시키려면 해당 자식 요소에 margin: auto;를 주면 된다.

### 기본 박스 사이즈

```css
div {width: 200px; height: 200px; background-color: gray; margin-bottom: 10px;}
```

### 상단에서 글자를 50px만큼 띄울 경우, 높이값에서 늘어난 만큼(50px) 빼준다

```css
#box01 {padding: 50px 0 0; height: 150px;}
```

### 좌측에서 글자를 25px만큼 띄울 경우, 너빗값에서 늘어난 만큼 (25px) 빼준다

```css
#box02 {padding: 0 0 0 25px; width: 175px;}
```

### 상하측에서 25px만큼 띄우고, 좌측에서 50px만큼 띄울 경우, 너빗값에서 50px, 높이값에서 50px만큼 빼준다

```css
#box03 {padding: 25px 0 25px 50px; width: 150px; height: 150px;}
```

### 상측에서 35px만큼 띄우고, 우측10px, 하측10px, 좌측에서 20px만큼 띄울 경우, 너빗값에서 30px, 높이값에서 35px 빼준다

```css
#box04 {padding: 35px 10px 10px 20px; width: 170px; height: 165px;}

<!-- 스크롤 추가의 경우 -->
#box04 {padding: 35px 10px 10px 20px; width: 170px; height: 165px; overflow-y: scroll;}
```

### overflow: hidden; 넘치는 콘텐츠를 가려줍니다.  
콘텐츠가 요소(박스)보다 넘치면 넘치는 만큼을 가려주는 속성

```css
#box04 {padding: 25px 0 0 50px; width: 150px; height: 150px; overflow: hidden;}
```

# 3. overflow

- overflow: hidden; 넘치는 콘텐츠를 가려줍니다.
- overflow: scroll; 넘치는 콘텐츠를 스크롤을 나타내어 줍니다.
- overflow-y: scroll; y축으로만 스크롤바가 표시됩니다.
- overflow: auto; 콘텐츠가 넘치면 스크롤 표시, 넘치지 않으면 스크롤 없음
- overflow: visable; (기본값) 흘러넘쳐도 보여줌

# 4. box-sizing 속성

- **box-sizing: content-box;**  
: 패딩, 보더(테두리) 값이 박스의 안쪽으로 들어가면서(크기에 포함되면서) 박스의 크기가 늘어남

```css
#box05 {padding: 10px; border: 10px solid red; box-sizing: content-box;}
```

- **box-sizing: border-box;**  
: 패딩, 보더(테두리) 값이 콘텐츠영역에(너비와 높이 역역의 안쪽으로) 포함되면서 박스 크기값을 자동으로 계산해서 빼주기 때문에 눈에 보이는 크기가 늘어나지 않고 유지됩니다.(늘어난만큼 안 빼줘도 됨)  
단, IE8버전 이하에서는 적용되지 않는 CSS3 속성입니다.

```css
#box06 {padding: 10px; border: 10px solid red;box-sizing: border-box;}
```


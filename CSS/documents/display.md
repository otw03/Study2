# display

# 가시속성

# **display**

웹 문서의 내비게이션을 만들면서 메뉴 항목을 가로로 배치할 때 많이 사용, 이미지를 표 형태로 배치 가능  

## **속성값**

- **none** : 해당 요소를 화면에 표시하지 않습니다.  
버튼을 클릭했을 때 팝업창을 열어줘야 하는데 요소를 안 보이게 설정  
**화면에서 없애는 느낌(코드는 있다)**
- **block** : 인라인 레벨 요소를 블록 레벨 요소로 만듭니다
- **inline** : 블록 레벨 요소를 인라인 레벨 요소로 만듭니다.
- **inline-block** : 인라인 레벨 요소와 블록 레벨 요소의 속성을 모두 가지고 있으며 마진과 패딩을 지정할 수 있습니다

---

- display: none;은 아예 태그 자체가 입력이 되지 않은 것처럼 만들어줌(삭제)
visibility: hidden;은 태그를 '**보이지 않게**' 해줌(가림)
opacity: 0; 은 태그가 있지만 '**투명**'해서 보이지 않게 해줌(투명함)
- 없거나(display: none;), 보이지 않는것(visibility: hidden;)에 `:hover` 해도 안 보인다.  
opacity는 투명상태(opacity: 0;)이기 때문에 `:hover` 가 적용된다.

```css
#box02 {background: green; display: none;}
#box02:hover {display: block;}       /* 성립 안됨 */
#box05 {background: green; visibility: hidden;}
#box05:hover {visibility: visible;}  /* 성립 안됨 */
#box08 {background: red; opacity: 0;}
#box08:hover {opacity: 1;}
```

---

- display: block;세로로 배치, width, height, margin, padding 등의 속성이 모두 상하좌우 적용됨
- display: inline; 가로로 배치, width X, height X, margin O(좌우만), padding O(라인에 먹힘),border O(라인에 먹힘(다른라인 침범))

```css
p {background: yellow; width: 100px; height: 30px; margin: 10px; padding: 10px; border: 10px solid red;}
a {background: orange; width: 100px; height: 30px; margin: 10px; padding: 20px; border: 10px solid blue;};
```

---

- inline속성은 태그 사이의 띄어쓰기 또는 줄바꿈을 모두 띄어쓰기 한 칸으로 인식.
- inline속성을 가진 태그의 여백을 없애기 위한 방법

1. margin값을 -4px정도 당겨줌(X권장하지 않는 방법. 마진이 아님)  
2. display속성 대신 float:left를 사용. float속성은 떠있는 요소이기 때문에 부모요소에 사이즈가 지정되지 않은 경우 자식요소만큼 사이즈를 가질 수 없음.(부모요소에 overflow: hidden;을 줘서 해결) 또한, 뒤에 오는 형제요소에 clear:both로 해제를 해줘야 함  
3. 태그를 모두 붙여쓰기. 코드 지저분해짐(비추)  
4. ★ 띄어쓰기 한 칸이므로 부모요소에서 글자의 크기(font-size)를 0으로 지정 후 실제 적용하는 요소에서 글자 크기를 다시 한 번 지정(부모의 속성을 자식이 상속받기 때문)  

```css
ul {list-style: none;}
#float {width: 300px; height: 50px; background-color: rgba(0,0,0,.3);}
#float li {width: 100px; height: 50px; background-color: rgba(255,0,0,.5); float: left;}
#inline-block {width: 300px; height: 50px; background-color: rgba(0,0,0,.3); font-size: 0;}
#inline-block li {width: 100px; height: 50px; background-color: rgba(255,0,0,.5); display: inline-block; font-size: 16px;}
```


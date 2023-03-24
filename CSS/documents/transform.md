# transform

### **요소 변형**

- transform: 함수
- transform: translate()
- transform: scale()
- transform: rotate(각도)
- transform: skew()

### t**ransform: scale();**

- 요소를 X축이나 Y축으로 확대/축소
- scaleX(값); X축, Y축으로 같은 비율로 확대/축소
- scaleX(X축 비율); X축으로 확대/축소
- scaleY(Y축 비율); Y축으로 확대/축소
- scale(값1, 값2); 값1(X축), 값2(Y축)으로 확대/축소
- 기준은 1이 기본값 1보다 커지면 확대, 1보다 작으면 축소  
배수단위, %도 사용 가능

```css
.scalex {transform: scaleX(1.2);}
.scaley {transform: scaleY(120%);}
.scale {transform: scale(1.2,1.5);}
```

### **transform: rotate();**

- 요소를 회전
- 기준점은 transform-origin 속성을 사용해 바꿔주기 전까지는 요소의 정중앙.
- rotateX(Ndeg); X축 기준으로 N도만큼 회전
- rotateY(Ndeg); Y축 기준으로 N도만큼 회전
- rotate(Ndeg); N도만큼 평면에서 회전

```css
.rotatex {transform: rotateX(45deg);}
.rotatey {transform: rotateY(180deg);}
.rotate {transform: rotate(45deg); transform-origin: left top;}
```

### **transform: skew();**

- 요소를 기울이기
- skewX(Ndeg); X축 기준으로 N도만큼 기울이기
- skewY(Ndeg); Y축 기준으로 N도만큼 기울이기
- skew(값1); X축 기준으로 기울이기
- skew(값1,값2); X축, Y축 기준으로 기울이기

```css
.skewx {transform: skewX(-45deg);}
.skewy {transform: skewY(30deg);}
.skew {transform: skew(30deg, 20deg);}
```

### **transform: translate();**

- 요소를 이동
- translateX(X축이동거리); 이동거리만큼 X축으로 이동
- translateY(Y축이동거리); 이동거리만큼 Y축으로 이동
- translate(X축이동거리, Y축이동거리); 이동거리만큼 X축, Y축으로 이동  
이동거리 값은 px, % 등 여러 단위가 들어갈 수 있다

```css
.translatex {transform: translateX(50px);}
.translatey {transform: translateY(50%);}
.translate {transform: translate(50px, -50px);}
```

### **transform-origin속성**

- transform속성은 기본적으로 모두 요소의 정중앙이 기준점.
- 기준점을 바꾸고 싶을 때 사용하는 속성
- transform-origin: X축 Y축;(순서)  
2개의 값을 띄어쓰기로 구분해서 넣음. X축위치 다음 Y축위치로 인식  
X축 : 길이(px,em....), 백분율(%), left, center, right  
Y축 : 길이(px,em....), 백분율(%), top, center, bottom

```html
.origin01 {transform: scale(1.5); transform-origin: 100% 100%;}
.origin02 {transform: rotate(-25deg); transform-origin: left top;}
.origin03 {transform: rotate(180deg); transform-origin: center top;}
```


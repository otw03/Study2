# background

# background 속성

### **background-image: url(”이미지 파일 경로”)**

이미지 파일을 넣는다. 요소보다 이미지 크기가 작으면 이미지가 가로와 세로로 반복되면서 요소의 배경을 가득 채운다

- `bcakground-image: url('이미지1'), url('이미지2); no-repeat center;`  
: 배경 이미지 두장 이상 적용할 수 있다.  첫번째 입력한 이미지가 제일 위로 올라옴.
- `background-size: 값1 값2;`  
: 값1 : 이미지1의 너비(width), 값2 : 이미지2의 너비(width);

### **background-repeat:**

- **no-repeat :** 반복을 시키지 않고 한번만 나타납니다
- **repeat** : 기본값. 가로, 세로 반복적으로 배열합니다.
- **repeat-x** : 이미지가 가로로만 반복해서 배열합니다.
- **repeat-y** : 이미지가 세로로만 반복해서 배열합니다.

### **background-size**

- **auto** : 기본값. 배경 이미지 원래의 width, height 그대로 표시
- **길이** : px 등 단위로 설정 가능
- **%** : 너비와 높이를 부모 요소에 비례한 % 값으로 지정
- **`cover`** : 배경 지역이 배경이미지로 완전히 덮이도록 이미지를 가능한한 크게해서 표시. 그렇기 때문에 이미지의 일부분이 보이지 않을 수도 있다.
- **`contain`** : 너비와 높이가 내용(요소) 안쪽에 알맞은 방식으로 이미지를 가장 크게 조절함
- **initail** : 기본값으로 초기화
- `background-size: 속성;`
- `background-size: 값;`  
: 값이 하나만 있을 때는 width값으로 인식(height값은 비율에 맞게 자동 적용.auto.) 픽셀, 백분율(%)
- `background-size: 값1 값2;`  
: 값1은 width(너비), 값2는 height(높이). 비율 상관 없이 강제로 사이즈 지정
- `background-size: cover;`  
: 요소에 이미지를 공백 없이 꽉 채울 수 있고, 이미지 비율을 유지, 이미지의 일부는 잘려보일 수 있음
- `background-size: contain;`  
: 이미지 가로세로 비율을 유지, 이미지가 잘리는 부분이 없게 박스에 온전히 꽉차게 보여줌. 이미지와 상자의 비율이 안 맞는 경우 나머지 반복되는 부분이 보임. 이미지를 반복하지 않는 경우 공백이 보일 수 있다.

### **background-attachment**

배경 이미지의 스크롤 여부를 정합니다.  

`background-attachment: scroll | fixed | local | initial | inherit`  

- **scroll** : 기본값. 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지는 스크롤되지 않습니다.
- **`fixed`** : 움직이지 않습니다.
- **local** : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지도 스크롤됩니다.
- **initial** : 기본값으로 설정합니다.
- **inherit** : 부모 요소의 속성값을 상속받습니다.

### **background-position**

배경 이미지의 위치를 정하는 속성  

`background-position: x-position(가로위치) y-position(세로위치) | initial | inherit`  

`backgroung-position: 가로축(X축)숫자또는위치 세로축(Y축)숫자또는위치;`  

- **x-position y-position** : 가로 위치와 세로 위치를 정합니다.
- **initial** : 기본값으로 설정합니다.
- **inherit** : 부모 요소의 속성값을 상속받습니다.
- **위치 값으로 사용할 수 있는 것**은 다음과 같습니다.
    - 가로 위치 값 : left, center, right, 백분율, 길이
    - 세로 위치 값 : top, center, bottom, 백분율, 길이
- **한 개의 값**만 넣으면 **가로위치만 지정**되고 세로는 center(생략),  
ex: backgroung-position: left; -> left center(생략)
- **한 개의 값**만 넣으면 **세로위치만 지정**되고 가로는 center(생략),  
ex: backgroung-position: top; -> center(생략) top
- **두개의 값**을 넣으면 **가로 세로 위치**  
ex: backgroung-position: center center; -> backgroung-position: center;
- **가로위치값 숫자값 세로위치값 숫자값** 하면 **가로부터 숫자** **세로부터 숫자** 만큼 이동  
ex: background-position: right 50px bottom 100px;

### 백그라운드 속성 합쳐서 쓰기(축약형)

`backgroung: color image position / size repeat origin clip attachment;`  

`backgroung: color image repeat attachment position / size origin clip;`  
실무에서 자주 작성할 때는  
`bcakground: url('이미지 경로') no-repeat center;`  

예시1)

```html
#box07 {background: rgba(0, 255, 0, 0.5) url('/background/bg_02.jpg') center / 500px fixed;}
```

예시2)  

```html
background: url('/background/bg_04.jpg') no-repeat center bottom fixed;
```


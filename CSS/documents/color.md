# color

# 색상단위

`color : <색상>`

- **16진수표현**
- **hsl, hsla**  
: hue(색상), saturation(채도), lightness(명도), alpha(불투명도)
- **rgb, rgba**  
: red, green, blue, alpha(불투명도)
- **opacity**  
: 요소 전체에 투명도 적용

---

### 6자리의 0~9,A~F 숫자와 문자로 이루어짐(16진수로 컬러를 표현)

```css
#hex6 {background-color: #ff0000;}
```

### 6자리의 헥사코드라 2개씩 쌍으로 같은글자인 경우 3자리로 축약해서 사용 가능

```css
#hex3 {background-color: #f00;}
```

### 0~255까지의 숫자로 표현하는 방식

```css
#rgb {background-color: rgb(255,0,0);}
```

### rgb코드에 alpha값(투명도)추가 방식, 알파값은 (투명)0~1(불투명) 사이의 값으로 표현

```css
#rgba {background-color: rgba(255,0,0,1);}
```

### hue(색상)(0~360색상환의 각도숫자로 표현)

- saturation(채도)(탁함0%~100%맑음)
- 채도가 0이면 무채색(흰색~회색~검정)
- lightness(명도)(어두움0%~100%밝음)
- 명도가 0이면 무조건 검정색, 100%이면 무조건 흰색값으로 표현

```css
#hsl {background-color: hsl(0,100%,50%);}
#hsla {background-color: hsla(0,100%,50%,1);}
#rgba_05 {background-color: rgba(255,0,0,.5);}
```

### opacity 속성 : 요소 자체의 투명도를 조절 (투명)0~1(불투명) 사이의 값으로 표현

```css
#opacity_05 {background-color: rgba(255,0,0,.5); opacity: 0.5;}
```


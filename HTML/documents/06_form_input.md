# **form**
[1. form 태그의 속성](#form-태그의-속성)  
[2. input 태그](#input)  
[-- 2.1 라디어 버튼과 체크박스](#라디오버튼-체크박스radio-checkbox)  

# 폼태그

## form 태그의 속성

`<form [속성=”속성값”]>여러 폼 요소</form>`  

### **`action`**

: `<form>` 태그 안의 내용을 처리해 줄 서버 프로그램을 지정  
: form태그 안의 내용들을 서버로 보낼 때 해당 데이터가 도착할 때 URL 주소나 실행할 프로그램. html5에서는 필수 아님!  

### **method**

: form내용을 서버로 보내는 방식을 선택  

- get : 입력 내용 길이 제한O. 주소 표시줄에 사용자가 입력한 내용이 그대로 드러난다  
주소표시줄에 담아 전송. 보안 취약, 길이 제한O
- post : 입력 내용 길이 제한X. 사용자가 입력한 내용 드러나지 않는다  
내용 드러나지 않고, 편지봉투에 담아 전송(개념적으로). 길이 제한X

```html
<form action="" method="get">
/* 여러 폼 요소 */
</form>

<form action="" method="post"></form>

<form action="http://naver.com" method="get">
```

### **fieldset**

**:** 폼 안에 여러 구역 나누기. 폼 요소들을 묶어주는 역할을 하는 태그  

- **legend**  
: fieldset의 제목을 달아주는 태그(fieldset 안에서만 사용)

```html
<fieldset>
<legend>로그인 정보</legend>
</fieldset>
```

### **label**

**:** input 등 폼 요소에 레이블을 붙일 때 사용  
: input과 label태그 연결 방법  
1. input태그의 id속성과 label태그의 for속성 일치(명시적)  
2. label태그의 내부에 input태그를 작성(암시적) => id, for 필요없음. 단, 하위버전의 브라우저에서 인식 못할 가능성이 있음.  
가급적이면 명시적으로 따로 작성 후 id, for를 이용해서 연결해주는 게 안전하고, 접근성 측면에서도 따로 작성하는 게 좋습니다.  

```html
<label for="user_web">이메일</label>
<input type="url" id="user_web">
```

---

## **input**

**:** 입력 태그. 타입이 여러가지 있다. 타입에 따라 입력값이 다르다  
`<input type=”type”>`
**[`<input>` 유형](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#%3Cinput%3E_%EC%9C%A0%ED%98%95)**  

### `input type=”text”`

- label 태그와 input 태그 이어주기 : label태그의 for 속성과 input 태그의 id속성값 일치
- **placeholder** 속성 : 힌트주기
    
    문제점  
    
    - 자동 번역 불가
    - label대신 이용되는 사례
    - 내용 입력시 중요한 정보를 놓칠 수 있음
    - 색상/고대비등 접근성 문제
    - 제한된 스타일링
    - 미리 채워진 정보처럼 보여 건너뛸 수 있음
    
    해결책  
    
    placeholder를 입력창 위, label아래로 이동  
    
    - 시각적, 구조적 계층 구조 전달  
    뭘 입력하는지,  
    입력을 성공하기 위한 힌트  
    예시
    - 번역기능
    - 미리 채워진 정보로 보이지 않음
    - 저시력 환경에서도 구별 가능
    - 내용을 입력하면서 힌트 참고
    - 의미론적이며 CSS를 통해 스타일링 가능
- **size** : 입력창 길이
- **minlength** : 최소글자수
- **maxlength** : 최대글자수 제한
- **required** 속성 : 필수 필드 만들기
- **autofocus** 속성 : 페이지에 접근 하자마자 자동 커서 입력
- **autocomplete** : 자동완성 기능(기본값 on, 해제시 off)

```html
<label for="user_id">ID</label>
<input type="text" name="user_id" id="user_id" minlength="3" maxlength="8" size="10" placeholder="아이디는 3자이상 8자 이하로 입력해주세요" required autofocus autocomplete="off">
```

### `input type=”number”, input type=”range”`

- **value**속성
 : 기본값 설정
- **min**속성
 : 최솟값 설정
- **max**속성
 : 최댓값 설정
- **step**속성
 : 늘어나거나 줄어드는 간격

```html
<label for="count">참여 인원(최대 10명)</label>
<input type="number" id="count" value="0" min="0" max="10" step="1">

<label for="box">지원 물품(1인당 5개)</label>
<input type="number" id="box" value="0" min="0" max="50" step="5">

<label for="step">희망 단계(하, 중, 상)</label>
<input type="range" id="step" value="1" min="1" max="3">
```

## 라디오버튼, 체크박스(radio, checkbox)

### 라디오버튼

- **라디오 버튼은 여러 항목 줄 한개만 선택 가능하게 할 경우 주로 사용**.  
여러개 중 한개를 선택해야 되는 경우 **name속성에 동일한 값을 적용**시켜줘야 합니다.  
**value속성 필수** 입력! **서버에 값을 넘길 때 value값을 넘겨줌**.  
radio, checkbox 버튼은 value값을 반드시 넣어줘야 한다. 서버에 넘겨줘야하기 때문이다.

```html
<label>
    <input type="radio" value="male" name="gender"> 남자
</label>
<label>
    <input type="radio" value="female" name="gender"> 여자
</label>
```

- 라디오 버튼은 주로 레이븐의 왼쪽에 위치(통상적)
- **input태그와 label태그 연결 방법**

1. **input태그의 id속성**과 **label태그의 for속성값 일치**(명시적)  

```html
<input type="radio" id="male">
<label for="male">남자</label>
```

2. **label태그의 내부에 input태그를 작성**(암시적) => id, for 속성 필요없음. 단, 하위버전의 브라우저에서 인식 못할 가능성이 있기 때문에 가급적이면 명시적으로 따로 작성 후 id, for를 이용해서 연결해주는 게 안전하고, 접근성 측면에서도 따로 작성하는 게 좋습니다.  

```html
<label>
	<input type="radio" value="female" name="gender"> 여자
</label>
```

### 체크박스

명시적

```html
<li>
    <p>체크박스(관심사)</p>
    <input type="checkbox" id="game" value="game">
    <label for="game">게임</label>
    <input type="checkbox" id="sports" value="sports">
    <label for="sports">스포츠</label>
</li>
```

암시적

```html
<li>
    <p>체크박스(관심사)</p>
    <label>
        <input type="checkbox" value="game"> 게임
    </label>
    <label>
        <input type="checkbox" value="sports"> 스포츠
    </label>
    <label>
        <input type="checkbox" value="reading"> 독서
    </label>
    <label>
        <input type="checkbox" value="music"> 음악듣기
    </label>
</li>
```

### 컬러, 날짜, 시간

- 컬러 선택

```html
<input type="color" value="#ff0000">
```

- 날짜 선택

```html
<input type="date" value="2020-12-25">
```

- 날짜 및 시간

```html
<input type="datetime-local" value="2020-12-25T20:00">
```

- 시간  
시간 입력 속성 중 step 속성의 숫자는 초의 단위를 설정  
ex: 600초->10분, 120초->2분

```html
<input type="time" value="10:00" step="120">
```

---

### 파일첨부

```html
<li>
    <p>파일첨부</p>
    <input type="file">
</li>
```

### 현재 진행 상태(progress)

```html
<li>
	  <p>현재 진행 상태(progress)</p>
	  <progress max="100" value="6"></progress>
</li>
```

### 범위 내 값 표시(meter)

- 용량 표시 등에 사용  
최댓값에 입력값이 넘으면 색이 변함

```html
<p>범위 내 값 표시(meter)</p>
<meter min="0" max="100" low="30" high="70" value="60"></meter>
```

### textarea

- 텍스트 여러 줄 작성
- textarea 영역에 글을 먼저 넣어놓고 싶을 때(ex:글양식)
- 태그 안 쪽에 탭, 엔터, 띄어쓰기 등이 그대로 적용되기 때문에 주의
- cols 속성 : 열(글자수 기준)  
rows 속성 : 행수  
둘 다 크기 조절하는 속성. css로 수정도 가능
- readonly : 읽기전용 필드로 만들어주는 속성. 하면 안에 못 쓴다

```html
<textarea cols="30" rows="10" readonly>
            이름 : 
연락처 : 
	  환불사유 : 
</textarea>
```

### 셀렉트 박스

```html
<select>
    <option value="none">옵션선택</option>
    <option value="strawberry">딸기</option>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
</select>
```

---

### 버튼들

```html
<fieldset>
    <legend>버튼들</legend>
    <input type="submit" value="확인">
    <input type="button" value="안녕">
    <input type="submit">hello</button>
    <input type="reset" value="초기화">
    <input type="image" src="https://news.samsungdisplay.com/wp-content/uploads/2022/05/IT_twi001t1345955-1-1024x639.jpg" width="70" alt="확인버튼">
    <button type="submit"><img src="https://news.samsungdisplay.com/wp-content/uploads/2022/05/IT_twi001t1345955-1-1024x639.jpg" width="50">버튼태그</button>
</fieldset>
```

### ID텍스트 박스만 선택하고 싶을때의 경우

```css
form > fieldset:first-child input[type=text] {background-color: yellow;}
/* input[type=text] {background-color: yellow;} */
/* #user_id {background-color: yellow;} */
```

### textarea칸 사용자가 박스 크기 조절 못하게 해줌

```css
textarea {resize: none;}
```


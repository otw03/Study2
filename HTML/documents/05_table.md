# table

# 테이블태그

- **`table`**
표를 만들 때는 먼저 table 태그를 작성
- **`caption`**  
표의 제목을 표현하는 태그
- **`thead`**  
표의 제목행을 묶어주는 태그
- **`tbody`**  
표의 본문 행을 묶어주는 태그
- **`tfoot`**  
표의 요약 행을 묶어주는 태그
- **`th`**  
table header : 형 내부의 제목 셀(제목 한 칸) 태그. 글자 두껍게 가운데 정렬
- **`tr`**  
table row : 표 내부의 형(가로줄) 태그
- **`td`**  
table data : 행 내부의 내용 셀(내용 한 칸) 태그
- **`border-collapse: 속성`**  
: 중복되는 표와 셀의 테두리를 합쳐 한 줄로 표시해주는 속성

```css
table {width: 500px; border-collapse: collapse;}
```

- **`padding`**  
: 안쪽의 여백값

```css
th, td {padding: 10px;}
```

- **`colgroup`**  
column group : 여러 열(column)을 묶어 스타일 지정하는 태그. `<col>` 태그의 개수는 열의 개수와 동일해야 하며, 관련된 내용인 경우 묶어주는 게 접근성 측면에서도 좋다.

```html
<colgroup>
	<col>
	<col>
	<col>
	<col>
</colgroup>
```

### **행(row), 열(column) 합치기**

- **colspan(column span)**  
: 열(column) 합치기  
합칠때 기존의 내용은 삭제하거나, 수정해준다

```html
<td colspan="2">내용 3-2</td> <!-- 열(column) 두개 합치기(합친 나머지는 삭제하기!) -->

															<!-- (3-2, 3-3병합) -->
```

- **rowspan(row span)**  
: 행(row) 합치기  
합칠때 기존의 내용은 삭제하거나, 수정해준다

```html
<td rowspan="4">내용 1-4</td> <!-- 행(row) 네개 합치기(합친 나머지는 삭제하기!) -->

															<!-- (1-4, 2-4, 3-3, 4-4병합) -->
```


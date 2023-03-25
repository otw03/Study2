# list_tag  
[1. 목록을 만드는 태그](#1-목록을-만드는-태그)  
[-- 1.1 ul Unordered List : 순서가 없는 목록 태그](#11-ulul--unordered-list--순서가-없는-목록-태그)  
[-- 1.2 ol Ordered List : 순서가 있는 목록 태그](#12-olol--ordered-list--순서가-있는-목록-태그)  
[-- 1.3 dl Description List : 설명 목록 태그](#13--dldl--description-list--설명-목록-태그)  
[-- 1.4 중첩목록](#14-중첩목록)  

# 1. 목록을 만드는 태그

## 1.1 `<ul></ul>` : Unordered List : 순서가 없는 목록 태그

제일 많이 사용하는 목록 태그

- `type : disc(기본값), circle, square`
- `<li></li>` : List item : 리스트를 이루는 목록 요소

```html
<ul type="circle">
    <li>강아지</li>
    <li>고양이</li>
    <li>다람쥐</li>
</ul>
```

## 1.2 `<ol></ol>` : Ordered List : 순서가 있는 목록 태그

- `type : 1(기본값) / A / a / i / I`

```html
<ol type="A">
    <li>냄비에 물을 받는다</li>
    <li>물이 끓으면 라면을 넣는다</li>
    <li>3~4분 후 호로록!</li>
</ol>
```

## 1.3  `<dl></dl>` : Description List : 설명 목록 태그

용어(term)와 그에 대한 설명(description)을 리스트 형식으로 정의할 때 사용  

사용빈도 낮음  

- `<dt></dt>` : 이름(단어명). 용어(term)나 이름(name)을 나타냄.
- `<dd></dd>` : 값(설명). 해당 용어에 대한 설명을 나타냄.

```html
<dl>
    <dt>만반잘부</dt>
    <dd>만나서 반가워요 잘 부탁드려요</dd>
</dl>
```

## 1.4 중첩목록

대분류>중분류>소분류 와 같이 카테고리 형태로 작성할 때 사용,  

내비게이션 메뉴 작성 시 서브 메뉴 만들 때 사용함. 3depth(단계) 이상은 지양  

```html
<ul>
    <li>바다동물
        <ul>
            <li>물개</li>
            <li>고래</li>
            <li>해달</li>
        </ul>
    </li>
    <li>새
        <ol>
            <li>참새</li>
            <li>비둘기</li>
            <li>펠리칸</li>
        </ol>
    </li>
</ul>
```


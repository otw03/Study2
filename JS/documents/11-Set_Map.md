# 11-Set, Map
[1. Set](#1-set)  
[2. Map](#2-map)  

# 1. Set

정보의 집합을 나타냄  

```
// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value); // 1 2 3 1 2 3
}

// 추가
// 배열은 중복해서 동일한 item을 추가할 수 있지만  
// set은 중복이 불가능하다
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); 
// Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// 오브젝트는 얕은 복사가 된다  
obj1.price = 10;
objs.add(obj1);
console.log(objs); 
// Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } }

// 새로운 오브젝트를 추가하면 값이 같아도 주소가 다르기 때문에 추가된다
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs); 
// Set(3) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 5 } }
obj3.price = 8;
console.log(objs); 
// Set(3) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 8 } }
```

# 2. Map

- key 와 value 로 이루어진 자료구조 ⇒ [키, 값]
- set과 같이 순서는 중요하지 않다 ⇒ 해당key가 value를 가리키기만 하면 된다
- 유일한 key 를 가지고 있어야 한다
- key 만 다르다면 같은 값이 들어가도 된다

```jsx
const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인
console.log(map.has("key1")); // true
console.log(map.has("key6")); // false

// 순회
map.forEach((value, key) => console.log(key, value)); // key1 🍎 key2 🍌
console.log(map.keys());    // [Map Iterator] { 'key1', 'key2' }
console.log(map.values());  // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

// 찾기
console.log(map.get("key1")); // 🍎
console.log(map.get("key2")); // 🍌
console.log(map.get("key4")); // undefined

// 추가
map.set("key3", "🥝");
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete("key3");
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점??
// 사용할 수 있는 함수가 다름
// 오브젝트는 동적 접근이 가능
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는우유" };
const obj = {
  [key]: milk,
};
console.log(obj);
// { '[object Object]': { name: 'milk', price: 10, description: '맛있는우유' } }
const map2 = new Map([[key, milk]]);
console.log(map2);
// Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는우유' } }
console.log(obj[key]); 
// { name: 'milk', price: 10, description: '맛있는우유' }
console.log(map2[key]);
// undefined
console.log(map2.get(key));
// { name: 'milk', price: 10, description: '맛있는우유' }
```


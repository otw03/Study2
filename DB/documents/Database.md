# 데이터베이스

# 1.1 데이터베이스란?

### 지금까지 데이터를 서버 메모리에 저장

- 서버를 재시작하면 데이터도 사라져버림 → 영구적으로 저장할 공간 필요

### MySQL 관계형 데이터베이스 사용

- 데이터베이스: 관련성을 가지며 중복이 없는 데이터들의 집합
- DBMS: 데이터베이스를 관리하는 시스템
- RDBMS: 관계형 데이터베이스를 관리하는 시스템
- 서버의 하드 디스크나 SSD 등의 저장 매체에 데이터를 저장
- 서버 종료 여부와 상관 없이 데이터를 계속 사용할 수 있음
- 여러 사람이 동시에 접근할 수 있고, 권한을 따로 줄 수 있음

### DBMS의 종류

대표적인 RDBMS로 MySQL, Oracle, MSSQL 등이 있음  

| DBMS | 제작사 | 운영체제 |  |
| --- | --- | --- | --- |
| MySQL | MySQL→Oracle(인수합병) | Unix, Linux, Windows, Mac | 오픈 소스(상용시 비용발생) |
| Oracle | Oracle | Unix, Linux, Windows | 시장1위, 대량의 데이터 처리 용이 |
| MSSQL | Microsoft | Windows특화 |  |

### SQL(Structured Query Language)

- DBMS에서 사용하는 DB를 조작하기 위한 언어

# 1.2 데이터베이스, 테이블 생성

- MySQL 에서 데이터베이스와 SCHEMA(스키마)는 같은 개념
- 테이블: 데이터가 들어갈 수 있는 틀, 테이블에 맞는 데이터만 들어갈 수 있음

## 1.2.1 컬럼과 로우

- 컬럼: 나이, 성별 같은 정보
- 로우: 실제로 들어가는 데이터

## 1.2.2 Primary Key, Unique Index

### PRIMARY KEY(id)

- id가 테이블에서 로우를 특정할 수 있게 해주는 고유한 값임을 의미  
학번, 주민등록번호같은 개념

### UNIQUE INDEX name_UNIQUE (name ASC)

- 해당 컬럼(name)이 고유해야 함을 나타내는 옵션  
name_UNIQUE는 이 옵션의 이름(아무거나 다른 걸로 지어도 됨)  
ASC는 인덱스를 오름차순으로 저장함의 의미(내림차순은 DESC)

## 1.2.3 외래키(foreign key)

다른 테이블의 기본키를 저장하는 컬럼을 외래키(foreign key) 라고 함
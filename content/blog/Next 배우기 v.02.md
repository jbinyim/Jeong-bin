---
title: "Next 배우기 v.02"
date: "2024-09-26"
category: "next"
---

### 1. fetch

![](https://velog.velcdn.com/images/jbinyim12/post/20511e20-817a-453d-9ce1-0b5ba1056b56/image.png)

- server component에서 next가 fetch한 것을 기억해서 프론트에서 로딩이 되지 않는다.
- 데이터가 도착해야 사용자가 화면을 출력 받을 수 있다.

> **Server Component**

- fetch data
- 백엔드 리소스에 접근 시
- 중요한 정보 서버에 보관 시(API key, access token ..)
- 클라이언트 측 JS 코드 줄여야 할 때

> **Client Component ("use client")**

- fetch data - SWR, React Query 등 라이브러리 사용시
- 이벤트 리스너 추가시(onClick, onChange ..)
- State, Lifecycle Effects 사용시(useState, useEffect, useReducer ..)
- 브라우저 Web API 사용시(localStorage, sessionStorage, Cookie)
- State, Effect, 브라우저 API에 의존하는 커스텀 Hook 사용시
- React Class Component 사용시

### 2. loading

![](https://velog.velcdn.com/images/jbinyim12/post/b90ca26f-3178-4fe1-86bc-49a614d9dd8f/image.png)

- loading 페이지를 따로 만들어 구성하면 자동으로 로딩페이지가 보여진다.
- 백엔드에서 fetch 하는 중에 사용자에게 보여지는 페이지
- page와 같은 폴더에 있어야 해당 페이지의 로딩 화면으로 출력된다.

### 3. Promise.all()

- 병렬적 fetch
- js에서 비동기 작업을 동시에 실행하고 모든 작업이 완료될 때까지 기다렸다가 결과를 배열 형태로 반환하는 함수
- 단점: 둘다 로딩이 끝나야 화면에 출력할 수 있음

### 4. Suspense

![](https://velog.velcdn.com/images/jbinyim12/post/9c79d6b4-ac51-4e5a-b70c-2d697033c15a/image.png)

- promise.all의 단점을 보완
- 데이터 로딩이 완료된 컴포넌트 순서대로 결과를 보여준다.
- 병렬 프로그래밍
- 각각 데이터들의 로딩중에 fallback을 이용하여 로딩화면을 띄울 수 있다.

![](https://velog.velcdn.com/images/jbinyim12/post/55e85043-f5d5-4d65-8770-00ff0f7c1bc5/image.png)

- 컴포넌트화 해서 정리할 수 있다.

### 5. error

![](https://velog.velcdn.com/images/jbinyim12/post/69619f31-be7e-4281-84c5-55697c3d0e65/image.png)

- error.tsx를 만들어 오류 처리를 하면 페이지가 깨지지 않고 오류 메세지를 전달할 수 있다.
- page와 같은 폴더에 있어야 해당 페이지의 에러 화면으로 출력된다.

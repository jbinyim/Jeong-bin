---
title: "Next 배우기 v.01"
date: "2024-09-24"
category: "next"
---

#### 1. next / react / react-dom 설치

```cmd
 npm init -y
 npm i next@latest react@latest react-dom@latest
```

#### 2. 페이지 라우팅

![](https://velog.velcdn.com/images/jbinyim12/post/804441e6-2987-4202-9b3f-c90deeecafbc/image.png)

- 위와 같이 next에서는 app으로 된 폴더 안에 page를 생성해야 하고 app 폴더에 있는 page.tsx는 기본 시작 페이지다.
- 파일명이 url주소이고 실질먹인 페이지는 page.tsx이다.
- 폴더명에 (소괄호)을 사용하면 url주소와 상관없이 폴더로 파일을 정리할 수 있다.

![](https://velog.velcdn.com/images/jbinyim12/post/bb5b058d-f769-41bc-a14e-8b3eac00559b/image.png)

- Dynamic Routes(다이나믹 라우트)
- 폴더명에 [대괄호]을 사용하면 하나의 컴포넌트를 사용하여 변화된 데이터를 수용할 수 있는 페이지를 만들수 있다.

#### 3. metadata

![](https://velog.velcdn.com/images/jbinyim12/post/0e0d5734-c19b-43d8-be40-ef7ea037bab9/image.png)

- 루트 레이아웃에서 "%s" 을 작성해주면 다른 페이지에서는 직접 title을 지정해주면 된다.

![](https://velog.velcdn.com/images/jbinyim12/post/eab59ed0-17b7-4c29-bb2d-5473fc9393b5/image.png)

#### 4. layout

- 레이아웃은 폴더마다 중첩이 가능하다.

![](https://velog.velcdn.com/images/jbinyim12/post/ad63bdae-93a2-453a-882e-0c0e5ac753cf/image.png)

- 이런식으로 root layout에서 navigation을 설정하면 네비게이션바를 고정할 수 있다.

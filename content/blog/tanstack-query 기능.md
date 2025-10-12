---
title: "tanstack-query 기능"
date: "2024-06-28"
category: ""
---

# tanstack-query 기능

```jsx
const { data, isLoading } =
  useQuery <
  MovieResponse >
  (["popMovies"],
  () => getNowMovies(),
  {
    refetchOnWindowFocus: false,
  })
```

> 1. refetchOnWindowFocus: false : 기본적으로 react-query는 **사용자가 브라우저 창을 벗어났다가 다시 돌아오면 자동으로 데이터를 다시 가져온다.** 이를 기능을 refetchOnWindowFocus라고 한다._ (사용자가 브라우저 창을 벗어났다 다시 돌아올때 데이터를 다시 가져오지 않음)_

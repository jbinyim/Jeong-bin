---
title: "react scroll 이벤트 (header)"
date: "2024-06-28"
category: ""
---

# react scroll 이벤트 (header)

```jsx
const [position, sePosition] = useState(0)

function onScroll() {
  sePosition(window.scrollY)
}

useEffect(() => {
  window.addEventListener("scroll", onScroll)
  return () => {
    window.removeEventListener("scroll", onScroll)
  }
}, [])
```

1. useState을 이용하여 스크롤 위치를 관리한다.
2. onScroll 함수는 스크롤 이벤트가 발생할때 마다 호출하게 된다.

   2-1. window.scrollY를 이용하여 현재 스크롤 위치를 가져오고, sePosition을 통해 업데이트를 한다.

3. useEffect를 통해 마운트가 실행될때마다 window.addEventListener || removeEventListener을 사용하여 이벤트를 등록 및 제거한다.
4. 스크롤 위치가 변경될 때마다 position값이 업데이트된다.

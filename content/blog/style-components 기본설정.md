---
title: "style-components 기본 설정"
date: "2024-07-12"
category: ""
---

# style-components 기본 설정

먼저 style-components의 타입정의 설치하고 가야한다.

```cmd
npm i styled-components
npm i @types/styled-components
npm i styled-reset
```

1. 전역 스타일 설정
   ![](https://velog.velcdn.com/images/jbinyim12/post/51a4588a-7411-4209-9c13-c599f374f125/image.PNG)

2. styled-components에서 전역적으로 사용할 변수를 지정하는 방법. (theme.ts)
   ![](https://velog.velcdn.com/images/jbinyim12/post/f09e281e-99ef-409f-8ad5-4aad9fa29e9d/image.png)

3. styled-components의 자동완성을 위해서 아래와 같이 타입 정의를 수정해야 한다. (styled.d.ts)
   ![](https://velog.velcdn.com/images/jbinyim12/post/084c1a1f-d393-4276-b830-f14645c54337/image.PNG)

4. 이미지를 불러올때는 아래와 같이 변수를 지정해야한다. (imgages.d.ts)
   ![](https://velog.velcdn.com/images/jbinyim12/post/ece2a217-3ec7-4e08-a518-c3a54bf61180/image.PNG)

5. 사용방법1
   ![](https://velog.velcdn.com/images/jbinyim12/post/4bcf6b63-cf3b-4161-a453-9ac8de45fbc8/image.png)

6. 사용방법2

![](https://velog.velcdn.com/images/jbinyim12/post/01454110-6c24-4948-9da6-580131036a03/image.PNG)

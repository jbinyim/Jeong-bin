---
title: "FC Info"
date: "2025-09-03"
oneLine: "fc온라인 프로젝트"
tech: ["Next.js", "TypeScript", "TailwindCSS", "Node.js"]
link: "https://fcinfo.kr"
thumbnail: "https://yim-kappa.vercel.app/fc/fc-home.png"
---

# FC Info 개인 개발 리포트(2인) - 임정빈

배포 주소: https://www.fcinfo.kr

깃허브 주소: https://github.com/jbinyim/fconline-record-next

## 1. 프로젝트 개요

FC 온라인 전적검색 사이트는 EA SPORTS FC 온라인 이용자들의 경기 데이터를 쉽고 빠르게 조회할 수 있도록 만든 웹 서비스입니다.

사용자는 닉네임만 입력하면 공식경기와 클래식 1대1 기록을 확인할 수 있고, 각 경기별 상세 기록과 라인업까지 확인할 수 있습니다. 또한 유저 프로필에 코멘트를 남길 수 있어 단순한 검색을 넘어 커뮤니티적인 요소도 함께 제공합니다.

단순 전적 확인을 넘어, 경기 흐름과 선수 기용 패턴까지 분석할 수 있도록 설계된 프로젝트입니다.

## 2. 담당한 작업

| **(FE)**                                                 | **(BE)**                          |
| -------------------------------------------------------- | --------------------------------- |
| 홈 페이지                                                | 코멘트 조회, 생성, 삭제, 추천 API |
| 한줄평가 페이지                                          | FC온라인 이벤트 크롤링 데이터     |
| 유저 정보, 경기 기록, 경기 상세 기록, 라인업 데이터 호출 |                                   |

## 3. 기술적 성과

| Frontend       | Backend    | Deployment |
| -------------- | ---------- | ---------- |
| Next.js        | Node.js    | Vercel     |
| TypeScript     | Express.js | Render     |
| Tailwind       | TypeScript |            |
| Tanstack Query | PostgreSQL |            |
|                | Prisma     |            |
|                |            |            |

## 4. 문제점 및 해결 과정

- **최근 유저 조회 기능 구현**

  - 문제점
    - 넥슨 오픈 API의 데이터 구조상 유저의 완전한 정보를 얻기 위해서는 여러 번의 API 호출이 필요했습니다
    - 기본 정보(닉네임 등)와 랭크 정보가 각각 다른 엔드포인트에 분리되어 있어 개별적으로 요청해야 했습니다
    - 여러 유저의 정보를 동시에 가져와야 하는 상황에서 효율적인 데이터 fetching이 필요했습니다
  - 해결 과정

    - React Query의 `useQueries`를 활용하여 문제를 해결했습니다.
    - 해결 코드

      ```tsx
      // 여러 유저의 기본 정보를 동시에 조회
      const userBasicQueries = useQueries({
        queries: recentOuids.map(ouid => ({
          queryKey: ["userBasic", ouid],
          queryFn: () => accountApi.getUserBasic(ouid),
        })),
      })

      // 유저 최대 등급 정보를 동시에 조회
      const userDivisionQueries = useQueries({
        queries: recentOuids.map(ouid => ({
          queryKey: ["userMaxDivision", ouid],
          queryFn: () => accountApi.getUserMaxdivision(ouid),
          enabled: !!ouid,
        })),
      })
      ```

  - 성과
    - 병렬 처리: 여러 개의 쿼리를 동시에 실행하여 성능 향상
    - 개별 상태 관리: 각 쿼리별로 독립적인 로딩, 에러 상태 관리 가능
    - 자동 캐싱: `queryKey`를 통해 React Query의 캐싱 시스템 활용
    - 효율적인 리렌더링: 변경된 데이터만 업데이트되어 불필요한 리렌더링 방지

- **더보기 기능 구현(무한 스크롤)**

  - 문제점
    - 대량의 매치 데이터를 한 번에 모두 불러오면 성능상 문제가 발생할 수 있었습니다.
    - 사용자 경험을 위해 점진적으로 데이터를 로드하는 방식이 필요했습니다.
    - 페이지네이션 로직을 직접 구현하기에는 복잡함이 있었습니다.
  - 해결 과정

    - React Query의 `useInfiniteQuery`를 활용하여 무한 스크롤 기능을 구현했습니다.
    - 해결 코드

      ```tsx
      const useUserMatch = (ouid: string) => {
        return useInfiniteQuery({
          queryKey: ["userMatch", ouid],

          // pageParam을 통해 offset 값을 관리
          queryFn: ({ pageParam = 0 }) =>
            accountApi.getUserMatch(ouid, pageParam, 10),

          initialPageParam: 0,

          // 다음 페이지 존재 여부 판단 및 offset 계산
          getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length > 0) {
              return allPages.length * 10
            }
            return undefined // 더 이상 데이터가 없으면 종료
          },
        })
      }
      ```

    - 자동 페이지 관리: `pageParam`을 통해 현재 페이지(offset) 자동 관리
    - 조건부 로딩: `getNextPageParam`에서 다음 페이지 존재 여부 판단
    - 사용자 친화적: 버튼 클릭 방식으로 사용자가 원할 때만 추가 데이터 로드

  - 성과
    - React Query의 `useInfiniteQuery`가 제공하는 추상화 덕분에 비교적 간단하게 구현할 수 있었습니다. 다만 초기 설정과 개념 이해에 시간이 소요되었습니다.

- 결론
  두 기능 모두 React Query의 강력한 기능들을 활용하여 해결했습니다. 특히 외부 API의 제약사항을 클라이언트 측에서 효율적으로 처리할 수 있는 방법을 학습할 수 있었습니다. 이러한 경험을 통해 복잡한 데이터 fetching 로직도 적절한 도구 선택으로 깔끔하게 해결할 수 있음을 배웠습니다.

## 5. 협업 및 피드백

퍼블리셔 친구와의 협업에서 기능 구현을 전반적으로 담당하게 되었습니다. 디자인이 완성된 후 그 위에 기능을 덧붙이는 방식으로 진행했는데, 이 과정에서 예상치 못한 문제들이 발생했습니다.

- 문제점: 디자인과 기능의 충돌
  - **레이아웃 제약**: 기존 디자인의 레이아웃이 동적 데이터 표시에 적합하지 않은 경우
  - **상태 관리 복잡성**: 시각적 요소와 기능적 요소가 분리되어 상태 동기화가 어려움
  - **반응형 대응**: 다양한 데이터 길이나 상태에 따른 UI 변화 대응 부족
  - **사용자 경험**: 디자인 우선으로 구현하다 보니 기능적 편의성이 후순위가 되는 경우
- 개선 방안에 대한 고찰: Mock 데이터 우선 접근법의 필요성
  - **Mock 데이터 정의**: 프로젝트 초기에 실제 API 응답과 유사한 Mock 데이터 구조 설계
  - **기능 중심 디자인**: Mock 데이터를 기반으로 한 기능적 프로토타입 먼저 구현
  - **점진적 디자인 적용**: 기능이 안정화된 후 시각적 요소를 단계적으로 적용
  - **지속적인 피드백**: 각 단계에서 디자이너와 개발자 간의 긴밀한 소통

## 6. 코드 품질 및 최적화

- 컴포넌트 재사용성
  - 프로젝트 진행 과정에서 유사한 UI 패턴과 로직이 반복적으로 나타나는 것을 발견했습니다. 이를 해결하기 위해 적극적으로 컴포넌트화를 진행했습니다.

## 7. 향후 개선 사항 및 제안

- 추가 기능 구현:
  - ai를 통한 나의 경기 분석
  - 수수료 계산기
  - 선수 평가

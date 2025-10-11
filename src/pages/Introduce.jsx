import React from "react"
import Layout from "../components/layout/layout.jsx"
import Table from "../components/career/Table.jsx"
import HomeTitle from "../components/home/HomeTitle.jsx"

export default function Introduce() {
  const edu = {
    name: ["과정", "기관", "기간"],
    rows: [
      [
        "클라우드 기반 풀스택 엔지니어 부트캠프",
        "코드잇 평생교육원",
        "25.01.16 ~ 25.08.19",
      ],
      [
        "스마트 웹콘텐츠 UI/UX 퍼블리셔&프론트엔드_B",
        "이젠아카데미DX교육센터",
        "23.12.29 ~ 24.06.13",
      ],
    ],
  }
  const career = {
    name: ["기관 명", "담당 업무", "기간"],
    rows: [["한국맥도날드(유한회사)", "제조", "21.01 ~ 22.03"]],
  }
  const school = {
    name: ["출신 학교", "학과", "기간"],
    rows: [
      ["서울기독대학교", "국제경영정보학과", "18.03 ~ 25.02"],
      ["서울 현대고등학교", "인문계", "15.03 ~ 18.02"],
    ],
  }
  const qualifications = {
    name: ["자격증", "기관", "취득일"],
    rows: [
      ["레크리에이션 1급", "국제평생교육원", "18.12"],
      ["웃음교육지도사 1급", "국제평생교육원", "18.12"],
      ["2종보통운전면허", "서울지방경찰청", "18.01"],
    ],
  }

  return (
    <Layout>
      <main className="max-w-200 mx-auto pt-10 px-4">
        <HomeTitle
          isHome={false}
          text={
            <>
              작은 배움도 놓치지 않고 성장으로 이어가며
              <br />
              최신 웹 기술을 빠르게 배우고
              <br />
              사용자 친화적인 웹사이트를 만드는 꿈을 키우는 중 입니다.
            </>
          }
        />
        <article className="mt-14 flex flex-col items-center gap-2">
          <img
            src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
            alt="임정빈 사진2"
            className="h-105 object-contain"
          />
          <div className="text-12-normal grid grid-cols-2 gap-1 lg:flex lg:items-center lg:gap-4">
            <p># 임정빈</p>
            <p># 99.12.14</p>
            <p># 프론트엔드 개발자</p>
            <p># jbinyim991214@gmail.com</p>
          </div>
        </article>

        <section className="mx-auto py-16  lg:px-0">
          <main className="py-10 flex flex-col gap-15">
            <Table title="교육 이수" type={edu} />
            <Table title="자격 사항" type={qualifications} />
            <Table title="경력 사항" type={career} />
            <Table title="학력 사항" type={school} />
          </main>
        </section>
      </main>
    </Layout>
  )
}

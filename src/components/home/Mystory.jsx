import { comments } from "../../utils/comment"
import * as React from "react"
import SeeMoreButton from "../common/SeeMoreButton"

export default function Mystory() {
  return (
    <main className="pt-35 px-4 lg:px-0 lg:w-[1078px] mx-auto">
      <article className="flex items-center gap-2">
        <img
          src="https://jbinyim12.cafe24.com/potfolio/news-motion.gif"
          alt="간단 소개 아이콘"
          className="w-6.5"
        />
        <p className="text-22-bold lg:text-36-bold">나의 이야기</p>
      </article>
      <article className="mt-14 flex flex-col items-center gap-2">
        <img
          src="https://jbinyim12.cafe24.com/web/upload/captcha/image_72-removebg-preview.png"
          alt="임정빈 사진2"
          className="h-105 object-contain"
        />
        <div className="text-12-normal grid grid-cols-3 gap-2 lg:flex lg:items-center lg:gap-4">
          <p>#임정빈</p>
          <p>#99.12.14</p>
          <p>#프론트엔드 개발자</p>
          <p>#Node 개발자</p>
          <p>#풀스택 개발자</p>
        </div>
      </article>
      <article className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {comments.slice(0, 4).map((comment, _idx) => (
          <figure key={_idx} className="bg-[#d4d4d4] rounded-2xl p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="23"
              viewBox="0 0 48 40"
              fill="none"
            >
              <path
                d="M11.1376 40C3.84394 40 0 34.3842 0 24.6305C0 13.7931 5.42094 5.51724 16.6571 0L20.4025 7.68473C13.4045 10.936 10.0534 15.3695 10.0534 21.8719C10.4476 21.7734 10.7433 21.7734 11.1376 21.7734C16.0657 21.7734 20.1068 25.1232 20.1068 30.4434C20.1068 36.2562 16.3614 40 11.1376 40ZM38.7351 40C31.4415 40 27.5975 34.3842 27.5975 24.6305C27.5975 13.7931 33.0185 5.51724 44.2546 0L48 7.68473C41.0021 10.936 37.6509 15.3695 37.6509 21.8719C38.0452 21.7734 38.3409 21.7734 38.7351 21.7734C43.6632 21.7734 47.7043 25.1232 47.7043 30.4434C47.7043 36.2562 43.9589 40 38.7351 40Z"
                fill="#323232"
              ></path>
            </svg>
            <p className="mt-3">{comment}</p>
          </figure>
        ))}
      </article>
      <SeeMoreButton text="나의 소개 바로가기" link={"introduce"} />
    </main>
  )
}

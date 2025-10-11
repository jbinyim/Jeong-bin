import { useRef } from "react"
import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"

export default function HomeTitle({ text, isHome }) {
  const textRef = useRef(null)

  useGSAP(
    () => {
      // 텍스트를 글자 단위로 분리
      const split = new SplitType(textRef.current, { types: "chars" })

      // 애니메이션 타임라인 생성
      const timeline = gsap.timeline({
        repeat: -1, // 무한 반복
        yoyo: true, // 되감기 효과로 부드럽게 반복
        repeatDelay: 0.5, // 반복 시작 전 딜레이
      })

      // 애니메이션 시퀀스 정의
      timeline.from(split.chars, {
        duration: 0.5,
        x: 5, // 오른쪽으로 5px 이동
        color: "#6b7280", // 회색으로 변경
        stagger: 0.05, // 각 글자 애니메이션 사이의 딜레이
        ease: "power2.inOut",
      })
    },
    { scope: textRef }
  )

  return (
    <p
      ref={textRef}
      className={`text-custom-black text-24-normal text-center ${
        isHome && "text-3xl lg:text-5xl"
      }  font-bold`}
    >
      {text}
    </p>
  )
}

import * as React from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function EducationBox() {
  const educationRef = useRef(null)
  const educationAnimation = useRef(null)

  useEffect(() => {
    educationAnimation.current = gsap.to(educationRef.current, {
      y: -10,
      duration: 0.5,
      ease: "power1.out",
      yoyo: true,
      repeat: -1,
      paused: true,
    })
  }, [])

  const handleMouseEnter = () => {
    educationAnimation.current.restart()
  }
  const handleMouseLeave = () => {
    educationAnimation.current.pause(0)
  }

  return (
    <Link to="/Blog" className="order-3">
      {/* lg size */}
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden h-100 bg-[#e0e0e0] rounded-2xl lg:flex flex-col gap-10 cursor-pointer"
      >
        <div className="p-6 cursor-pointer">
          <p className="text-20-bold mb-3">블로그</p>
          <p className="text-13-normal">
            나만의 기술 학습, 프로젝트 경험, 문제 해결 노하우를 정리하고
            공유하는 공간.
          </p>
        </div>
        <img
          ref={educationRef}
          src="https://jbinyim12.cafe24.com/educationbg.jpg"
          alt="교육 이미지"
          className="rounded-full"
        />
      </div>
      {/* sm size */}
      <div className="lg:hidden w-full h-46.5 bg-[#e0e0e0] rounded-2xl flex justify-between">
        <div className="p-6 cursor-pointer">
          <p className="text-20-bold mb-3">교육</p>
          <p className="text-13-normal">
            나만의 기술 학습, 프로젝트 경험, 문제 해결 노하우를 정리하고
            공유하는 공간.
          </p>
        </div>
        <img
          src="https://jbinyim12.cafe24.com/educationbg.jpg"
          alt="교육 이미지"
          className="rounded-full"
        />
      </div>
    </Link>
  )
}

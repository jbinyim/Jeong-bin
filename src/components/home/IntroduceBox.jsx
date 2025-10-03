import * as React from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function IntroduceBox() {
  const titleRef = useRef(null)
  const storyRef = useRef(null)
  const profileRef = useRef(null)
  const introTimeline = useRef(null)

  useEffect(() => {
    gsap.set([titleRef.current, storyRef.current, profileRef.current], {
      opacity: 1,
    })

    introTimeline.current = gsap.timeline({
      paused: true,
      yoyo: true,
      repeat: 1,
      defaults: { duration: 0.3, ease: "power1.out" },
    })

    introTimeline.current
      .to(titleRef.current, { opacity: 0 }, 0)
      .to(storyRef.current, { opacity: 0 }, ">")
      .to(profileRef.current, { opacity: 0 }, ">")
  }, [])

  const handleMouseEnter = () => {
    introTimeline.current.restart()
  }

  const handleMouseLeave = () => {
    introTimeline.current.pause(0)
  }

  return (
    <Link to="/Introduce" className="order-1 cursor-pointer">
      {/* lg size */}
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden h-120 bg-gradient-to-b from-[#242424] to-[#5f5f5f] rounded-2xl text-white lg:flex flex-col justify-between"
      >
        <div className="p-6">
          <p ref={titleRef} className="text-20-bold mb-3">
            소개
          </p>
          <p ref={storyRef} className="text-13-normal">
            개발자가 되기 위한
            <br />
            나의 스토리
          </p>
        </div>
        <img
          ref={profileRef}
          className="mb-15"
          src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
          alt="임정빈 사진"
        />
      </div>
      {/* sm size */}
      <div className="lg:hidden w-full h-46.5 bg-gradient-to-r from-[#242424] to-[#5f5f5f] rounded-2xl text-white flex justify-between">
        <div className="p-6">
          <p className="text-16-bold mb-3">소개</p>
          <p className="text-12-normal">
            개발자가 되기 위한
            <br />
            나의 스토리
          </p>
        </div>
        <img
          src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
          alt="임정빈 사진"
          className="w-50 h-full object-contain"
        />
      </div>
    </Link>
  )
}

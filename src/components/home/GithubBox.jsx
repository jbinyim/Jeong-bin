import gsap from "gsap"
import { useEffect, useRef } from "react"
import * as React from "react"

export default function GithubBox() {
  const linkIconRef = useRef(null)
  const githubIconRef = useRef(null)
  const cardTimeline = useRef(null)

  useEffect(() => {
    gsap.set(linkIconRef.current, { opacity: 0, x: -22, y: 340 })
    gsap.set(githubIconRef.current, { y: 0, rotation: 0 })

    cardTimeline.current = gsap.timeline({
      paused: true,
    })

    cardTimeline.current
      .to(
        linkIconRef.current,
        {
          opacity: 1,
          x: 0,
          y: 300,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      )
      .to(
        githubIconRef.current,
        { y: -5, duration: 0.3, ease: "power1.out" },
        0
      )
      .to(
        githubIconRef.current,
        {
          rotation: 5,
          yoyo: true,
          repeat: -1,
          duration: 0.2,
          ease: "power1.inOut",
        },
        ">"
      )
  }, [])

  const handleMouseEnter = () => {
    cardTimeline.current.play()
  }

  const handleMouseLeave = () => {
    cardTimeline.current.pause(0)
  }

  return (
    <a href="https://github.com/jbinyim" target="_blank" rel="noreferrer" className="order-4">
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden h-85 bg-gradient-to-br from-[#179B87] to-[#17637C] rounded-2xl text-white lg:flex flex-col justify-between cursor-pointer relative overflow-hidden"
      >
        <div className="p-6">
          <p className="text-20-bold mb-3">깃허브</p>
          <p className="text-13-normal">
            개인 프로젝트와 코드 기여를 확인할 수 있는 깃허브 저장소
          </p>
        </div>
        <img
          ref={githubIconRef}
          src="https://jbinyim12.cafe24.com/github.webp"
          alt="깃허브 이미지"
          className="mb-15"
        />
        <img
          ref={linkIconRef}
          src="https://jbinyim12.cafe24.com/link-icon.png"
          alt="외부 링크 아이콘"
          className="absolute right-0 w-11 h-11"
        />
      </div>
      <div className="lg:hidden w-full h-46.5 bg-gradient-to-br from-[#179B87] to-[#17637C] rounded-2xl text-white flex justify-between relative">
        <div className="p-6">
          <p className="text-20-bold mb-3">깃허브</p>
          <p className="text-13-normal">
            개인 프로젝트와 코드 기여를
            <br />
            확인할 수 있는 깃허브 저장소
          </p>
        </div>

        <img
          src="https://jbinyim12.cafe24.com/github.webp"
          alt="깃허브 이미지"
          className="w-50 h-50 object-cover"
        />
        <img
          src="https://jbinyim12.cafe24.com/link-icon.png"
          alt="외부 링크 아이콘"
          className="absolute bottom-0 right-0 w-8 h-8"
        />
      </div>
    </a>
  )
}

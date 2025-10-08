import * as React from "react"

export default function SkillCard({ text, img }) {
  return (
    <div className="w-25 h-34 flex flex-col items-center justify-around bg-[#f1f1f1] rounded-sm p-2">
      <p className="text-center text-13-normal">{text}</p>
      <img src={img} alt="기술 이미지" className="h-18" />
    </div>
  )
}

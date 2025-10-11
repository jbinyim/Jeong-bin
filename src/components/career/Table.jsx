import React from "react"

export default function Table({ title, type }) {
  return (
    <article>
      <p className="text-20-bold">{title}</p>
      <ul className="py-4">
        <li className="grid grid-cols-3 items-center bg-gray-100 p-4 border-y-2 border-gray-200 text-16-bold">
          {type.name.map((n, _idx) => (
            <p key={_idx}>{n}</p>
          ))}
        </li>
        {type.rows.map(row => (
          <li className="grid grid-cols-3 text-14-normal py-4 px-2 border-b-2 border-gray-200">
            {row.map((d, _idx) => (
              <p key={_idx} className="px-2">
                {d}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </article>
  )
}

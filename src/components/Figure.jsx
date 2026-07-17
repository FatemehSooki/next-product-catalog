import Image from 'next/image'
import React from 'react'

export default function Figure({ src, price, title }) {
  return (
<div className="flex flex-col items-center gap-5">

  <figure className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d0f] p-5">
    <Image
      width={220}
      height={220}
      src={src}
      alt="title"
      className="h-[220px] w-[220px] object-contain transition duration-500 group-hover:scale-110"
    />
  </figure>

  <span className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-violet-900/40">
    ${price}
  </span>

</div>
  )
}
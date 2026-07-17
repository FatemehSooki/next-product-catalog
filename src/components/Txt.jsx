import React from 'react'

export default function Txt({ id, title, category, description }) {
  return (
<div className="flex flex-1 flex-col gap-4">

  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
    Product #{id}
  </span>

  <h2 className="text-3xl font-bold text-white">
    {title}
  </h2>

  <span className="w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-300">
    {category}
  </span>

  <p className="max-w-2xl leading-8 text-zinc-400 line-clamp-3">
    {description}
  </p>

</div>
  )
}
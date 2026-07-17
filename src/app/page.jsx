'use client'
import React, { useEffect, useState } from 'react'
import './globals.css'
import Txt from '@/components/Txt'
import Figure from '@/components/Figure'

export default function Page() {
  const [myData, setMyData] = useState(null)
  const [skull] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(x => x.json())
      .then(data => setMyData(data.products))
  }, [])

  if (myData == null) {
return (
  <article className="min-h-screen bg-[#0b0b0c] p-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-8">

      {skull.map((item) => (
        <div
          key={item}
          className="relative overflow-hidden flex items-center justify-between gap-10 rounded-3xl border border-zinc-800 bg-[#151517] p-8"
        >

          {/* Shine Animation */}
          <div className="absolute inset-0 skeleton-shine"></div>

          {/* Left */}
          <div className="flex flex-1 flex-col gap-5">

            <div className="h-3 w-20 rounded-full bg-zinc-800"></div>

            <div className="h-8 w-72 rounded-xl bg-zinc-800"></div>

            <div className="h-8 w-32 rounded-full bg-zinc-800"></div>

            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-zinc-800"></div>
              <div className="h-4 w-11/12 rounded bg-zinc-800"></div>
              <div className="h-4 w-8/12 rounded bg-zinc-800"></div>
            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-5">

            <div className="h-[220px] w-[220px] rounded-2xl bg-zinc-800"></div>

            <div className="h-12 w-28 rounded-xl bg-zinc-800"></div>

          </div>

        </div>
      ))}

    </div>
  </article>
)
  } else {
    return (
      <article className="min-h-screen bg-[#0b0b0c] p-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          {myData &&
            myData.map((val) => (
              <div
                key={val.id}
                className="group flex items-center justify-between gap-10 rounded-3xl border border-zinc-800 bg-[#151517] p-8 transition-all duration-300 hover:border-violet-500/40 hover:bg-[#1a1a1d] hover:shadow-[0_0_35px_rgba(139,92,246,.15)]"
              >
                <Txt
                  id={val.id}
                  title={val.title}
                  category={val.category}
                  description={val.description}
                />

                <Figure
                  src={val.images[0]}
                  price={val.price}
                  title={val.title}
                />
              </div>
            ))}
        </div>
      </article>
    )
  }
}
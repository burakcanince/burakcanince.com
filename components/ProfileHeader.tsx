'use client'

import { useState } from 'react'
import Image from 'next/image'
import { STACKS } from '@/data/stack'

export default function ProfileHeader() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMouseEnter = () => {
    if (!isAnimating && !isFlipped) {
      setIsAnimating(true)
      setIsFlipped(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }
  }

  const handleMouseLeave = () => {
    if (!isAnimating && isFlipped) {
      setIsAnimating(true)
      setIsFlipped(false)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <>
      <div className="flex items-center gap-5 mb-5 flex-col sm:flex-row">
        <div
          className="relative w-20 h-20 cursor-pointer"
          style={{ perspective: '1000px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative w-full h-full transition-transform duration-[400ms] ease-in-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Burak Can İNCE"
              width={100}
              height={100}
              className="rounded-full transition-opacity duration-300"
            />
            <Image
              src="/profile2.jpg"
              alt="Burak Can İNCE"
              width={100}
              height={100}
              className="rounded-full absolute top-0 left-0 transition-opacity duration-300"
              style={{ opacity: isFlipped ? 1 : 0 }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium">
            Burak Can İNCE
          </h1>
          <div className="text-[#666] dark:text-[#999]">
            <div className="cursor-pointer overflow-hidden group relative">
              <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                Frontend Developer
              </span>
              <span className="absolute top-0 left-0 block transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                Web Designer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="-space-x-5 flex flex-wrap gap-y-2 mb-4 overflow-visible">
        {STACKS.map((item) => (
          <div
            key={item.alt}
            className="relative group bg-white border border-[#eaeaea] cursor-pointer rounded-full w-[45px] h-[45px] p-[10px] flex items-center justify-center overflow-visible"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={40}
              height={40}
            />

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 bg-[#2d2d2d] dark:bg-[#ffffff] text-white dark:text-[#000000] text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
              {item.alt}
            </div>
          </div>
        ))}
      </div>

      <p>
        <span>I&apos;m building </span>
        <span className="bg-red-200 rounded text-red-400 px-1 py-0.5">websites</span><span>, </span>
        <span className="bg-blue-200 rounded text-blue-400 px-1 py-0.5">Chrome extensions</span><span>, </span>
        <span className="bg-green-200 rounded text-green-400 px-1 py-0.5">mobile apps</span>
      </p>

      <p className="mt-2">
        <span>I&apos;m sharing </span>
        <span className="bg-orange-200 rounded text-orange-400 px-1 py-0.5">lofi music videos</span>
        <span> on YouTube</span><span>, </span>
        <span className="bg-purple-200 rounded text-purple-400 px-1 py-0.5">blog posts</span>
        <span> on Instagram</span>
      </p>
    </>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import { ExternalLink } from 'lucide-react'
import { WORKS } from '@/data/project'

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col justify-between pt-10 px-5 transition-colors duration-300">
      <SocialSidebar />

      <div className="max-w-[700px] w-full mx-auto space-y-10">
        {WORKS.map((work) => (
            <div key={work.id} className="flex flex-col gap-3">
              <h3 className="font-bold text-lg md:text-2xl text-center">{work.name}</h3>
              <Image
                src={work.image}
                alt={work.name}
                width={700}
                height={700}
                sizes="100vw"
                className="border-1 border-gray-200 rounded-lg"
                style={{ width: '100%', height: 'auto' }}
              />
              <Link
                key={work.id}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-semibold gap-1 mt-3 text-sm underline underline-offset-[4px]"
              >
                <ExternalLink size={16} />
                Link
              </Link>
            </div>
        ))}

        <div className="flex justify-center lg:hidden">
          <Link href="/" className="text-sm underline underline-offset-[4px]">Back to Home</Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

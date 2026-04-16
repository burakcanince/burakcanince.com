'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaBehance,
  FaCodepen,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaProductHunt,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import { IoHome } from 'react-icons/io5'
import { SOCIAL_LINKS } from '@/data/social'

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  codepen: FaCodepen,
  youtube: FaYoutube,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  producthunt: FaProductHunt,
  behance: FaBehance,
  dribbble: FaDribbble,
  bootsnipp: FaCode,
  home: IoHome,
}

const SHOW_TOOLTIP = ['github', 'linkedin', 'codepen', 'instagram', 'tiktok', 'producthunt', 'behance', 'dribbble', 'youtube']

const TOOLTIP_TEXTS: Record<string, string> = {
  instagram: '12.000+ followers',
  tiktok: '1000+ followers',
  codepen: '50+ pens',
  producthunt: '4 Products',
  behance: '879+ views',
  dribbble: '3 shots',
  linkedin: '2000+ connections',
  github: '5 followers',
  youtube: '1000+ subscribers'
}

const getSocialIcon = (id: string) => {
  const Icon = ICONS[id as keyof typeof ICONS]
  if (!Icon) return null
  return <Icon size={20} />
}

export default function SocialSidebar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <aside className="fixed left-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3">
      {SOCIAL_LINKS.map((social) => {
        const showTooltip = SHOW_TOOLTIP.includes(social.id)
        const tooltipText = TOOLTIP_TEXTS[social.id] || social.name

        return (
          <div key={social.id} className="relative group">
            <Link
              href={social.url}
              target={social.id === 'home' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg bg-[#f5f5f5] dark:bg-[#2a2a2a] flex items-center justify-center text-[#2d2d2d] dark:text-[#e5e5e5] hover:bg-[#e5e5e5] dark:hover:bg-[#333] transition-colors ${isHome && social.id === 'home' ? 'hidden' : ''}`}
              aria-label={social.name}
            >
              {getSocialIcon(social.id)}
            </Link>
            {showTooltip && (
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-white bg-[#2d2d2d] dark:bg-[#1a1a1a] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                {tooltipText}
              </span>
            )}
          </div>
        )
      })}
    </aside>
  )
}

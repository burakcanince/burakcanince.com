import Link from 'next/link'
import { MailIcon } from 'lucide-react'
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
  dribbble: FaDribbble
}

const getSocialIcon = (id: string) => {
  const Icon = ICONS[id as keyof typeof ICONS]
  if (!Icon) return null
  return <Icon size={16} className="text-[#535353] dark:text-[#fff]" />
}

export default function Contact() {
  return (
    <>
      <h2 className="flex items-center gap-1.5 font-medium mt-4">
        <MailIcon size={18} />
        <span>Contact me:</span>
      </h2>
      <div className="flex flex-wrap gap-1 text-sm">
        <span>Email Address:</span>
        <Link href="mailto:canburak1992@gmail.com" className="underline underline-offset-[4px]">
          canburak1992@gmail.com
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 lg:hidden">
        {SOCIAL_LINKS.map((social) => (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-2 rounded-md ${social.id === 'home' && 'hidden lg:inline-flex'} items-center gap-1 bg-[#f5f5f5] dark:bg-[#2a2a2a] text-[#2d2d2d] dark:text-[#e5e5e5] text-sm hover:bg-[#e5e5e5] dark:hover:bg-[#333] transition-colors`}
            aria-label={social.name}
          >
            {getSocialIcon(social.id)}
          </Link>
        ))}
      </div>
    </>
  )
}

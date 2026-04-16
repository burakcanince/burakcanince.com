import Link from 'next/link'
import { BriefcaseIcon, LinkIcon } from 'lucide-react'
import { COMPANIES } from '@/data/company'

export default function WorkExperience() {
  return (
    <>
      <h2 className="flex items-center gap-1.5 font-medium mt-8">
        <BriefcaseIcon size={18} />
        <span>Work Experience:</span>
      </h2>
      <div className="flex flex-wrap gap-1">
        {COMPANIES.map((company) => (
          <span key={company.id} className="[&:not(:last-child)]:after:content-[','] text-sm">
            {company.link ? (
              <Link
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {company.name}
              </Link>
            ) : (
              <span>{company.name}</span>
            )}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <button className="flex items-center gap-2 text-sm">
          <span>I worked as a frontend developer on these projects:</span>
          <Link href="/projects">
            <LinkIcon size={16} className="cursor-pointer" />
          </Link>
        </button>
      </div>
    </>
  )
}

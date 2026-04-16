'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeOff, LaptopIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Filters } from '@/components/Filters'
import { PROJECTS, ProjectCategory } from '@/data/project'

const INITIAL_COUNT = 6

export function ProjectsList({
  filter,
  showDescriptions,
}: {
  filter: ProjectCategory
  showDescriptions: boolean
}) {
  const [showAll, setShowAll] = useState(false)
  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter)
  const initialProjects = filteredProjects.slice(0, INITIAL_COUNT)
  const remainingProjects = filteredProjects.slice(INITIAL_COUNT)
  const hasMore = filteredProjects.length > INITIAL_COUNT

  useEffect(() => {
    setShowAll(false)
  }, [filter])

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        {initialProjects.map((project, index) => (
          <div key={project.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
            <div className="flex items-center gap-2">
              {!showDescriptions && (
                <span className="text-sm font-medium w-5">{index + 1}.</span>
              )}
              <Image
                src={project.icon}
                alt={project.name}
                width={24}
                height={24}
                unoptimized
              />
              <Link
                href={project.link}
                className="font-semibold text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </Link>
            </div>
            {showDescriptions && (
              <span className="text-sm before:content-['-'] before:mx-1 before:hidden sm:before:inline">
                {project.description}
              </span>
            )}
          </div>
        ))}

        {showAll &&
          remainingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0"
            >
              <div className="flex items-center gap-2">
                {!showDescriptions && (
                  <span className="text-sm font-medium w-5">{INITIAL_COUNT + index + 1}.</span>
                )}
                <Image
                  src={project.icon}
                  alt={project.name}
                  width={24}
                  height={24}
                />
                {project.link !== '#' ? (
                  <Link
                    href={project.link}
                    className="font-semibold text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                ) : (
                  <span className="font-semibold text-sm">
                    {project.name}
                  </span>
                )}
              </div>
              {showDescriptions && (
                <span className="text-sm before:content-['-'] before:mx-1 before:hidden sm:before:inline">
                  {project.description}
                </span>
              )}
            </motion.div>
          ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="cursor-pointer text-sm underline underline-offset-[4px] text-[#666] dark:text-[#999] hover:text-[#2d2d2d] dark:hover:text-[#e5e5e5] transition-colors mt-4"
        >
          {showAll ? 'Show less' : 'Read more'}
        </button>
      )}
    </>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')
  const [showDescriptions, setShowDescriptions] = useState(true)

  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <h2 className="flex items-center gap-1.5 font-medium">
          <LaptopIcon size={20} />
          <span>My projects:</span>
          <button
            onClick={() => setShowDescriptions(!showDescriptions)}
            className="cursor-pointer md:hidden flex items-center justify-center"
          >
            {showDescriptions ? (
              <EyeOff size={15} />
            ) : (
              <Eye size={15} />
            )}
          </button>
        </h2>
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <ProjectsList filter={filter} showDescriptions={showDescriptions} />
    </div>
  )
}

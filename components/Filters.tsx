import { Filter, ProjectCategory } from '@/data/project'

export function Filters({
  filter,
  setFilter,
}: {
  filter: ProjectCategory
  setFilter: (filter: ProjectCategory) => void
}) {
  const filters: Filter[] = [
    { label: 'All', value: 'all' },
    { label: 'Chrome Extensions', value: 'chrome-extension' },
    { label: 'Mobile Apps', value: 'mobile-app' },
    { label: 'Web', value: 'web' }
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filterOption: Filter) => (
        <button
          key={filterOption.value}
          onClick={() => setFilter(filterOption.value)}
          className={`cursor-pointer inline-flex items-center gap-1 px-3 py-[5px] rounded-md text-sm transition-colors ${
            filter === filterOption.value
              ? 'bg-[#2d2d2d] dark:bg-[#e5e5e5] text-white dark:text-[#1a1a1a]'
              : 'bg-[#f5f5f5] dark:bg-[#2a2a2a] text-[#2d2d2d] dark:text-[#e5e5e5] hover:bg-[#e5e5e5] dark:hover:bg-[#333]'
          }`}
        >
          {filterOption.label}
        </button>
      ))}
    </div>
  )
}

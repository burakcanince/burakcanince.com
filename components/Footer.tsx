import ThemeToggle from '@/components/ThemeToggle'

export default function Footer() {
  return (
    <footer className="flex justify-between items-center max-w-[700px] w-full mx-auto mt-4 py-4 border-t border-[#e5e5e5] dark:border-[#333] text-sm transition-colors duration-300">
      <span className="text-gray-500 dark:text-[#e5e5e5]">
        © Burak Can İNCE
      </span>
      <ThemeToggle />
    </footer>
  )
}

'use client'

import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent cursor-pointer p-2 rounded transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun size={20} strokeWidth={1.5} />
      ) : (
        <Moon size={20} strokeWidth={1.5} />
      )}
    </button>
  )
}

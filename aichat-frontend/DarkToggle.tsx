import { useEffect, useState } from "react"
import { toggleDarkMode } from "./theme"

export default function DarkToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true"
    setDark(isDark)
    if (isDark) document.documentElement.classList.add("dark")
  }, [])

  const handleToggle = () => {
    const newDark = !dark
    setDark(newDark)
    localStorage.setItem("dark", String(newDark))
    toggleDarkMode()
  }

  return (
    <button
      onClick={handleToggle}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
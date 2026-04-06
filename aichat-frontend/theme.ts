export function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
}

export function setDarkMode(isDark: boolean) {
  if (isDark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
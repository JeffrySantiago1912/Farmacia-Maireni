import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function DarkModeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/20 bg-white/80 text-brand-blue shadow-sm transition hover:bg-white hover:shadow-md dark:border-blue-500/30 dark:bg-slate-800/90 dark:text-amber-300 dark:hover:bg-slate-800"
      aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={dark}
    >
      {dark ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </button>
  )
}

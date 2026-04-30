import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeContext } from './theme-context'

const STORAGE_KEY = 'farmacia-maireni-theme'

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(STORAGE_KEY) === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem(STORAGE_KEY, 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem(STORAGE_KEY, 'light')
    }
  }, [dark])

  const toggle = useCallback(() => {
    setDark((d) => !d)
  }, [])

  const value = useMemo(() => ({ dark, toggle }), [dark, toggle])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

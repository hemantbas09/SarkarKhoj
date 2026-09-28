import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from './en'
import { np } from './np'
import type { Dictionary, Lang } from './types'

const STORAGE_KEY = 'sarkarkhoj-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'np' ? stored : 'np'
  } catch {
    return 'np'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // storage unavailable — ignore
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'np' ? 'ne' : 'en'
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: lang === 'np' ? np : en }),
    [lang, setLang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'laura-portfolio:visitor-mode'

export const MODES = {
  RECRUITER: 'recruiter',
  DESIGN_PRODUCT: 'design-product',
  EXPLORE: 'explore',
}

export const MODE_LABELS = {
  [MODES.RECRUITER]: 'Recruiter',
  [MODES.DESIGN_PRODUCT]: 'Design / Product',
  [MODES.EXPLORE]: 'Explore',
}

const VisitorModeContext = createContext(null)

function readStoredMode() {
  if (typeof window === 'undefined') return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return Object.values(MODES).includes(value) ? value : null
  } catch {
    return null
  }
}

export function VisitorModeProvider({ children }) {
  const [visitorMode, setVisitorModeState] = useState(() => readStoredMode())

  useEffect(() => {
    try {
      if (visitorMode) {
        window.localStorage.setItem(STORAGE_KEY, visitorMode)
      } else {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      // localStorage unavailable — mode still works for this session via state
    }
  }, [visitorMode])

  const setVisitorMode = (mode) => setVisitorModeState(mode)
  const clearVisitorMode = () => setVisitorModeState(null)

  const value = useMemo(
    () => ({ visitorMode, setVisitorMode, clearVisitorMode }),
    [visitorMode]
  )

  return <VisitorModeContext.Provider value={value}>{children}</VisitorModeContext.Provider>
}

export function useVisitorMode() {
  const ctx = useContext(VisitorModeContext)
  if (!ctx) throw new Error('useVisitorMode must be used within a VisitorModeProvider')
  return ctx
}

import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useVisitorMode, MODE_LABELS } from '../context/VisitorModeContext'

const NAV_LINKS = [
  { label: 'Work', path: '/work' },
  { label: 'Thinking', path: '/thinking' },
  { label: 'Lab', path: '/lab' },
  { label: 'About', path: '/about' },
]

export default function Header() {
  const { visitorMode, clearVisitorMode } = useVisitorMode()
  const location = useLocation()
  const navigate = useNavigate()
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModeHint, setShowModeHint] = useState(false)
  const lastY = useRef(0)
  const pauseTimer = useRef(null)
  const hintTimer = useRef(null)

  useEffect(() => {
    lastY.current = window.scrollY
    function handleScroll() {
      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y

      if (y < 40) {
        setHidden(false)
      } else if (Math.abs(delta) > 2) {
        setHidden(true)
      }

      if (pauseTimer.current) clearTimeout(pauseTimer.current)
      pauseTimer.current = setTimeout(() => setHidden(false), 220)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (pauseTimer.current) clearTimeout(pauseTimer.current)
    }
  }, [])

  function handleChangeMode() {
    clearVisitorMode()
    setMenuOpen(false)
    navigate('/')
  }

  function handleMarkClick() {
    if (!visitorMode) return
    setShowModeHint(true)
    if (hintTimer.current) clearTimeout(hintTimer.current)
    hintTimer.current = setTimeout(() => setShowModeHint(false), 3200)
  }

  useEffect(() => {
    return () => {
      if (hintTimer.current) clearTimeout(hintTimer.current)
    }
  }, [])

  return (
    <header className="site-header" data-hidden={hidden ? 'true' : 'false'}>
      <div className="container site-header__inner">
        <p className="site-header__mark">
          <Link to="/home" onClick={handleMarkClick}>
            Laura Olivarez
          </Link>
          <span className="mark-hint" role="status" aria-live="polite" data-visible={showModeHint ? 'true' : 'false'}>
            {showModeHint &&
              'This takes you back to your current view. Use "Change" (top right, or in the menu) to switch.'}
          </span>
        </p>

        <nav className="site-nav" aria-label="Primary">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav-list"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
          <ul id="primary-nav-list" className={`site-nav__list${menuOpen ? ' site-nav__list--open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="site-nav__link"
                  aria-current={location.pathname.startsWith(link.path) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {visitorMode && (
              <li className="mode-indicator mode-indicator--mobile">
                <span>Viewing: {MODE_LABELS[visitorMode]}</span>
                <span aria-hidden="true">·</span>
                <button type="button" className="mode-indicator__change" onClick={handleChangeMode}>
                  Change
                </button>
              </li>
            )}
          </ul>
          {visitorMode && (
            <p className="mode-indicator mode-indicator--desktop">
              <span>Viewing: {MODE_LABELS[visitorMode]}</span>
              <span aria-hidden="true">·</span>
              <button type="button" className="mode-indicator__change" onClick={handleChangeMode}>
                Change
              </button>
            </p>
          )}
        </nav>
      </div>
    </header>
  )
}

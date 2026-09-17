import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function highlightElement(el, prefersReducedMotion) {
  el.classList.remove('anchor-highlight--fade')
  // Force reflow so re-adding the class restarts the highlight if the
  // same anchor is navigated to again.
  void el.offsetWidth
  el.classList.add('anchor-highlight')

  const fadeDelay = prefersReducedMotion ? 60 : 450
  const cleanupDelay = fadeDelay + (prefersReducedMotion ? 150 : 1700)

  const fadeTimer = window.setTimeout(() => {
    el.classList.add('anchor-highlight--fade')
  }, fadeDelay)

  const cleanupTimer = window.setTimeout(() => {
    el.classList.remove('anchor-highlight', 'anchor-highlight--fade')
  }, cleanupDelay)

  return () => {
    window.clearTimeout(fadeTimer)
    window.clearTimeout(cleanupTimer)
  }
}

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      let cancelHighlight

      const scrollToTarget = () => {
        const el = document.getElementById(id)
        if (!el) {
          window.scrollTo(0, 0)
          return
        }
        // The target can be a nested sentence <span>, so set scroll-margin
        // directly on it rather than relying on an ancestor's CSS — an
        // ancestor's scroll-margin doesn't apply when scrollIntoView is
        // called on the descendant itself.
        el.style.scrollMarginTop = '5.5rem'
        el.scrollIntoView({ block: 'start', behavior: prefersReducedMotion ? 'auto' : 'smooth' })
        cancelHighlight = highlightElement(el, prefersReducedMotion)
      }
      // Wait a tick for the new page's content to be in the DOM.
      const raf = requestAnimationFrame(scrollToTarget)
      return () => {
        cancelAnimationFrame(raf)
        if (cancelHighlight) cancelHighlight()
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

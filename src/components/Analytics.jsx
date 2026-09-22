import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// GA's automatic pageview only fires on the initial full page load
// (send_page_view is disabled in index.html), so client-side route
// changes need a manual page_view event — otherwise only the very first
// page a visitor lands on would ever show up in GA4.
export default function Analytics() {
  const location = useLocation()
  const lastPath = useRef(null)

  useEffect(() => {
    const path = location.pathname + location.search
    // Anchor jumps (e.g. an evidence-stat cross-reference) change the
    // hash but not the page itself — don't count those as new pageviews.
    if (path === lastPath.current) return
    lastPath.current = path

    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [location.pathname, location.search])

  return null
}

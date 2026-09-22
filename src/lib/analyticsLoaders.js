// Loads GA4 / Clarity on demand, once consent is granted — neither
// script tag lives in index.html unconditionally anymore.

const GA_MEASUREMENT_ID = 'G-QFXTGP08JX'
const CLARITY_PROJECT_ID = 'ymfndxstrb'

let gaLoaded = false
let clarityLoaded = false

export function loadGoogleAnalytics() {
  if (gaLoaded) return
  gaLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  // Pageviews are sent manually (see src/components/Analytics.jsx) so
  // route changes in this SPA are tracked correctly.
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  // Analytics.jsx only fires on route *changes* — without this, the
  // page a visitor was already on when they granted consent would
  // never get a pageview.
  window.gtag('event', 'page_view', {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
    page_location: window.location.href,
  })
}

export function loadMicrosoftClarity() {
  if (clarityLoaded) return
  clarityLoaded = true

  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = 'https://www.clarity.ms/tag/' + i
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID)
}

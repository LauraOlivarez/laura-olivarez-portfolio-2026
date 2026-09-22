import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { VisitorModeProvider } from './context/VisitorModeContext'
import { initCookieConsent } from './lib/cookieConsent'
import App from './App.jsx'
import './index.css'

// Runs once, outside the React tree — the library manages its own DOM
// overlay for the consent banner/preferences modal.
initCookieConsent()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <VisitorModeProvider>
        <App />
      </VisitorModeProvider>
    </BrowserRouter>
  </StrictMode>
)

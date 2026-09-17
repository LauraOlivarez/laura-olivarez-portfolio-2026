import { Navigate, useNavigate } from 'react-router-dom'
import { useVisitorMode, MODES } from '../context/VisitorModeContext'

const ROUTES = [
  {
    mode: MODES.RECRUITER,
    number: '01',
    label: 'Recruiter',
    line: 'Show me the signal.',
    sub: 'Experience, evidence, impact, the work worth discussing.',
  },
  {
    mode: MODES.DESIGN_PRODUCT,
    number: '02',
    label: 'Design / Product',
    line: 'Show me the thinking.',
    sub: 'How I approach complex products, systems, research, and decisions.',
  },
  {
    mode: MODES.EXPLORE,
    number: '03',
    label: 'Explore',
    line: 'Show me around.',
    sub: 'Work, experiments, ideas, and the person behind them.',
  },
]

export default function Entry() {
  const { visitorMode, setVisitorMode } = useVisitorMode()
  const navigate = useNavigate()

  if (visitorMode) return <Navigate to="/home" replace />

  function choose(mode) {
    setVisitorMode(mode)
    navigate('/home')
  }

  return (
    <main className="entry">
      <div className="container entry__inner">
        <p className="eyebrow entry__label">The Clarity System</p>
        <h1 className="entry__name">
          Laura Olivarez
          <span className="entry__role">Senior Product &amp; UX Designer</span>
        </h1>
        <p className="entry__question">What brings you here?</p>

        <div className="entry__routes" role="list">
          {ROUTES.map((route) => (
            <button
              key={route.mode}
              type="button"
              className="entry-route"
              role="listitem"
              onClick={() => choose(route.mode)}
            >
              <span className="entry-route__number">{route.number}</span>
              <span className="entry-route__label">{route.label}</span>
              <span className="entry-route__line">{route.line}</span>
              <span className="entry-route__sub">{route.sub}</span>
            </button>
          ))}
        </div>

        <p className="entry__note">
          If something here still feels like it&rsquo;s finding its shape — so am I. This site changes as I do.
        </p>
      </div>
    </main>
  )
}

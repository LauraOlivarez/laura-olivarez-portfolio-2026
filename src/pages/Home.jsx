import RequireMode from '../components/RequireMode'
import { useVisitorMode, MODES } from '../context/VisitorModeContext'
import RecruiterView from './home/RecruiterView'
import DesignProductView from './home/DesignProductView'
import ExploreView from './home/ExploreView'

function HomeContent() {
  const { visitorMode } = useVisitorMode()

  if (visitorMode === MODES.RECRUITER) return <RecruiterView />
  if (visitorMode === MODES.DESIGN_PRODUCT) return <DesignProductView />
  return <ExploreView />
}

export default function Home() {
  return (
    <RequireMode>
      <HomeContent />
    </RequireMode>
  )
}

import { Navigate } from 'react-router-dom'
import { useVisitorMode } from '../context/VisitorModeContext'

export default function RequireMode({ children }) {
  const { visitorMode } = useVisitorMode()
  if (!visitorMode) return <Navigate to="/" replace />
  return children
}

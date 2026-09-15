import { Link } from 'react-router-dom'
import { linkedInUrl } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <span>© {new Date().getFullYear()} Laura Olivarez</span>
        <span style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/contact">Contact</Link>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  )
}

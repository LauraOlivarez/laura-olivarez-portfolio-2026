import { Link } from 'react-router-dom'
import { evidence } from '../data/content'

export default function EvidenceGrid() {
  return (
    <div className="evidence-grid">
      {evidence.map((item) => (
        <Link className="evidence-item" to={item.href} key={item.label}>
          <span className="evidence-item__number">{item.number}</span>
          <span className="evidence-item__label">
            {item.label}
            <span className="evidence-item__arrow" aria-hidden="true">
              →
            </span>
          </span>
          <p className="evidence-item__desc">{item.desc}</p>
        </Link>
      ))}
    </div>
  )
}

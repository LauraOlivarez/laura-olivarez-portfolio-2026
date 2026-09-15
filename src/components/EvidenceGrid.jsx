import { evidence } from '../data/content'

export default function EvidenceGrid() {
  return (
    <div className="evidence-grid">
      {evidence.map((item) => (
        <div className="evidence-item" key={item.label}>
          <span className="evidence-item__number">{item.number}</span>
          <span className="evidence-item__label">{item.label}</span>
          <p className="evidence-item__desc">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

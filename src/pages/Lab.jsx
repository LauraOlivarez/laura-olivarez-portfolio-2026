import RequireMode from '../components/RequireMode'
import { labItems } from '../data/content'

function LabContent() {
  return (
    <section className="section container">
      <p className="eyebrow">Lab</p>
      <h1 className="page-title">Experiments outside client work.</h1>

      <div className="lab-list">
        {labItems.map((item) => (
          <article className="lab-entry" key={item.title}>
            <div className="lab-entry__head">
              <h2 className="lab-entry__title">{item.title}</h2>
              <span className="status-tag">{item.status}</span>
            </div>
            {item.since && <p className="archive-entry__meta">{item.since}</p>}
            <p className="lab-entry__desc">{item.desc}</p>
            {item.stats && <p className="lab-entry__stats">{item.stats}</p>}
            {item.tools && <p className="lab-entry__stats">Tools: {item.tools}</p>}
            <div className="lab-entry__links">
              {item.links.map((link) => (
                <a className="text-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                  {link.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Lab() {
  return (
    <RequireMode>
      <LabContent />
    </RequireMode>
  )
}

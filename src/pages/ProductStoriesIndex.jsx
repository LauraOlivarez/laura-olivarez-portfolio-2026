import { Link } from 'react-router-dom'
import RequireMode from '../components/RequireMode'
import { projects } from '../data/content'

function ProductStoriesIndexContent() {
  return (
    <section className="section container">
      <p className="eyebrow">Product Stories</p>
      <h1 className="page-title">The full depth behind each case study.</h1>
      <p className="home-hero-sub measure">Problem, role, what changed, why it mattered.</p>

      <div className="work-index">
        {projects.map((project) => (
          <Link className="archive-entry archive-entry--link" to={`/product-stories/${project.slug}`} key={project.slug}>
            <span className="archive-entry__index">{project.number}</span>
            <div>
              <p className="archive-entry__meta">
                {project.dates} · {project.category}
              </p>
              <h2 className="archive-entry__title">{project.name}</h2>
              <p className="archive-entry__desc">{project.shortDesc}</p>
              <p className="archive-entry__cta">
                <span className="text-link">Read the product story →</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ProductStoriesIndex() {
  return (
    <RequireMode>
      <ProductStoriesIndexContent />
    </RequireMode>
  )
}

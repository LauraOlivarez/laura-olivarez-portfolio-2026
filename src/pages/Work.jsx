import { Link } from 'react-router-dom'
import RequireMode from '../components/RequireMode'
import TeaserPlaceholder from '../components/TeaserPlaceholder'
import { projects } from '../data/content'

function WorkContent() {
  return (
    <section className="section container">
      <p className="eyebrow">Work</p>
      <h1 className="page-title">Case studies from real projects.</h1>

      <div className="work-index">
        {projects.map((project) => (
          <article className="archive-entry" key={project.slug}>
            <span className="archive-entry__index">{project.number}</span>
            <div className="archive-entry__body">
              <div>
                <p className="archive-entry__meta">
                  {project.dates} · {project.category}
                </p>
                <h2 className="archive-entry__title">{project.name}</h2>
                <p className="archive-entry__desc">{project.shortDesc}</p>
                {project.evidence && (
                  <div className="archive-entry__evidence">
                    <div>
                      <span className="archive-entry__evidence-num">{project.evidence.number}</span>
                      <span className="archive-entry__evidence-label">{project.evidence.label}</span>
                    </div>
                  </div>
                )}
                <div className="archive-entry__cta">
                  <Link className="text-link" to={`/product-stories/${project.slug}`}>
                    Read the product story →
                  </Link>
                </div>
              </div>
              {project.teaserImage ? (
                <img
                  className="archive-entry__teaser-image"
                  src={project.teaserImage}
                  alt={project.teaserImageAlt}
                  loading="lazy"
                />
              ) : (
                <TeaserPlaceholder text={project.teaserPlaceholder} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Work() {
  return (
    <RequireMode>
      <WorkContent />
    </RequireMode>
  )
}

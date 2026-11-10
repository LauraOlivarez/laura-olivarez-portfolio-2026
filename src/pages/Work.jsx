import { Link } from 'react-router-dom'
import CompanyHeading from '../components/CompanyHeading'
import RequireMode from '../components/RequireMode'
import ProjectTeaser from '../components/ProjectTeaser'
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
            <div className={`archive-entry__body${project.caseStudies ? ' archive-entry__body--stacked' : ''}`}>
              <div>
                <p className="archive-entry__meta">
                  {project.dates} · {project.category}
                </p>
                <CompanyHeading project={project} as="h2" className="archive-entry__title" />
                <p className="company-blurb">{project.companyBlurb}</p>
                <p className="archive-entry__desc">{project.shortDesc}</p>
                {project.evidence && !project.caseStudies && (
                  <div className="archive-entry__evidence">
                    <div>
                      <span className="archive-entry__evidence-num">{project.evidence.number}</span>
                      <span className="archive-entry__evidence-label">{project.evidence.label}</span>
                    </div>
                  </div>
                )}
                {!project.caseStudies && (
                  <div className="archive-entry__cta">
                    <Link className="text-link" to={`/product-stories/${project.slug}`}>
                      Read the product story →
                    </Link>
                  </div>
                )}
              </div>
              <ProjectTeaser project={project} />
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

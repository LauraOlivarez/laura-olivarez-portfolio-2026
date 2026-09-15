import { Link } from 'react-router-dom'
import EvidenceGrid from '../../components/EvidenceGrid'
import TeaserPlaceholder from '../../components/TeaserPlaceholder'
import { projects, resumeUrl } from '../../data/content'

const FEATURED = ['verivox', 'dility']

export default function RecruiterView() {
  const featured = FEATURED.map((slug) => projects.find((p) => p.slug === slug))

  return (
    <>
      <section className="section section--tight container">
        <p className="eyebrow">Recruiter</p>
        <h1 className="home-hero-title">Laura Olivarez — Senior Product &amp; UX Designer</h1>
        <p className="home-hero-sub measure">I turn complex systems and workflows into clear, usable products.</p>
      </section>

      <section className="section section--tight container">
        <p className="section-number">Evidence</p>
        <EvidenceGrid />
      </section>

      <section className="section container">
        <p className="section-number">Selected work</p>
        <div className="work-preview-grid">
          {featured.map((project) => (
            <article className="work-preview-card" key={project.slug}>
              <TeaserPlaceholder text={project.teaserPlaceholder} />
              <p className="archive-entry__meta">
                {project.name} · {project.dates}
              </p>
              <h3 className="work-preview-card__title">{project.recruiterDesc}</h3>
              {project.evidence && (
                <p className="work-preview-card__evidence">
                  <span className="archive-entry__evidence-num">{project.evidence.number}</span>{' '}
                  <span className="archive-entry__evidence-label">{project.evidence.label}</span>
                </p>
              )}
              <Link className="text-link" to={`/product-stories/${project.slug}`}>
                Read the product story →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="recruiter-cta-row">
          <a className="btn btn--primary" href={resumeUrl} download>
            Download resume — PDF
          </a>
          <Link className="btn" to="/contact">
            Contact Laura →
          </Link>
        </div>
      </section>
    </>
  )
}

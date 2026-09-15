import { Link } from 'react-router-dom'
import FormulaBlock from '../../components/FormulaBlock'
import TeaserPlaceholder from '../../components/TeaserPlaceholder'
import { philosophy, projects } from '../../data/content'

const FEATURED = ['verivox', 'dility']

export default function DesignProductView() {
  const featured = FEATURED.map((slug) => projects.find((p) => p.slug === slug))

  return (
    <>
      <section className="section section--tight container">
        <p className="eyebrow">Design / Product</p>
        <h1 className="home-hero-title home-hero-title--formula">Complexity → Clarity</h1>
      </section>

      <section className="section section--tight container">
        <p className="section-number">Process — the arc of a project</p>
        <div className="formula-stack">
          {philosophy.map((f) => (
            <FormulaBlock key={f.title} title={f.title} lhs={f.lhs} parts={f.parts} />
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="section-number">Case studies</p>
        <div className="work-preview-grid">
          {featured.map((project) => (
            <article className="work-preview-card" key={project.slug}>
              <TeaserPlaceholder text={project.teaserPlaceholder} />
              <p className="archive-entry__meta">
                {project.name} · {project.dates} · {project.category}
              </p>
              <h3 className="work-preview-card__title">{project.shortDesc}</h3>
              <Link className="text-link" to={`/product-stories/${project.slug}`}>
                Read the product story →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

import { Link, Navigate, useParams } from 'react-router-dom'
import CompanyHeading from '../components/CompanyHeading'
import RequireMode from '../components/RequireMode'
import { productStories, projects } from '../data/content'

// Some fields (a sentence-highlight target for the Recruiter evidence
// links) are an array of { text, id? } segments instead of a plain
// string — id gives that sentence its own anchor to scroll/highlight.
function renderSegments(value) {
  if (typeof value === 'string' || value == null) return value
  return value.map((segment, i) => (
    <span id={segment.id} key={segment.id || i}>
      {segment.text}
      {i < value.length - 1 ? ' ' : ''}
    </span>
  ))
}

function ProductStoryContent() {
  const { slug } = useParams()
  const story = productStories[slug]
  const project = projects.find((p) => p.slug === slug)

  if (!story) return <Navigate to="/work" replace />

  return (
    <section className="section container">
      <p className="eyebrow">Product Story</p>
      <CompanyHeading project={project} as="h1" className="page-title" />
      {project.companyBlurb && <p className="company-blurb">{project.companyBlurb}</p>}
      <p className="archive-entry__meta story-meta">{story.meta}</p>
      {story.role && <p className="story-role measure">{renderSegments(story.role)}</p>}
      {story.tools && <p className="story-tools">Tools: {story.tools}</p>}
      {story.confidentialNote && <p className="story-confidential measure">{story.confidentialNote}</p>}

      {story.sections.map((section) => (
        <div className="story-block" key={section.label || section.problem.slice(0, 20)}>
          {section.label && <p className="story-block__label">{section.label}</p>}

          <div className="story-field">
            <p className="story-field__label">The problem</p>
            <p className="story-block__text">{section.problem}</p>
          </div>

          {section.role && (
            <div className="story-field">
              <p className="story-field__label">My role</p>
              <p className="story-block__text">{section.role}</p>
            </div>
          )}

          <div className="story-field">
            <p className="story-field__label">What I changed</p>
            <p className="story-block__text">{section.change}</p>
            {section.image && (
              <img className="story-image" src={section.image} alt={section.imageAlt} loading="lazy" />
            )}
          </div>

          <div className="story-field">
            <p className="story-field__label">Why it mattered</p>
            <p className="story-block__text">{section.why}</p>
          </div>

          <div className="story-field">
            <p className="story-field__label">Evidence</p>
            <p className="story-block__text">{renderSegments(section.evidenceNote)}</p>
            {section.evidenceHeadline && (
              <div className="story-evidence">
                <div>
                  <span className="archive-entry__evidence-num">{section.evidenceHeadline.number}</span>
                  <span className="archive-entry__evidence-label">{section.evidenceHeadline.label}</span>
                </div>
              </div>
            )}
            {section.evidenceStats && (
              <div className="story-evidence">
                {section.evidenceStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="archive-entry__evidence-num">{stat.number}</span>
                    <span className="archive-entry__evidence-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {section.closingLine && <p className="story-closing measure">&ldquo;{section.closingLine}&rdquo;</p>}
        </div>
      ))}

      <div className="story-footer">
        <Link className="text-link" to="/work">
          ← Back to Work
        </Link>
        <Link className="btn" to="/contact">
          Contact Laura →
        </Link>
      </div>
    </section>
  )
}

export default function ProductStory() {
  return (
    <RequireMode>
      <ProductStoryContent />
    </RequireMode>
  )
}

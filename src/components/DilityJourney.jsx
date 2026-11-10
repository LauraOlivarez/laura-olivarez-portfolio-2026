import { Link } from 'react-router-dom'
import ZoomImage from './ZoomImage'

const WHY_LINK = { hash: '#why-it-mattered' }

// Renders **bold** segments inside otherwise plain strings.
function Inline({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
    if (link) {
      return (
        <Link key={i} className="journey-inline-link" to={link[2]}>
          {link[1]}
        </Link>
      )
    }
    return part
  })
}

function Paragraphs({ items }) {
  return items.map((p) => (
    <p className="journey-text" key={p.slice(0, 40)}>
      <Inline text={p} />
    </p>
  ))
}

function ExternalLink({ href, children }) {
  return (
    <a className="journey-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
      <span aria-hidden="true"> ↗</span>
    </a>
  )
}

function Test({ test }) {
  return (
    <section className="journey-test" aria-label={`${test.label}: ${test.title}`}>
      <p className="journey-mono">{test.label}</p>
      <h4 className="journey-test__title">{test.title}</h4>
      <dl className="journey-test__rows">
        {test.rows.map((row) => (
          <div className="journey-test__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>
              {row.text && <Inline text={row.text} />}
              {row.figures && (
                <div className="journey-figures">
                  {row.figures.map((group) => (
                    <div key={group.source}>
                      <p className="journey-figures__source">{group.source}</p>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {row.paragraphs && <Paragraphs items={row.paragraphs} />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default function DilityJourney({ journey }) {
  const { evolution, early, rebuild, lessons, reflection } = journey
  const stripImages = { early, rebuild }

  return (
    <section className="journey" aria-labelledby="journey-title">
      <header className="journey__header">
        <p className="journey__label">{journey.roleLabel}</p>
        <h2 className="journey__title" id="journey-title">
          {journey.title}
        </h2>
      </header>

      <div className="journey__steps">
        {journey.steps.map((step) => (
          <article className="journey-step" key={step.heading}>
            {step.label && <p className="journey-step__label">{step.label}</p>}
            <div className="journey-step__body">
              <h3 className="journey-step__heading">{step.heading}</h3>
              {step.paragraphs && <Paragraphs items={step.paragraphs} />}

              {step.plan && (
                <>
                  <p className="journey-text">{step.plan.intro}</p>
                  <ul className="journey-bullets">
                    {step.plan.items.map((item) => (
                      <li key={item.lead}>
                        <strong>{item.lead}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {step.tests && (
                <div className="journey-tests">
                  {step.tests.map((test) => (
                    <Test test={test} key={test.label} />
                  ))}
                </div>
              )}

              {step.subHeading && <h4 className="journey-block__title">{step.subHeading}</h4>}
              {step.subParagraphs && <Paragraphs items={step.subParagraphs} />}

              {step.quotes && (
                <div className="journey-quotes">
                  <p className="journey-mono">{step.quotes.label}</p>
                  {step.quotes.items.map((item) => (
                    <figure className="journey-quote" key={item.quote}>
                      <blockquote>
                        <p>“{item.quote}”</p>
                      </blockquote>
                      <figcaption>{item.role}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {step.figure && (
                <div className="journey-figure-wrap">
                  <p className="journey-mono">{step.figure.label}</p>
                  <ZoomImage src={step.figure.image} alt={step.figure.alt} caption={step.figure.caption} />
                </div>
              )}

              {step.afterParagraphs && <Paragraphs items={step.afterParagraphs} />}

              {step.pivotLink && (
                <Link className="journey-link" to={WHY_LINK}>
                  Read the full reflection under “Why it mattered”
                </Link>
              )}
            </div>
          </article>
        ))}

        <article className="journey-step">
          <p className="journey-step__label">{lessons.label}</p>
          <div className="journey-step__body">
            <ul className="journey-bullets">
              {lessons.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="journey-text">
              <ExternalLink href={reflection.url}>{reflection.text}</ExternalLink>
            </p>
          </div>
        </article>
      </div>

      <div className="journey-sub">
        <h3 className="journey-sub__title">{evolution.title}</h3>
        <div
          className="evo-scroll"
          role="region"
          aria-label="Prototype evolution, eight steps. Scrolls sideways on narrow screens."
          tabIndex={0}
        >
          <ol className="evo">
            {evolution.steps.map((step, i) => {
              const img = step.image && stripImages[step.image]
              return (
                <li className="evo__step" key={step.text}>
                  <span className="evo__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="evo__text">{step.text}</span>
                  {step.note && <span className="evo__note">{step.note}</span>}
                  {step.toBeAdded && <span className="evo__tba">{step.toBeAdded}</span>}
                  {img && (
                    <div className="evo__image">
                      <ZoomImage
                        src={img.image}
                        alt={img.alt}
                        caption={img.caption}
                        compact
                        showCaption={step.image === 'early'}
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>

    </section>
  )
}

// First of the two new blocks, directly after the Product Story.
export function DilityRebuild({ journey }) {
  const { rebuild } = journey
  return (
    <section className="journey" aria-labelledby="rebuild-title">
      <h2 className="journey__title" id="rebuild-title">
        {rebuild.heading}
      </h2>
      <Paragraphs items={rebuild.paragraphs} />
      <p className="journey-status">{rebuild.status}</p>
      <div className="journey-figure-wrap">
        <ZoomImage src={rebuild.image} alt={rebuild.alt} caption={rebuild.caption} />
      </div>
      <p className="journey-text">
        <ExternalLink href={rebuild.linkUrl}>{rebuild.linkLabel}</ExternalLink>
      </p>
    </section>
  )
}

// Bottom of the story.
export function DilityEcosystem({ journey }) {
  const { ecosystem } = journey
  return (
    <section className="journey journey--quiet" aria-labelledby="ecosystem-title">
      <h2 className="journey-sub__title" id="ecosystem-title">
        {ecosystem.title}
      </h2>
      <dl className="journey-dl">
        {ecosystem.rows.map((row) => (
          <div className="journey-dl__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

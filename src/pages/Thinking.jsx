import RequireMode from '../components/RequireMode'
import FormulaBlock from '../components/FormulaBlock'
import { essays, philosophy } from '../data/content'

function ThinkingContent() {
  return (
    <>
      <section className="section section--tight container">
        <p className="eyebrow">Thinking</p>
        <h1 className="page-title">Process — the arc of a project.</h1>
        <div className="formula-stack">
          {philosophy.map((f) => (
            <FormulaBlock key={f.title} title={f.title} lhs={f.lhs} parts={f.parts} />
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="section-number">Essays</p>
        <div className="essay-list">
          {essays.map((essay) => (
            <article className="essay-entry" key={essay.title}>
              <p className="essay-entry__date">{essay.date}</p>
              <h2 className="essay-entry__title">
                <a href={essay.url} target="_blank" rel="noreferrer">
                  {essay.title}
                </a>
              </h2>
              <p className="essay-entry__dek">{essay.dek}</p>
              <a className="text-link essay-entry__link" href={essay.url} target="_blank" rel="noreferrer">
                Read on LinkedIn →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default function Thinking() {
  return (
    <RequireMode>
      <ThinkingContent />
    </RequireMode>
  )
}

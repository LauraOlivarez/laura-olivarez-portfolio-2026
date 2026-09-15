import { Link } from 'react-router-dom'
import RequireMode from '../components/RequireMode'
import portrait from '../assets/images/laura-olivarez-portrait.jpg'
import { timeline } from '../data/content'

function AboutContent() {
  return (
    <section className="section container">
      <div className="about-intro">
        <img
          className="about-portrait"
          src={portrait}
          alt="Portrait of Laura Olivarez"
          width="96"
          height="96"
        />
        <div>
          <p className="eyebrow">About</p>
          <h1 className="page-title about-title">I like complicated things.</h1>
        </div>
      </div>

      <div className="about-copy measure">
        <p>
          Professionally, that means being drawn to products where complexity makes decisions harder,
          trust weaker, or experiences less usable — the messier a system, the more curious I get about
          untangling it.
        </p>
        <p>
          Off the clock, it shows up in smaller, stranger ways: I eat my cereal and milk separately, for
          the extra crunch. I listen to educational audiobooks. I&rsquo;m happiest somewhere in nature,
          ideally exploring something I haven&rsquo;t seen before. And when I read for fun rather than to
          learn something, it&rsquo;s almost always fantasy — which is actually how a fantasy-creature
          YouTube channel became one of my side projects (see <Link className="text-link" to="/lab">Lab</Link>).
        </p>
      </div>

      <div className="about-timeline">
        <p className="section-number">Timeline</p>
        <div className="timeline">
          {timeline.map((row) => (
            <div className="timeline-row" key={`${row.year}-${row.label}`}>
              <span className="timeline-row__year">{row.year}</span>
              <span className="timeline-row__label">{row.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <RequireMode>
      <AboutContent />
    </RequireMode>
  )
}

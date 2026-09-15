import RequireMode from '../components/RequireMode'
import { linkedInUrl } from '../data/content'

function ContactPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Get in touch.</h1>

      <div className="contact-grid measure">
        <p className="contact-linkedin">
          The best way to reach Laura is on LinkedIn.
          <br />
          <a className="text-link" href={linkedInUrl} target="_blank" rel="noreferrer">
            Connect with Laura →
          </a>
        </p>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <RequireMode>
      <ContactPage />
    </RequireMode>
  )
}

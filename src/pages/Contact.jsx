import { useState } from 'react'
import RequireMode from '../components/RequireMode'
import { linkedInUrl } from '../data/content'

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="form-status" role="status">
        Thanks for reaching out{form.name ? `, ${form.name}` : ''} — I&rsquo;ll get back to you as soon as possible.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
      </div>

      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="form-status" role="alert">
          Something went wrong sending this — please try LinkedIn instead, or try again shortly.
        </p>
      )}
    </form>
  )
}

function ContactPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Get in touch.</h1>

      <div className="contact-grid measure">
        <ContactContent />

        <p className="contact-linkedin">
          Prefer LinkedIn?{' '}
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

import { useState } from 'react'
import { visualColumns } from '../data/siteContent'
import { VisualStrip } from './About'

function ContactIcon({ type }) {
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  if (type === 'whatsapp') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.3a8.2 8.2 0 0 1-12 7.1L3.5 20l1.7-4.4A8.2 8.2 0 1 1 20.2 11.3Z"/><path d="M9 8.2c.2-.4.5-.4.8-.3l1 .8c.3.2.3.5.2.8l-.4.8c.5 1 1.2 1.7 2.2 2.2l.8-.4c.3-.1.6-.1.8.2l.8 1c.2.3.1.6-.2.8-.5.4-1.1.6-1.7.4-2.7-.7-5-3-5.7-5.7-.2-.6 0-1.2.4-1.7Z"/></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 6 8 7 8-7"/></svg>
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <button className="copy-button" type="button" onClick={copy} aria-label={`Copy ${value}`}>
      {copied ? '✓' : <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="1.5"/><path d="M16 8V5H5v11h3"/></svg>}
    </button>
  )
}

function ContactItem({ label, value, href, copyValue, icon }) {
  const external = Boolean(href)

  return (
    <div className="contact-item">
      <span className="contact-icon"><ContactIcon type={icon} /></span>
      <div>
        <span className="contact-label">{label}</span>
        <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{value}</a>
      </div>
      <CopyButton value={copyValue} />
    </div>
  )
}

export default function Contact() {
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const message = String(form.get('message') || '').trim()
    const subject = encodeURIComponent(`Website inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\n${message}`)
    window.location.href = `mailto:neigonzalez.art@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="page contact-page">
      <div className="contact-form-column">
        <span className="eyebrow">Contact</span>
        <p className="contact-intro">If you have a question, a proposal, or are interested in a piece, write to me. I’ll get back to you as soon as I can.</p>
        <form className="contact-form" onSubmit={submit}>
          <label>NAME<input type="text" name="name" autoComplete="name" required /></label>
          <label>EMAIL<input type="email" name="email" autoComplete="email" required /></label>
          <label className="phone-field"><span className="phone-label">PHONE <span className="optional">(optional)</span></span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label>MESSAGE<textarea name="message" rows="7" required /></label>
          <button type="submit">SEND</button>
        </form>
      </div>

      <aside className="contact-data">
        <ContactItem label="WHATSAPP" value="NeiGonzalez.ar" href="https://wa.me/NeiGonzalez.ar" copyValue="NeiGonzalez.ar" icon="whatsapp" />
        <ContactItem label="INSTAGRAM" value="@neigonzalez.art" href="https://www.instagram.com/neigonzalez.art/" copyValue="@neigonzalez.art" icon="instagram" />
        <ContactItem label="EMAIL" value="neigonzalez.art@gmail.com" href="mailto:neigonzalez.art@gmail.com" copyValue="neigonzalez.art@gmail.com" icon="email" />
      </aside>

      <VisualStrip columns={visualColumns} />
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
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
  const formRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [submitState, setSubmitState] = useState('idle')

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      requestAnimationFrame(() => document.getElementById('contact-form')?.scrollIntoView({ block: 'start', behavior: 'auto' }))
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [])

  useEffect(() => {
    if (submitState !== 'success') return undefined
    closeButtonRef.current?.focus()
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeConfirmation()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [submitState])

  const closeConfirmation = () => {
    formRef.current?.reset()
    setSubmitState('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitState('sending')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Form submission failed')
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }



  return (
    <section className="page contact-page">
      <div className="contact-form-column">
        <span className="eyebrow">Contact</span>
        <p className="contact-intro">If you have a question, a proposal, or are interested in a piece, write to me. I’ll get back to you as soon as I can.</p>
        <form ref={formRef} id="contact-form" className="contact-form" action="https://formspree.io/f/xdeajpqo" method="POST" onSubmit={handleSubmit} aria-busy={submitState === 'sending'}>
          <label>NAME<input type="text" name="name" autoComplete="name" required /></label>
          <label>EMAIL<input type="email" name="email" autoComplete="email" required /></label>
          <label className="phone-field"><span className="phone-label">PHONE <span className="optional">(optional)</span></span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label>MESSAGE<textarea name="message" rows="7" required /></label>
          <button type="submit" disabled={submitState === 'sending'}>{submitState === 'sending' ? 'SENDING…' : 'SEND'}</button>
        </form>
        {submitState === 'error' && <p className="contact-form-error" role="alert">Your message could not be sent. Please try again or contact me by email.</p>}
      </div>

      <aside className="contact-data">
        <ContactItem label="WHATSAPP" value="NeiGonzalez.ar" href="https://wa.me/NeiGonzalez.ar" copyValue="NeiGonzalez.ar" icon="whatsapp" />
        <ContactItem label="INSTAGRAM" value="@neigonzalez.art" href="https://www.instagram.com/neigonzalez.art/" copyValue="@neigonzalez.art" icon="instagram" />
        <ContactItem label="EMAIL" value="neigonzalez.art@gmail.com" href="mailto:neigonzalez.art@gmail.com" copyValue="neigonzalez.art@gmail.com" icon="email" />
      </aside>

      <VisualStrip columns={visualColumns} />
      {submitState === 'success' && (
        <div className="contact-confirmation-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeConfirmation() }}>
          <section className="contact-confirmation" role="dialog" aria-modal="true" aria-labelledby="contact-confirmation-title">
            <button ref={closeButtonRef} className="contact-confirmation-close" type="button" onClick={closeConfirmation} aria-label="Close confirmation">×</button>
            <img src={`${import.meta.env.BASE_URL}assets/logo-nei-gonzalez-art.png`} alt="Nei González art" />
            <h2 id="contact-confirmation-title">Message sent</h2>
            <p>Thank you for your message. I’ll get back to you as soon as I can.</p>
          </section>
        </div>
      )}
    </section>
  )
}

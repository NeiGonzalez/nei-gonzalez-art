function Icon({ type }) {
  if (type === 'instagram') return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )

  if (type === 'whatsapp') return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 11.3a8.2 8.2 0 0 1-12 7.1L3.5 20l1.7-4.4A8.2 8.2 0 1 1 20.2 11.3Z" />
      <path d="M9 8.2c.2-.4.5-.4.8-.3l1 .8c.3.2.3.5.2.8l-.4.8c.5 1 1.2 1.7 2.2 2.2l.8-.4c.3-.1.6-.1.8.2l.8 1c.2.3.1.6-.2.8-.5.4-1.1.6-1.7.4-2.7-.7-5-3-5.7-5.7-.2-.6 0-1.2.4-1.7Z" />
    </svg>
  )

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 6 8 7 8-7" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-row">
        <span>© {new Date().getFullYear()} Nei González art</span>
        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon type="instagram" /></a>
          <a href="mailto:neigonzalez.art@gmail.com" aria-label="Email"><Icon type="email" /></a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon type="whatsapp" /></a>
        </div>
        <span>Designed &amp; developed by Nei González</span>
      </div>
    </footer>
  )
}

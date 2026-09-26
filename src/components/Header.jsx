import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/works', 'Works'],
  ['/shop', 'Shop'],
  ['/services', 'Services'],
  ['/about', 'About'],
  ['/statement', 'Statement'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell header-row">
        <Link to="/" className="logo-link" onClick={() => setOpen(false)} aria-label="Nei González art">
          <img src={`${import.meta.env.BASE_URL}assets/logo-nei-gonzalez-art.png`} alt="Nei González art" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          <button className="language-button" type="button" onClick={() => setOpen(false)}>
            English
          </button>
        </nav>
      </div>
    </header>
  )
}

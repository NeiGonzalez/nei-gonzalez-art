import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'HOME'],
  ['/works', 'WORKS'],
  ['/shop', 'SHOP'],
  ['/services', 'SERVICES'],
  ['/about', 'ABOUT'],
  ['/statement', 'STATEMENT'],
  ['/contact', 'CONTACT'],
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
          aria-label="Open menu"
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
          <Link className="language-button" to="/spanish-under-construction" onClick={() => setOpen(false)}>ESPAÑOL</Link>
        </nav>
      </div>
    </header>
  )
}

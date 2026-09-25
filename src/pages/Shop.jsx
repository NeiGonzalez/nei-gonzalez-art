import { Link } from 'react-router-dom'
import { works, STATUS } from '../data/works'

function MultipleIcon() {
  return (
    <svg className="multiple-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="4" width="12" height="12" rx="2" />
      <rect x="4" y="7" width="12" height="12" rx="2" />
    </svg>
  )
}

export default function Shop() {
  const available = works.filter((work) => work.status === STATUS.FOR_SALE)

  return (
    <section className="page works-page shop-page">
      <div className="works-toolbar"><span className="eyebrow">Shop</span></div>
      <div className="works-grid">
        {available.map((work) => (
          <Link className="work-card" to={`/shop/${work.id}`} key={work.id}>
            <div className="work-card-image">
              <img src={work.images[0].src} alt={work.images[0].alt} />
              <div className="work-card-markers">
                {work.images.length > 1 && <span className="media-indicator" aria-label="Multiple images"><MultipleIcon /></span>}
              </div>
            </div>
            <span className="work-card-title">{work.title}</span>
            <span className="work-card-meta">{work.size}{work.size && work.year ? ' | ' : ''}{work.year}</span>
            <span className="work-price">USD {work.priceUSD}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

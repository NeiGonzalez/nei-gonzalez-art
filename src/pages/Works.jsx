import { useState } from 'react'
import { Link } from 'react-router-dom'
import { works, STATUS } from '../data/works'

const filters = [
  ['all', 'All'],
  ['series', 'Series'],
  ['year', 'Years'],
  ['painting', 'Paintings'],
  ['sculpture', 'Sculptures'],
  ['drawing', 'Drawings'],
  ['print', 'Prints'],
]

function MultipleIcon() {
  return (
    <svg className="multiple-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="4" width="12" height="12" rx="2" />
      <rect x="4" y="7" width="12" height="12" rx="2" />
    </svg>
  )
}

export default function Works() {
  const [filter, setFilter] = useState('all')
  const visible = works.filter((work) => {
    if (filter === 'series') return Boolean(work.series)
    if (filter === 'year') return Boolean(work.year)
    if (filter === 'painting') return work.category === 'painting'
    if (filter === 'sculpture') return work.category === 'sculpture'
    if (filter === 'drawing') return work.category === 'drawing'
    if (filter === 'print') return work.category === 'print'
    return true
  })

  return (
    <section className="page works-page">
      <div className="works-toolbar">
        <span className="eyebrow">Works</span>
        <div className="filters" aria-label="Works filters">
          {filters.map(([value, label]) => (
            <button key={value} type="button" className={filter === value ? 'is-active' : ''} onClick={() => setFilter(value)}>{label}</button>
          ))}
        </div>
      </div>

      <div className="works-grid">
        {visible.map((work) => (
          <Link className="work-card" to={`/works/${work.id}`} key={work.id}>
            <div className="work-card-image">
              <img src={work.images[0].src} alt={work.images[0].alt} />
              <div className="work-card-markers">
                {work.status === STATUS.SOLD && <span className="sold-dot" title="Sold" aria-label="Sold" />}
                {work.images.length > 1 && <span className="media-indicator" aria-label="Multiple images"><MultipleIcon /></span>}
              </div>
            </div>
            <span className="work-card-title">{work.title}</span>
            <span className="work-card-meta">{work.size}{work.size && work.year ? ' | ' : ''}{work.year}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

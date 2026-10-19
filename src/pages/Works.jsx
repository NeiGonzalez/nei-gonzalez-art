import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { works, STATUS } from '../data/works'

const filters = [
  ['all', 'All'],
  ['painting', 'Paintings'],
  ['watercolour', 'Watercolours'],
  ['drawing', 'Drawings'],
  ['sculpture', 'Sculptures'],
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
  const [filtersOpen, setFiltersOpen] = useState(false)

  const chooseFilter = useCallback((value) => {
    setFilter(value)
    setFiltersOpen(false)
  }, [])


  const sortedWorks = [...works].sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
  const visible = sortedWorks.filter((work) => {
    if (filter === 'painting') return work.category === 'painting'
    if (filter === 'watercolour') return work.category === 'watercolour'
    if (filter === 'sculpture') return work.category === 'sculpture'
    if (filter === 'drawing') return work.category === 'drawing'
    if (filter === 'print') return work.category === 'print'
    return true
  })

  const orderedVisible = visible

  useEffect(() => {
    orderedVisible.forEach((work) => {
      const image = new Image()
      image.src = work.images[0].src
    })
  }, [filter])



  return (
    <section className="page works-page">
      <div className="works-toolbar">
        <div className="works-toolbar-heading">
          <span className="eyebrow">Works</span>
          <button
            className={`works-filter-toggle ${filtersOpen ? 'is-open' : ''}`}
            type="button"
            onClick={() => setFiltersOpen((value) => !value)}
            aria-label={filtersOpen ? 'Close works filters' : 'Open works filters'}
            aria-expanded={filtersOpen}
          >
            <span /><span /><span />
          </button>
        </div>
        <div className={`filters ${filtersOpen ? 'is-open' : ''}`} aria-label="Works filters">
          {filters.map(([value, label]) => (
            <span className="filter-option" key={value}>
              <button
                type="button"
                className={filter === value ? 'is-active' : ''}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  chooseFilter(value)
                }}
                aria-pressed={filter === value}
              >{label}</button>
            </span>
          ))}
        </div>
      </div>

      <div className="works-grid">
        {orderedVisible.map((work) => <WorkCard key={work.id} work={work} />)}
      </div>
    </section>
  )
}

function WorkCard({ work }) {
  return (
    <Link className="work-card" to={`/works/${work.id}`}>
      <div className="work-card-image">
        <img src={work.images[0].src} alt={work.images[0].alt} loading="eager" fetchPriority="high" decoding="async" />
        <div className="work-card-markers">
          {work.images.length > 1 && <span className="media-indicator" aria-label="Multiple images"><MultipleIcon /></span>}
        </div>
      </div>
      <span className="work-card-title">
        {work.title}
        {work.status === STATUS.SOLD && <span className="sold-dot-title" title="Sold" aria-label="Sold" />}
      </span>
      <span className="work-card-meta">{work.size}{work.size && work.year ? ' | ' : ''}{work.year}</span>
    </Link>
  )
}

import { useEffect, useState, useCallback } from 'react'
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
  const [yearDescending, setYearDescending] = useState(true)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const chooseFilter = useCallback((value) => {
    setFilter(value)
    setFiltersOpen(false)
  }, [])

  const toggleYearOrder = useCallback(() => {
    setYearDescending((current) => !current)
  }, [])

  const sortedWorks = [...works].sort((a, b) => Number(b.year) - Number(a.year))
  const visible = sortedWorks.filter((work) => {
    if (filter === 'series') return Boolean(work.series)
    if (filter === 'year') return Boolean(work.year)
    if (filter === 'painting') return work.category === 'painting'
    if (filter === 'sculpture') return work.category === 'sculpture'
    if (filter === 'drawing') return work.category === 'drawing'
    if (filter === 'print') return work.category === 'print'
    return true
  })

  const orderedVisible = filter === 'year'
    ? [...visible].sort((a, b) => yearDescending ? Number(b.year) - Number(a.year) : Number(a.year) - Number(b.year))
    : visible

  useEffect(() => {
    orderedVisible.forEach((work) => {
      const image = new Image()
      image.src = work.images[0].src
    })
  }, [filter, yearDescending])

  const grouped = filter === 'series'
    ? orderedVisible.reduce((groups, work) => {
        const key = work.series || 'Sin serie'
        const existing = groups.find(([series]) => series === key)
        if (existing) existing[1].push(work)
        else groups.push([key, [work]])
        return groups
      }, [])
    : []

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
              {value === 'year' && filter === 'year' && (
                <button
                  className={`year-order ${yearDescending ? 'is-descending' : 'is-ascending'}`}
                  type="button"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    toggleYearOrder()
                  }}
                  aria-label={yearDescending ? 'Show oldest years first' : 'Show newest years first'}
                >
                  {yearDescending ? '▾' : '▴'}
                </button>
              )}
            </span>
          ))}
        </div>
      </div>

      {filter === 'series' ? (
        <div className="series-groups">
          {grouped.map(([series, seriesWorks]) => (
            <section className="series-group" key={series}>
              <h2>{series}</h2>
              <div className="works-grid">
                {seriesWorks.map((work) => <WorkCard key={work.id} work={work} />)}
              </div>
            </section>
          ))}
        </div>
      ) : filter === 'year' ? (
        <YearGroups works={orderedVisible} />
      ) : (
        <div className="works-grid">
          {orderedVisible.map((work) => <WorkCard key={work.id} work={work} />)}
        </div>
      )}
    </section>
  )
}

function YearGroups({ works }) {
  const grouped = works.reduce((groups, work) => {
    const key = work.year || 'Sin año'
    const existing = groups.find(([year]) => year === key)
    if (existing) existing[1].push(work)
    else groups.push([key, [work]])
    return groups
  }, [])

  return <div className="series-groups year-groups">
    {grouped.map(([year, yearWorks]) => (
      <section className="series-group" key={year}>
        <h2>{year}</h2>
        <div className="works-grid">
          {yearWorks.map((work) => <WorkCard key={work.id} work={work} />)}
        </div>
      </section>
    ))}
  </div>
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

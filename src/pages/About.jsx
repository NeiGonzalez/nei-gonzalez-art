import { visualColumns } from '../data/siteContent'

export default function About() {
  return (
    <section className="page editorial-page">
      <div className="editorial-copy">
        <span className="eyebrow">About</span>
        <h1 className="about-name">Nei González</h1>
        <p>Visual Arts Teacher, Provincial School of Visual Arts of Entre Ríos, Argentina.</p>
        <p>Cultural Producer and Manager, Blas Pascal University, Córdoba, Argentina.</p>
        <p>Nei González lives and works in Trevelin, in the province of Chubut, in Argentine Patagonia. She participates in exhibitions at art galleries, museums and cultural centers in Trevelin, Córdoba and across Argentina. Her works are part of private collections and public spaces.</p>
        <h2>Exhibitions and Activities</h2>
        <div className="cv-years">
          {[2026, 2025, 2024, 2023, 2021, 2017, 2015, 2013, 2012, 2011, 2010, 2009, 2008, 2007].map((year) => <div className="cv-year" key={year}>{year}</div>)}
        </div>
      </div>
      <VisualStrip columns={visualColumns} />
    </section>
  )
}

export function VisualStrip({ columns }) {
  const groups = [columns.top, columns.center, columns.bottom]
  return (
    <aside className="visual-strip" aria-hidden="true">
      {groups.map((images, index) => (
        <div className={`visual-strip-item ${['direction-reverse', 'direction-vertical-reverse', 'direction-forward'][index]}`} key={index}>
          <div>
            {[...images, ...images].map((src, imageIndex) => <img src={src} alt="" key={`${src}-${imageIndex}`} />)}
          </div>
        </div>
      ))}
    </aside>
  )
}

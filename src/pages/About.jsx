import { visualColumns } from '../data/siteContent'

export default function About() {
  return (
    <section className="page editorial-page">
      <VisualStrip columns={visualColumns} />
      <div className="editorial-copy">
        <span className="eyebrow">About</span>
        <h1 className="about-name">Nei González</h1>
        <p>Docente en Artes Visuales Escuela Provincial de Entre Ríos.</p>
        <p>Productora y Gestora Cultural Universidad Blas Pascal. Córdoba.</p>
        <p>Nei González vive y trabaja en la localidad de Trevelin, provincia de Chubut. Participa en exhibiciones en galerías de arte, museos y centros culturales en Trevelin, Córdoba y a nivel nacional. Sus obras forman parte de colecciones privadas y espacios públicos.</p>
        <h2>Distinciones y Muestras</h2>
        <div className="cv-years">2026<br />2025<br />2024<br />2023<br />2022<br />2018<br />2017<br />2015<br />2010</div>
      </div>
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

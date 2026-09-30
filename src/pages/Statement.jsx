import { visualColumns } from '../data/siteContent'
import { VisualStrip } from './About'

export default function Statement() {
  return (
    <section className="page editorial-page statement-page">
      <VisualStrip columns={visualColumns} />
      <div className="editorial-copy statement-copy">
        <span className="eyebrow">Statement</span>
        <h1>Artistic practice</h1>
        <p className="statement-lead">La práctica artística de Nei González se articula alrededor de la tensión entre opuestos y de las relaciones entre identidad, territorio y memoria.</p>
        <p>La materialidad, la superficie y la construcción de la obra permiten explorar aquello que aparece y aquello que permanece oculto. La textura forma parte de ese proceso, pero no constituye un fin en sí misma.</p>
        <p>El trabajo se desarrolla a partir de relaciones entre materia, espacio, límite, transformación y permanencia.</p>
      </div>
    </section>
  )
}

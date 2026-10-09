import { visualColumns } from '../data/siteContent'
import { VisualStrip } from './About'

export default function Statement() {
  return (
    <section className="page editorial-page statement-page">
      <div className="editorial-copy statement-copy">
        <span className="eyebrow">Statement</span>
        <h1>THE COEXISTENCE OF OPPOSITES</h1>
        <p className="statement-lead">The coexistence of opposites runs through the way I understand life and the way I build my work. I am drawn to what, despite being different or even antagonistic, can coexist and become part of the same whole.</p>
        <p>I do not understand this coexistence necessarily as balance or harmony. It can involve tension, confrontation, invasion, displacement, encounter, integration or peace. It is life itself, in which one cannot exist without the other.</p>
        <p>Materiality, texture and the construction of the work allow me to explore what appears and what remains hidden. Texture is part of this process, but it is not an end in itself.</p>
        <p>My work develops through relationships between matter, space, limits, transformation and permanence. Through these relationships, identity, territory and memory become present without being reduced to a single meaning.</p>
        <h2>OF EXTERNAL NOISE AND INNER SILENCE</h2>
        <p>Silence is not the absence of sound, but a way of making room for attention. It allows us to pause, look and encounter what a work brings into presence.</p>
        <p>Beauty does not necessarily arise from harmony or agreement. It can emerge from difference, from what unsettles us, and from the coexistence of elements that do not become identical.</p>
        <p>When a work leaves the studio, it begins another life. It enters a space, meets other people and establishes relationships that I cannot fully determine. At that point, it acquires its own existence.</p>
      </div>
      <VisualStrip columns={visualColumns} />
    </section>
  )
}

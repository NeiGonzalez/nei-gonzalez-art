import { visualColumns } from '../data/siteContent'
import { VisualStrip } from './About'

const firstSection = [
  "The coexistence of opposites runs through the way I understand life and the way I build my work. I am interested in that which, even when different or antagonistic, can coexist and form part of a single whole. I do not necessarily think of this coexistence as balance or harmony. There can be tension, confrontation, invasion, displacement, encounter, integration or peace. I understand this coexistence as life itself, inasmuch as one cannot exist without the other, without its opposite. In life, as in the work, it is this dynamism that builds the world around us.",
  "Materiality is a fundamental part of the way I build my work. My initial training in sculpture remains present in the way I relate to the plane. The canvas is not merely a support on which an image takes place. I cut, perforate, pass through, embroider, sew, tie, superimpose and transform it. I incorporate materials that add thickness, relief and weight, and I work with what appears above, below or behind the surface. I establish layers. This practice has allowed me to find the \"other side\" of things. In the plane there is a back that has been rendered invisible, and that I am interested in exploring. From behind, elements appear and break through to the front. The work is not only what \"is seen\"; as its opposite, what is not visible is also part of the work. A layer does not represent depth; it introduces real depth. I do not represent tension; the idea is to produce it.",
  "Texture holds an important place in my work, both visual and tactile. The addition of materials with a certain thickness produces reliefs on the canvas, and their textures give rise to shadows and presences that change with the light.",
  "It is in textures that the diverse appears, and all of my work is full of different textures. But texture is not my language; it is the consequence. It appears in the intervention of diverse elements, not as an end in itself, but as the result of the interaction of those elements. Texture is the visible record of a deeper operation: that of intervening, transforming and bringing into relation the surface and the matter in the space it inhabits.",
  "The relationship between opposites is also built through links between different systems within the same plane. Areas of greater and lesser density, concentration and expansion, continuity and interruption, smooth and rough surfaces, opacity and shine, presence and absence of texture establish relationships that modify the perception of the whole. I am interested in each element keeping its difference while, at the same time, forming part of a common structure. The repetition of weaves and patterns, accumulation, separation and proximity, order and chaos, the structured and the random, build fields where the particular acquires meaning with respect to the other elements.",
  "These relationships appear with more or less intensity. But within that intensity it is also necessary that there be areas where the gaze can rest and stop. That place of rest is not necessarily empty or an absence of matter. It can be a smooth surface, a field of color, an area of lesser density or an element that calls the gaze. The tension between these different states is part of the experience I seek to build."
]
const finalSection = [
  "In the midst of external noise, I long for that moment, the one of the encounter with the point of rest, to produce in whoever looks an instant of inner silence and, in that silence, an encounter with oneself, even if only for an instant. That is the moment in which the work addresses whoever looks at it: it addresses through not asking, through waiting, through not saying. And any answer lies in the spirit of the one who looks.",
  "I also seek beauty in the work, not as a formal criterion, but as a way of establishing a sensitive relationship with whoever observes it, where the work becomes part of people's everyday life and, at the same time, offers an experience that exceeds it. It can accompany a space, live alongside it and become a place where the gaze can stop.",
  "Once finished, the work acquires an existence of its own. What happens in the encounter with whoever observes it no longer depends on me. Each person comes to that encounter from their own history and experience. My intention is not to determine what the work should produce, but to build it in such a way that there is the possibility of stopping, contemplating and remaining for an instant with one's attention in silence, even in the midst of everyday noise. I understand this silence as a profoundly ecological instant: non-invasive, respectful and conscious of life. Hence, this silence is powerful. If that encounter produces even a small moment of silence, peace or serenity, then for me the work has already found a reason to exist."
]

export default function Statement() {
  return (
    <section className="page editorial-page statement-page">
      <div className="editorial-copy statement-copy">
        <span className="eyebrow">Statement</span>
        <h1>The coexistence of opposites</h1>
        {firstSection.map((paragraph, index) => (
          <p key={index}>
            {index === 0 ? <><span className="statement-editorial-phrase">The coexistence of opposites runs through the way I understand life and the way I build my work. I am interested in that which, even when different or antagonistic, can coexist and form part of a single whole.</span>{paragraph.slice("The coexistence of opposites runs through the way I understand life and the way I build my work. I am interested in that which, even when different or antagonistic, can coexist and form part of a single whole.".length)}</> : paragraph}
          </p>
        ))}
        <h2>Of external noise and inner silence</h2>
        {finalSection.map((paragraph, index) => (
          <p key={index}>
            {index === 0 ? <><span className="statement-editorial-phrase">In the midst of external noise, I long for that moment, the one of the encounter with the point of rest, to produce in whoever looks an instant of inner silence and, in that silence, an encounter with oneself, even if only for an instant.</span>{paragraph.slice("In the midst of external noise, I long for that moment, the one of the encounter with the point of rest, to produce in whoever looks an instant of inner silence and, in that silence, an encounter with oneself, even if only for an instant.".length)}</> : index === 2 ? <>{paragraph.slice(0, paragraph.lastIndexOf('If that encounter produces even a small moment of silence, peace or serenity, then for me the work has already found a reason to exist.'))}<strong className="statement-final-sentence">If that encounter produces even a small moment of silence, peace or serenity, then for me the work has already found a reason to exist.</strong></> : paragraph}
          </p>
        ))}
      </div>
      <VisualStrip columns={visualColumns} />
    </section>
  )
}

import { visualColumns } from '../data/siteContent'
import { Fragment } from 'react'

const biography = [
  'Nei González is a visual artist. She lives and works in Trevelin, in the Patagonian province of Chubut, in Argentina. She is a Visual Arts Teacher, a graduate of the Provincial School of Visual Arts of Entre Ríos, and also holds a postgraduate diploma in Cultural Production and Management from Blas Pascal University in the province of Córdoba. She completed complementary studies in Anthropology at the National University of Córdoba as part of her theoretical training.',
  'Her work addresses the coexistence of opposites at a conceptual level. These ideas take shape through operations on the canvas, such as cutting, perforating, embroidering and layering, and through the addition of different elements that give relief and texture and that challenge the surface of the canvas.',
  'She takes part in exhibitions at galleries, museums and cultural centers in Chubut, Córdoba and other parts of the country. Her works are part of private collections and public spaces.'
]

const sections = [
  { title: 'Education', items: [
    'Visual Arts Teacher, Provincial School of Visual Arts of Entre Ríos, Argentina.',
    'Cultural Producer and Manager, Blas Pascal University, Córdoba, Argentina.',
    'Complementary studies in Anthropology at the National University of Córdoba, Argentina'
  ]},
  { title: 'Exhibitions', items: [
    { text: '2021. INMUNITAS, Jesús María Estancia, National Jesuit Museum, UNESCO World Heritage Site, Jesús María, province of Córdoba. Own work, in a shared exhibition with the metal sculptors Elia Bísaro and Roxana Viotto.', links: [['https://www.facebook.com/watch/?v=667761657918897','video'], ['https://www.argentina.gob.ar/noticias/dos-muestras-plasticas-con-artistas-cordobeses-en-la-estancia-de-jesus-maria-y-la-posta-de','article']] },
    { text: '2017. “Apariencias”, Casa de la Cultura of Entre Ríos, Paraná, province of Entre Ríos. Own work, in a shared exhibition with the Entre Ríos printmaker Karina Lorenzini.', links: [['https://www.unoentrerios.com.ar/escenario/presentan-apariencias-la-muestra-pinturas-y-grabados-n1455811.html','article'], ['https://cuestionentrerriana.com.ar/se-presentara-la-muestra-de-pinturas-y-grabados-apariencias/','article']] },
    '2017. “Interticios”, Casa Lino E. Spilimbergo Museum, Unquillo, province of Córdoba. Own work, in a shared exhibition with the sculptor Elia Bísaro.',
    '2009. EspacioArte, Córdoba International Airport.',
    { text: '2009. Grafos (Graphs) Series, Galería de Arte Cerrito, city of Córdoba.', links: [['http://www.galeriacerrito.com/artista.php?lang=es&id=100','link']] },
    '2008. La Textura Interior (The Interior Texture) Series, Paseo del Buen Pastor, city of Córdoba.',
    '2008. “Almacén de la Memoria”, Cuencos (Bowls) Series, Casa de Pepino Municipal Cultural Center, city of Córdoba.',
    '2007. Acacios Negros (Black Acacias) Series, Sala Solarium, Centro Cultural del Paseo de las Artes, city of Córdoba. Own work, in a shared exhibition with the sculptor Elia Bísaro.'
  ]},
  { title: 'Group exhibitions, salons and fairs', items: [
    { text: '2026. Selected for the 27th Municipal Visual Arts Salon and the 14th Binational Salon with Patagonian Projection 2026, city of Esquel, Chubut.', links: [['https://www.facebook.com/photo/?fbid=1385234163786016&set=pcb.1385234840452615','record']] },
    '2025. Group exhibition “Ecos del 28: Arte y Memoria Galesa”, organized by the Molino Andes Regional Museum of Trevelin, Chubut, on the 160th anniversary of the arrival of the first Welsh settlers on the coast of Chubut.',
    '2012. Contemporary art exhibition and fair, Villa Allende, Córdoba.',
    '2011. Group contemporary art exhibition, Luna India, Argüello, Córdoba.',
    { text: '2011. Exhibitions of the DosSientoS Project, held throughout 2011.', links: [['https://www.facebook.com/elcaldero.colectivocreativo','record']] },
    '2010. “DNI Sex”, group exhibition, Fundación María Castaña Art Gallery.',
    '2009. “Mujeres por la Memoria” (Women for Memory), group exhibition, Municipality of Villa Allende, Córdoba.',
    '2008. Exhibiting artist, Mercado Negro del Arte (Black Art Market), 2008 edition.',
    '2008. Selected artist, Avon Space National Painting Salon, 2008 edition, Buenos Aires.',
    "2008. Group exhibition for Women's Month, Amerian Córdoba Park Hotel, Córdoba."
  ]},
  { title: 'Public space artworks and competitions', items: [
    '2026. “Propósito: Geometría Natural”, sculptural work co-created with the artist Roxana Viotto, for a building in the city of Córdoba, in compliance with the municipal regulation requiring artworks in buildings.',
    { text: '2026. Selected in the Drawing category, representing Trevelin, at the Chubut Cultural Games, organized by the Ministry of Social Development of the Province of Chubut and coordinated by the Municipality of Trevelin. Selected again at the regional stage, advancing to the provincial stage.', links: [['https://www.eqsnotas.com/cultura/danzas--poesia-y-pintura-tuvieron-su-jornada-en-trevelin-con-los-juegos-culturales-para-personas-mayores_a6a6e10338bb052882ba61c3b','article'], ['https://www.facebook.com/100064887961973/posts/1555720753267509/','record']] },
    { text: '2024. “Propósito: De La Tierra Al Cielo”, participation in the Azcuy Prize 2024 - Donna Vita Edition, sculptural project co-created with the artist Roxana Viotto project for a building in the city of Buenos Aires.', links: [['https://youtu.be/kPE3ymbpK94','video']] },
    { text: '2024. “Propósito: Ab Ideis ad Terra”, Second Mention, 2nd Edition of the National Large-Scale Sculpture Competition of Siglo 21 University. Sculptural work co-created with the sculptor Roxana Viotto.', links: [['https://universidadeshoy.com.ar/nota/76567/universidad-siglo-21-anuncio-los-ganadores-de-la-nueva-edicion-del-concurso-nacional-de-escultura-de-gran-escala/','article']] },
    '2023. “Diversa”, sculpture selected by the Municipality of Córdoba for the Sculpture Plaza (Plazoleta de las Esculturas). Member of the team for the creative process and production logistics, together with the sculptors Elia Bísaro and Roxana Viotto.'
  ]},
  { title: 'Works exhibited in venues through galleries (2008)', items: [
    'Tirram Art Gallery: works exhibited at the Howard Johnson Hotel, Río Ceballos, Córdoba',
    'Córdoba Art Gallery: works exhibited at the Sheraton Hotel, city of Córdoba.',
    "Cerrito Galería de Arte: works in the gallery's back room."
  ]},
  { title: 'Participation in projects and institutions', items: [
    { text: '2015. Museum of Latin American Art of Buenos Aires (MALBA), “Experiencia Infinita”. Selected as a member of the live art group for three months for the work THIS IS PROPAGANDA by the British artist Tino Sehgal. Buenos Aires.', links: [['https://youtu.be/5bHvAYFloJg','video'], ['http://jaquealarte.com/2015/04/06/la-muestra-del-mes-experiencia-infinita/','article']] },
    '2013. 4th Argentine Congress of Culture, Secretariat of Culture of the Presidency of Argentina, Resistencia, Chaco, as part of the organizing team.'
  ]},
  { title: 'Collectives, organization and community activities', items: [
    { text: '2026. Coordinator of ARTREV - Arte en el Pueblo Colectivo Creativo, an art installation at the sports center of the city of Trevelin on the occasion of Argentine Flag Day.', links: [['https://www.instagram.com/reel/DZ1EsYpRSZy/','report']] },
    { text: "2010. EsculTODAS: El Caldero Colectivo Creativo (The Cauldron Creative Collective). Collaborated, as a member of the collective, on the logistics of the exhibition of women sculptors organized by the Paseo del Buen Pastor for Women's Month, with the participation of seventy women sculptors from across the province of Córdoba.", links: [['https://www.facebook.com/media/set/?vanity=elcaldero.colectivocreativo&set=a.118840331501832','record']] },
    { text: '2010. DosSientoS: Obra Federal, installation. Organizer, founding member of El Caldero Colectivo Creativo, and participating artist. It invited two hundred women artists from across the country to intervene a broom. It was part of the official Bicentennial of the May Revolution program of the Secretariat of Culture of the Province of Córdoba and was declared of Legislative, Provincial and National Interest.', links: [['https://www.analisisdigital.com.ar/edicion-impresa/2010/07/01/las-escobas-magicas','article'], ['https://www.facebook.com/media/set/?vanity=elcaldero.colectivocreativo&set=a.118133188239213','record'], ['https://gld.legislaturacba.gob.ar/Handlers/File.ashx?file=dk491ovJ2plRbn-ILfxQ6nv4uNZDOxUMOuXUp6v754zuPJzG5_NKGARLREDofmrSO9PuQBQ9nVxtHRQKWBoG8_njgRhTRtBDxrZxcN4O6G3XxgZwz7CT9-P7q37iHzSDDG7ipOpCDi2BS1PEc7kUznK10wy2NQcHlLivUr3IWDI=','legislative document'], ['https://es.scribd.com/doc/37936516/PACHAMAMA-23-ICA-1-1#content=query:dossientos,pageNum:15,indexOnPage:0,bestMatch:false','document']] }
  ]},
  { title: 'Professional experience', items: [
    '2013 to 2024. Ministry of Culture of Argentina (MCN). Management tasks in various areas of its headquarters in Buenos Aires, Argentina. Subsequently, work at the Jesús María Estancia, National Jesuit Museum, and at the Posta de Sinsacate National Museum, both UNESCO World Heritage Sites and both under the MCN.'
  ]}
]

function LinkedItem({ item }) {
  if (typeof item === 'string') return <>{item}</>
  const links = item.links || []
  return <>{item.text}{links.length > 0 && <> ({links.map(([url, label], index) => <Fragment key={url}>{index > 0 && ', '}<a className="cv-link" href={url} target="_blank" rel="noreferrer">{label}</a></Fragment>)})</>}</>
}

export default function About() {
  return (
    <section className="page editorial-page about-page">
      <div className="editorial-copy">
        <span className="eyebrow">About</span>
        <h1 className="about-name">Nei González</h1>
        {biography.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {sections.map((section) => (
          <section className="about-section" key={section.title}>
            <h2>{section.title}</h2>
            <ul className="cv-activities about-activities">
              {section.items.map((item, index) => <li key={`${section.title}-${index}`}><LinkedItem item={item} /></li>)}
            </ul>
          </section>
        ))}
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
          <div>{[...images, ...images].map((src, imageIndex) => <img src={src} alt="" key={`${src}-${imageIndex}`} />)}</div>
        </div>
      ))}
    </aside>
  )
}

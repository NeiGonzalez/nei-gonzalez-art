import { visualColumns } from '../data/siteContent'
import { Fragment } from 'react'

const biography = [
  "Visual Arts Teacher, Provincial School of Visual Arts of Entre Ríos, Argentina",
  "Cultural Producer and Manager, Blas Pascal University, Córdoba, Argentina",
  "Nei González lives and works in Trevelin, in the province of Chubut, in Argentine Patagonia. She takes part in exhibitions at art galleries, museums and cultural centers in Trevelin, Córdoba and across the country. Her works are part of private collections and public spaces."
]
const exhibitions = [
  {
    "year": 2026,
    "items": [
      "Joint sculptural work with the artist Roxana Viotto, PROPÓSITO: GEOMETRÍA NATURAL, for a building in the city of Córdoba, in compliance with the local regulation requiring artworks in new buildings.",
      "Selected for the 27th Municipal Visual Arts Salon – Esquel 2026 – 14th Binational Salon with Patagonian Projection. https://www.facebook.com/photo/?fbid=1385234163786016&set=pcb.1385234840452615",
      "Selected in the Drawing category, representing Trevelin, at the Chubut Cultural Games, organized by the Ministry of Social Development of the Province of Chubut and coordinated by the Municipality of Trevelin. https://www.eqsnotas.com/cultura/danzas--poesia-y-pintura-tuvieron-su-jornada-en-trevelin-con-los-juegos-culturales-para-personas-mayores_a6a6e10338bb052882ba61c3b .Selected again at the regional stage of the same Cultural Games, advancing to the provincial stage. https://www.facebook.com/100064887961973/posts/1555720753267509/",
      "Participation as coordinator of the TREV-ART collective, an art installation at the sports center of the city of Trevelin on the occasion of Argentine Flag Day."
    ]
  },
  {
    "year": 2025,
    "items": [
      "Participation in the group exhibition organized by the Molino Andes Regional Museum of Trevelin, Chubut, marking the 160th anniversary of the arrival of the first Welsh settlers on the coast of Chubut, Argentina."
    ]
  },
  {
    "year": 2024,
    "items": [
      "\"Propósito: Ab Ideis ad Terra\" – Second Mention, National Large-Scale Sculpture Competition of Siglo 21 University, 2nd Edition. Collective creation with the sculptor Roxana Viotto. https://universidadeshoy.com.ar/nota/76567/universidad-siglo-21-anuncio-los-ganadores-de-la-nueva-edicion-del-concurso-nacional-de-escultura-de-gran-escala/",
      "Ministry of Culture of Argentina (MCN) – 2013 to 2024. Administrative and management work in various areas of the MCN at its headquarters in Buenos Aires. Later, work at the Jesús María Estancia – National Jesuit Museum and the Posta de Sinsacate National Museum, both UNESCO World Heritage Sites and both under the MCN."
    ]
  },
  {
    "year": 2023,
    "items": [
      "\"Diversa\" – Sculpture selected by the Municipality of Córdoba for the Sculpture Plaza (Plazoleta de las Esculturas). Member of the team for the creative process and production logistics, together with the sculptors Elia Bísaro and Roxana Viotto."
    ]
  },
  {
    "year": 2021,
    "items": [
      "INMUNITAS exhibition at the Jesús María Estancia – National Jesuit Museum, a UNESCO World Heritage Site, Jesús María, province of Córdoba. https://www.facebook.com/watch/?v=667761657918897\nhttps://www.argentina.gob.ar/noticias/dos-muestras-plasticas-con-artistas-cordobeses-en-la-estancia-de-jesus-maria-y-la-posta-de"
    ]
  },
  {
    "year": 2017,
    "items": [
      "\"Apariencias\" exhibition at the Casa de la Cultura of Entre Ríos, city of Paraná, province of Entre Ríos. https://www.unoentrerios.com.ar/escenario/presentan-apariencias-la-muestra-pinturas-y-grabados-n1455811.html",
      "\"Interticios\" exhibition at the Casa Lino E. Spilimbergo Museum, in the city of Unquillo, province of Córdoba."
    ]
  },
  {
    "year": 2015,
    "items": [
      "Museum of Latin American Art of Buenos Aires (MALBA) – \"Experiencia Infinita\" – Selected as a participant in the live art group for three months for the work THIS IS PROPAGANDA by the British artist Tino Sehgal. Buenos Aires. https://youtu.be/5bHvAYFloJg, http://jaquealarte.com/2015/04/06/la-muestra-del-mes-experiencia-infinita/"
    ]
  },
  {
    "year": 2013,
    "items": [
      "4th Argentine Congress of Culture. Secretariat of Culture of Argentina, Resistencia, Chaco."
    ]
  },
  {
    "year": 2012,
    "items": [
      "Participation in a contemporary art exhibition and fair, Villa Allende, Córdoba."
    ]
  },
  {
    "year": 2011,
    "items": [
      "Participation in the group contemporary art exhibition at Luna India, Argüello, Córdoba.",
      "Participation in the exhibitions of the DosSientoS Project, held throughout 2011."
    ]
  },
  {
    "year": 2010,
    "items": [
      "Fundación María Castaña Art Gallery – \"DNI Sex\" – Group exhibition.",
      "Founding member of the group El Caldero Colectivo Creativo (The Cauldron Creative Collective). EsculTODAS – El Caldero Colectivo Creativo collaborated in the exhibition of women sculptors organized by the Paseo del Buen Pastor for Women's Month, with the participation of seventy women sculptors from across the province of Córdoba.",
      "DosSientoS – Installation – Federal Work – Organizer as part of the group El Caldero Colectivo Creativo, and participating artist in the DosSientoS exhibition, which invited two hundred women artists from across the country to intervene a broom. The event was part of the official Bicentennial program of the Secretariat of Culture of the Province of Córdoba, and was declared of Provincial and National Interest."
    ]
  },
  {
    "year": 2009,
    "items": [
      "Córdoba International Airport – EspacioArte – Solo exhibition.",
      "Solo exhibition at Galería de Arte Cerrito, city of Córdoba – Grafos Series (Graphs Series). http://www.galeriacerrito.com/artista.php?lang=es&id=100",
      "Municipality of Villa Allende, province of Córdoba – Group exhibition \"Mujeres por la Memoria\" (Women for Memory)."
    ]
  },
  {
    "year": 2008,
    "items": [
      "Exhibiting artist, Mercado Negro del Arte (Black Art Market), 2008 edition.",
      "Solo exhibition – Paseo del Buen Pastor – Paintings – La Textura Interior (The Interior Texture) Series.",
      "Tirram Art Gallery – works exhibited at the Howard Johnson Hotel, Río Ceballos, Córdoba.",
      "Avon Space National Painting Salon – Selected artist, 2008 edition – Buenos Aires.",
      "Cerrito Galería de Arte – Works in the gallery's back room.",
      "Tirram Art Gallery – works exhibited at the opening of the restaurant El Viejo Juan, Unquillo, Córdoba.",
      "Participation in a group exhibition for Women's Month – Amerian Córdoba Park Hotel – Córdoba.",
      "Solo exhibition, \"Almacén de la Memoria\" – Casa de Pepino (under the Municipality of Córdoba) – Paintings – Cuencos Series (Bowls Series).",
      "Galería de Arte Córdoba – works exhibited at the Sheraton Hotel, city of Córdoba."
    ]
  },
  {
    "year": 2007,
    "items": [
      "Exhibition of paintings, Acacios Negros (Black Acacias) Series, Sala Solarium, Centro Cultural del Paseo de las Artes – Córdoba."
    ]
  }
]

const linkLabels = {
  'https://www.facebook.com/photo/?fbid=1385234163786016&set=pcb.1385234840452615': 'Facebook',
  'https://www.eqsnotas.com/cultura/danzas--poesia-y-pintura-tuvieron-su-jornada-en-trevelin-con-los-juegos-culturales-para-personas-mayores_a6a6e10338bb052882ba61c3b': 'EQS Notas',
  'https://www.facebook.com/100064887961973/posts/1555720753267509/': 'Facebook',
  'https://universidadeshoy.com.ar/nota/76567/universidad-siglo-21-anuncio-los-ganadores-de-la-nueva-edicion-del-concurso-nacional-de-escultura-de-gran-escala/': 'Universidades Hoy',
  'https://www.facebook.com/watch/?v=667761657918897': 'Facebook Watch',
  'https://www.argentina.gob.ar/noticias/dos-muestras-plasticas-con-artistas-cordobeses-en-la-estancia-de-jesus-maria-y-la-posta-de': 'Argentina.gob.ar',
  'https://www.unoentrerios.com.ar/escenario/presentan-apariencias-la-muestra-pinturas-y-grabados-n1455811.html': 'UNO Entre Ríos',
  'https://youtu.be/5bHvAYFloJg': 'YouTube',
  'http://jaquealarte.com/2015/04/06/la-muestra-del-mes-experiencia-infinita/': 'Jaque al Arte',
  'http://www.galeriacerrito.com/artista.php?lang=es&id=100': 'Galería de Arte Cerrito'
}

function renderLinkedText(text) {
  const urlPattern = /https?:\/\/[^\s,]+/g
  const parts = []
  let lastIndex = 0
  let match
  while ((match = urlPattern.exec(text)) !== null) {
    let rawUrl = match[0]
    let cleanUrl = rawUrl.replace(/[.)]+$/, '')
    const trailing = rawUrl.slice(cleanUrl.length)
    parts.push(text.slice(lastIndex, match.index))
    parts.push(
      <Fragment key={`link-${match.index}`}>
        <a className="cv-link" href={cleanUrl} target="_blank" rel="noreferrer">
          {linkLabels[cleanUrl] || new URL(cleanUrl).hostname.replace(/^www\./, '')}
        </a>{trailing}
      </Fragment>
    )
    lastIndex = match.index + rawUrl.length
  }
  parts.push(text.slice(lastIndex))
  return parts
}

export default function About() {
  return (
    <section className="page editorial-page">
      <div className="editorial-copy">
        <span className="eyebrow">About</span>
        <h1 className="about-name">Nei González</h1>
        {biography.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <h2>Exhibitions and Activities</h2>
        <div className="cv-years">
          {exhibitions.map((entry) => (
            <section className="cv-year-group" key={entry.year}>
              <h3 className="cv-year">{entry.year}</h3>
              <ul className="cv-activities">
                {entry.items.map((item, index) => <li key={index}>{item.split('\n').map((line, lineIndex) => <span key={lineIndex}>{lineIndex > 0 && <><br /></>}{renderLinkedText(line)}</span>)}</li>)}
              </ul>
            </section>
          ))}
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

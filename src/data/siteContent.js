export const heroImages = [
  { id: 'HERO_01', group: 'works', src: '/assets/home/hero/HERO_01.webp', alt: 'Detalle colorido de obra' },
  { id: 'HERO_02', group: 'exhibitions', src: '/assets/home/hero/HERO_02.webp', alt: 'Vista de exposición' },
  { id: 'HERO_03', group: 'works', src: '/assets/home/hero/HERO_03.webp', alt: 'Detalle de obra' },
  { id: 'HERO_04', group: 'exhibitions', src: '/assets/home/hero/HERO_04.webp', alt: 'Vista de exposición' },
  { id: 'HERO_05', group: 'works', src: '/assets/home/hero/HERO_05.webp', alt: 'Obra en exposición' },
  { id: 'HERO_06', group: 'exhibitions', src: '/assets/home/hero/HERO_06.webp', alt: 'Vista de exposición' },
  { id: 'HERO_07', group: 'works', src: '/assets/home/hero/HERO_07.webp', alt: 'Detalle de obra' },
  { id: 'HERO_08', group: 'exhibitions', src: '/assets/home/hero/HERO_08.webp', alt: 'Vista de exposición' },
  { id: 'HERO_09', group: 'works', src: '/assets/home/hero/HERO_09.webp', alt: 'Detalle de obra' },
  { id: 'HERO_10', group: 'exhibitions', src: '/assets/home/hero/HERO_10.webp', alt: 'Vista de exposición' },
  { id: 'HERO_11', group: 'works', src: '/assets/home/hero/HERO_11.webp', alt: 'Detalle de obra' },
  { id: 'HERO_12', group: 'exhibitions', src: '/assets/home/hero/HERO_12.webp', alt: 'Vista de exposición' },
]

const detailImages = Array.from({ length: 18 }, (_, i) => `/assets/about/work-details/WORK_DETAIL_${String(i + 1).padStart(2, '0')}.webp`)
const exhibitionImages = Array.from({ length: 9 }, (_, i) => `/assets/about/exhibitions/EXHIBITION_${String(i + 1).padStart(2, '0')}.webp`)

export const visualColumns = {
  top: detailImages,
  center: exhibitionImages,
  bottom: [...detailImages].reverse(),
}

export const services = [
  {
    id: 'commissions',
    title: 'Obras por comisión',
    image: '/assets/services/commission-01.webp',
    images: ['/assets/services/commission-01.webp', '/assets/services/service-02.webp', '/assets/services/service-03.webp'],
    shortDescription: 'Obras únicas realizadas en diálogo con tus ideas, espacio y necesidades.',
    description: 'Obras únicas realizadas en diálogo con las ideas, el espacio y las necesidades de cada proyecto.',
  },
  {
    id: 'spaces',
    title: 'Proyectos para espacios',
    image: '/assets/services/spaces-01.webp',
    images: ['/assets/services/spaces-01.webp', '/assets/services/service-04.webp', '/assets/services/service-05.webp'],
    shortDescription: 'Obras para hogares, oficinas, hoteles y proyectos institucionales.',
    description: 'Propuestas y obras para hogares, oficinas, hoteles y proyectos institucionales.',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    image: '/assets/services/workshops-01.webp',
    images: ['/assets/services/workshops-01.webp', '/assets/services/service-06.webp', '/assets/services/service-07.webp'],
    shortDescription: 'Encuentros de exploración artística y experimentación con materiales.',
    description: 'Un espacio para explorar la materia, la textura y el proceso creativo a través de la práctica. Los workshops combinan experimentación con materiales, reflexión sobre la obra y desarrollo de proyectos personales.',
  },
  {
    id: 'clinic',
    title: 'Clínica de obra para artistas noveles',
    image: '/assets/services/clinic-01.webp',
    images: ['/assets/services/clinic-01.webp', '/assets/services/service-08.webp', '/assets/services/service-02.webp'],
    shortDescription: 'Acompañamiento para artistas noveles en sus procesos de producción.',
    description: 'Acompañamiento para artistas noveles en sus procesos de producción, lectura de obra y desarrollo de proyectos personales.',
  },
]

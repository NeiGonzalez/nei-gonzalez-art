const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const heroImages = [
  { id: 'HERO_01', group: 'works', src: asset('assets/home/hero/HERO_01.webp'), alt: 'Colorful artwork detail' },
  { id: 'HERO_02', group: 'exhibitions', src: asset('assets/home/hero/HERO_02.webp'), alt: 'Exhibition view' },
  { id: 'HERO_03', group: 'works', src: asset('assets/home/hero/HERO_03.webp'), alt: 'Artwork detail' },
  { id: 'HERO_04', group: 'exhibitions', src: asset('assets/home/hero/HERO_04.webp'), alt: 'Exhibition view' },
  { id: 'HERO_05', group: 'works', src: asset('assets/home/hero/HERO_05.webp'), alt: 'Artwork on display' },
  { id: 'HERO_06', group: 'exhibitions', src: asset('assets/home/hero/HERO_06.webp'), alt: 'Exhibition view' },
  { id: 'HERO_07', group: 'works', src: asset('assets/home/hero/HERO_07.webp'), alt: 'Artwork detail' },
  { id: 'HERO_08', group: 'exhibitions', src: asset('assets/home/hero/HERO_08.webp'), alt: 'Exhibition view' },
  { id: 'HERO_09', group: 'works', src: asset('assets/home/hero/HERO_09.webp'), alt: 'Artwork detail' },
  { id: 'HERO_10', group: 'exhibitions', src: asset('assets/home/hero/HERO_10.webp'), alt: 'Exhibition view' },
  { id: 'HERO_11', group: 'works', src: asset('assets/home/hero/HERO_11.webp'), alt: 'Artwork detail' },
  { id: 'HERO_12', group: 'exhibitions', src: asset('assets/home/hero/HERO_12.webp'), alt: 'Exhibition view' },
]

const detailImages = Array.from(
  { length: 18 },
  (_, i) => asset(`assets/about/work-details/WORK_DETAIL_${String(i + 1).padStart(2, '0')}.webp`)
)

const exhibitionImages = Array.from(
  { length: 9 },
  (_, i) => asset(`assets/about/exhibitions/EXHIBITION_${String(i + 1).padStart(2, '0')}.webp`)
)

export const visualColumns = {
  top: detailImages,
  center: exhibitionImages,
  bottom: [...detailImages].reverse(),
}

export const services = [
  {
    id: 'commissions',
    title: 'Commissioned Artwork',
    image: asset('assets/services/commission-01.webp'),
    images: [
      asset('assets/services/commission-01.webp'),
      asset('assets/services/service-02.webp'),
      asset('assets/services/service-03.webp'),
    ],
    shortDescription: 'Unique artworks developed in dialogue with your ideas, space and needs.',
    description: 'Unique artworks developed in dialogue with the ideas, space and needs of each project.',
  },
  {
    id: 'spaces',
    title: 'Art Projects for Spaces',
    image: asset('assets/services/spaces-01.webp'),
    images: [
      asset('assets/services/spaces-01.webp'),
      asset('assets/services/service-04.webp'),
      asset('assets/services/service-05.webp'),
    ],
    shortDescription: 'Artworks for homes, offices, hotels and institutional projects.',
    description: 'Art proposals and artworks for homes, offices, hotels and institutional projects.',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    image: asset('assets/services/workshops-01.webp'),
    images: [
      asset('assets/services/workshops-01.webp'),
      asset('assets/services/service-06.webp'),
      asset('assets/services/service-07.webp'),
    ],
    shortDescription: 'Sessions for artistic exploration and experimentation with materials.',
    description: 'A space to explore matter, texture and the creative process through practice. Workshops combine material experimentation, reflection on artwork and the development of personal projects.',
  },
  {
    id: 'clinic',
    title: 'Art Mentoring for Emerging Artists',
    image: asset('assets/services/clinic-01.webp'),
    images: [
      asset('assets/services/clinic-01.webp'),
      asset('assets/services/service-08.webp'),
      asset('assets/services/service-02.webp'),
    ],
    shortDescription: 'Guidance for emerging artists throughout their creative process.',
    description: 'Guidance for emerging artists in their creative process, critical reading of their work and the development of personal projects.',
  },
]
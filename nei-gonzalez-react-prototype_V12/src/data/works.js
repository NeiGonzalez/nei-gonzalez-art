const asset = (path) => `${import.meta.env.BASE_URL}${path}`
export const STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  PRIVATE_COLLECTION: 3,
}

export const statusLabels = {
  [STATUS.FOR_SALE]: 'For sale',
  [STATUS.SOLD]: 'Sold',
  [STATUS.PRIVATE_COLLECTION]: 'Artist’s private collection',
}

export const works = [
  {
    id: 'YMA_01',
    title: 'YMA O HYD',
    year: '2024',
    technique: 'Acrylic, canvas, embroidery and cardboard weave',
    size: '30 × 40 cm',
    series: 'Serie 1',
    category: 'painting',
    status: STATUS.FOR_SALE,
    priceUSD: 'xxx.xx',
    images: [
      { id: 'YMA_01_01', src: asset('assets/works/YMA_01_01.webp'), alt: 'YMA O HYD, vista principal' },
      { id: 'YMA_01_02', src: asset('assets/works/YMA_01_02.webp'), alt: 'YMA O HYD, detalle' },
    ],
    description: 'A contextual artwork created for a group exhibition commemorating the arrival of the first Welsh colony in Argentina.',
    commercialInfo: 'Available for purchase. Contact me for packaging, shipping and delivery details.',
    marketArgentina: '',
    marketInternational: '',
  },
  {
    id: 'SUMMA_01',
    title: 'SUMMA INMUNITAS',
    year: '2023',
    technique: 'Mixed media on canvas',
    size: '50 × 70 cm',
    series: 'Serie 2',
    category: 'painting',
    status: STATUS.SOLD,
    priceUSD: '',
    images: [
      { id: 'SUMMA_01_01', src: asset('assets/works/SUMMA_01_01.webp'), alt: 'SUMMA INMUNITAS, detalle' },
    ],
    description: 'Artwork from the INMUNITAS series.',
    commercialInfo: '',
  },

]

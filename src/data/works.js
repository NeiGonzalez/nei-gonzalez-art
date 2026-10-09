const asset = (path) => `${import.meta.env.BASE_URL}${path}`
export const STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  PRIVATE_COLLECTION: 3,
}

export const statusLabels = {
  [STATUS.FOR_SALE]: 'Para la venta',
  [STATUS.SOLD]: 'Vendida',
  [STATUS.PRIVATE_COLLECTION]: 'Colección privada de la artista',
}

export const works = [
  {
    id: 'YMA_01',
    title: 'YMA O HYD',
    year: '2024',
    technique: 'Acrílico, lienzo, bordado y trama de cartón',
    size: '30 × 40 cm',
    series: 'Serie 1',
    category: 'painting',
    status: STATUS.FOR_SALE,
    priceUSD: '900',
    images: [
      { id: 'YMA_01_01', src: asset('assets/works/YMA_01_01.webp'), alt: 'YMA O HYD, vista principal' },
      { id: 'YMA_01_02', src: asset('assets/works/YMA_01_02.webp'), alt: 'YMA O HYD, detalle' },
    ],
    description: 'Obra contextual realizada para una muestra colectiva conmemorativa de la llegada de la primera colonia galesa a Argentina.',
    commercialInfo: 'Disponible para venta. Consultar condiciones de embalaje, envío y entrega.',
    marketArgentina: '',
    marketInternational: '',
  },
  {
    id: 'SUMMA_01',
    title: 'SUMMA INMUNITAS',
    year: '2023',
    technique: 'Técnica mixta sobre lienzo',
    size: '50 × 70 cm',
    series: 'Serie 2',
    category: 'painting',
    status: STATUS.SOLD,
    priceUSD: '',
    images: [
      { id: 'SUMMA_01_01', src: asset('assets/works/SUMMA_01_01.webp'), alt: 'SUMMA INMUNITAS, detalle' },
    ],
    description: 'Obra de la serie INMUNITAS.',
    commercialInfo: '',
  },

]

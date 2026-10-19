const asset = (path) => `${import.meta.env.BASE_URL}${path}`
export const STATUS = { FOR_SALE: 1, SOLD: 2, PRIVATE_COLLECTION: 3 }
export const statusLabels = {
  [STATUS.FOR_SALE]: 'For sale',
  [STATUS.SOLD]: 'Sold',
  [STATUS.PRIVATE_COLLECTION]: 'Artist’s private collection',
}

export const works = [
  {
    id: '2026-CPV', title: 'CORTEZA PIEL VIDA', year: '2026', technique: 'Acrylic, watercolour and embroidery on fabric', size: '80 × 60 × 3 cm', series: '', category: 'painting', status: STATUS.FOR_SALE, priceUSD: '500.00', order: 0,
    description: 'Artwork accepted into the 27th Municipal Visual Arts Salon and the 14th Binational Salon with Patagonian Projection 2026.',
    images: [
      { id: '2026-CPV-0', src: asset('assets/works/2026-CPV-0.webp'), alt: 'Abstract painting on fabric in beige and white acrylic, metallic watercolours, and black acrylic-marker marks.' },
      { id: '2026-CPV-1', src: asset('assets/works/2026-CPV-1.webp'), alt: 'Detail of CORTEZA PIEL VIDA showing the painted and embroidered fabric surface.' },
      { id: '2026-CPV-2', src: asset('assets/works/2026-CPV-2.webp'), alt: 'Close-up of CORTEZA PIEL VIDA, showing its layered surface and material details.' },
      { id: '2026-CPV-3', src: asset('assets/works/2026-CPV-3.webp'), alt: 'Detail of the abstract painting CORTEZA PIEL VIDA, with beige, white and metallic marks.' },
      { id: '2026-CPV-4', src: asset('assets/works/2026-CPV-4.webp'), alt: 'View of CORTEZA PIEL VIDA, an abstract fabric painting with beige and white acrylic, metallic watercolours and black graphic marks.' },
    ],
    commercialInfo: 'Original artwork. Contact me for packaging, shipping and delivery details.', marketArgentina: '', marketInternational: '', showInHome: true,
  },
  {
    id: '2026-UDU', title: 'UNIVERSO DE UNIVERSOS', year: '2026', technique: 'Acrylic markers, felt-tip pens and grease pencil on paper', size: '21 × 15 cm', series: '', category: 'drawing', status: null, priceUSD: '', order: 10,
    description: 'Drawing selected for the local and regional stages of the Chubut Cultural Games.',
    images: [
      { id: '2026-UDU-0', src: asset('assets/works/2026-UDU-0.webp'), alt: 'Drawing of a circle of decorated stones in shades of blue, gold and silver.' },
      { id: '2026-UDU-1', src: asset('assets/works/2026-UDU-1.webp'), alt: 'Detail of the drawing UNIVERSO DE UNIVERSOS, showing decorated stones in blue, gold and silver.' },
      { id: '2026-UDU-2', src: asset('assets/works/2026-UDU-2.webp'), alt: 'Close-up of decorated stone forms in blue, gold and silver in UNIVERSO DE UNIVERSOS.' },
      { id: '2026-UDU-3', src: asset('assets/works/2026-UDU-3.webp'), alt: 'Detail view of UNIVERSO DE UNIVERSOS, a drawing featuring a circular arrangement of decorated stones.' },
    ],
    commercialInfo: '', marketArgentina: '', marketInternational: '', showInHome: true,
  },
]

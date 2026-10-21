const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const heroImages = [
  { id: 'UNDER_CONSTRUCTION', type: 'notice', group: 'notice', alt: 'Website under construction notice' },
  { id: 'HOME_SELECTED_01', group: 'selected', src: asset('assets/home/selected/home-selection-01.jpg'), alt: 'Close view of a textured artwork in an exhibition, with a visitor in the background' },
  { id: 'HOME_SELECTED_02', group: 'selected', src: asset('assets/home/selected/home-selection-02.jpg'), alt: 'Close-up of an ochre painting covered with black graphic marks' },
  { id: 'HOME_SELECTED_03', group: 'selected', src: asset('assets/home/selected/home-selection-03.jpg'), alt: 'Exhibition label for IMMUNITAS, with artist names and exhibition details' },
  { id: 'HOME_SELECTED_04', group: 'selected', src: asset('assets/home/selected/home-selection-04.jpg'), alt: 'Visitors viewing works at an art exhibition' },
  { id: 'HOME_SELECTED_05', group: 'selected', src: asset('assets/home/selected/home-selection-05.jpg'), alt: 'Horizontal mixed-media artwork with colorful shapes and stitched details' },
  { id: 'HOME_SELECTED_06', group: 'selected', src: asset('assets/home/selected/home-selection-06.jpg'), alt: 'Circular brown and ochre artwork with stitched and drawn details' },
  { id: 'HOME_SELECTED_07', group: 'selected', src: asset('assets/home/selected/home-selection-07.jpg'), alt: 'Dark blue artwork with red stitched forms and textured surfaces' },
  { id: 'HOME_SELECTED_08', group: 'selected', src: asset('assets/home/selected/home-selection-08.jpg'), alt: 'Small raised forms arranged on a blue surface' },
  { id: 'HOME_SELECTED_09', group: 'selected', src: asset('assets/home/selected/home-selection-09.jpg'), alt: 'A visitor looking at a vertical framed artwork in an exhibition' },
  { id: 'HOME_SELECTED_10', group: 'selected', src: asset('assets/home/selected/home-selection-10.jpg'), alt: 'Interior view of an art exhibition with paintings on display' },
  { id: 'HOME_SELECTED_11', group: 'selected', src: asset('assets/home/selected/home-selection-11.jpg'), alt: 'Close-up of a textured brown artwork with projecting forms' },
  { id: 'HOME_SELECTED_12', group: 'selected', src: asset('assets/home/selected/home-selection-12.jpg'), alt: 'Close-up of a blue and green geometric sculpture' },
  { id: '2026-CPV-4', group: 'works', src: asset('assets/works/2026-CPV-4.webp'), alt: 'Pintura abstracta sobre tela en colores acrílicos beige, blanco, acuarelas metalizadas y grafismos en marcador acrilico negro' },
  { id: '2026-UDU-0', group: 'works', src: asset('assets/works/2026-UDU-0.webp'), alt: 'Dibujo círculo de piedras decoradas en paleta de azules, dorado y plateado' },
  { id: '2025-YOH-2', group: 'works', src: asset('assets/home/catalog/2025-YOH - fotos web/2025-YOH-2.jpg'), alt: 'Detalle de pintura abstracta sobre tela en colores acrílicos beige, blanco, acuarelas multicolor en carton tejido sobre la tela, texto bordado' },
  { id: '2024-PS21-0', group: 'works', src: asset('assets/home/catalog/2024-PROPOSITO SIGLO 21 -fotos web/2024-PS21-0.jpg'), alt: 'Foto de maqueta para proyecto de escultura monumental en hierro de hexágonos soldados elevándose en color óxido' },
  { id: '2024-PTAC-5', group: 'works', src: asset('assets/home/catalog/2024-PROPOSITO AZCUI- FOTOS WEB/2024-PTAC-5.png'), alt: 'Detalle de foto de maqueta para proyecto de escultura monumental en hierro de hexágonos soldados elevándose en colores de la tierra a los azules' },
  { id: '2021-INMNT1-1', group: 'works', src: asset('assets/home/catalog/2021-INMNT1/2021-INMNT1-1.JPG'), alt: 'Detalle de pintura sobre lienzo con puntadas blancas y negras y pintura color cemento' },
  { id: '2021-INMNT2-1', group: 'works', src: asset('assets/home/catalog/2021-INMNT2/2021-INMNT2-1.png'), alt: 'Detalle de pintura con puntadas y texturas acrílicas' },
  { id: '2021-INMNT5-8', group: 'works', src: asset('assets/home/catalog/2021-INMNT5/2021-INMNT5-8.jpg'), alt: 'Detalle de pintura con puntadas y texturas acrílicas' },
  { id: '2021-INMNT6-2', group: 'works', src: asset('assets/home/catalog/2021-INMNT6/2021-INMNT6-2.JPG'), alt: 'Detalle de pintura con puntadas y texturas acrílicas' },
  { id: '2021-INMNT9-1', group: 'works', src: asset('assets/home/catalog/2021-INMNT9/2021-INMNT9-1.jpg'), alt: 'Detalle de pintura con puntadas y texturas acrílicas' },
  { id: '2021-INMNT10-5', group: 'works', src: asset('assets/home/catalog/2021-INMNT10/2021-INMNT10-5.JPG'), alt: 'Detalle de pintura con puntadas y texturas acrílicas' },
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
    image: asset('assets/services/commissioned-artwork.webp'),
    images: [asset('assets/services/commissioned-artwork.webp')],
    imageCaptions: ['Acacios Negro IV — Artwork installed in a private collector’s bedroom.'],
    shortDescription: 'Original artworks developed in dialogue with the person commissioning them and the space.',
    paragraphs: [
      'Commissioned works are intended for private spaces in a home or for small work environments, and one or more works can be commissioned.',
      'Each commission begins with an encounter between what the person commissioning the work says they want, the space where the work will live, and the material and sensory connections I am able to perceive between the two. Through dialogue, that search begins to take shape, and I transform it into an original work, from my own perspective and artistic language.',
      'The process begins with a conversation, in person or by video as circumstances allow, and with an understanding of the space, either through a visit or through photographs and measurements. With that information I present a proposal for the work. Once it is agreed, I make the work and coordinate its delivery, which can be within Argentina or abroad.',
      'Each work is delivered ready to hang, with its certificate of authenticity, a descriptive document covering conceptual and technical aspects, and care instructions. It can be delivered framed, according to what is requested.',
      'Timelines, price, payment method and delivery conditions are set for each work, according to its size, its technique and its final destination, as agreed with the client.',
      'To start a commission, you can write to me through the Inquire button, with a description of what you are looking for and a photo of the space.'
    ],
  },
  {
    id: 'spaces',
    title: 'Art Projects for Spaces',
    image: asset('assets/services/spaces-before-after.webp'),
    images: [asset('assets/services/spaces-01.webp'), asset('assets/services/spaces-project-02.webp'), asset('assets/services/spaces-project-03.webp'), asset('assets/services/spaces-04.webp')],
    imageCaptions: ['OKRA Project — Photomontage of a physical model on an actual wall.', 'Premio Azcuy Project — Photomontage of a physical model on a photograph provided by the organizer.', 'Artwork Photomontage — Universidad Siglo 21 Campus. Photomontage of a physical model on an image provided by Universidad Siglo 21.', 'Office Art Project — Original ink and watercolor artworks presented in an AI-generated photomontage.'],
    shortDescription: 'Artistic proposals for public, professional and shared spaces.',
    paragraphs: [
      'Development of artistic proposals for public and professional spaces, such as hotels, banks, offices, corporate buildings, private hospitals, medical practices or professional offices, conference rooms and other work and gathering spaces.',
      'Each project begins by recognizing the identity of the space and exploring, from my perspective as a visual artist, the aspects that can accentuate and strengthen it. The works form series that share a visual and technical language and are distributed across different areas of the space. Each one is an original work that relates to the others and to its surroundings, and helps build a stylistic identity for a space or a group of spaces.',
      'I am interested in art becoming part of these environments on a sensory level, with attention to their atmosphere, their particularities and the experiences of the people who pass through them, as well as to what is hoped the work will contribute experientially for those who live with it.',
      'Each project starts from a conversation with the people behind it and from an understanding of the space. With that information I present a proposal that defines the number of works, the formats, the suggested location and the basic lighting required. Timelines, price, payment method and delivery conditions are set for each project, as agreed with the client.',
      'The works are delivered with their certificate of authenticity, a descriptive document covering conceptual and technical aspects, and care instructions.',
      'To inquire about a project, you can write to me through the Inquire button.'
    ],
  },
  {
    id: 'workshops',
    title: 'Workshops',
    image: asset('assets/services/workshop-main.webp'),
    images: [asset('assets/services/workshop-main.webp')],
    workshopCourses: [
      {
        id: 'creativity',
        title: 'Visual Arts and Personal Creativity Workshop',
        image: asset('assets/services/workshop-main.webp'),
        description: ['In-person visual arts workshop for young people and adults, with practical activities and applied theoretical concepts, techniques and materials. Designed for the training and skill development of both community members and artists, the sessions invite participants to discover new resources, explore ideas and find different possibilities for creation and expression, in a space for experimentation and exchange. Trevelin, Chubut, Argentina. Open all year round.'],
        contactText: 'To request information about this workshop, contact me through the Inquire button.'
      },
      {
        id: 'exhibitions',
        title: 'Art Exhibition Management and Installation Workshop',
        image: asset('assets/services/workshop-exhibitions.webp'),
        description: [
          'Designed for artists, staff of museums, cultural centers and exhibition spaces, and teachers at all levels.',
          'The organization of an exhibition requires considering multiple aspects that influence how the works are presented and enhanced, as well as the experience of those who visit the show. The selection and arrangement of the works, the visitor route, lighting, signage, the target audience, the exhibition narrative and communication are some of the matters involved in its development.',
          'This workshop offers a theoretical and practical introduction to the main aspects of exhibition management and installation, from initial planning, through execution and evaluation of the show, to dismantling.',
          'It proposes criteria to identify which elements are essential, which decisions are best made in advance and which resources can enrich the proposal, along with organizational and planning tools applicable to each project.',
          'The knowledge covered can also be applied to exhibitions of objects and to productions from other disciplines that need to be displayed.',
          'Coming soon.'
        ],
        contactText: 'To request information about upcoming dates of this workshop, contact me through the Inquire button.'
      }
    ],
    shortDescription: 'Theoretical and practical activities exploring concepts, techniques and materials.',
    paragraphs: [
      'To receive information about upcoming dates, you can write to me through the Inquire button.'
    ],
  },
  {
    id: 'clinic',
    title: 'Art Mentoring for Emerging Artists',
    image: asset('assets/services/clinics.webp'),
    images: [asset('assets/services/clinics.webp')],
    shortDescription: 'Guidance and reflection to strengthen the personal search of emerging artists.',
    paragraphs: [
      'Spaces for guidance and reflection aimed at strengthening the personal search of artists who are beginning to develop their practice. Through dialogue about their works and working processes, the ideas, decisions and resources involved in artistic production are explored.',
      'The clinics also allow for deeper work on technical and conceptual aspects, identification of specific needs, and engagement with theoretical tools that help to understand and enrich one\'s own practice. Each session is built around the concerns and challenges that each artist\'s production presents, which helps develop a more conscious outlook on their work and its possibilities.',
      'To inquire about a clinic, you can write to me through the Inquire button.'
    ],
  },
]

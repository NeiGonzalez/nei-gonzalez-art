const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const heroImages = [
  { id: 'UNDER_CONSTRUCTION', type: 'notice', group: 'notice', alt: 'Website under construction notice' },
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
    title: 'Commissioned works',
    image: asset('assets/services/commissioned-artwork.webp'),
    images: [asset('assets/services/commissioned-artwork.webp')],
    shortDescription: 'Original artworks developed in dialogue with the person commissioning them and the space.',
    paragraphs: [
      'Commissioned works are intended for private spaces in a home or for small work environments, and one or more works can be commissioned.',
      'Each commission begins with an encounter between what the person commissioning the work says they want, the space where the work will live, and the material and sensory connections I am able to perceive between the two. Through dialogue, that search begins to take shape, and I transform it into an original work, from my own perspective and artistic language.',
      'The process begins with a conversation, in person or by video as circumstances allow, and with an understanding of the space, either through a visit or through photographs and measurements. With that information I present a proposal for the work. Once it is agreed, I make the work and coordinate its delivery, which can be within Argentina or abroad.',
      'Each work is delivered ready to hang, with its certificate of authenticity, a descriptive document covering conceptual and technical aspects, and care instructions. It can be delivered framed, according to what is requested.',
      'Timelines, price, payment method and delivery conditions are set for each work, according to its size, its technique and its final destination, as agreed with the client.',
      'To start a commission, you can write to me through the Enquire button, with a description of what you are looking for and a photo of the space.'
    ],
  },
  {
    id: 'spaces',
    title: 'Art for spaces',
    image: asset('assets/services/spaces-before-after.webp'),
    images: [asset('assets/services/spaces-before-after.webp'), asset('assets/services/spaces-project-02.webp'), asset('assets/services/spaces-project-03.webp')],
    shortDescription: 'Artistic proposals for public, professional and shared spaces.',
    paragraphs: [
      'Development of artistic proposals for public and professional spaces, such as hotels, banks, offices, corporate buildings, private hospitals, medical practices or professional offices, conference rooms and other work and gathering spaces.',
      'Each project begins by recognizing the identity of the space and exploring, from my perspective as a visual artist, the aspects that can accentuate and strengthen it. The works form series that share a visual and technical language and are distributed across different areas of the space. Each one is an original work that relates to the others and to its surroundings, and helps build a stylistic identity for a space or a group of spaces.',
      'I am interested in art becoming part of these environments on a sensory level, with attention to their atmosphere, their particularities and the experiences of the people who pass through them, as well as to what is hoped the work will contribute experientially for those who live with it.',
      'Each project starts from a conversation with the people behind it and from an understanding of the space. With that information I present a proposal that defines the number of works, the formats, the suggested location and the basic lighting required. Timelines, price, payment method and delivery conditions are set for each project, as agreed with the client.',
      'The works are delivered with their certificate of authenticity, a descriptive document covering conceptual and technical aspects, and care instructions.',
      'To enquire about a project, you can write to me through the Enquire button.'
    ],
  },
  {
    id: 'workshops',
    title: 'Workshops',
    image: asset('assets/services/workshops.webp'),
    images: [asset('assets/services/workshops.webp')],
    shortDescription: 'Theoretical and practical activities exploring concepts, techniques and materials.',
    paragraphs: [
      'Theoretical and practical activities on diverse concepts, techniques and materials, designed for the training and skill development of both artists and other members of the community. These sessions invite participants to get to know new resources, explore ideas and discover different possibilities for creation and expression, in a space for experimentation and exchange.',
      'Visual arts exhibition setup workshop. Aimed at artists, museums, exhibition spaces and teachers at all levels, it covers the aspects to consider when setting up an exhibition: the arrangement of the works, lighting, signage, the visitor route, framing, the presentation of the works and publicity. Coming soon.',
      'To receive information about upcoming dates, you can write to me through the Enquire button.'
    ],
  },
  {
    id: 'clinic',
    title: 'Art clinics for emerging artists',
    image: asset('assets/services/clinics.webp'),
    images: [asset('assets/services/clinics.webp')],
    shortDescription: 'Guidance and reflection to strengthen the personal search of emerging artists.',
    paragraphs: [
      'Spaces for guidance and reflection aimed at strengthening the personal search of artists who are beginning to develop their practice. Through dialogue about their works and working processes, the ideas, decisions and resources involved in artistic production are explored.',
      "The clinics also allow for deeper work on technical and conceptual aspects, identification of specific needs, and engagement with theoretical tools that help to understand and enrich one's own practice. Each session is built around the concerns and challenges that each artist's production presents, which helps develop a more conscious outlook on their work and its possibilities.",
      'To enquire about a clinic, you can write to me through the Enquire button.'
    ],
  },
]

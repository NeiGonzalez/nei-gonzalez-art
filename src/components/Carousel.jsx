import { useEffect, useState } from 'react'

export default function Carousel({ images }) {
  const orderedImages = images
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (orderedImages.length < 2) return
    const nextImage = orderedImages[(index + 1) % orderedImages.length]
    if (!nextImage?.src) return
    const preload = new Image()
    preload.src = nextImage.src
  }, [index, orderedImages])

  useEffect(() => {
    if (orderedImages.length < 2) return undefined
    const timer = setInterval(() => setIndex((current) => (current + 1) % orderedImages.length), 4200)
    return () => clearInterval(timer)
  }, [orderedImages.length])

  const previous = () => setIndex((current) => (current - 1 + orderedImages.length) % orderedImages.length)
  const next = () => setIndex((current) => (current + 1) % orderedImages.length)
  const current = orderedImages[index]

  return <div className="hero-carousel">
    <div className="hero-stage">
      {current && (current.type === 'notice' ? (
        <div className="construction-slide" role="img" aria-label="Website under construction. The artworks shown are original works by the artist, displayed here as placeholders for testing the website while its content is being developed.">
          <div className="construction-notice">
            <span className="construction-eyebrow">NEI GONZALEZ · ART</span>
            <h1>WEBSITE UNDER CONSTRUCTION</h1>
            <p>The website is currently under construction. The artworks shown are original works by the artist, displayed here as placeholders for testing the website while its content is being developed.</p>
            <span className="construction-divider" />
            <h2>WEBSITE UNDER CONSTRUCTION</h2>
            <p>This website is under construction. The artworks shown are original works by the artist, displayed provisionally while the final website content is being developed.</p>
          </div>
        </div>
      ) : <img className={`hero-image group-${current.group || 'default'}`} src={current.src} alt={current.alt || ''} fetchPriority="high" decoding="async" />)}
      {orderedImages.length > 1 && <>
        <button className="hero-arrow hero-arrow-left" onClick={previous} aria-label="Previous image">‹</button>
        <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next image">›</button>
      </>}
      <div className="hero-dots" aria-label="Carousel position">
        {orderedImages.map((image, i) => <button key={image.id} className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)} aria-label={`Image ${i + 1}`} />)}
      </div>
    </div>
  </div>
}

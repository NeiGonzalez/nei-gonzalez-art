import { useEffect, useMemo, useState } from 'react'

function controlledShuffle(images) {
  if (images.length < 2) return [...images]
  const first = images[0]
  const rest = images.slice(1)
  const groups = [...new Set(rest.map((image) => image.group || 'default'))]
  if (groups.length < 2) return [first, ...rest.sort(() => Math.random() - 0.5)]
  const buckets = Object.fromEntries(groups.map((group) => [group, [...rest.filter((image) => (image.group || 'default') === group)].sort(() => Math.random() - 0.5)]))
  const result = [first]
  let previous = first.group || 'default'
  while (groups.some((group) => buckets[group].length)) {
    const options = groups.filter((group) => buckets[group].length && group !== previous)
    const group = options[Math.floor(Math.random() * options.length)] || groups.find((item) => buckets[item].length)
    result.push(buckets[group].shift())
    previous = group
  }
  return result
}

export default function Carousel({ images }) {
  const orderedImages = useMemo(() => controlledShuffle(images), [images])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    orderedImages.forEach((image) => {
      const preload = new Image()
      if (image.src) preload.src = image.src
    })
  }, [orderedImages])

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
            <h2>SITIO WEB EN CONSTRUCCIÓN</h2>
            <p>El sitio web está en construcción. Las obras que se muestran son originales de la artista y se presentan aquí de manera provisional, a modo de prueba, mientras se desarrolla el contenido definitivo de la web.</p>
          </div>
        </div>
      ) : <img className="hero-image" src={current.src} alt={current.alt || ''} fetchPriority="high" decoding="async" />)}
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

import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { services } from '../data/siteContent'

export default function ServiceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const index = services.findIndex((item) => item.id === id)
  const service = services[index]
  const [imageIndex, setImageIndex] = useState(0)

  if (!service) return <section className="page"><h1>Service not found</h1></section>

  const previous = services[(index - 1 + services.length) % services.length]
  const next = index === services.length - 1 ? null : services[index + 1]
  const serviceImages = service.images || [service.image]

  return (
    <section className="service-detail-page">
      <button className="service-close" type="button" onClick={() => navigate('/services')} aria-label="Close">×</button>
      <button className="service-nav service-nav-prev" type="button" onClick={() => navigate(`/services/${previous.id}`)} aria-label="Previous service">‹</button>

      <div className="service-detail-copy">
        <span className="eyebrow">Services</span>
        <h1>{service.title}</h1>
        <span className="service-rule" />
        <p>{service.description}</p>
        <Link className="service-cta" to="/contact">INQUIRE <span>→</span></Link>
      </div>

      <div className="service-detail-gallery">
        <div className="service-detail-image">
          <img src={serviceImages[imageIndex]} alt="" loading="eager" fetchPriority="high" decoding="async" />
          {serviceImages.length > 1 && <>
            {imageIndex > 0 && <button className="service-image-arrow service-image-prev" type="button" onClick={() => setImageIndex((current) => current - 1)} aria-label="Previous image">‹</button>}
            {imageIndex < serviceImages.length - 1 && <button className="service-image-arrow service-image-next" type="button" onClick={() => setImageIndex((current) => current + 1)} aria-label="Next image">›</button>}
            <div className="service-image-dots">{serviceImages.map((image, imageNumber) => <button key={`${image}-${imageNumber}`} type="button" className={imageNumber === imageIndex ? 'is-active' : ''} onClick={() => setImageIndex(imageNumber)} aria-label={`Image ${imageNumber + 1}`} />)}</div>
          </>}
        </div>
        {serviceImages.length > 1 && <div className="service-thumb-rail">{serviceImages.map((image, imageNumber) => <button key={`${image}-thumb`} type="button" className={imageNumber === imageIndex ? 'is-active' : ''} onClick={() => setImageIndex(imageNumber)}><img src={image} alt="" /></button>)}</div>}
      </div>

      {next ? (
        <button className="service-nav service-nav-next" type="button" onClick={() => navigate(`/services/${next.id}`)} aria-label="Next service">›</button>
      ) : (
        <button className="service-nav service-nav-next" type="button" onClick={() => navigate('/services')} aria-label="Back to services">›</button>
      )}
    </section>
  )
}

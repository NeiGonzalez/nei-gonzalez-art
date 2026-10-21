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
  const isWorkshopPage = service.id === 'workshops'

  return (
    <section className={`service-detail-page${service.id === 'spaces' ? ' spaces-service-page' : ''}${isWorkshopPage ? ' workshops-service-page' : ''}`}>
      <button className="service-close" type="button" onClick={() => navigate('/services')} aria-label="Close">×</button>
      <button className="service-nav service-nav-prev" type="button" onClick={() => navigate(`/services/${previous.id}`)} aria-label="Previous service">‹</button>

      <div className="service-detail-copy">
        <span className="eyebrow">Services</span>
        <h1>{service.title}</h1>
        <span className="service-rule" />
        {!isWorkshopPage && <div className={`service-detail-text ${service.id === 'spaces' ? 'spaces-detail-text' : ''}`}>{(service.paragraphs || [service.description]).filter(Boolean).map((paragraph, paragraphIndex) => <p key={`${service.id}-paragraph-${paragraphIndex}`}>{paragraph}</p>)}</div>}
        {!isWorkshopPage && <Link className="service-cta" to="/contact#contact-form">INQUIRE <span>→</span></Link>}
      </div>

      <div className="service-detail-gallery">
        {service.workshopCourses ? (
          <div className="workshop-course-list">
            {service.workshopCourses.map((course) => (
              <article className="workshop-course" key={course.id}>
                <div className="workshop-course-copy">
                  <h2>{course.title}</h2>
                  {course.description.map((paragraph, paragraphIndex) => <p key={`${course.id}-description-${paragraphIndex}`}>{paragraph.split(/(Open all year round|Coming soon\.)/g).map((part, partIndex) => part === 'Open all year round' || part === 'Coming soon.' ? <strong key={`${part}-${partIndex}`}>{part}</strong> : part)}</p>)}
                  <p className="workshop-contact-copy">{course.contactText}</p>
                  <Link className="service-cta workshop-course-cta" to="/contact#contact-form">INQUIRE <span>→</span></Link>
                </div>
                <img src={course.image} alt={course.title} loading="eager" decoding="async" />
              </article>
            ))}
          </div>
        ) : (
          <>
            <figure className="service-image-figure">
              <div className="service-image-stage">
                {serviceImages.length > 1 && imageIndex > 0 && <button className="service-image-arrow service-image-prev" type="button" onClick={() => setImageIndex((current) => current - 1)} aria-label="Previous image">‹</button>}
                <div className="service-detail-image">
                  <img src={serviceImages[imageIndex]} alt={`${service.title} — image ${imageIndex + 1}`} loading="eager" fetchPriority="high" decoding="async" />
                  {serviceImages.length > 1 && <div className="service-image-dots">{serviceImages.map((image, imageNumber) => <button key={`${image}-${imageNumber}`} type="button" className={imageNumber === imageIndex ? 'is-active' : ''} onClick={() => setImageIndex(imageNumber)} aria-label={`Image ${imageNumber + 1}`} />)}</div>}
                </div>
                {serviceImages.length > 1 && imageIndex < serviceImages.length - 1 && <button className="service-image-arrow service-image-next" type="button" onClick={() => setImageIndex((current) => current + 1)} aria-label="Next image">›</button>}
              </div>
              {service.imageCaptions && <figcaption className="service-image-caption">{service.imageCaptions[imageIndex]}</figcaption>}
            </figure>
            {serviceImages.length > 1 && <div className="service-thumb-rail">{serviceImages.map((image, imageNumber) => <button key={`${image}-thumb`} type="button" className={imageNumber === imageIndex ? 'is-active' : ''} onClick={() => setImageIndex(imageNumber)}><img src={image} alt="" /></button>)}</div>}
          </>
        )}
      </div>

      {next ? (
        <button className="service-nav service-nav-next" type="button" onClick={() => navigate(`/services/${next.id}`)} aria-label="Next service">›</button>
      ) : (
        <button className="service-nav service-nav-next" type="button" onClick={() => navigate('/services')} aria-label="Back to services">›</button>
      )}
    </section>
  )
}

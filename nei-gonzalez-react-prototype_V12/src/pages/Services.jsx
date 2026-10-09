import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/siteContent'

export default function Services() {
  useEffect(() => {
    services.forEach((service) => {
      const image = new Image()
      image.src = service.image
    })
  }, [])

  return (
    <section className="page services-page">
      <div className="page-heading single-heading"><span className="eyebrow">Services</span></div>
      <div className="services-grid">
        {services.map((service) => (
          <Link to={`/services/${service.id}`} className="service-card" key={service.id}>
            <img src={service.image} alt="" loading="eager" fetchPriority="high" decoding="async" />
            <div className="service-card-caption">
              <span>{service.title}</span>
              <b>→</b>
            </div>
            <p>{service.shortDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

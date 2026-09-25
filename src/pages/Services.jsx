import { Link } from 'react-router-dom'
import { services } from '../data/siteContent'

export default function Services() {
  return (
    <section className="page services-page">
      <div className="page-heading single-heading"><span className="eyebrow">Services</span></div>
      <div className="services-grid">
        {services.map((service) => (
          <Link to={`/services/${service.id}`} className="service-card" key={service.id}>
            <img src={service.image} alt="" />
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

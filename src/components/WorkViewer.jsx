import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { STATUS, works } from '../data/works'

function MultipleIcon() {
  return (
    <svg className="multiple-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="4" width="12" height="12" rx="2" />
      <rect x="4" y="7" width="12" height="12" rx="2" />
    </svg>
  )
}

export default function WorkViewer({ mode = 'works' }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const index = works.findIndex((item) => item.id === id)
  const work = works[index]
  const [detailIndex, setDetailIndex] = useState(0)

  useEffect(() => setDetailIndex(0), [id])

  if (!work) return <section className="page"><span className="eyebrow">{mode === 'shop' ? 'Shop' : 'Works'}</span><p>Work not found.</p></section>

  const previous = works[(index - 1 + works.length) % works.length]
  const next = works[(index + 1) % works.length]
  const detail = work.images[detailIndex]
  const isShop = mode === 'shop'

  return (
    <section className={`work-view ${isShop ? 'shop-view' : ''}`} aria-label={work.title}>
      <button className="work-view-close" type="button" onClick={() => navigate(isShop ? '/shop' : '/works')} aria-label="Close">×</button>

      <div className="work-view-info">
        <span className="eyebrow">{isShop ? 'Shop' : 'Works'}</span>
        <h1>{work.title}</h1>
        <p className="work-size-year">{work.size}{work.size && work.year ? ' | ' : ''}{work.year}</p>
        <span className="work-rule" />
        {work.description && <p className="work-description">{work.description}</p>}

        <div className="work-specs">
          {work.technique && <p><strong>Técnica</strong><span>{work.technique}</span></p>}
          {work.size && <p><strong>Medidas</strong><span>{work.size}</span></p>}
          {work.year && <p><strong>Año</strong><span>{work.year}</span></p>}
        </div>

        {work.status === STATUS.SOLD && (
          <p className="work-status"><span className="sold-dot-inline" />Vendida</p>
        )}
        {work.status === STATUS.PRIVATE_COLLECTION && <p className="work-status">Colección privada de la artista</p>}

        {isShop && work.status === STATUS.FOR_SALE && (
          <div className="commercial-info">
            {work.priceUSD && <p className="shop-detail-price">USD {work.priceUSD}</p>}
            {work.commercialInfo && <p>{work.commercialInfo}</p>}
            <p>Obra original. Consultá por embalaje, envío y condiciones de entrega.</p>
            <div className="sale-links">
              {work.marketArgentina && <a href={work.marketArgentina} target="_blank" rel="noreferrer">Mercado Libre</a>}
              {work.marketInternational && <a href={work.marketInternational} target="_blank" rel="noreferrer">Artsy</a>}
              {!work.marketArgentina && !work.marketInternational && <a href="/contact">Consultar compra</a>}
            </div>
          </div>
        )}
      </div>

      <div className="work-view-stage">
        <button className="work-nav-arrow work-nav-prev" type="button" onClick={() => navigate(`${isShop ? '/shop/' : '/works/'}${previous.id}`)} title="Obra anterior" aria-label="Obra anterior">‹</button>

        <div className="work-image-wrap">
          <img src={detail.src} alt={detail.alt} />
          {work.images.length > 1 && detailIndex > 0 && (
            <button className="detail-arrow detail-prev" type="button" onClick={() => setDetailIndex((current) => current - 1)} aria-label="Detalle anterior">‹</button>
          )}
          {work.images.length > 1 && detailIndex < work.images.length - 1 && (
            <button className="detail-arrow detail-next" type="button" onClick={() => setDetailIndex((current) => current + 1)} aria-label="Detalle siguiente">›</button>
          )}
          {work.images.length > 1 && (
            <div className="detail-dots" aria-label="Position within work">
              {work.images.map((image, imageIndex) => (
                <button key={image.id} type="button" className={imageIndex === detailIndex ? 'is-active' : ''} onClick={() => setDetailIndex(imageIndex)} aria-label={`Detalle ${imageIndex + 1}`} />
              ))}
            </div>
          )}
        </div>

        <button className="work-nav-arrow work-nav-next" type="button" onClick={() => navigate(`${isShop ? '/shop/' : '/works/'}${next.id}`)} title="Obra siguiente" aria-label="Obra siguiente">›</button>
      </div>

      <div className="thumb-rail">
        {work.images.map((image, imageIndex) => (
          <button key={image.id} type="button" className={imageIndex === detailIndex ? 'is-active' : ''} onClick={() => setDetailIndex(imageIndex)}>
            <img src={image.src} alt="" />
            {imageIndex === 0 && work.images.length > 1 && <span className="thumb-multiple"><MultipleIcon /></span>}
          </button>
        ))}
      </div>
    </section>
  )
}

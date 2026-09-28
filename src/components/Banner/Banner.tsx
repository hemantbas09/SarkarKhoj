import data from '../../data/homepage.json'
import './Banner.scss'

function Banner() {
  const { banner } = data

  return (
    <section className="banner">
      <div
        className="banner__image"
        style={{ backgroundImage: `url('${banner.image}')` }}
        role="img"
        aria-label={banner.imageAlt}
      >
        <div className="banner__overlay" aria-hidden="true" />
        <div className="banner__content">
          <div className="banner__eyebrow-row">
            <span className="material-symbols-outlined banner__eyebrow-icon">
              domain
            </span>
            <span className="banner__eyebrow">{banner.eyebrow}</span>
          </div>
          <p className="banner__title">{banner.title}</p>
          <p className="banner__description">{banner.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner

import data from '../../data/homepage.json'
import { useLanguage } from '../../i18n'
import './Banner.scss'

function Banner() {
  const { banner } = data
  const { t } = useLanguage()

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
            <span className="banner__eyebrow">{t.banner.eyebrow}</span>
          </div>
          <p className="banner__title">{t.banner.title}</p>
          <p className="banner__description">{t.banner.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner

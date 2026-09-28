import data from '../../data/homepage.json'
import { useLanguage } from '../../i18n'
import './TrustBanner.scss'

function TrustBanner() {
  const { trustSection } = data
  const { t } = useLanguage()

  return (
    <section className="trust">
      <div className="trust__card">
        <span
          className="material-symbols-outlined trust__watermark"
          aria-hidden="true"
        >
          verified_user
        </span>
        <div className="trust__main">
          <div className="trust__icon-wrap">
            <span className="material-symbols-outlined trust__icon">
              lock
            </span>
          </div>
          <div className="trust__text">
            <div className="trust__eyebrow-row">
              <span className="trust__eyebrow">{t.trust.eyebrow}</span>
              <span className="trust__dot" aria-hidden="true" />
              <span className="trust__standards">{t.trust.standards}</span>
            </div>
            <h3 className="trust__title">{t.trust.title}</h3>
            <p className="trust__description">{t.trust.description}</p>
          </div>
        </div>
        <div className="trust__features">
          {t.trust.features.map((feature, index) => (
            <div key={index} className="trust__feature">
              <span className="material-symbols-outlined trust__feature-icon">
                {trustSection.features[index].icon}
              </span>
              <div className="trust__feature-text">
                <span className="trust__feature-title">{feature.title}</span>
                <span className="trust__feature-subtitle">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBanner

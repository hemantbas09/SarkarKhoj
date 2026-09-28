import data from '../../data/homepage.json'
import './TrustBanner.scss'

function TrustBanner() {
  const { trustSection } = data

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
              <span className="trust__eyebrow">{trustSection.eyebrow}</span>
              <span className="trust__dot" aria-hidden="true" />
              <span className="trust__standards">
                {trustSection.standards}
              </span>
            </div>
            <h3 className="trust__title">{trustSection.title}</h3>
            <p className="trust__description">{trustSection.description}</p>
          </div>
        </div>
        <div className="trust__features">
          {trustSection.features.map((feature) => (
            <div key={feature.title} className="trust__feature">
              <span className="material-symbols-outlined trust__feature-icon">
                {feature.icon}
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

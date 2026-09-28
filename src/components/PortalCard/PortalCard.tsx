import data from '../../data/homepage.json'
import { useLanguage } from '../../i18n'
import './PortalCard.scss'

function PortalCard({
  portal,
}: {
  portal: (typeof data.essentialSection.portals)[number]
}) {
  const { lang, t } = useLanguage()
  const description = t.essential.portalDescriptions[portal.domain]
  return (
    <a
      className="portal-card"
      href={portal.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="portal-card__header">
        <span className="portal-card__icon">
          <span className="material-symbols-outlined portal-card__icon-symbol">
            {portal.icon}
          </span>
        </span>
        <span className="portal-card__verified">
          <span className="material-symbols-outlined portal-card__verified-symbol">
            check_circle
          </span>
          .gov.np
        </span>
      </div>
      <span className="portal-card__nepali">
        {lang === 'np' ? portal.name : portal.nepali}
      </span>
      <h3 className="portal-card__title">
        {lang === 'np' ? portal.nepali : portal.name}
      </h3>
      <p className="portal-card__description">
        {description ?? portal.description}
      </p>
      <div className="portal-card__footer">
        <span className="portal-card__domain">{portal.domain}</span>
        <span className="portal-card__visit">
          {t.essential.visit}
          <span className="material-symbols-outlined portal-card__visit-symbol">
            north_east
          </span>
        </span>
      </div>
    </a>
  )
}

export default PortalCard

import data from '../../data/categories'
import { useLanguage, itemDescription } from '../../i18n'
import './MinistryCard.scss'

function MinistryCard({
  ministry,
}: {
  ministry: (typeof data.items)[number]
}) {
  const { lang, t } = useLanguage()
  const common = t.categoryPage.common
  const primary = lang === 'np' ? ministry.nepali : ministry.name
  const secondary = lang === 'np' ? ministry.name : ministry.nepali

  return (
    <article className="ministry-card">
      <div className="ministry-card__top">
        <div className="ministry-card__icon-wrap">
          <span className="material-symbols-outlined ministry-card__icon">
            {ministry.icon}
          </span>
        </div>
        <div className="ministry-card__body">
          <div className="ministry-card__badge-row">
            <span className="ministry-card__badge">
              <span className="material-symbols-outlined ministry-card__badge-icon">
                {ministry.icon}
              </span>
              {t.sectors[ministry.sectorLabel] ?? ministry.sectorLabel}
            </span>
            <span className="material-symbols-outlined ministry-card__open">
              open_in_new
            </span>
            <span className="ministry-card__verified-top">
              <span className="material-symbols-outlined ministry-card__verified-icon">
                check_circle
              </span>
              {common.verifiedGovNp}
            </span>
          </div>
          <h3 className="ministry-card__name">{primary}</h3>
          <div className="ministry-card__nepali">{secondary}</div>
        </div>
      </div>
      <p className="ministry-card__description">
        {itemDescription(t, ministry)}
      </p>
      <div className="ministry-card__footer">
        <div className="ministry-card__domain-col">
          <span className="ministry-card__domain-label">
            {common.officialDomain}
          </span>
          <span className="ministry-card__domain">
            <span className="material-symbols-outlined ministry-card__lock">
              lock
            </span>
            <span className="ministry-card__domain-text">{ministry.domain}</span>
          </span>
        </div>
        <span className="ministry-card__verified">
          <span className="material-symbols-outlined ministry-card__verified-icon">
            check_circle
          </span>
          <span className="ministry-card__verified-label">
            {common.verified}
          </span>
        </span>
        <a
          className="ministry-card__visit"
          href={ministry.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ministry-card__visit-label">
            {common.visitWebsite}
          </span>
          <span className="material-symbols-outlined ministry-card__visit-icon">
            arrow_forward
          </span>
        </a>
      </div>
    </article>
  )
}

export default MinistryCard

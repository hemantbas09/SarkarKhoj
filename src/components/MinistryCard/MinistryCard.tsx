import data from '../../data/categories'
import './MinistryCard.scss'

function MinistryCard({
  ministry,
}: {
  ministry: (typeof data.items)[number]
}) {
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
              {ministry.sectorLabel}
            </span>
            <span className="material-symbols-outlined ministry-card__open">
              open_in_new
            </span>
            <span className="ministry-card__verified-top">
              <span className="material-symbols-outlined ministry-card__verified-icon">
                check_circle
              </span>
              Verified .gov.np
            </span>
          </div>
          <h3 className="ministry-card__name">{ministry.name}</h3>
          <div className="ministry-card__nepali">{ministry.nepali}</div>
        </div>
      </div>
      <p className="ministry-card__description">{ministry.description}</p>
      <div className="ministry-card__footer">
        <div className="ministry-card__domain-col">
          <span className="ministry-card__domain-label">Official Domain</span>
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
          <span className="ministry-card__verified-label">Verified</span>
        </span>
        <a
          className="ministry-card__visit"
          href={ministry.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ministry-card__visit-label">Visit Website</span>
          <span className="material-symbols-outlined ministry-card__visit-icon">
            arrow_forward
          </span>
        </a>
      </div>
    </article>
  )
}

export default MinistryCard

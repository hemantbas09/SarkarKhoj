import { Link } from 'react-router-dom'
import data from '../../data/categories'
import { useLanguage } from '../../i18n'
import './RelatedBranches.scss'

function RelatedBranches() {
  const { relatedBranches } = data
  const { t } = useLanguage()

  return (
    <section className="related-branches">
      <div className="related-branches__header">
        <div className="related-branches__heading">
          <span className="related-branches__eyebrow">
            {t.relatedBranches.eyebrow}
          </span>
          <h2 className="related-branches__title">
            {t.relatedBranches.title}
          </h2>
        </div>
        <span className="related-branches__subtitle">
          {t.relatedBranches.subtitle}
        </span>
        <span className="related-branches__count">
          {t.relatedBranches.countLabel}
        </span>
      </div>
      <div className="related-branches__grid">
        {relatedBranches.items.map((item, index) => {
          const copy = t.relatedBranches.items[index]
          return (
          <Link
            key={item.path}
            className="related-branches__tile"
            to={`/category?c=${item.path}`}
          >
            <div className="related-branches__tile-icon-wrap">
              <span className="material-symbols-outlined related-branches__tile-icon">
                {item.icon}
              </span>
            </div>
            <div className="related-branches__tile-body">
              <div className="related-branches__tile-title">{copy.title}</div>
              <div className="related-branches__tile-count">{copy.count}</div>
              <p className="related-branches__tile-description">
                {copy.description}
              </p>
            </div>
            <span className="material-symbols-outlined related-branches__tile-chevron">
              chevron_right
            </span>
            <span className="material-symbols-outlined related-branches__tile-arrow">
              arrow_forward
            </span>
          </Link>
          )
        })}
      </div>
    </section>
  )
}

export default RelatedBranches

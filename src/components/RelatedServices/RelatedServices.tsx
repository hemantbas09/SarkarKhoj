import { useNavigate } from 'react-router-dom'
import data from '../../data/searchResults.json'
import { useLanguage } from '../../i18n'
import './RelatedServices.scss'

function RelatedServices() {
  const navigate = useNavigate()
  const { relatedServices } = data
  const { t } = useLanguage()
  return (
    <aside className="related-services">
      <div className="related-services__header">
        <span className="material-symbols-outlined related-services__icon">
          {relatedServices.icon}
        </span>
        <h3 className="related-services__title">
          {t.search.relatedServices.title}
        </h3>
      </div>
      <ul className="related-services__list">
        {relatedServices.items.map((item, index) => {
          const label = t.search.relatedServices.items[index]?.label ?? item.label
          return (
            <li key={item.label} className="related-services__item">
              <button
                type="button"
                className="related-services__item-button"
                onClick={() =>
                  navigate(`/search?q=${encodeURIComponent(label)}`)
                }
              >
                <span className="material-symbols-outlined related-services__item-icon">
                  {item.icon}
                </span>
                <span className="related-services__item-label">{label}</span>
                <span className="material-symbols-outlined related-services__chevron">
                  chevron_right
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default RelatedServices

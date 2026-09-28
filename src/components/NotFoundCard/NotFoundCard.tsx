import { useNavigate } from 'react-router-dom'
import data from '../../data/searchResults.json'
import { useLanguage } from '../../i18n'
import './NotFoundCard.scss'

function NotFoundCard() {
  const navigate = useNavigate()
  const { notFound } = data
  const { t } = useLanguage()
  return (
    <div className="not-found">
      <span className="not-found__icon-wrap">
        <span className="material-symbols-outlined">{notFound.icon}</span>
      </span>
      <h3 className="not-found__title">{t.search.notFound.title}</h3>
      <p className="not-found__description">
        {t.search.notFound.description}
      </p>
      <button
        type="button"
        className="not-found__button"
        onClick={() => navigate('/', { state: { scrollTo: 'categories' } })}
      >
        <span className="material-symbols-outlined">category</span>
        {t.search.notFound.button}
      </button>
      <button
        type="button"
        className="not-found__link"
        onClick={() => navigate('/', { state: { scrollTo: 'categories' } })}
      >
        <span className="material-symbols-outlined">menu_book</span>
        {t.search.notFound.secondaryLink}
      </button>
    </div>
  )
}

export default NotFoundCard

import { useNavigate } from 'react-router-dom'
import data from '../../data/searchResults.json'
import './NotFoundCard.scss'

function NotFoundCard() {
  const navigate = useNavigate()
  const { notFound } = data
  return (
    <div className="not-found">
      <span className="not-found__icon-wrap">
        <span className="material-symbols-outlined">{notFound.icon}</span>
      </span>
      <h3 className="not-found__title">{notFound.title}</h3>
      <p className="not-found__description">{notFound.description}</p>
      <button
        type="button"
        className="not-found__button"
        onClick={() => navigate('/', { state: { scrollTo: 'categories' } })}
      >
        <span className="material-symbols-outlined">category</span>
        {notFound.button}
      </button>
      <button
        type="button"
        className="not-found__link"
        onClick={() => navigate('/', { state: { scrollTo: 'categories' } })}
      >
        <span className="material-symbols-outlined">menu_book</span>
        {notFound.secondaryLink}
      </button>
    </div>
  )
}

export default NotFoundCard

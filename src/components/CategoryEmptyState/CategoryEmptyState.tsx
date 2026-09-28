import data from '../../data/categoryPage.json'
import './CategoryEmptyState.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function CategoryEmptyState({
  emptyState,
  onReset,
}: {
  emptyState: Category['emptyState']
  onReset: () => void
}) {
  return (
    <div className="category-empty">
      <div className="category-empty__icon-wrap">
        <span className="material-symbols-outlined category-empty__icon">
          {emptyState.icon}
        </span>
      </div>
      <h3 className="category-empty__title">{emptyState.title}</h3>
      <p className="category-empty__description">{emptyState.description}</p>
      <button className="category-empty__button" type="button" onClick={onReset}>
        {emptyState.button}
      </button>
    </div>
  )
}

export default CategoryEmptyState

import data from '../../data/categories'
import { useLanguage, type CategoryKey } from '../../i18n'
import './CategoryEmptyState.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function CategoryEmptyState({
  emptyState,
  categoryKey,
  onReset,
}: {
  emptyState: Category['emptyState']
  categoryKey: CategoryKey
  onReset: () => void
}) {
  const { t } = useLanguage()
  const dict = t.categoryPage.categories[categoryKey]
  return (
    <div className="category-empty">
      <div className="category-empty__icon-wrap">
        <span className="material-symbols-outlined category-empty__icon">
          {emptyState.icon}
        </span>
      </div>
      <h3 className="category-empty__title">{dict.emptyTitle}</h3>
      <p className="category-empty__description">{dict.emptyDescription}</p>
      <button className="category-empty__button" type="button" onClick={onReset}>
        {t.categoryPage.common.resetFilters}
      </button>
    </div>
  )
}

export default CategoryEmptyState

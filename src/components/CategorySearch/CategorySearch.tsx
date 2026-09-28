import data from '../../data/categories'
import { useLanguage, type CategoryKey } from '../../i18n'
import './CategorySearch.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function CategorySearch({
  search,
  categoryKey,
  value,
  onChange,
  activeSector,
  onSelectSector,
  visibleCount,
}: {
  search: Category['search']
  categoryKey: CategoryKey
  value: string
  onChange: (value: string) => void
  activeSector: string
  onSelectSector: (sector: string) => void
  visibleCount: number
}) {
  const { t } = useLanguage()
  const dict = t.categoryPage.categories[categoryKey]
  const common = t.categoryPage.common
  const countText = value.trim() ? visibleCount : search.totalCount

  return (
    <div className="category-search">
      <div className="category-search__top">
        <div className="category-search__input-wrap">
          <span className="material-symbols-outlined category-search__icon">
            search
          </span>
          <input
            className="category-search__input"
            type="search"
            placeholder={dict.searchPlaceholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="category-search__count">{countText}</span>
        </div>
        <button
          className="category-search__clear"
          type="button"
          aria-label="Clear search"
          onClick={() => onChange('')}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="category-search__meta">
          <span className="category-search__showing">{common.showing}</span>
          <span className="category-search__showing-count">
            {visibleCount} of {search.totalCount} {common.active}
          </span>
        </div>
      </div>

      <div className="category-search__chips">
        {dict.chips.map((chip) => (
          <button
            key={chip.filter}
            type="button"
            className={`category-search__chip${
              activeSector === chip.filter ? ' category-search__chip--active' : ''
            }`}
            onClick={() => onSelectSector(chip.filter)}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div className="category-search__pills">
        <span className="category-search__filter-label">{dict.filterLabel}</span>
        {dict.pills.map((pill) => (
          <button
            key={pill.filter}
            type="button"
            className={`category-search__pill${
              activeSector === pill.filter ? ' category-search__pill--active' : ''
            }`}
            onClick={() => onSelectSector(pill.filter)}
          >
            {pill.label}
            {typeof pill.count === 'number' ? ` (${pill.count})` : ''}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategorySearch

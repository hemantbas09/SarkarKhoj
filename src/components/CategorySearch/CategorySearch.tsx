import data from '../../data/categories'
import './CategorySearch.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function CategorySearch({
  search,
  value,
  onChange,
  activeSector,
  onSelectSector,
  visibleCount,
}: {
  search: Category['search']
  value: string
  onChange: (value: string) => void
  activeSector: string
  onSelectSector: (sector: string) => void
  visibleCount: number
}) {
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
            placeholder={search.placeholder}
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
          <span className="category-search__showing">{search.showingLabel}</span>
          <span className="category-search__showing-count">
            {visibleCount} of {search.totalCount} {search.countLabel}
          </span>
        </div>
      </div>

      <div className="category-search__chips">
        {search.chips.map((chip) => (
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
        <span className="category-search__filter-label">{search.filterLabel}</span>
        {search.pills.map((pill) => (
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

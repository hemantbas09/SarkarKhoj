import './FilterTabs.scss'

function FilterTabs({
  tabs,
  active,
  onSelect,
}: {
  tabs: { label: string; count: number; filter: string }[]
  active: string
  onSelect: (filter: string) => void
}) {
  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.filter}
          type="button"
          className={`filter-tabs__tab${
            active === tab.filter ? ' filter-tabs__tab--active' : ''
          }`}
          onClick={() => onSelect(tab.filter)}
        >
          <span>{tab.label}</span>
          <span className="filter-tabs__count">{tab.count}</span>
        </button>
      ))}
    </div>
  )
}

export default FilterTabs

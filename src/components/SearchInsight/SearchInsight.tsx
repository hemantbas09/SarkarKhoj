import data from '../../data/searchResults.json'
import './SearchInsight.scss'

function SearchInsight() {
  const { insight } = data
  return (
    <aside className="search-insight">
      <div className="search-insight__header">
        <span className="search-insight__icon-wrap">
          <span className="material-symbols-outlined">{insight.icon}</span>
        </span>
        <h3 className="search-insight__title">{insight.title}</h3>
      </div>
      <p className="search-insight__text">{insight.text}</p>
      <div className="search-insight__rows">
        {insight.rows.map((row) => (
          <div key={row.label} className="search-insight__row">
            <span className="search-insight__row-label">{row.label}</span>
            <span className="search-insight__row-value">{row.value}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SearchInsight

import data from '../../data/searchResults.json'
import './ResultsSummary.scss'

function ResultsSummary({ query, count }: { query: string; count: number }) {
  const { summary } = data
  return (
    <div className="results-summary">
      <div className="results-summary__heading">
        <h1 className="results-summary__title">
          <span className="results-summary__count">{count}</span>{' '}
          Results for <em className="results-summary__query">“{query}”</em>
        </h1>
        <span className="results-summary__pill">{summary.catalog}</span>
      </div>
      <div className="results-summary__meta">
        <span className="results-summary__all-pill">
          {summary.allCategories}
        </span>
        <p className="results-summary__note">{summary.matchesNote}</p>
      </div>
    </div>
  )
}

export default ResultsSummary

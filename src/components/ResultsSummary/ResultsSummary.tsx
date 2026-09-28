import { useLanguage } from '../../i18n'
import './ResultsSummary.scss'

function ResultsSummary({ query, count }: { query: string; count: number }) {
  const { t } = useLanguage()
  return (
    <div className="results-summary">
      <div className="results-summary__heading">
        <h1 className="results-summary__title">
          {t.search.summary.resultsFor(count, query)}
        </h1>
      </div>
      <div className="results-summary__meta">
        <span className="results-summary__all-pill">
          {t.search.summary.allCategories}
        </span>
        <p className="results-summary__note">
          {t.search.summary.matchesNote}
        </p>
      </div>
    </div>
  )
}

export default ResultsSummary

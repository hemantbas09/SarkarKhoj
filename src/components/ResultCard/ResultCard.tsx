import data from '../../data/searchResults.json'
import categoryData from '../../data/categories'
import './ResultCard.scss'

type Category = (typeof categoryData.categories)[keyof typeof categoryData.categories]

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlight(text: string, query: string) {
  const q = query.trim()
  if (!q) return text
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? (
      <mark key={i} className="result-card__highlight">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

function ResultCard({
  item,
  category,
  query,
  featured,
}: {
  item: (typeof categoryData.items)[number]
  category: Category
  query: string
  featured?: boolean
}) {
  return (
    <article
      className={`result-card${featured ? ' result-card--featured' : ''}`}
    >
      <div className="result-card__top">
        <div className="result-card__badges">
          <span
            className={`result-card__category${
              featured ? ' result-card__category--primary' : ''
            }`}
          >
            <span className="material-symbols-outlined">{category.icon}</span>
            {category.breadcrumbCurrent}
          </span>
        </div>
        <span className="result-card__domain">
          <span className="material-symbols-outlined">lock</span>
          {item.domain}
          <span className="material-symbols-outlined result-card__verified">
            verified
          </span>
        </span>
      </div>

      <div className="result-card__title-row">
        <div className="result-card__titles">
          <h3 className="result-card__name">
            {highlight(item.name, query)}
          </h3>
          <span className="result-card__nepali">{item.nepali}</span>
        </div>
        <span className="material-symbols-outlined result-card__icon">
          {item.icon}
        </span>
      </div>

      <p className="result-card__description">
        {highlight(item.description, query)}
      </p>

      <div className="result-card__footer">
        <a
          className="result-card__visit"
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          {data.search.visitLabel}
          <span className="material-symbols-outlined">open_in_new</span>
        </a>
      </div>
    </article>
  )
}

export default ResultCard

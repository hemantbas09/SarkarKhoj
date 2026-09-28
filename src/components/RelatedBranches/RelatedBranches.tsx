import data from '../../data/categoryPage.json'
import './RelatedBranches.scss'

function RelatedBranches() {
  const { relatedBranches } = data
  return (
    <section className="related-branches">
      <div className="related-branches__header">
        <div className="related-branches__heading">
          <span className="related-branches__eyebrow">
            {relatedBranches.eyebrow}
          </span>
          <h2 className="related-branches__title">{relatedBranches.title}</h2>
        </div>
        <span className="related-branches__subtitle">
          {relatedBranches.subtitle}
        </span>
        <span className="related-branches__count">{relatedBranches.countLabel}</span>
      </div>
      <div className="related-branches__grid">
        {relatedBranches.items.map((item) => (
          <a
            key={item.path}
            className="related-branches__tile"
            href={`#${item.path}`}
          >
            <div className="related-branches__tile-icon-wrap">
              <span className="material-symbols-outlined related-branches__tile-icon">
                {item.icon}
              </span>
            </div>
            <div className="related-branches__tile-body">
              <div className="related-branches__tile-title">{item.title}</div>
              <div className="related-branches__tile-count">{item.count}</div>
              <p className="related-branches__tile-description">
                {item.description}
              </p>
            </div>
            <span className="material-symbols-outlined related-branches__tile-chevron">
              chevron_right
            </span>
            <span className="material-symbols-outlined related-branches__tile-arrow">
              arrow_forward
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default RelatedBranches

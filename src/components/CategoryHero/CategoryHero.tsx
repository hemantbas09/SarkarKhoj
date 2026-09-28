import data from '../../data/categoryPage.json'
import './CategoryHero.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function CategoryHero({ hero }: { hero: Category['hero'] }) {
  return (
    <div className="category-hero">
      <div className="category-hero__glow" />
      <span
        className="material-symbols-outlined category-hero__embellish"
        aria-hidden="true"
      >
        account_balance
      </span>
      <div className="category-hero__content">
        <span className="category-hero__badge">
          <span className="material-symbols-outlined category-hero__badge-icon">
            {hero.badge.icon}
          </span>
          <span className="category-hero__badge-label">{hero.badge.label}</span>
          <span className="category-hero__badge-dot" />
          <span className="category-hero__badge-location">{hero.location}</span>
        </span>
        <div className="category-hero__title-row">
          <h1 className="category-hero__title">{hero.title}</h1>
          <span className="category-hero__nepali">{hero.nepali}</span>
        </div>
        <p className="category-hero__description">{hero.description}</p>
        <p className="category-hero__description-desktop">
          {hero.descriptionDesktop}
        </p>
        <div className="category-hero__stats">
          {hero.stats.map((stat) => (
            <span key={stat.text} className="category-hero__stat">
              <span className="material-symbols-outlined category-hero__stat-icon">
                {stat.icon}
              </span>
              {stat.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryHero

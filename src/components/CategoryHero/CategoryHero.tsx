import data from '../../data/categories'
import { useLanguage, type CategoryKey } from '../../i18n'
import './CategoryHero.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function CategoryHero({
  hero,
  categoryKey,
}: {
  hero: Category['hero']
  categoryKey: CategoryKey
}) {
  const { t } = useLanguage()
  const dict = t.categoryPage.categories[categoryKey]
  const stats = [
    { icon: hero.stats[0].icon, text: dict.stat1 },
    { icon: hero.stats[1].icon, text: dict.statValidation },
    { icon: hero.stats[2].icon, text: t.categoryPage.common.statNitc },
  ]

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
          <span className="category-hero__badge-label">{dict.heroBadge}</span>
          <span className="category-hero__badge-dot" />
          <span className="category-hero__badge-location">{dict.location}</span>
        </span>
        <div className="category-hero__title-row">
          <h1 className="category-hero__title">{dict.heroTitle}</h1>
          <span className="category-hero__nepali">{hero.nepali}</span>
        </div>
        <p className="category-hero__description">{dict.description}</p>
        <p className="category-hero__description-desktop">
          {dict.description}
        </p>
        <div className="category-hero__stats">
          {stats.map((stat) => (
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

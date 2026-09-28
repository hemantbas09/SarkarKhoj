import { Link } from 'react-router-dom'
import data from '../../data/homepage.json'
import categoryData from '../../data/categories'
import { useLanguage, type CategoryKey } from '../../i18n'
import './CategoryCard.scss'

const categoryKeys = Object.keys(categoryData.categories)

function CategoryCard({
  category,
}: {
  category: (typeof data.categoriesSection.categories)[number]
}) {
  const { t } = useLanguage()
  const card = t.categoriesSection.cards[category.path as CategoryKey]
  const to = categoryKeys.includes(category.path)
    ? `/category?c=${category.path}`
    : null
  const inner = (
    <>
      <div className="category-card__body">
        <div className="category-card__header">
          <span className="category-card__icon">
            <span className="material-symbols-outlined category-card__icon-symbol">
              {category.icon}
            </span>
          </span>
          <span className="category-card__count">{card.count}</span>
        </div>
        <h3 className="category-card__title">{card.title}</h3>
        <p className="category-card__description">{card.description}</p>
      </div>
      <span className="category-card__link">
        {t.categoriesSection.explorePortals}
        <span className="material-symbols-outlined category-card__link-symbol">
          arrow_forward
        </span>
      </span>
    </>
  )
  return to ? (
    <Link className="category-card" to={to}>
      {inner}
    </Link>
  ) : (
    <a className="category-card" href={`#${category.path}`}>
      {inner}
    </a>
  )
}

export default CategoryCard

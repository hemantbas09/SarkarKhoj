import { Link } from 'react-router-dom'
import data from '../../data/homepage.json'
import categoryData from '../../data/categories'
import { useLanguage } from '../../i18n'
import './BottomNav.scss'

const categoryKeys = Object.keys(categoryData.categories)

function resolveRoute(path: string): string | null {
  if (path === 'home') return '/'
  if (categoryKeys.includes(path)) return `/category?c=${path}`
  return null
}

function BottomNav() {
  const { t } = useLanguage()
  return (
    <nav className="bottom-nav">
      {data.bottomNav.map((item) => {
        const to = resolveRoute(item.path)
        const className = `bottom-nav__item${item.active ? ' bottom-nav__item--active' : ''}`
        const ariaCurrent = item.active ? 'page' : undefined
        const content = (
          <>
            <span className="material-symbols-outlined bottom-nav__icon">
              {item.icon}
            </span>
            <span className="bottom-nav__label">
              {t.bottomNav[item.path] ?? item.label}
            </span>
          </>
        )
        return to ? (
          <Link
            key={item.path}
            to={to}
            className={className}
            aria-current={ariaCurrent}
          >
            {content}
          </Link>
        ) : (
          <a
            key={item.path}
            className={className}
            href={`#${item.path}`}
            aria-current={ariaCurrent}
          >
            {content}
          </a>
        )
      })}
    </nav>
  )
}

export default BottomNav

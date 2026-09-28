import { Link, useLocation, useNavigate } from 'react-router-dom'
import data from '../../data/homepage.json'
import categoryData from '../../data/categories'
import './Header.scss'

const categoryKeys = Object.keys(categoryData.categories)

function resolveRoute(path: string): string | null {
  if (path === 'home') return '/'
  if (categoryKeys.includes(path)) return `/category?c=${path}`
  return null
}

function Header() {
  const { header } = data
  const navigate = useNavigate()
  const location = useLocation()

  const handleAllCategories = () => {
    if (location.pathname === '/') {
      document
        .getElementById('categories')
        ?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'categories' } })
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <button
            className="header__menu-btn"
            type="button"
            aria-label="Open Directory Menu"
          >
            <span className="material-symbols-outlined header__menu-icon">
              menu
            </span>
          </button>
          <Link to="/" className="header__brand-link" aria-label="Home">
            <img
              className="header__logo"
              src={header.logo}
              alt={header.logoAlt}
            />
            <div className="header__titles">
              <span className="header__title">{header.title}</span>
              <span className="header__subtitle">{header.subtitle}</span>
            </div>
          </Link>
        </div>

        <nav className="header__nav">
          {header.navLinks.map((link) => {
            const className = `header__nav-link${link.active ? ' header__nav-link--active' : ''}`
            const ariaCurrent = link.active ? 'page' : undefined
            if (link.path === 'all-categories') {
              return (
                <button
                  key={link.path}
                  type="button"
                  className={`${className} header__nav-link--button`}
                  onClick={handleAllCategories}
                >
                  {link.label}
                </button>
              )
            }
            const to = resolveRoute(link.path)
            return to ? (
              <Link
                key={link.path}
                to={to}
                className={className}
                aria-current={ariaCurrent}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.path}
                className={className}
                href={`#${link.path}`}
                aria-current={ariaCurrent}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="header__right">
          <div className="header__verified">
            <span className="material-symbols-outlined header__verified-icon">
              verified
            </span>
            <div className="header__verified-text">
              <span className="header__verified-top">
                {header.verifiedBadge.top}
              </span>
              <span className="header__verified-bottom">
                {header.verifiedBadge.bottom}
              </span>
            </div>
          </div>
          <div className="header__avatar">
            <span className="material-symbols-outlined header__avatar-icon">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

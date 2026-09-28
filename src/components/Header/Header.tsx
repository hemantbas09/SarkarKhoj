import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import data from '../../data/homepage.json'
import categoryData from '../../data/categories'
import { useLanguage } from '../../i18n'
import './Header.scss'

const categoryKeys = Object.keys(categoryData.categories)

function resolveRoute(path: string): string | null {
  if (path === 'home') return '/'
  if (categoryKeys.includes(path)) return `/category?c=${path}`
  return null
}

function Header() {
  const { header } = data
  const { lang, setLang, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleAllCategories = () => {
    setMenuOpen(false)
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
            className={`header__menu-btn${menuOpen ? ' header__menu-btn--open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close Directory Menu' : 'Open Directory Menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined header__menu-icon">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="header__brand-link" aria-label="Home">
            <img
              className="header__logo"
              src={header.logo}
              alt={header.logoAlt}
            />
            <div className="header__titles">
              <span className="header__title">{t.header.title}</span>
              <span className="header__subtitle">{t.header.subtitle}</span>
            </div>
          </Link>
        </div>

        <nav className="header__nav">
          {header.navLinks.map((link) => {
            const className = `header__nav-link${link.active ? ' header__nav-link--active' : ''}`
            const ariaCurrent = link.active ? 'page' : undefined
            const label =
              link.path === 'all-categories'
                ? t.header.navAllCategories
                : t.header.navHome
            if (link.path === 'all-categories') {
              return (
                <button
                  key={link.path}
                  type="button"
                  className={`${className} header__nav-link--button`}
                  onClick={handleAllCategories}
                >
                  {label}
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
                {label}
              </Link>
            ) : (
              <a
                key={link.path}
                className={className}
                href={`#${link.path}`}
                aria-current={ariaCurrent}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="header__right">
          <div className="header__lang-toggle" role="group" aria-label={t.header.langToggleAria}>
            <button
              type="button"
              className={`header__lang-option${lang === 'en' ? ' header__lang-option--active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`header__lang-option${lang === 'np' ? ' header__lang-option--active' : ''}`}
              onClick={() => setLang('np')}
            >
              नेपाली
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav className="header__mobile-menu" aria-label="Mobile menu">
          {header.navLinks.map((link) => {
            const label =
              link.path === 'all-categories'
                ? t.header.navAllCategories
                : t.header.navHome
            if (link.path === 'all-categories') {
              return (
                <button
                  key={link.path}
                  type="button"
                  className="header__mobile-menu-link"
                  onClick={handleAllCategories}
                >
                  {label}
                </button>
              )
            }
            const to = resolveRoute(link.path)
            return to ? (
              <Link
                key={link.path}
                to={to}
                className="header__mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ) : null
          })}
        </nav>
      )}    </header>
  )
}

export default Header

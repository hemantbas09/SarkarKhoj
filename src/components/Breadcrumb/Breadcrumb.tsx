import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Breadcrumb.scss'

function Breadcrumb({
  items,
  current,
  icon,
  alwaysVisible,
}: {
  items: { label: string; path?: string }[]
  current: string
  icon?: string
  alwaysVisible?: boolean
}) {
  return (
    <nav
      className={`breadcrumb${alwaysVisible ? ' breadcrumb--always' : ''}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && <span className="breadcrumb__separator">›</span>}
          {item.path ? (
            <Link to={item.path} className="breadcrumb__link">
              {index === 0 && icon && (
                <span className="material-symbols-outlined breadcrumb__icon">
                  {icon}
                </span>
              )}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="breadcrumb__link breadcrumb__link--static">
              {index === 0 && icon && (
                <span className="material-symbols-outlined breadcrumb__icon">
                  {icon}
                </span>
              )}
              <span>{item.label}</span>
            </span>
          )}
        </Fragment>
      ))}
      <span className="breadcrumb__separator">›</span>
      <span className="breadcrumb__current">{current}</span>
    </nav>
  )
}

export default Breadcrumb

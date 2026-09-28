import data from '../../data/homepage.json'
import './Footer.scss'

function Footer() {
  const { footer } = data

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-heading">
              <span className="footer__brand-dot" aria-hidden="true" />
              <span className="footer__brand-title">{footer.brand.title}</span>
            </div>
            <p className="footer__brand-description">
              {footer.brand.description}
            </p>
            <div className="footer__standards">
              <span className="material-symbols-outlined footer__standards-icon">
                gavel
              </span>
              <span className="footer__standards-text">
                {footer.brand.standards}
              </span>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="footer__column">
              <h4 className="footer__column-title">{column.title}</h4>
              <ul className="footer__column-list">
                {column.links.map((link) => (
                  <li key={link} className="footer__column-item">
                    <a className="footer__column-link" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">{footer.copyright}</span>
          <span className="footer__directory-label">
            {footer.directoryLabel}
          </span>
          <button
            className="footer__back-to-top"
            type="button"
            onClick={handleBackToTop}
          >
            <span className="material-symbols-outlined footer__back-to-top-icon">
              arrow_upward
            </span>
            <span>{footer.backToTop}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

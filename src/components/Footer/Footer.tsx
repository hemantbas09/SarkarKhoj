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

import { useLanguage } from '../../i18n'
import './Footer.scss'

function Footer() {
  const { t } = useLanguage()

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__bottom">
          <span className="footer__copyright">{t.footer.copyright}</span>
          <span className="footer__directory-label">
            {t.footer.directoryLabel}
          </span>
          <button
            className="footer__back-to-top"
            type="button"
            onClick={handleBackToTop}
          >
            <span className="material-symbols-outlined footer__back-to-top-icon">
              arrow_upward
            </span>
            <span>{t.footer.backToTop}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

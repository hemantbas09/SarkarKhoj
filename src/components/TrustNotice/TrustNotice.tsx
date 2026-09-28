import data from '../../data/categories'
import { useLanguage, type CategoryKey } from '../../i18n'
import './TrustNotice.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function TrustNotice({
  trustNotice,
  categoryKey,
}: {
  trustNotice: Category['trustNotice']
  categoryKey: CategoryKey
}) {
  const { t } = useLanguage()
  const dict = t.categoryPage.categories[categoryKey]
  return (
    <div className="trust-notice">
      <div className="trust-notice__icon-wrap">
        <span className="material-symbols-outlined trust-notice__icon">
          {trustNotice.icon}
        </span>
      </div>
      <div className="trust-notice__body">
        <div className="trust-notice__title">{dict.trustTitle}</div>
        <p className="trust-notice__text">{dict.trustText}</p>
      </div>
    </div>
  )
}

export default TrustNotice

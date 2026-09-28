import data from '../../data/categories'
import { useLanguage } from '../../i18n'
import './SinghaDurbarInset.scss'

function SinghaDurbarInset({
  singhaDurbar,
}: {
  singhaDurbar: (typeof data.categories)['ministries']['singhaDurbar']
}) {
  const { t } = useLanguage()
  const sd = t.categoryPage.categories.ministries.singhaDurbar
  return (
    <div className="singha-inset">
      <img
        className="singha-inset__image"
        src={singhaDurbar.image}
        alt={sd?.badge ?? singhaDurbar.badge.label}
      />
      <div className="singha-inset__overlay">
        <div className="singha-inset__badge">
          <span className="material-symbols-outlined singha-inset__badge-icon">
            {singhaDurbar.badge.icon}
          </span>
          {sd?.badge ?? singhaDurbar.badge.label}
        </div>
        <p className="singha-inset__text">{sd?.text ?? singhaDurbar.text}</p>
      </div>
    </div>
  )
}

export default SinghaDurbarInset

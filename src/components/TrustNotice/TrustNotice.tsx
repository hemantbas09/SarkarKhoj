import data from '../../data/categoryPage.json'
import './TrustNotice.scss'

type Category = (typeof data.categories)[keyof typeof data.categories]

function TrustNotice({ trustNotice }: { trustNotice: Category['trustNotice'] }) {
  return (
    <div className="trust-notice">
      <div className="trust-notice__icon-wrap">
        <span className="material-symbols-outlined trust-notice__icon">
          {trustNotice.icon}
        </span>
      </div>
      <div className="trust-notice__body">
        <div className="trust-notice__title">{trustNotice.title}</div>
        <p className="trust-notice__text">{trustNotice.text}</p>
      </div>
    </div>
  )
}

export default TrustNotice

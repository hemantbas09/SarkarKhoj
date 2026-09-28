import data from '../../data/homepage.json'
import SearchBar from '../SearchBar/SearchBar'
import './Hero.scss'

function Hero() {
  const { hero } = data

  return (
    <section className="hero">
      <div className="hero__glow hero__glow--primary" aria-hidden="true" />
      <div className="hero__glow hero__glow--tertiary" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          <span className="hero__badge-text">{hero.badge}</span>
        </div>
        <h1 className="hero__heading">{hero.heading}</h1>
        <p className="hero__subheading">{hero.subheading}</p>
        <SearchBar />
      </div>
    </section>
  )
}

export default Hero

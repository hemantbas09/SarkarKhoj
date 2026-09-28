import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import data from '../data/homepage.json'
import Hero from '../components/Hero/Hero'
import PortalCard from '../components/PortalCard/PortalCard'
import Banner from '../components/Banner/Banner'
import CategoryCard from '../components/CategoryCard/CategoryCard'
import TrustBanner from '../components/TrustBanner/TrustBanner'
import './Home.scss'

function Home() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo === 'categories') {
      document
        .getElementById('categories')
        ?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '')
    }
  }, [location.state])

  return (
    <main className="app__main">
      <Hero />

      <section className="app__section app__section--essential">
        <div className="app__section-header">
          <div className="app__section-heading">
            <div className="app__eyebrow">
              <span className="material-symbols-outlined app__eyebrow-icon">
                stars
              </span>
              <span>{data.essentialSection.eyebrow}</span>
            </div>
            <h2 className="app__section-title">
              {data.essentialSection.title}
            </h2>
          </div>
          <p className="app__section-description">
            {data.essentialSection.description}
          </p>
        </div>
        <div className="app__portal-grid">
          {data.essentialSection.portals.map((portal) => (
            <PortalCard key={portal.domain} portal={portal} />
          ))}
        </div>
      </section>

      <Banner />

      <section
        id="categories"
        className="app__section app__section--categories"
      >
        <div className="app__section-header">
          <div className="app__section-heading">
            <div className="app__eyebrow">
              <span className="material-symbols-outlined app__eyebrow-icon">
                folder_open
              </span>
              <span>{data.categoriesSection.eyebrow}</span>
            </div>
            <h2 className="app__section-title">
              {data.categoriesSection.title}
            </h2>
          </div>
          <p className="app__section-description">
            {data.categoriesSection.description}
          </p>
        </div>
        <div className="app__category-grid">
          {data.categoriesSection.categories.map((category) => (
            <CategoryCard key={category.path} category={category} />
          ))}
        </div>
      </section>

      <TrustBanner />
    </main>
  )
}

export default Home

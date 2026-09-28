import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import data from '../data/searchResults.json'
import categoryData from '../data/categories'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import SearchInput from '../components/SearchInput/SearchInput'
import ResultsSummary from '../components/ResultsSummary/ResultsSummary'
import FilterTabs from '../components/FilterTabs/FilterTabs'
import ResultCard from '../components/ResultCard/ResultCard'
import SearchInsight from '../components/SearchInsight/SearchInsight'
import RelatedServices from '../components/RelatedServices/RelatedServices'
import NotFoundCard from '../components/NotFoundCard/NotFoundCard'
import './SearchResults.scss'

const categories = categoryData.categories
const items = categoryData.items

function SearchResults() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const urlQuery = searchParams.get('q') ?? data.search.query
  const [query, setQuery] = useState(urlQuery)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    setQuery(urlQuery)
  }, [urlQuery])

  const tabs = [
    { label: 'All Results', count: items.length, filter: 'all' },
    ...Object.entries(categories).map(([code, cat]) => ({
      label: cat.breadcrumbCurrent,
      count: items.filter((i) => i.code === code).length,
      filter: code,
    })),
  ]

  const q = query.trim().toLowerCase()
  const filtered = items.filter((item) => {
    const matchesTab = activeTab === 'all' || item.code === activeTab
    if (!matchesTab) return false
    if (!q) return true
    const haystack =
      `${item.name} ${item.nepali} ${item.domain} ${item.description} ${item.keywords}`.toLowerCase()
    return haystack.includes(q)
  })

  const handleSubmit = () => {
    const q = query.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <div className="search-results">
      <Breadcrumb
        icon={data.breadcrumb.icon}
        items={data.breadcrumb.items}
        current={`${data.breadcrumb.queryPrefix}${urlQuery}`}
      />
      <div className="search-results__container">
        <div className="search-results__toolbar">
          <SearchInput
            value={query}
            onChange={setQuery}
            onSubmit={handleSubmit}
            buttonLabel={data.search.button}
          />
          <div className="search-results__filter-row">
            <span className="search-results__domain-filter">
              <span className="material-symbols-outlined">
                {data.search.domainFilter.icon}
              </span>
              {data.search.domainFilter.label}
            </span>
            <span className="search-results__latency">
              {data.search.latency}
            </span>
          </div>
        </div>

        <ResultsSummary query={urlQuery} count={filtered.length} />
        <FilterTabs tabs={tabs} active={activeTab} onSelect={setActiveTab} />

        <div className="search-results__layout">
          <div className="search-results__results">
            {filtered.map((item, index) => (
              <ResultCard
                key={item.id}
                item={item}
                category={categories[item.code as keyof typeof categories]}
                query={urlQuery}
                featured={index === 0}
              />
            ))}
            <div className="search-results__notfound-mobile">
              <NotFoundCard />
            </div>
          </div>

          <aside className="search-results__sidebar">
            <SearchInsight />
            <NotFoundCard />
            <RelatedServices />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default SearchResults

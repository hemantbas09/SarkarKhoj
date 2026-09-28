import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import data from '../data/searchResults.json'
import categoryData from '../data/categories'
import { useLanguage } from '../i18n'
import { searchItems } from '../utils/search'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import SearchInput from '../components/SearchInput/SearchInput'
import ResultsSummary from '../components/ResultsSummary/ResultsSummary'
import ResultCard from '../components/ResultCard/ResultCard'
import Pagination from '../components/Pagination/Pagination'
import SearchInsight from '../components/SearchInsight/SearchInsight'
import RelatedServices from '../components/RelatedServices/RelatedServices'
import NotFoundCard from '../components/NotFoundCard/NotFoundCard'
import './SearchResults.scss'

const categories = categoryData.categories
const items = categoryData.items

function SearchResults() {
  const [searchParams] = useSearchParams()
  const { t } = useLanguage()
  const navigate = useNavigate()
  const urlQuery = searchParams.get('q') ?? data.search.query
  const [query, setQuery] = useState(urlQuery)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setQuery(urlQuery)
  }, [urlQuery])

  useEffect(() => {
    setPage(1)
  }, [query])

  const filtered = searchItems(items, query)
  const isEmpty = query.trim().length === 0

  const pageSize = data.pagination.pageSize
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const paged = filtered.slice((safePage - 1) * pageSize, safePage * pageSize)

  useEffect(() => {
    const q = query.trim()
    if (!q) return
    const timer = setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(q)}`, { replace: true })
    }, 400)
    return () => clearTimeout(timer)
  }, [query, navigate])

  return (
    <div className="search-results">
      <Breadcrumb
        icon={data.breadcrumb.icon}
        items={[
          { label: t.search.breadcrumbDirectory, path: '/' },
          { label: t.search.breadcrumbResults, path: '/search' },
        ]}
        current={query}
      />
      <div className="search-results__container">
        <div className="search-results__toolbar">
          <SearchInput
            value={query}
            onChange={setQuery}
            onClear={() => setQuery('')}
          />
        </div>

        {isEmpty ? (
          <div className="search-results__empty">
            <span className="material-symbols-outlined search-results__empty-icon">
              {data.emptySearch.icon}
            </span>
            <h2 className="search-results__empty-title">
              {t.search.emptySearch.title}
            </h2>
            <p className="search-results__empty-text">
              {t.search.emptySearch.text}
            </p>
            <div className="search-results__empty-chips">
              {t.search.emptySearch.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="search-results__empty-chip"
                  onClick={() => setQuery(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <ResultsSummary query={query} count={filtered.length} />

            <div className="search-results__layout">
              <div className="search-results__results">
                {filtered.length === 0 ? (
                  <div className="search-results__empty">
                    <span className="material-symbols-outlined search-results__empty-icon">
                      {data.noResults.icon}
                    </span>
                    <h2 className="search-results__empty-title">
                      {t.search.noResults.title(query.trim())}
                    </h2>
                    <p className="search-results__empty-text">
                      {t.search.noResults.text}
                    </p>
                    <div className="search-results__empty-chips">
                      {t.search.noResults.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          className="search-results__empty-chip"
                          onClick={() => setQuery(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  paged.map((item, index) => (
                    <ResultCard
                      key={item.id}
                      item={item}
                      category={categories[item.code as keyof typeof categories]}
                      query={urlQuery}
                      featured={index === 0}
                    />
                  ))
                )}
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

            <Pagination
              pageSize={data.pagination.pageSize}
              page={safePage}
              totalPages={totalPages}
              totalCount={filtered.length}
              onPageChange={(next) => {
                setPage(next)
                window.scrollTo(0, 0)
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default SearchResults

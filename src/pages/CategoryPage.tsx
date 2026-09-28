import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import data from '../data/categories'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CategoryHero from '../components/CategoryHero/CategoryHero'
import CategorySearch from '../components/CategorySearch/CategorySearch'
import RegionFilter from '../components/RegionFilter/RegionFilter'
import SinghaDurbarInset from '../components/SinghaDurbarInset/SinghaDurbarInset'
import MinistryCard from '../components/MinistryCard/MinistryCard'
import Pagination from '../components/Pagination/Pagination'
import CategoryEmptyState from '../components/CategoryEmptyState/CategoryEmptyState'
import TrustNotice from '../components/TrustNotice/TrustNotice'
import RelatedBranches from '../components/RelatedBranches/RelatedBranches'
import './CategoryPage.scss'

const categories = data.categories
const DEFAULT_CATEGORY = 'ministries'

function CategoryPage() {
  const [searchParams] = useSearchParams()
  const requested = searchParams.get('c') ?? DEFAULT_CATEGORY
  const key =
    requested in categories
      ? (requested as keyof typeof categories)
      : DEFAULT_CATEGORY
  const category = categories[key]

  const [query, setQuery] = useState('')
  const [activeSector, setActiveSector] = useState('all')
  const [activeProvince, setActiveProvince] = useState('all')
  const [activeDistrict, setActiveDistrict] = useState('all')
  const [page, setPage] = useState(1)

  const regionFilter =
    'regionFilter' in category ? category.regionFilter : null
  const pagination =
    'pagination' in category ? category.pagination : null

  useEffect(() => {
    setQuery('')
    setActiveSector('all')
    setActiveProvince('all')
    setActiveDistrict('all')
    setPage(1)
    window.scrollTo(0, 0)
  }, [key])

  useEffect(() => {
    setPage(1)
  }, [query, activeSector, activeProvince, activeDistrict])

  const categoryItems = data.items.filter((item) => item.code === key)

  const provinces = [...new Set(
    categoryItems
      .map((item) => item.province)
      .filter((value): value is string => Boolean(value)),
  )].sort()
  const districtPool =
    activeProvince === 'all'
      ? categoryItems
      : categoryItems.filter((item) => item.province === activeProvince)
  const districts = [...new Set(
    districtPool
      .map((item) => item.district)
      .filter((value): value is string => Boolean(value)),
  )].sort()

  const filtered = categoryItems.filter((item) => {
    const matchesSector = activeSector === 'all' || item.sector === activeSector
    const matchesProvince =
      activeProvince === 'all' || item.province === activeProvince
    const matchesDistrict =
      activeDistrict === 'all' || item.district === activeDistrict
    const q = query.trim().toLowerCase()
    const haystack =
      `${item.name} ${item.nepali} ${item.domain} ` +
      `${item.description} ${item.keywords}`.toLowerCase()
    const matchesQuery = !q || haystack.includes(q)
    return matchesSector && matchesProvince && matchesDistrict && matchesQuery
  })

  const pageSize = pagination?.pageSize ?? filtered.length
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const paged = pagination
    ? filtered.slice((safePage - 1) * pageSize, safePage * pageSize)
    : filtered

  const handleReset = () => {
    setQuery('')
    setActiveSector('all')
    setActiveProvince('all')
    setActiveDistrict('all')
  }

  const handleSelectProvince = (province: string) => {
    setActiveProvince(province)
    setActiveDistrict('all')
  }

  const singhaDurbar =
    'singhaDurbar' in category ? category.singhaDurbar : null

  return (
    <div className="category-page">
      <div className="category-page__band">
        <Breadcrumb
          icon={data.breadcrumb.icon}
          items={data.breadcrumb.items}
          current={category.breadcrumbCurrent}
          alwaysVisible
        />
        <div className="category-page__container">
          <CategoryHero hero={category.hero} />
          <CategorySearch
            search={category.search}
            value={query}
            onChange={setQuery}
            activeSector={activeSector}
            onSelectSector={setActiveSector}
            visibleCount={filtered.length}
          />
          {regionFilter && (
            <RegionFilter
              config={regionFilter}
              provinces={provinces}
              districts={districts}
              activeProvince={activeProvince}
              activeDistrict={activeDistrict}
              onSelectProvince={handleSelectProvince}
              onSelectDistrict={setActiveDistrict}
            />
          )}
        </div>
      </div>

      <div className="category-page__container category-page__body">
        {singhaDurbar && <SinghaDurbarInset singhaDurbar={singhaDurbar} />}
        <div className="category-page__grid">
          {paged.map((item) => (
            <MinistryCard key={item.id} ministry={item} />
          ))}
        </div>
        {filtered.length === 0 && (
          <CategoryEmptyState emptyState={category.emptyState} onReset={handleReset} />
        )}
        {pagination && (
          <Pagination
            config={pagination}
            page={safePage}
            totalPages={totalPages}
            totalCount={filtered.length}
            onPageChange={(next) => {
              setPage(next)
              window.scrollTo(0, 0)
            }}
          />
        )}
        <TrustNotice trustNotice={category.trustNotice} />
        <RelatedBranches />
      </div>
    </div>
  )
}

export default CategoryPage

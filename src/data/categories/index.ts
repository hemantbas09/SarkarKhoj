// Aggregates the per-category data files into the same shape the app
// expects: { breadcrumb, categories, items, relatedBranches }.
//
// Each category lives in its own file (e.g. universities.json,
// local-governments.json) holding that category's config plus its items,
// so a category can be edited without touching the others.

import shared from './shared.json'
import ministries from './ministries.json'
import departments from './departments.json'
import commissions from './commissions.json'
import provincialGovernments from './provincial-governments.json'
import localGovernments from './local-governments.json'
import universities from './universities.json'
import publicInstitutions from './public-institutions.json'
import constitutionalBodies from './constitutional-bodies.json'

// Common shape shared by every directory entry. `province` and `district`
// are optional because only some categories (e.g. local-governments) carry them.
export interface CategoryItem {
  code: string
  sector: string
  sectorLabel: string
  icon: string
  name: string
  nepali: string
  domain: string
  description: string
  descriptionNepali?: string
  keywords: string
  /**
   * Curated synonyms in any script (English, Romanized-Nepali, Devanagari)
   * that should match this item in search — e.g. a forest office tagged
   * "jungle", an electricity office tagged "bijuli" / "bidyuta".
   */
  tags?: string[]
  url: string
  id: string
  province?: string
  district?: string
}

export type CategoryConfig = (
  | typeof ministries
  | typeof departments
  | typeof commissions
  | typeof provincialGovernments
  | typeof localGovernments
  | typeof universities
  | typeof publicInstitutions
  | typeof constitutionalBodies
)['config']

const categories = {
  ministries: ministries.config,
  departments: departments.config,
  commissions: commissions.config,
  'provincial-governments': provincialGovernments.config,
  'local-governments': localGovernments.config,
  universities: universities.config,
  'public-institutions': publicInstitutions.config,
  'constitutional-bodies': constitutionalBodies.config,
}

const items: CategoryItem[] = [
  ...ministries.items,
  ...departments.items,
  ...commissions.items,
  ...provincialGovernments.items,
  ...localGovernments.items,
  ...universities.items,
  ...publicInstitutions.items,
  ...constitutionalBodies.items,
]

const data = {
  breadcrumb: shared.breadcrumb,
  categories,
  items,
  relatedBranches: shared.relatedBranches,
}

export default data

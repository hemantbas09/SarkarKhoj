export type Lang = 'en' | 'np'

export type CategoryKey =
  | 'ministries'
  | 'departments'
  | 'commissions'
  | 'provincial-governments'
  | 'local-governments'
  | 'universities'
  | 'public-institutions'
  | 'constitutional-bodies'

export interface Chip {
  label: string
  filter: string
}

export interface Pill {
  label: string
  count?: number
  filter: string
}

export interface CategoryDict {
  heroTitle: string
  description: string
  breadcrumbCurrent: string
  heroBadge: string
  location: string
  stat1: string
  statValidation: string
  searchPlaceholder: string
  filterLabel: string
  chips: Chip[]
  pills: Pill[]
  regionFilter?: { allProvinces: string; allDistricts: string }
  singhaDurbar?: { badge: string; text: string }
  emptyTitle: string
  emptyDescription: string
  trustTitle: string
  trustText: string
}

export interface Dictionary {
  header: {
    title: string
    subtitle: string
    navHome: string
    navAllCategories: string
    langToggleAria: string
  }
  hero: {
    badge: string
    heading: string
    subheading: string
    searchPlaceholder: string
    popularSearchesLabel: string
    quickChips: string[]
    noResults: (query: string) => string
  }
  essential: {
    eyebrow: string
    title: string
    description: string
    visit: string
    portalDescriptions: Record<string, string>
  }
  banner: {
    eyebrow: string
    title: string
    description: string
  }
  categoriesSection: {
    eyebrow: string
    title: string
    description: string
    explorePortals: string
    cards: Record<CategoryKey, { count: string; title: string; description: string }>
  }
  relatedBranches: {
    eyebrow: string
    title: string
    subtitle: string
    countLabel: string
    items: { title: string; count: string; description: string }[]
  }
  trust: {
    eyebrow: string
    standards: string
    title: string
    description: string
    features: { title: string; subtitle: string }[]
  }
  footer: {
    copyright: string
    directoryLabel: string
    backToTop: string
  }
  bottomNav: Record<string, string>
  search: {
    breadcrumbDirectory: string
    breadcrumbResults: string
    visitLabel: string
    searchPlaceholder: string
    pagination: {
      showing: (from: number, to: number, total: number) => string
      prev: string
      next: string
    }
    summary: {
      allCategories: string
      matchesNote: string
      resultsFor: (count: number, query: string) => string
    }
    emptySearch: { title: string; text: string; suggestions: string[] }
    noResults: { title: (query: string) => string; text: string; suggestions: string[] }
    insight: {
      title: string
      text: string
      rows: { label: string; value: string }[]
    }
    notFound: {
      title: string
      description: string
      button: string
      secondaryLink: string
    }
    relatedServices: { title: string; items: { label: string }[] }
  }
  categoryPage: {
    breadcrumbHome: string
    breadcrumbCategories: string
    common: {
      visitWebsite: string
      verified: string
      verifiedGovNp: string
      officialDomain: string
      all: string
      showing: string
      active: string
      resetFilters: string
      statNitc: string
    }
    categories: Record<CategoryKey, CategoryDict>
  }
  sectors: Record<string, string>
  descriptions: {
    byId: Record<string, string>
    localTemplate: (name: string, district: string, province: string) => string
  }
}

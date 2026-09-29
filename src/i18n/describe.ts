import type { Dictionary, Lang } from './types'

// Minimal shape of a directory entry that carries a description.
export interface DescribableItem {
  id: string
  code: string
  name: string
  sectorLabel: string
  description: string
  descriptionNepali?: string
  district?: string
  province?: string
}

/**
 * Returns the localized description for a directory entry.
 *
 * - Local-government entries (753 of them) share a single English template,
 *   so they are rebuilt from the structured `name`/`district`/`province`
 *   fields via `descriptions.localTemplate`.
 * - In Nepali mode, entries that carry their own `descriptionNepali`
 *   (e.g. departments) use it directly.
 * - Every other entry has a hand-written translation keyed by `id`.
 * - Falls back to the original English description when nothing matches.
 */
export function itemDescription(
  t: Dictionary,
  item: DescribableItem,
  lang: Lang,
): string {
  if (item.code === 'local-governments') {
    const fullName = `${item.name} ${item.sectorLabel}`
    return t.descriptions.localTemplate(
      fullName,
      item.district ?? '',
      item.province ?? '',
    )
  }
  if (lang === 'np' && item.descriptionNepali) {
    return item.descriptionNepali
  }
  return t.descriptions.byId[item.id] ?? item.description
}

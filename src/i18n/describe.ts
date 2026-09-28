import type { Dictionary } from './types'

// Minimal shape of a directory entry that carries a description.
export interface DescribableItem {
  id: string
  code: string
  name: string
  sectorLabel: string
  description: string
  district?: string
  province?: string
}

/**
 * Returns the localized description for a directory entry.
 *
 * - Local-government entries (753 of them) share a single English template,
 *   so they are rebuilt from the structured `name`/`district`/`province`
 *   fields via `descriptions.localTemplate`.
 * - Every other entry has a hand-written translation keyed by `id`.
 * - Falls back to the original English description when nothing matches.
 */
export function itemDescription(
  t: Dictionary,
  item: DescribableItem,
): string {
  if (item.code === 'local-governments') {
    const fullName = `${item.name} ${item.sectorLabel}`
    return t.descriptions.localTemplate(
      fullName,
      item.district ?? '',
      item.province ?? '',
    )
  }
  return t.descriptions.byId[item.id] ?? item.description
}

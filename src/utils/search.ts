import type { CategoryItem } from '../data/categories'

/**
 * Searches the catalog and ranks results by relevance:
 * name matches first, then Nepali name, then domain, then
 * description/keywords. Ties are broken alphabetically.
 */
export function searchItems(
  items: CategoryItem[],
  query: string,
): CategoryItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return items

  return items
    .map((item) => {
      let score = -1
      if (item.name.toLowerCase().includes(q)) score = 0
      else if (item.nepali.toLowerCase().includes(q)) score = 1
      else if (item.domain.toLowerCase().includes(q)) score = 2
      else if (
        `${item.description} ${item.keywords}`.toLowerCase().includes(q)
      )
        score = 3
      return { item, score }
    })
    .filter((entry) => entry.score >= 0)
    .sort(
      (a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name),
    )
    .map((entry) => entry.item)
}

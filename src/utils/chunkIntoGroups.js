/**
 * Split a flat array into `groupCount` consecutive slices.
 * Remainder (n % groupCount) is distributed to the first groups (e.g. 32 → 2 groups → 16 + 16).
 */
export function chunkIntoGroups(items, groupCount) {
  const g = Math.max(1, Math.floor(groupCount) || 1);
  const n = items.length;
  if (n === 0) return Array.from({ length: g }, () => []);
  const base = Math.floor(n / g);
  const rem = n % g;
  const sizes = Array.from({ length: g }, (_, i) => base + (i < rem ? 1 : 0));
  let start = 0;
  return sizes.map((size) => {
    const chunk = items.slice(start, start + size);
    start += size;
    return chunk;
  });
}

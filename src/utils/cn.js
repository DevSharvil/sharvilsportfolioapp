/**
 * Simple class name merger utility.
 * Use instead of clsx/cn for zero dependencies.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Stagger delay helper for animations
 */
export function staggerDelay(index, base = 0.1) {
  return index * base
}

/**
 * Format number with + suffix
 */
export function formatStat(value, suffix = '+') {
  return `${value}${suffix}`
}

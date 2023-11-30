export function formatNumber(num: number) {
  if (num < 1000) {
    return num.toString()
  }
  if (num < 1000000) {
    return (num / 1000).toFixed(2) + 'K'
  }
  if (num < 1000000000) {
    return (num / 1000000).toFixed(2) + 'M'
  }
  if (num < 1000000000000) {
    return (num / 1000000000).toFixed(2) + 'B'
  }
  return (num / 1000000000000).toFixed(2) + 'T'
}

export function formatNumber(num: number) {
  let result: string;
  switch (true) {
    case num < 1000:
      result = num.toString();
      break;
    case num < 1000000:
      result = (num / 1000).toFixed(2) + 'K';
      break;
    case num < 1000000000:
      result = (num / 1000000).toFixed(2) + 'M';
      break;
    case num < 1000000000000:
      result = (num / 1000000000).toFixed(2) + 'B';
      break;
    default:
      result = (num / 1000000000000).toFixed(2) + 'T';
      break;
  }
  return result;
}

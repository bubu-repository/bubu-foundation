// ISO 3166-1 alpha-2 -> flag emoji, via Unicode regional indicator symbols.
export function flagEmoji(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

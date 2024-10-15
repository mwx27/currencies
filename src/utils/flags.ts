
export const getFlagEmoji = (currencyCode: string) => {
  const countryCode = currencyCode.toUpperCase().slice(0,2);
  const codePoints = countryCode.split('').map(char => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
};

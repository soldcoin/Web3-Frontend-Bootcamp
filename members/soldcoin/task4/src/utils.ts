export function shortenAddress(address: string, chars = 4): string {
  if (!address || address.length < 10) {
    return address;
  }

  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

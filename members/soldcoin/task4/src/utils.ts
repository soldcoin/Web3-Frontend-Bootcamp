export function shortenAddress(address: `0x${string}` | undefined, chars = 4): string {
  if (!address || address.length < 10) {
    // @ts-expect-error string or undefined
    return address;
  }

  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

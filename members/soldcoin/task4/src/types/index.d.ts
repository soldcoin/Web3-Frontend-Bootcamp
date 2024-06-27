interface NFTItem {
  id: number;
  image?: string;
  nftContract: string;
  tokenId: string;
  price: bigint;
  seller: string;
}

interface NFTCardProps {
  id: number;
  image?: string;
  nftContract: string;
  tokenId: string;
  price: bigint;
  seller: string;
}

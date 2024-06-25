import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import NFTCard from "./NFTCard";
import BuyNFTModal from "./BuyNFTModal";
import { useState } from "react";

interface NFTItem {
  id: number;
  image: string;
  contractAddress: string;
  tokenId: string;
  price: string;
  sellerAddress: string;
}

export default function Marketplace() {
  const { isOpen: isBuyNFTModalOpen, onOpen: onOpenBuyNFTModal, onClose: onCloseBuyNFTModal } = useDisclosure();

  const [nft, setNft] = useState<NFTItem>();

  const nfts = [
    { id: 1, image: "https://picsum.photos/200/300", contractAddress: "0x1234567890abcdef", tokenId: "1", price: "0.5", sellerAddress: "0xabcdef1234567890" },
    { id: 2, image: "https://picsum.photos/200/300", contractAddress: "0x2345678901bcdef0", tokenId: "2", price: "0.7", sellerAddress: "0xbcdef01234567891" },
    { id: 3, image: "https://picsum.photos/200/300", contractAddress: "0x3456789012cdef01", tokenId: "3", price: "0.3", sellerAddress: "0xcdef012345678912" },
  ];

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={6} p={6}>
        {nfts.map((nft) => (
          <NFTCard
            key={nft.id}
            {...nft}
            onBuy={() => {
              setNft(nft);
              onOpenBuyNFTModal()
            }}
          />
        ))}
      </SimpleGrid>

      <BuyNFTModal nft={nft} isOpen={isBuyNFTModalOpen} onClose={onCloseBuyNFTModal} />
    </>
  )
}

import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NFTCard from "./NFTCard";
import createEthersProvider from "../hooks/useEthersProvider";

export default function Marketplace() {
  const [NFTList, setNFTList] = useState<NFTItem[]>([]);

  const { contract } = createEthersProvider();

  // const result = useInfiniteReadContracts({
  //   cacheKey: 'compose-listings',
  //   contracts(pageParam) {
  //     console.log('🦊 pageParam 🦊', pageParam)
  //     return [{
  //       address: deployedAddreses.MARKET as `0x${string}`,
  //       abi: marketplaceABI,
  //       functionName: 'listings',
  //       args: [pageParam],
  //     }]
  //   },
  //   query: {
  //     refetchInterval: 3000,
  //     initialPageParam: 0,
  //     getNextPageParam(_lastPage, _allPages, lastPageParam) {
  //       console.log('🦊  🦊', _lastPage, _allPages, lastPageParam)
  //       return lastPageParam + 1;
  //     },
  //   }
  // })
  // console.log('🦊 infinite listings 🦊', result.data)


  const getListings = async () => {
    const listings = [];

    const fetchListing = async (index: number) => {
      try {
        const listing = await contract.listings(index);
        return {
          id: index,
          seller: listing.seller,
          nftContract: listing.nftContract,
          tokenId: listing.tokenId.toString(),
          // price: ethers.formatEther(listing.price)
          price: listing.price
        };
      } catch (error) {
        console.error('🦊 fetchListing 🦊', error);
        return null;
      }
    };

    for (let i = 0; ; i++) {
      const listing = await fetchListing(i);
      if (listing === null) break;
      listings.push(listing);
    }

    return listings;
  };

  const fetchNFTs = async () => {
    try {
      const listings = await getListings();
      setNFTList(() => listings);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={6} p={6}>
        {NFTList.map((nft) => (
          <NFTCard
            key={nft.tokenId}
            {...nft}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

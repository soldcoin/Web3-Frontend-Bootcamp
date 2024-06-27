import { Box, Button, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { shortenAddress } from "../utils";
import BuyNFTModal from "./BuyNFTModal";

export default function NFTCard(props: NFTCardProps) {
  const { isOpen: isBuyNFTModalOpen, onOpen: onOpenBuyNFTModal, onClose: onCloseBuyNFTModal } = useDisclosure();
  return (
    <>
      <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4} bg="white">
        <Image src={`https://picsum.photos/200/300`} alt="NFT" />
        <VStack align="start" mt={2} spacing={1}>
          <Text fontWeight="bold">Contract: {shortenAddress(props.nftContract)}</Text>
          <Text>Token ID: {props.tokenId}</Text>
          <Text>Price: {props.price.toString()} MYT</Text>
          <Text>Seller: {shortenAddress(props.seller)}</Text>
          <Button colorScheme="blue" onClick={onOpenBuyNFTModal} mt={2}>Buy</Button>
        </VStack>
      </Box>

      <BuyNFTModal nft={{ ...props }} isOpen={isBuyNFTModalOpen} onClose={onCloseBuyNFTModal} />
    </>
  );
}

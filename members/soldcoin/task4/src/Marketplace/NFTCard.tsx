import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";

export default function NFTCard ({ image, contractAddress, tokenId, price, sellerAddress, onBuy }) {
  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4} bg="white">
      <Image src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300`} alt="NFT" />
      <VStack align="start" mt={2} spacing={1}>
        <Text fontWeight="bold">Contract: {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</Text>
        <Text>Token ID: {tokenId}</Text>
        <Text>Price: {price} ETH</Text>
        <Text>Seller: {sellerAddress.slice(0, 6)}...{sellerAddress.slice(-4)}</Text>
        <Button colorScheme="blue" onClick={onBuy} mt={2}>Buy</Button>
      </VStack>
    </Box>
  );
}

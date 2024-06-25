import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";

export default function BuyModal ({ isOpen, onClose, nft }) {
  if (!nft) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Buy NFT</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="start">
            <Image src={`/api/placeholder/${Math.floor(Math.random() * 1000)}/300`} alt="NFT" />
            <Text>Contract: {nft.contractAddress}</Text>
            <Text>Token ID: {nft.tokenId}</Text>
            <Text>Price: {nft.price} ETH</Text>
            <Text>Seller: {nft.sellerAddress}</Text>
            <Button colorScheme="blue" width="100%">Confirm Purchase</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

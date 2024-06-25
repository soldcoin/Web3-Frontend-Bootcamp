import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";

export default function ListNFTModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sell NFT</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <Input placeholder="NFT Contract Address" />
            <Input placeholder="Token ID" />
            <Input placeholder="Price (ETH)" />
            <Button colorScheme="blue" width="100%">List for Sale</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

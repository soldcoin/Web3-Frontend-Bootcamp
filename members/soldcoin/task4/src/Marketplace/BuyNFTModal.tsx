import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import { useConfig, useWriteContract } from "wagmi";
import erc20ABI from "../ABIs/erc20ABI";
import marketplaceABI from "../ABIs/marketplaceABI";
import { deployedAddreses } from "../address";
import { shortenAddress } from "../utils";

interface BuyNFTModalProps {
  nft: NFTCardProps;
  isOpen: boolean;
  onClose: () => void;
}

export default function BuyModal({ isOpen, onClose, nft }: BuyNFTModalProps) {
  const { writeContractAsync, isPending } = useWriteContract();

  const config = useConfig();

  if (!nft) return null;

  const buyNFT = async (listingId: number) => {
    try {
      const approveRes = await writeContractAsync({
        address: deployedAddreses.ERC20 as `0x${string}`,
        abi: erc20ABI,
        functionName: 'approve',
        args: [deployedAddreses.MARKET as `0x${string}`, nft.price]
      })

      console.log('🦊 approveRes 🦊', approveRes);

      const buyRes = await writeContractAsync({
        ...config,
        address: deployedAddreses.MARKET as `0x${string}`,
        abi: marketplaceABI,
        functionName: 'buyNFT',
        args: [BigInt(listingId)]
      })
      console.log('🦊 buyRes 🦊', buyRes);
    } catch (error) {
      console.log('🦊  🦊', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Buy NFT</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="start">
            {/* <Image src="https://picsum.photos/200/300" alt="NFT" /> */}
            <Text>Contract: {shortenAddress(nft.nftContract)}</Text>
            <Text>Token ID: {nft.tokenId}</Text>
            <Text>Price: {nft.price.toString()} MYT</Text>
            <Text>Seller: {shortenAddress(nft.seller)}</Text>
            <Button
              isLoading={isPending}
              colorScheme="blue"
              width="100%"
              onClick={() => buyNFT(nft.id)}
            >
              Confirm Purchase
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

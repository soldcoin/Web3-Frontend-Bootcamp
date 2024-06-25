import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from "wagmi/connectors";

import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { shortenAddress } from "../../utils";
import ListNFTModal from "./ListNFTModal";

const Header = () => {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const account = useAccount()

  const { isOpen: isListNFTModalOpen, onOpen: onOpenListNFTModal, onClose: onCloseListNFTModal } = useDisclosure();

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" p={4} bg="gray.800" color="white">
        <Text fontSize="2xl" fontWeight="bold">Marketplace</Text>
        <Flex>
          <Button colorScheme="blue" mr={2} onClick={() => onOpenListNFTModal()}>Sell</Button>

          {account.isConnected ? (
            <Menu>
              <MenuButton as={Button} colorScheme="green">
                {shortenAddress(account.address)}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => disconnect()}>Disconnect</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button colorScheme="green" onClick={() => connect({ connector: injected() })}>Connect Wallet</Button>
          )}
        </Flex>
      </Flex>

      <ListNFTModal isOpen={isListNFTModalOpen} onClose={onCloseListNFTModal} />
    </>
  );
};

export default Header

import { Contract, ethers } from "ethers";

const NFTMarketplaceAddress = "0x926F89A914BD7C458D89B1A15BF1E6e34391bc14";
const NFTMarketplaceABI = [{ "inputs": [{ "internalType": "contract IERC20", "name": "_paymentToken", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NFTListed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "buyer", "type": "address" }, { "indexed": true, "internalType": "address", "name": "nftContract", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NFTPurchased", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "listingId", "type": "uint256" }], "name": "buyNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "listNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "listings", "outputs": [{ "internalType": "address", "name": "seller", "type": "address" }, { "internalType": "address", "name": "nftContract", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paymentToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }];

export default function createEthersProvider() {
  const provider = new ethers.InfuraProvider(
    import.meta.env.VITE_ETHEREUM_NETWORK,
    import.meta.env.VITE_INFURA_API_KEY
  );

  const contract = new Contract(NFTMarketplaceAddress, NFTMarketplaceABI, provider);

  const getMarketplaceContract = async () => {
    const signer = await provider.getSigner('0xB2dc480f99CbA4Deb63AA343e69f29B6E1B82a4E');
    return new Contract(NFTMarketplaceAddress, NFTMarketplaceABI, signer);
  }

  return { provider, contract, getMarketplaceContract };
}

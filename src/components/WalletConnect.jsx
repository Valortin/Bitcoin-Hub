import { ethers } from "ethers";

export async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      // Add Citrea Testnet to MetaMask
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x13FB", // Chain ID: 5115
            chainName: "Citrea Testnet",
            rpcUrls: ["https://rpc.testnet.citrea.xyz"],
            nativeCurrency: {
              name: "cBTC",
              symbol: "cBTC",
              decimals: 18,
            },
            blockExplorerUrls: ["https://explorer.testnet.citrea.xyz"],
          },
        ],
      });

      return address;
    } catch (error) {
      console.error("Wallet connection failed:", error);
      return null;
    }
  } else {
    alert("Please install MetaMask!");
    return null;
  }
}
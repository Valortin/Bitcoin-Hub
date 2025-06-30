import { ethers } from "ethers";

// Citrea Testnet configuration
const citreaProvider = new ethers.JsonRpcProvider("https://rpc.testnet.citrea.xyz");

// Example smart contract ABI (simplified)
const portfolioABI = [
  "function getBalance(address user) view returns (uint256)",
  "function getStrategies(address user) view returns (tuple(address trader, uint256 performance)[])",
];

// Example contract address (replace with your deployed contract address)
const portfolioContractAddress = "0xYourContractAddress";
const portfolioContract = new ethers.Contract(portfolioContractAddress, portfolioABI, citreaProvider);

export async function connectWallet() {
  return await import("../components/WalletConnect").then((module) => module.connectWallet());
}

export async function getPortfolioData(walletAddress) {
  try {
    const balance = await portfolioContract.getBalance(walletAddress);
    const strategies = await portfolioContract.getStrategies(walletAddress);
    return {
      balance: ethers.formatEther(balance),
      strategies: strategies.map((s) => ({
        trader: s.trader,
        performance: s.performance.toString(),
      })),
    };
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return { balance: 0, strategies: [] };
  }
}

export async function getLeaderboard() {
  // Mock leaderboard data (replace with actual contract call)
  return [
    { name: "Trader1", performance: 25 },
    { name: "Trader2", performance: 18 },
    { name: "Trader3", performance: 12 },
  ];
}
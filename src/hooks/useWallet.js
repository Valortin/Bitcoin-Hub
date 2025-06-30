import { useState, useEffect } from "react";
import { connectWallet } from "../utils/citrea";

export function useWallet() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const loadWallet = async () => {
      const address = await connectWallet();
      setWalletAddress(address);
    };
    loadWallet();
  }, []);

  return { walletAddress };
}
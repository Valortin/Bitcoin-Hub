import { useState } from "react";
import { Link } from "react-router-dom";
import { connectWallet } from "../utils/citrea";
import { WalletIcon } from "@heroicons/react/24/outline";

function Header() {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnectWallet = async () => {
    const address = await connectWallet();
    setWalletAddress(address);
  };

  return (
    <header className="bg-dark text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-bitcoin">Bitcoin-Hub</Link>
      </div>
      <nav className="space-x-6">
        <Link to="/dashboard" className="hover:text-bitcoin">Dashboard</Link>
        <Link to="/leaderboard" className="hover:text-bitcoin">Leaderboard</Link>
        <Link to="/learn" className="hover:text-bitcoin">Learn</Link>
      </nav>
      <button
        onClick={handleConnectWallet}
        className="flex items-center bg-bitcoin text-dark px-4 py-2 rounded-full hover:bg-opacity-80"
      >
        <WalletIcon className="h-5 w-5 mr-2" />
        {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
      </button>
    </header>
  );
}

export default Header;
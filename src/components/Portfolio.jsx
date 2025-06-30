import { useState, useEffect } from "react";
import { getPortfolioData } from "../utils/citrea";

function Portfolio({ walletAddress }) {
  const [portfolio, setPortfolio] = useState({ balance: 0, strategies: [] });

  useEffect(() => {
    async function fetchPortfolio() {
      if (walletAddress) {
        const data = await getPortfolioData(walletAddress);
        setPortfolio(data);
      }
    }
    fetchPortfolio();
  }, [walletAddress]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Portfolio</h2>
      <p className="text-lg">Balance: {portfolio.balance} cBTC</p>
      <h3 className="text-xl font-medium mt-4">Copied Strategies</h3>
      <ul className="mt-2 space-y-2">
        {portfolio.strategies.map((strategy, index) => (
          <li key={index} className="p-2 bg-light rounded">
            {strategy.trader}: {strategy.performance}% ROI
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
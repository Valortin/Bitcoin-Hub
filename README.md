# Bitcoin-Hub

*A community-driven platform to follow top Bitcoin traders, copy their strategies, and stack sats together, built on Citrea’s zkEVM.*


## 🌀 What is Bitcoin-Hub?

**Bitcoin-Hub** is an innovative decentralized application (Bapp) designed to revolutionize Bitcoin trading and adoption. Built on **Citrea’s zkEVM rollup**, it empowers users to follow top Bitcoin traders, replicate their strategies, and stack sats in a gamified, community-driven environment.

With features like embedded wallets, real-time portfolio tracking, leaderboards, and live chat, Bitcoin-Hub delivers a seamless and educational user experience — natively integrated into the Bitcoin Layer 2 via Citrea’s Ethereum-compatible zkEVM.

---

## 🚀 What It Does

- 🧠 **Trader Following & Strategy Copying**  
  Follow top-performing traders and mirror their strategies in real time.

- 🔐 **Embedded Wallets**  
  Connect to Citrea Testnet via MetaMask and manage cBTC securely.

- 📈 **Portfolio Tracking**  
  View your cBTC holdings and track trader performance instantly.

- 🏆 **Leaderboards**  
  Discover and compete with the best in a gamified leaderboard experience.

- 💬 **Community Chat**  
  Join trader communities, share tips, and learn together.

- 📚 **Education Hub**  
  Tutorials and curated learning materials to demystify Bitcoin and trading.

---

## 🧩 The Problem It Solves

Bitcoin-Hub addresses the **accessibility barrier** for new Bitcoin users and aspiring traders. Traditional platforms are often complex and solitary; Bitcoin-Hub bridges this by enabling **community-led trading, education, and engagement**. Built on Citrea’s zkEVM, it ensures **native compatibility** with Bitcoin while enabling Ethereum-like programmability, solving performance, scalability, and onboarding issues.

---

## 🛠️ Technologies Used

- **Frontend**: React (Vite) + Tailwind CSS  
- **Smart Contracts**: Solidity (Shanghai EVM) via Hardhat + Remix  
- **Blockchain**: Citrea zkEVM Testnet (Chain ID: 5115)  
- **Libraries**: `ethers.js`, `axios`, `@heroicons/react`, `react-router-dom`  
- **Dev Tools**: Node.js, Git, MetaMask

---

## 🏗️ How We Built It

1. **React + Vite Setup** with Tailwind CSS for modular component architecture.
2. **Citrea Integration** via MetaMask using custom RPC and cBTC token.
3. **Smart Contracts** initially deployed on Remix, enhanced with Hardhat for strategy tracking.
4. **Frontend Components** for wallet connection, leaderboard, and mock strategy replication.
5. **Testing** with MetaMask and Citrea’s explorer, including RPC validation and data mocking.

---

## ⚠️ Challenges We Ran Into

- RPC issues with Citrea Testnet and MetaMask during early integration.
- Mocking real-time strategy data due to limited testnet market inputs.
- Remix deployment limitations fixed via Hardhat and opcode tuning (Shanghai EVM).
- Tailwind responsiveness in chat module for mobile UX.
- On-chain/off-chain data syncing for leaderboard updates.

---

## What We Learned

- Deep understanding of zkEVM and how Citrea brings Bitcoin programmability to life.
- Network debugging with custom chains in MetaMask.
- Optimizing Solidity for zkEVM (Shanghai) environments.
- Importance of designing **hybrid data architectures** for scalable dApps.
- Educating users is key — technical tools need community context to thrive.

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/valortin/bitcoin-hub.git
cd bitcoin-hub

# Install dependencies
npm install

# Run the app
npm run dev
````

**Citrea Testnet Setup (in MetaMask)**

* Chain ID: `0x13FB` (5115)
* RPC URL: `https://rpc.testnet.citrea.xyz`
* Currency Symbol: `cBTC`
* Block Explorer: `https://explorer.testnet.citrea.xyz`

Get testnet cBTC from the [Citrea Faucet](https://docs.citrea.xyz/).

---

## 🎮 Usage

1. **Connect** your MetaMask wallet (Citrea Testnet).
2. **Dashboard** shows your cBTC balance, strategy insights, and leaderboard stats.
3. **Follow** top traders and copy their trades via the strategy module.
4. **Chat** with the community to discuss tactics and learn collaboratively.
5. **Explore** the Learn tab for beginner resources and Bitcoin insights.

---

## 🧬 Relevance to Citrea

Bitcoin-Hub is a **native Citrea Bapp** showcasing what’s possible with zkEVM scalability for Bitcoin. It leverages:

* **zkEVM + Schnorr precompiles** for L2-native Bitcoin compatibility.
* **Ethereum-like contracts** for flexible strategy tracking.
* **Bitcoin-first UX** for onboarding real BTC users and communities.
* **zkRollup security** to maintain Bitcoin consensus integrity.

It’s a prime example of how Citrea can evolve Bitcoin from static asset to programmable financial layer.

---

## 📈 What's Next for Bitcoin-Hub

### Wave 2

* 🎯 Strategy Marketplace (decentralized)
* 🗳 DAO-based Trader Ranking and Governance
* 🌉 Cross-chain Bridge (Bitcoin ↔ Ethereum assets)

### Wave 3

* 🌐 Interactive Bitcoin Metaverse for gamified learning
* 💼 Enterprise Trader APIs + Custom Dashboards
* 🔐 Privacy-first copy-trading with zk-proof execution

### Long-Term

* 🧠 AI Trading Insights & Predictive Tools
* 🌎 Global Adoption via Partnerships with Bitcoin Educators
* ⚙️ L3 Appchain Deployment for Scaling Sub-communities

---

## 🤝 Contributing

We welcome contributions from Bitcoiners, builders, and zkEVM tinkerers!

```bash
# Fork & clone
git checkout -b feature-name

# Make your changes and push
git commit -m "Added feature-name"
git push origin feature-name
```

Then open a **Pull Request** describing your update and why it matters.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

* Citrea team for building a Bitcoin-native zkEVM.
* zkRollup pioneers and the open-source community.
* Inspiration from the Bitcoin ecosystem and its vibrant community ethos.

---

> *Bitcoin-Hub is more than a dApp — it’s a social, educational, and financial entry point into the future of programmable Bitcoin.*

```
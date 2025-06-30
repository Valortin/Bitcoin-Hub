import Portfolio from "../components/Portfolio";
import Leaderboard from "../components/Leaderboard";
import Chat from "../components/Chat";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Portfolio walletAddress="0xYourAddress" />
      <Leaderboard />
      <Chat />
    </div>
  );
}

export default Dashboard;
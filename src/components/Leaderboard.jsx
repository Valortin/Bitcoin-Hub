import { useState, useEffect } from "react";
import { getLeaderboard } from "../utils/citrea";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    async function fetchLeaders() {
      const data = await getLeaderboard();
      setLeaders(data);
    }
    fetchLeaders();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Top Traders</h2>
      <ul className="space-y-4">
        {leaders.map((leader, index) => (
          <li key={index} className="flex justify-between items-center p-4 bg-light rounded">
            <span>{leader.name} ({leader.performance}% ROI)</span>
            <div>
              <button className="bg-bitcoin text-dark px-4 py-2 rounded mr-2 hover:bg-opacity-80">
                Follow
              </button>
              <button className="bg-dark text-white px-4 py-2 rounded hover:bg-opacity-80">
                Copy Strategy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
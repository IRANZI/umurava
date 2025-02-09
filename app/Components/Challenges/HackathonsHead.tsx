import React, { useEffect, useState } from "react";
import Link from "next/link";
interface TabProps {
  title: string;
  count: number;
  status: string;
  active?: boolean;
  onClick: (status: string) => void;
}

const Tab: React.FC<TabProps> = ({ title, count, active, status, onClick }) => {
  return (
    <button
      onClick={() => onClick(status)}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all
        ${active ? "bg-blue-100 text-blue-600 border-blue-600" : "bg-white text-gray-600 border-gray-300"}
      `}
    >
      {title} ({count})
    </button>
  );
};

interface ChallengesProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Challenges: React.FC<ChallengesProps> = ({ activeTab, setActiveTab }) => {
  const [challengeCounts, setChallengeCounts] = useState({
    all: 0,
    completed: 0,
    open: 0,
    ongoing: 0,
  });

  useEffect(() => {
    const fetchChallengeCounts = async () => {
      try {
        const statuses = ["open", "ongoing", "completed"];
        const counts: any = {};

        await Promise.all(
          statuses.map(async (status) => {
            const res = await fetch(`/api/challenges?status=${status}`);
            const data = await res.json();
            counts[status] = data.length;
          })
        );

        counts.all = counts.open + counts.ongoing + counts.completed; 
        setChallengeCounts(counts);
      } catch (error) {
        console.error("Error fetching challenge counts:", error);
      }
    };

    fetchChallengeCounts();
  }, []);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4"> 
        <Tab
          title="All Challenges"
          count={challengeCounts.all}
          status="all"
          onClick={setActiveTab}
          active={activeTab === "all"}
        />
        <Tab
          title="Completed Challenges"
          count={challengeCounts.completed}
          status="completed"
          onClick={setActiveTab}
          active={activeTab === "completed"}
        />
        <Tab
          title="Open Challenges"
          count={challengeCounts.open}
          status="open"
          onClick={setActiveTab}
          active={activeTab === "open"}
        />
        <Tab
          title="Ongoing Challenges"
          count={challengeCounts.ongoing}
          status="ongoing"
          onClick={setActiveTab}
          active={activeTab === "ongoing"}
        />
<Link href = "/create-challenge">
<button className="flex items-center ml-24 gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg transition-all hover:bg-blue-700">
        <span>+</span> Create New Challenge
      </button>
      </Link>
      </div>
      
      
      
    </div>
  );
};

export default Challenges;
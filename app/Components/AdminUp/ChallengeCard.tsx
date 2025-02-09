import React, {useEffect, useState} from "react";
import { Notebook } from "lucide-react";


interface ChallengeCardProps {
  title: string;
  count: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, count }) => {


  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 border border-gray-200">
      {/* Blue Vertical Line */}
      <div className="bg-blue-500 h-12 w-1 mr-4 rounded-full"></div>

      {/* Title and Count */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 mt-1">{count.toString().padStart(2, '0')}</p>
      </div>

      {/* Icon */}
      <div className="bg-blue-100 p-3 rounded-full flex justify-center items-center">
        <Notebook size={24} className="text-blue-500" />
      </div>
    </div>
  );
};

const ChallengesSection: React.FC = () => {


  const [challengeCounts, setChallengeCounts] = useState({
    all: 0,
    completed: 0,
    open: 0,
    ongoing: 0,
  });

  const [previousCounts, setPreviousCounts] = useState({
    open: 0,
    ongoing: 0,
    completed: 0,
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

        setChallengeCounts(counts);

        // Store previous counts (you could fetch these from an API or use hardcoded values)
        setPreviousCounts(counts);
      } catch (error) {
        console.error("Error fetching challenge counts:", error);
      }
    };

    fetchChallengeCounts();
  }, []);

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ml-4 mr-4">
      <ChallengeCard title="Completed Challenges" count={challengeCounts.completed} />
      <ChallengeCard title="Open Challenges" count={ challengeCounts.open }  />
      <ChallengeCard title="Ongoing Challenges" count={challengeCounts.ongoing}  />
    </div>
  );
};

export default ChallengesSection;

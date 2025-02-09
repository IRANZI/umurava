import React, { useEffect, useState } from "react";
import { IconBook, IconUsers, IconChevronDown } from "@tabler/icons-react";


const DashboardMetrics = () => {
  const [challengeCounts, setChallengeCounts] = useState({
    open: 0,
    ongoing: 0,
    completed: 0,
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

        
        setPreviousCounts(counts);
      } catch (error) {
        console.error("Error fetching challenge counts:", error);
      }
    };

    fetchChallengeCounts();
  }, []);

  
  const calculatePercentageChange = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const metrics = [
    {
      id: 1,
      title: "Total Challenges",
      value: challengeCounts.open + challengeCounts.ongoing + challengeCounts.completed,
      icon: <IconBook className="h-8 w-8 text-customBlue" />,
      period: "This Week",
      percentage: calculatePercentageChange(
        challengeCounts.open + challengeCounts.ongoing + challengeCounts.completed,
        previousCounts.open + previousCounts.ongoing + previousCounts.completed
      ),
    },
    {
      id: 2,
      title: "Total Participants",
      value: "29,405",
      icon: <IconUsers className="h-8 w-8 text-customBlue" />,
      period: "This Week",
      percentage: 0, 
    },
    {
      id: 3,
      title: "Completed Challenges",
      value: challengeCounts.completed,
      icon: <IconBook className="h-8 w-8 text-green-500" />,
      period: "Last 30 days",
      percentage: calculatePercentageChange(
        challengeCounts.completed,
        previousCounts.completed
      ),
    },
    {
      id: 4,
      title: "Open Challenges",
      value: challengeCounts.open,
      icon: <IconBook className="h-8 w-8 text-yellow-500" />,
      period: "Last 30 days",
      percentage: calculatePercentageChange(challengeCounts.open, previousCounts.open),
    },
    {
      id: 5,
      title: "Ongoing Challenges",
      value: challengeCounts.ongoing,
      icon: <IconBook className="h-8 w-8 text-orange-500" />,
      period: "Last 30 days",
      percentage: calculatePercentageChange(challengeCounts.ongoing, previousCounts.ongoing),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="flex flex-col justify-between rounded-2xl border bg-white p-4 shadow-sm hover:shadow-lg relative"
        >
        
          <div className="absolute top-2 right-2 flex items-center text-xs text-gray-400">
            <p>{metric.period}</p>
            <IconChevronDown className="ml-1 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-4">
              {metric.icon}
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">{metric.title}</h4>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
            {metric.percentage !== 0 && (
              <div className="flex items-center">
                <p className="text-sm text-green-500 mr-1">↑</p>
                <p className="bg-green-100 text-green-600 rounded-full px-2 text-sm">
                  {metric.percentage.toFixed(2)}%
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;

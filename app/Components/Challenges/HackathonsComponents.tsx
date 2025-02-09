import React, { useEffect, useState } from "react";
import Challenges from "./HackathonsHead"; 
import Image from "next/image";
import UmuravaBg from '../../../public/umuravaBg.webp'
import { Challenge } from "../../../../lib/challenge"; 
import Link from "next/link"; 

const ITEMS_PER_PAGE = 3;

const RecentChallenges: React.FC = () => {
  const [activities, setActivities] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("/api/challenges");
        if (!response.ok) {
          throw new Error("Failed to fetch challenges");
        }
        const data = await response.json();
        setActivities(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  // Filter activities based on the active tab
  const filteredActivities =
    activeTab === "all"
      ? activities
      : activities.filter((activity) => activity.status === activeTab);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentActivities = filteredActivities.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Challenges activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="py-12">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-12xl mr-10 ml-10 mt-4">
            {currentActivities.map((activity) => (
              <div
                key={activity._id?.toString() || "unknown"}
                className="relative border shadow-lg overflow-hidden max-w-sm bg-white rounded-3xl"
              >
                <div className="h-48 w-full relative mb-2">
                  <Image
                    src={UmuravaBg}
                    alt="Challenge Image"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover p-2 rounded-3xl"
                  />
                  <div
                    className={`absolute top-4 right-4 text-white text-sm font-semibold px-2 py-1 rounded z-10 ${
                      activity.status === "ongoing"
                        ? "bg-orange-500"
                        : "bg-green-500"
                    }`}
                  >
                    {activity.status.charAt(0).toUpperCase() +
                      activity.status.slice(1)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="text-gray-700 mt-2 font-medium">Skills Needed:</p>
                  <div className="flex gap-2 mt-1">
                    {Array.isArray(activity.skills) &&
                      activity.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-900 font-semibold">Timeline:</p>
                    <p className="text-gray-900 ml-2">{activity.duration}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-900 font-semibold">Seniority Level:</p>
                    <p className="text-gray-900 ml-2">{activity.seniority}</p>
                  </div>
                  <div className="mt-4 border-t border-gray-300 pt-4">
                    <Link href={`/view/${activity._id?.toString()}`}>
                      <button className="bg-blue-600 text-white py-2 px-4 rounded">
                        View Challenge
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`bg-gray-300 text-gray-700 py-2 px-4 rounded ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`bg-blue-600 text-white py-2 px-4 rounded ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentChallenges;